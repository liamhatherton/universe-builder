import { ChangeSpec, EditorSelection, EditorState, SelectionRange, Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

export type FormatKind = "bold" | "italic" | "underline" | "strikethrough";

const MARKERS: Record<FormatKind, { open: string; close: string }> = {
	bold: { open: "**", close: "**" },
	italic: { open: "*", close: "*" },
	underline: { open: "<u>", close: "</u>" },
	strikethrough: { open: "~~", close: "~~" },
};

/** Symmetric character-run markers: which characters count and how many make one marker. */
const RUN_MARKERS: Partial<Record<FormatKind, { chars: string[]; len: number; has: (a: number, b: number) => boolean }>> = {
	bold: { chars: ["*", "_"], len: 2, has: (a, b) => a >= 2 && b >= 2 },
	italic: { chars: ["*", "_"], len: 1, has: (a, b) => a % 2 === 1 && b % 2 === 1 },
	strikethrough: { chars: ["~"], len: 2, has: (a, b) => a >= 2 && b >= 2 },
};

/** Describes where existing markers sit relative to a segment so they can be removed. */
interface Wrapping {
	openFrom: number;
	openTo: number;
	closeFrom: number;
	closeTo: number;
}

interface Segment {
	from: number;
	to: number;
}

// Block-level prefixes that must stay outside inline markers (headings, lists, tasks, quotes).
const BLOCK_PREFIX = /^\s*(?:>\s*)*(?:#{1,6}\s+|[-*+]\s+(?:\[.\]\s+)?|\d+[.)]\s+)?/;

function countRun(doc: Text, pos: number, dir: -1 | 1, ch: string, limit: number, bound: number): number {
	let n = 0;
	while (n < limit) {
		const p = dir === -1 ? pos - n - 1 : pos + n;
		if (dir === -1 ? p < bound : p >= bound) break;
		if (doc.sliceString(p, p + 1) !== ch) break;
		n++;
	}
	return n;
}

/**
 * Detect whether [from, to] is already formatted with `kind`, either by markers just
 * outside the range or by markers at the inner edges of the range.
 */
export function detectWrapping(doc: Text, from: number, to: number, kind: FormatKind): Wrapping | null {
	if (kind === "underline") {
		const { open, close } = MARKERS.underline;
		const slice = (a: number, b: number) => (a < 0 || b > doc.length ? "" : doc.sliceString(a, b).toLowerCase());
		// Opening tag may sit just outside or just inside the start; same for the closing tag.
		const openOutside = slice(from - open.length, from) === open;
		const openInside = !openOutside && slice(from, from + open.length) === open;
		const closeOutside = slice(to, to + close.length) === close;
		const closeInside = !closeOutside && slice(to - close.length, to) === close;
		if (!(openOutside || openInside) || !(closeOutside || closeInside)) return null;
		const openFrom = openOutside ? from - open.length : from;
		const closeFrom = closeOutside ? to : to - close.length;
		if (closeFrom < openFrom + open.length) return null;
		return { openFrom, openTo: openFrom + open.length, closeFrom, closeTo: closeFrom + close.length };
	}

	const spec = RUN_MARKERS[kind];
	if (!spec) return null;
	const { len, has } = spec;

	for (const ch of spec.chars) {
		// Marker runs may straddle each edge of the range: e.g. "**|text**|" or "|**text|**".
		const sIn = countRun(doc, from, 1, ch, 3, to);
		const eIn = countRun(doc, to, -1, ch, 3, from + sIn);
		if (to - from <= sIn + eIn && to > from) continue; // range is only markers
		const sOut = countRun(doc, from, -1, ch, 3 - sIn, 0);
		const eOut = countRun(doc, to, 1, ch, 3 - eIn, doc.length);
		if (!has(sIn + sOut, eIn + eOut)) continue;
		// Remove the markers closest to the text.
		const textFrom = from + sIn;
		const textTo = to - eIn;
		return { openFrom: textFrom - len, openTo: textFrom, closeFrom: textTo, closeTo: textTo + len };
	}
	return null;
}

/** Split a selection into per-line segments, trimmed of whitespace and block prefixes. */
function segmentsFor(state: EditorState, range: SelectionRange): Segment[] {
	const doc = state.doc;
	const segs: Segment[] = [];
	const startLine = doc.lineAt(range.from).number;
	const endLine = doc.lineAt(range.to).number;
	for (let n = startLine; n <= endLine; n++) {
		const line = doc.line(n);
		let from = Math.max(range.from, line.from);
		let to = Math.min(range.to, line.to);
		if (from === line.from) {
			const m = BLOCK_PREFIX.exec(line.text);
			if (m) from = Math.min(to, line.from + m[0].length);
		}
		while (from < to && /\s/.test(doc.sliceString(from, from + 1))) from++;
		while (to > from && /\s/.test(doc.sliceString(to - 1, to))) to--;
		if (to > from) segs.push({ from, to });
	}
	return segs;
}

// A word: letters/numbers, allowing inner apostrophes and hyphens (don't, well-known).
const WORD = /[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu;
// Formatting markers that may sit between the cursor and a word: **, _, ~~, <u>, </u>.
const MARKERS_BEFORE = /(?:[*_~]|<\/?u>)+$/i;
const MARKERS_AFTER = /^(?:[*_~]|<\/?u>)+/i;

/** The word whose span contains `offset` (inclusive of both ends), within a line's text. */
function wordInLine(text: string, offset: number): { from: number; to: number } | null {
	WORD.lastIndex = 0;
	let m: RegExpExecArray | null;
	while ((m = WORD.exec(text))) {
		const from = m.index, to = from + m[0].length;
		if (offset >= from && offset <= to) return { from, to };
		if (from > offset) break;
	}
	return null;
}

/**
 * Word touched by an empty cursor: inside it, or right at its start or end.
 * Also looks past formatting markers, so "**word**|" still finds "word".
 */
function wordAround(state: EditorState, pos: number): Segment | null {
	const line = state.doc.lineAt(pos);
	const text = line.text;
	const off = pos - line.from;
	const direct = wordInLine(text, off);
	if (direct) return { from: line.from + direct.from, to: line.from + direct.to };
	const before = MARKERS_BEFORE.exec(text.slice(0, off));
	if (before) {
		const w = wordInLine(text, off - before[0].length);
		if (w && w.to === off - before[0].length) return { from: line.from + w.from, to: line.from + w.to };
	}
	const after = MARKERS_AFTER.exec(text.slice(off));
	if (after) {
		const w = wordInLine(text, off + after[0].length);
		if (w && w.from === off + after[0].length) return { from: line.from + w.from, to: line.from + w.to };
	}
	return null;
}

/** Toggle bold / italic / underline for every selection in the editor. */
export function toggleFormat(view: EditorView, kind: FormatKind): void {
	const { open, close } = MARKERS[kind];
	const state = view.state;

	const tr = state.changeByRange((range) => {
		if (range.empty) {
			const pos = range.head;
			const word = wordAround(state, pos);
			const around = word ? null : detectWrapping(state.doc, pos, pos, kind);
			if (around) {
				const changes = state.changes([
					{ from: around.openFrom, to: around.openTo },
					{ from: around.closeFrom, to: around.closeTo },
				]);
				return { changes, range: EditorSelection.cursor(changes.mapPos(pos, -1)) };
			}
			if (word) {
				const w = detectWrapping(state.doc, word.from, word.to, kind);
				const changes = state.changes(
					w
						? [{ from: w.openFrom, to: w.openTo }, { from: w.closeFrom, to: w.closeTo }]
						: [{ from: word.from, insert: open }, { from: word.to, insert: close }],
				);
				// Keep the cursor inside the markers, at the same spot in the word.
				return { changes, range: EditorSelection.cursor(changes.mapPos(pos, pos >= word.to ? -1 : 1)) };
			}
			const changes = state.changes({ from: pos, insert: open + close });
			return { changes, range: EditorSelection.cursor(pos + open.length) };
		}

		const segs = segmentsFor(state, range);
		if (segs.length === 0) return { range };
		const found = segs.map((s) => detectWrapping(state.doc, s.from, s.to, kind));
		const unwrap = found.every((f) => f !== null);

		const specs: ChangeSpec[] = [];
		segs.forEach((s, i) => {
			const f = found[i];
			if (unwrap && f) {
				specs.push({ from: f.openFrom, to: f.openTo }, { from: f.closeFrom, to: f.closeTo });
			} else if (!unwrap && !f) {
				specs.push({ from: s.from, insert: open }, { from: s.to, insert: close });
			}
		});
		const changes = state.changes(specs);
		const first = segs[0], last = segs[segs.length - 1];
		const anchorFrom = unwrap ? Math.min(first.from, found[0]!.openTo) : first.from;
		const anchorTo = unwrap ? Math.max(last.to, found[found.length - 1]!.closeFrom) : last.to;
		return {
			changes,
			range: EditorSelection.range(changes.mapPos(anchorFrom, 1), changes.mapPos(anchorTo, -1)),
		};
	});

	view.dispatch(state.update(tr, { scrollIntoView: true, userEvent: "input.format" }));
}

/** Whether the main selection is currently formatted with `kind` (drives button highlight). */
export function isActive(state: EditorState, kind: FormatKind): boolean {
	const range = state.selection.main;
	if (range.empty) {
		const word = wordAround(state, range.head);
		if (word) return !!detectWrapping(state.doc, word.from, word.to, kind);
		return !!detectWrapping(state.doc, range.head, range.head, kind);
	}
	const segs = segmentsFor(state, range);
	return segs.length > 0 && segs.every((s) => detectWrapping(state.doc, s.from, s.to, kind));
}

/** Count words in markdown text, ignoring frontmatter, comments and markup. */
export function countWords(text: string): number {
	const body = text
		.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/, "")
		.replace(/%%[\s\S]*?%%/g, " ")
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(/<[^>\n]+>/g, " ");
	const m = body.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu);
	return m ? m.length : 0;
}
