import { Notice, TFile, TFolder, Vault, setIcon } from "obsidian";
import { t } from "../i18n";
import type { NovelEditor } from "./index";

type Frontmatter = Record<string, unknown>;
type ValueKind = "text" | "list" | "number" | "checkbox" | "date" | "datetime" | "json";

let datalistCounter = 0;

/**
 * Floating panel, anchored under the toolbar, for viewing and editing a note's
 * frontmatter properties. Writes go through fileManager.processFrontMatter.
 */
export class PropertiesPopover {
	private el: HTMLElement | null = null;
	private anchor: HTMLElement | null = null;
	private readonly onOutside = (evt: MouseEvent) => {
		const t = evt.target as Node | null;
		if (!this.el || !t) return;
		if (this.el.contains(t) || this.anchor?.contains(t)) return;
		this.close();
	};

	constructor(
		private readonly plugin: NovelEditor,
		private readonly host: HTMLElement,
		private readonly getFile: () => TFile | null,
		private readonly onToggle: (open: boolean) => void,
	) {}

	get isOpen(): boolean {
		return this.el !== null;
	}

	toggle(anchor: HTMLElement): void {
		if (this.isOpen) this.close();
		else this.open(anchor);
	}

	open(anchor: HTMLElement): void {
		if (this.isOpen) return;
		this.anchor = anchor;
		this.el = this.host.createDiv({ cls: "ue-props-popover" });
		this.el.addEventListener("keydown", (evt) => {
			if (evt.key === "Escape") {
				evt.preventDefault();
				evt.stopPropagation();
				this.close();
				anchor.focus();
			}
		});
		this.render();
		this.position();
		this.host.ownerDocument.addEventListener("mousedown", this.onOutside, true);
		this.onToggle(true);
	}

	close(): void {
		if (!this.el) return;
		this.host.ownerDocument.removeEventListener("mousedown", this.onOutside, true);
		this.el.remove();
		this.el = null;
		this.onToggle(false);
	}

	/** Re-render with fresh metadata, unless the user is mid-edit inside the panel. */
	refresh(): void {
		if (!this.el) return;
		const active = this.el.ownerDocument.activeElement;
		if (active && this.el.contains(active)) return;
		this.render();
	}

	private position(): void {
		if (!this.el || !this.anchor) return;
		const hostRect = this.host.getBoundingClientRect();
		const aRect = this.anchor.getBoundingClientRect();
		const left = Math.max(8, Math.min(aRect.left - hostRect.left, hostRect.width - this.el.offsetWidth - 8));
		this.el.style.left = `${left}px`;
	}

	private render(): void {
		const el = this.el;
		if (!el) return;
		el.empty();
		const file = this.getFile();
		if (!file) return;

		const fm: Frontmatter = { ...(this.plugin.app.metadataCache.getFileCache(file)?.frontmatter ?? {}) };
		const required = this.plugin.settings.requiredProperties;
		const suggestions = this.collectSuggestions(Object.keys(fm));

		const header = el.createDiv({ cls: "ue-props-header" });
		header.createSpan({ cls: "ue-props-title", text: t("novel.properties") });
		const closeBtn = header.createEl("button", { cls: "clickable-icon ue-props-close", attr: { "aria-label": t("novel.close") } });
		setIcon(closeBtn, "x");
		closeBtn.addEventListener("click", () => this.close());

		const list = el.createDiv({ cls: "ue-props-list" });
		const keys = Object.keys(fm);
		// Required properties first, in configured order; the rest keep file order.
		keys.sort((a, b) => {
			const ia = required.indexOf(a), ib = required.indexOf(b);
			return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
		});
		for (const key of keys) this.renderRow(list, key, fm[key], required.includes(key), suggestions.get(key));
		if (keys.length === 0) list.createDiv({ cls: "ue-props-empty", text: t("novel.noProperties") });

		this.renderAddRow(el, fm);
	}

	private renderRow(parent: HTMLElement, key: string, value: unknown, locked: boolean, suggestions?: Set<string>): void {
		const row = parent.createDiv({ cls: "ue-props-row" });
		if (locked) row.addClass("is-required");
		const state = { key };
		const kind = this.kindFor(key, value);

		const iconEl = row.createSpan({ cls: "ue-props-icon" });
		setIcon(iconEl, KIND_ICON[kind]);

		const keyInput = row.createEl("input", { cls: "ue-props-key", type: "text", value: key });
		keyInput.spellcheck = false;
		if (locked) {
			keyInput.readOnly = true;
			keyInput.setAttr("aria-label", t("novel.requiredProperty"));
		} else {
			keyInput.addEventListener("change", () => void this.renameKey(state, keyInput));
			keyInput.addEventListener("keydown", (e) => { if (e.key === "Enter") keyInput.blur(); });
		}

		const valueWrap = row.createDiv({ cls: "ue-props-value" });
		this.renderValueEditor(valueWrap, kind, value, suggestions, (v) =>
			this.write((fm) => { fm[state.key] = v; }),
		);

		const del = row.createEl("button", { cls: "clickable-icon ue-props-delete", attr: { "aria-label": t("novel.removeProperty") } });
		setIcon(del, "trash-2");
		if (locked) {
			del.disabled = true;
			del.addClass("is-hidden");
		} else {
			del.addEventListener("click", async () => {
				await this.write((fm) => { delete fm[state.key]; });
				row.remove();
			});
		}
	}

