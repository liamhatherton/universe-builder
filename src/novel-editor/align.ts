import { EditorState, RangeSetBuilder, Text } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate, WidgetType } from "@codemirror/view";
import { editorLivePreviewField, MarkdownPostProcessorContext } from "obsidian";

/**
 * Paragraph alignment.
 *
 * Markdown has no alignment syntax, so a line is aligned with a hidden Obsidian comment:
 *     The ship drifted. %%align:center%%
 * Obsidian comments never show in Reading view or exports, so other tools just see a
 * normal left-aligned paragraph. Left alignment is the default and has no marker.
 */
export type Alignment = "left" | "center" | "right";

const MARKER_RE = /[ \t]*%%\s*align:(left|center|right)\s*%%/i;
const MARKER_RE_G = /[ \t]*%%\s*align:(left|center|right)\s*%%/gi;

function markerText(a: Alignment): string {
	return ` %%align:${a}%%`;
}

export function alignmentOfText(text: string): Alignment {
	const m = MARKER_RE.exec(text);
	return m ? (m[1].toLowerCase() as Alignment) : "left";
}

/** Line numbers covered by the frontmatter block, so we never touch YAML. */
function frontmatterEnd(doc: Text): number {
	if (doc.lines < 2 || doc.line(1).text.trim() !== "---") return 0;
	for (let n = 2; n <= doc.lines; n++) {
		if (/^(---|\.\.\.)\s*$/.test(doc.line(n).text)) return n;
	}
	return 0;
}