	private renderValueEditor(
		wrap: HTMLElement,
		kind: ValueKind,
		value: unknown,
		suggestions: Set<string> | undefined,
		commit: (v: unknown) => Promise<void>,
	): void {
		switch (kind) {
			case "checkbox": {
				const cb = wrap.createEl("input", { type: "checkbox", cls: "ue-props-checkbox" });
				cb.checked = value === true;
				cb.addEventListener("change", () => void commit(cb.checked));
				return;
			}
			case "number": {
				const inp = wrap.createEl("input", { type: "number", cls: "ue-props-input" });
				inp.value = value == null ? "" : String(value);
				inp.addEventListener("change", () => void commit(inp.value.trim() === "" ? null : Number(inp.value)));
				enterBlurs(inp);
				return;
			}
			case "date":
			case "datetime": {
				const inp = wrap.createEl("input", { type: kind === "date" ? "date" : "datetime-local", cls: "ue-props-input" });
				inp.value = value == null ? "" : String(value);
				inp.addEventListener("change", () => void commit(inp.value || null));
				return;
			}
			case "list": {
				const arr = Array.isArray(value) ? value.map((v) => String(v)) : value == null ? [] : [String(value)];
				const inp = wrap.createEl("input", { type: "text", cls: "ue-props-input", value: arr.join(", ") });
				inp.placeholder = t("novel.listPlaceholder");
				inp.addEventListener("change", () =>
					void commit(inp.value.split(",").map((s) => s.trim()).filter(Boolean)),
				);
				enterBlurs(inp);
				return;
			}
			case "json": {
				const ta = wrap.createEl("textarea", { cls: "ue-props-input ue-props-json" });
				ta.value = JSON.stringify(value, null, 2);
				ta.addEventListener("change", () => {
					try {
						const parsed: unknown = JSON.parse(ta.value);
						ta.removeClass("is-invalid");
						void commit(parsed);
					} catch {
						ta.addClass("is-invalid");
					}
				});
				return;
			}
			default: {
				const inp = wrap.createEl("input", { type: "text", cls: "ue-props-input" });
				inp.value = value == null ? "" : String(value);
				if (suggestions && suggestions.size) {
					const id = `ue-props-dl-${++datalistCounter}`;
					const dl = wrap.createEl("datalist", { attr: { id } });
					for (const s of suggestions) dl.createEl("option", { value: s });
					inp.setAttr("list", id);
				}
				inp.addEventListener("change", () => void commit(inp.value === "" ? null : inp.value));
				enterBlurs(inp);
			}
		}
	}

	private renderAddRow(parent: HTMLElement, fm: Frontmatter): void {
		const row = parent.createDiv({ cls: "ue-props-add" });
		const keyInput = row.createEl("input", { type: "text", cls: "ue-props-key", placeholder: t("novel.newProperty") });
		keyInput.spellcheck = false;
		const valInput = row.createEl("input", { type: "text", cls: "ue-props-input", placeholder: t("novel.value") });
		const addBtn = row.createEl("button", { cls: "ue-props-add-btn", text: t("novel.add") });

		const add = async () => {
			const key = keyInput.value.trim();
			if (!key) {
				keyInput.focus();
				return;
			}
			if (Object.prototype.hasOwnProperty.call(fm, key)) {
				new Notice(t("novel.propertyExists", { name: key }));
				return;
			}
			const raw = valInput.value.trim();
			await this.write((f) => { f[key] = raw === "" ? null : raw; });
			fm[key] = raw;
			keyInput.value = "";
			valInput.value = "";
			// Metadata cache updates asynchronously; re-render once it has caught up.
			this.pendingFocusAdd = true;
		};
		addBtn.addEventListener("click", () => void add());
		for (const inp of [keyInput, valInput]) {
			inp.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					e.preventDefault();
					void add();
				}
			});
		}
		if (this.pendingFocusAdd) {
			this.pendingFocusAdd = false;
			window.setTimeout(() => keyInput.focus(), 0);
		}
	}

	private pendingFocusAdd = false;

	/** Called when the file's metadata changes; re-render even if the add row had focus. */
	onMetadataChanged(): void {
		if (!this.el) return;
		if (this.pendingFocusAdd) this.render();
		else this.refresh();
	}

	private async renameKey(state: { key: string }, input: HTMLInputElement): Promise<void> {
		const oldKey = state.key;
		const newKey = input.value.trim();
		if (!newKey || newKey === oldKey) {
			input.value = oldKey;
			return;
		}
		const file = this.getFile();
		const existing = file ? this.plugin.app.metadataCache.getFileCache(file)?.frontmatter ?? {} : {};
		if (Object.prototype.hasOwnProperty.call(existing, newKey)) {
			new Notice(t("novel.propertyExists", { name: newKey }));
			input.value = oldKey;
			return;
		}
		await this.write((fm) => {
			const entries = Object.entries(fm);
			for (const k of Object.keys(fm)) delete fm[k];
			for (const [k, v] of entries) fm[k === oldKey ? newKey : k] = v;
		});
		state.key = newKey;
	}

	private async write(mutate: (fm: Frontmatter) => void): Promise<void> {
		const file = this.getFile();
		if (!file) return;
		try {
			await this.plugin.app.fileManager.processFrontMatter(file, mutate);
		} catch (e) {
			console.error("Universe Builder: novel editor failed to update properties", e);
			new Notice(t("novel.updateFailed"));
		}
	}

	/** Decide which editor to show, using Obsidian's property types when available. */
	private kindFor(key: string, value: unknown): ValueKind {
		const assigned = this.assignedType(key);
		switch (assigned) {
			case "checkbox": return "checkbox";
			case "number": return "number";
			case "date": return "date";
			case "datetime": return "datetime";
			case "multitext":
			case "tags":
			case "aliases": return "list";
			case "text": return value !== null && typeof value === "object" ? "json" : "text";
		}
		if (typeof value === "boolean") return "checkbox";
		if (typeof value === "number") return "number";
		if (Array.isArray(value)) return value.every((v) => v === null || typeof v !== "object") ? "list" : "json";
		if (value !== null && typeof value === "object") return "json";
		return "text";
	}

	private assignedType(key: string): string | null {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const mtm = (this.plugin.app as any).metadataTypeManager;
			if (!mtm) return null;
			const lower = key.toLowerCase();
			const t = mtm.getAssignedType?.(lower) ?? mtm.types?.[lower]?.type ?? mtm.getAssignedWidget?.(lower);
			return typeof t === "string" ? t : null;
		} catch {
			return null;
		}
	}

	/**
	 * Existing text values for each key, offered as autocomplete. Taken from the notes near this one
	 * (see suggestionFiles), never by listing every file in the vault.
	 */
	private collectSuggestions(keys: string[]): Map<string, Set<string>> {
		const out = new Map<string, Set<string>>();
		const file = this.getFile();
		if (keys.length === 0 || !file) return out;
		for (const k of keys) out.set(k, new Set());
		const { metadataCache } = this.plugin.app;
		for (const f of suggestionFiles(file)) {
			const fm = metadataCache.getFileCache(f)?.frontmatter;
			if (!fm) continue;
			for (const k of keys) {
				const v: unknown = fm[k];
				const set = out.get(k);
				if (set && typeof v === "string" && v && set.size < 100) set.add(v);
			}
		}
		return out;
	}
}

const KIND_ICON: Record<ValueKind, string> = {
	text: "text",
	list: "list",
	number: "binary",
	checkbox: "check-square",
	date: "calendar",
	datetime: "clock",
	json: "braces",
};

function enterBlurs(inp: HTMLInputElement): void {
	inp.addEventListener("keydown", (e) => {
		if (e.key === "Enter") inp.blur();
	});
}

/**
 * The notes whose property values are offered as suggestions for `file`: every note under the
 * top-level folder it's in (e.g. the whole "Novel" folder for a scene in "Novel/Book 1/Chapter 1"),
 * found by walking that folder only. A note at the vault root only looks at the other root notes.
 */
function suggestionFiles(file: TFile): TFile[] {
	let top: TFolder | null = file.parent;
	while (top?.parent && !top.parent.isRoot()) top = top.parent;
	if (!top) return [];
	const out: TFile[] = [];
	if (top.isRoot()) {
		for (const child of top.children) if (child instanceof TFile && child.extension === "md") out.push(child);
		return out;
	}
	Vault.recurseChildren(top, (f) => {
		if (f instanceof TFile && f.extension === "md") out.push(f);
	});
	return out;
}