/** Non-blank, non-frontmatter lines touched by any selection. */
function targetLines(state: EditorState): number[] {
	const doc = state.doc;
	const fmEnd = frontmatterEnd(doc);
	const out = new Set<number>();
	for (const r of state.selection.ranges) {
		const a = doc.lineAt(r.from).number;
		// A selection ending at column 0 of a line doesn't really include that line.
		let b = doc.lineAt(r.to).number;
		if (b > a && doc.line(b).from === r.to) b--;
		for (let n = a; n <= b; n++) {
			if (n <= fmEnd) continue;
			const text = doc.line(n).text.replace(MARKER_RE_G, "");
			if (text.trim() === "" || /^\s*(```|~~~|---\s*$|\|)/.test(text)) continue;
			out.add(n);
		}
	}
	return [...out].sort((x, y) => x - y);
}

/** Alignment of the line with the main cursor (drives the toolbar highlight). */
export function currentAlignment(state: EditorState): Alignment {
	return alignmentOfText(state.doc.lineAt(state.selection.main.head).text);
}

/**
 * Set alignment on every line touched by the selection. If they are all already at
 * `align`, they go back to left (so clicking an active button toggles it off).
 */
export function setAlignment(view: EditorView, align: Alignment): void {
	const state = view.state;
	const lines = targetLines(state);
	if (lines.length === 0) return;
	const allSet = lines.every((n) => alignmentOfText(state.doc.line(n).text) === align);
	const target: Alignment = allSet ? "left" : align;

	const changes: { from: number; to: number; insert: string }[] = [];
	for (const n of lines) changes.push(...lineAlignChanges(state.doc.line(n).from, state.doc.line(n).text, target));
	view.dispatch({ changes, userEvent: "input.align" });
}

/**
 * Changes that give one line the alignment `align`: drop any markers inside the text, and
 * replace everything after the visible text (trailing spaces + markers) with the new marker.
 */
function lineAlignChanges(lineFrom: number, text: string, align: Alignment): { from: number; to: number; insert: string }[] {
	const out: { from: number; to: number; insert: string }[] = [];
	// End of visible text in original coordinates: scan back over whitespace and markers.
	let end = text.length;
	for (;;) {
		const trimmed = text.slice(0, end).replace(/\s+$/, "");
		const m = /[ \t]*%%\s*align:(?:left|center|right)\s*%%$/i.exec(trimmed);
		if (m) end = m.index;
		else {
			end = trimmed.length;
			break;
		}
	}
	MARKER_RE_G.lastIndex = 0;
	let m: RegExpExecArray | null;
	while ((m = MARKER_RE_G.exec(text.slice(0, end)))) {
		out.push({ from: lineFrom + m.index, to: lineFrom + m.index + m[0].length, insert: "" });
	}
	const insert = align === "left" ? "" : markerText(align);
	if (end < text.length || insert) out.push({ from: lineFrom + end, to: lineFrom + text.length, insert });
	return out;
}

/**
 * Keep alignment with its paragraph while typing: when Enter (or a paste) splits an aligned
 * line, every resulting non-blank line keeps the alignment and blank lines don't carry a marker.
 */
export const alignmentKeeper = EditorState.transactionFilter.of((tr) => {
	if (!tr.docChanged || !tr.isUserEvent("input") || tr.isUserEvent("input.align")) return tr;
	const startDoc = tr.startState.doc;
	const newDoc = tr.newDoc;
	const fixes: { from: number; to: number; insert: string }[] = [];
	const seen = new Set<number>();
	tr.changes.iterChanges((fromA, _toA, fromB, toB, inserted) => {
		if (inserted.lines < 2) return;
		const align = alignmentOfText(startDoc.lineAt(fromA).text);
		if (align === "left") return;
		const a = newDoc.lineAt(fromB).number;
		const b = newDoc.lineAt(toB).number;
		for (let n = a; n <= b; n++) {
			if (seen.has(n)) continue;
			seen.add(n);
			const line = newDoc.line(n);
			const visible = line.text.replace(MARKER_RE_G, "").trim();
			const want: Alignment = visible === "" ? "left" : align;
			if (alignmentOfText(line.text) === want && (want !== "left" || !MARKER_RE.test(line.text))) continue;
			fixes.push(...lineAlignChanges(line.from, line.text, want));
		}
	});
	if (fixes.length === 0) return tr;
	return [tr, { changes: fixes, sequential: true }];
});

class HiddenMarker extends WidgetType {
	eq(): boolean { return true; }
	toDOM(): HTMLElement {
		const span = document.createElement("span");
		span.className = "ue-align-marker";
		return span;
	}
	ignoreEvent(): boolean { return false; }
}

const LINE_DECO: Record<Alignment, Decoration> = {
	left: Decoration.line({ class: "ue-align-left" }),
	center: Decoration.line({ class: "ue-align-center" }),
	right: Decoration.line({ class: "ue-align-right" }),
};
const HIDE = Decoration.replace({ widget: new HiddenMarker() });

function isLivePreview(state: EditorState): boolean {
	try {
		return state.field(editorLivePreviewField, false) ?? false;
	} catch {
		return false;
	}
}

function build(view: EditorView): { lines: DecorationSet; hidden: DecorationSet } {
	const lines = new RangeSetBuilder<Decoration>();
	const hidden = new RangeSetBuilder<Decoration>();
	const doc = view.state.doc;
	const live = isLivePreview(view.state);
	for (const { from, to } of view.visibleRanges) {
		let pos = from;
		while (pos <= to) {
			const line = doc.lineAt(pos);
			const m = MARKER_RE.exec(line.text);
			if (m) {
				lines.add(line.from, line.from, LINE_DECO[m[1].toLowerCase() as Alignment]);
				if (live) {
					MARKER_RE_G.lastIndex = 0;
					let mm: RegExpExecArray | null;
					while ((mm = MARKER_RE_G.exec(line.text))) {
						hidden.add(line.from + mm.index, line.from + mm.index + mm[0].length, HIDE);
					}
				}
			}
			pos = line.to + 1;
		}
	}
	return { lines: lines.finish(), hidden: hidden.finish() };
}

/** CodeMirror extension: aligns marked lines and hides the markers in Live Preview. */
export const alignmentExtension = ViewPlugin.fromClass(
	class {
		lines: DecorationSet;
		hidden: DecorationSet;
		constructor(view: EditorView) {
			({ lines: this.lines, hidden: this.hidden } = build(view));
		}
		update(u: ViewUpdate) {
			if (u.docChanged || u.viewportChanged ||
				isLivePreview(u.startState) !== isLivePreview(u.state)) {
				({ lines: this.lines, hidden: this.hidden } = build(u.view));
			}
		}
	},
	{
		provide: (plugin) => [
			EditorView.decorations.of((v) => v.plugin(plugin)?.lines ?? Decoration.none),
			EditorView.decorations.of((v) => v.plugin(plugin)?.hidden ?? Decoration.none),
			// The cursor steps over hidden markers instead of into them.
			EditorView.atomicRanges.of((v) => v.plugin(plugin)?.hidden ?? Decoration.none),
		],
	},
);

/** Reading view: align paragraphs whose source lines carry a marker. */
export function alignmentPostProcessor(el: HTMLElement, ctx: MarkdownPostProcessorContext): void {
	const info = ctx.getSectionInfo(el);
	if (!info) return;
	const lines = info.text.split("\n").slice(info.lineStart, info.lineEnd + 1);
	for (const l of lines) {
		const m = MARKER_RE.exec(l);
		if (m) {
			el.addClass(`ue-align-${m[1].toLowerCase()}`);
			return;
		}
	}
}
