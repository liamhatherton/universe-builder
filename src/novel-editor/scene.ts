import { Notice, TFile, setIcon } from "obsidian";
import { t } from "../i18n";
import type { TranslationKey } from "../i18n";
import type { NovelEditor } from "./index";

/**
 * Scene lists: which characters, locations, groups, lore and timeline events from the Universe Builder sidebar appear in
 * a scene. Each is a list property in the scene's frontmatter holding wiki-links
 * (`- "[[Mara Voss]]"`), so Obsidian keeps them up to date when an entry is renamed and they
 * show up in backlinks and the graph. Plain names typed by hand are matched to entries too.
 */
export type SceneKind = "characters" | "locations" | "groups" | "lore" | "timeline";

/**
 * Data type a sidebar entry carries (its note path) while being dragged out of the Universe Builder
 * sidebar; dropping it on a novel scene adds it to the matching scene list.
 */
export const ENTRY_DRAG_TYPE = "application/x-universe-builder-entry";

/** A sidebar entry offered in a scene list's menu. */
export interface UniverseEntry {
	file: TFile;
	/** The entry's display name (its `name` or `title` property, else the file name). */
	name: string;
	/** Shown after the name in the menu (a timeline event's date). */
	detail?: string;
}

export interface SceneListDef {
	kind: SceneKind;
	/** Frontmatter key the list is stored under. */
	key: string;
	icon: string;
	label: TranslationKey;
	tooltip: TranslationKey;
	empty: TranslationKey;
}

export const SCENE_LISTS: SceneListDef[] = [
	{ kind: "characters", key: "universe-builder-scene-characterlist", icon: "user", label: "tab.characters", tooltip: "novel.charactersTooltip", empty: "novel.noCharacters" },
	{ kind: "locations", key: "universe-builder-scene-locationlist", icon: "map-pin", label: "tab.locations", tooltip: "novel.locationsTooltip", empty: "novel.noLocations" },
	{ kind: "groups", key: "universe-builder-scene-grouplist", icon: "users", label: "tab.groups", tooltip: "novel.groupsTooltip", empty: "novel.noGroups" },
	{ kind: "lore", key: "universe-builder-scene-lorelist", icon: "book-open", label: "tab.lore", tooltip: "novel.loreTooltip", empty: "novel.noLore" },
	{ kind: "timeline", key: "universe-builder-scene-timelinelist", icon: "calendar-clock", label: "tab.timeline", tooltip: "novel.timelineTooltip", empty: "novel.noTimeline" },
];

/**
 * Fills `el` with the entry's portrait (the image its sidebar card shows) or, if it has none or the
 * image fails to load, the section's icon.
 */
export function renderAvatar(el: HTMLElement, plugin: NovelEditor, file: TFile | null, icon: string): void {
	el.empty();
	const src = file ? plugin.portrait(file) : null;
	if (!src) {
		el.removeClass("has-portrait");
		setIcon(el, icon);
		return;
	}
	el.addClass("has-portrait");
	const img = el.createEl("img", { attr: { src, alt: "", draggable: "false" } });
	img.onerror = () => {
		img.remove();
		el.removeClass("has-portrait");
		setIcon(el, icon);
	};
}

/** One stored item of a scene list and the entry it points at (null if it points nowhere). */
export interface SceneItem {
	raw: string;
	name: string;
	file: TFile | null;
}

type Frontmatter = Record<string, unknown>;

/** A frontmatter value as a list of strings (a lone string counts as a one-item list). */
function asList(value: unknown): string[] {
	if (Array.isArray(value)) return value.filter((v) => v != null && v !== "").map((v) => String(v));
	if (value == null || value === "") return [];
	return [String(value)];
}

/** "[[Path/Name#Heading|Alias]]" -> { linkpath: "Path/Name", alias: "Alias" }; plain text passes through. */
function parseItem(raw: string): { linkpath: string; alias: string | null } {
	const m = /^\s*\[\[([^\]]*)\]\]\s*$/.exec(raw);
	const inner = m ? m[1] : raw.trim();
	const [target, alias] = inner.split("|");
	return { linkpath: target.split("#")[0].trim(), alias: alias?.trim() || null };
}

/** Reads and writes one scene note's lists. */
export class SceneLists {
	constructor(private readonly plugin: NovelEditor) {}

	/** Resolve a stored item: as a link first, then by entry name or file name within the section. */
	private resolve(raw: string, def: SceneListDef, source: TFile, entries: UniverseEntry[]): SceneItem {
		const { linkpath, alias } = parseItem(raw);
		let file: TFile | null = linkpath ? this.plugin.app.metadataCache.getFirstLinkpathDest(linkpath, source.path) : null;
		if (!file && linkpath) {
			const wanted = linkpath.toLowerCase();
			file = entries.find((e) => e.name.toLowerCase() === wanted || e.file.basename.toLowerCase() === wanted)?.file ?? null;
		}
		const entry = file ? entries.find((e) => e.file === file) : undefined;
		return { raw, file, name: entry?.name ?? alias ?? file?.basename ?? linkpath };
	}

	items(source: TFile, def: SceneListDef, entries = this.plugin.entries(def.kind)): SceneItem[] {
		const fm = this.plugin.app.metadataCache.getFileCache(source)?.frontmatter as Frontmatter | undefined;
		return asList(fm?.[def.key]).map((raw) => this.resolve(raw, def, source, entries));
	}

	/** Add an entry to the list (no-op if it's already there). */
	async add(source: TFile, def: SceneListDef, file: TFile): Promise<void> {
		const entries = this.plugin.entries(def.kind);
		const link = `[[${this.plugin.app.metadataCache.fileToLinktext(file, source.path, true)}]]`;
		await this.write(source, (fm) => {
			const list = asList(fm[def.key]);
			if (list.some((raw) => this.resolve(raw, def, source, entries).file === file)) return;
			list.push(link);
			fm[def.key] = list;
		});
	}

	/** Remove an item: every stored value pointing at `file`, or the exact raw value if it points nowhere. */
	async remove(source: TFile, def: SceneListDef, target: TFile | string): Promise<void> {
		const entries = this.plugin.entries(def.kind);
		await this.write(source, (fm) => {
			const list = asList(fm[def.key]).filter((raw) =>
				typeof target === "string" ? raw !== target : this.resolve(raw, def, source, entries).file !== target,
			);
			if (list.length) fm[def.key] = list;
			else delete fm[def.key];
		});
	}

	private async write(file: TFile, mutate: (fm: Frontmatter) => void): Promise<void> {
		try {
			await this.plugin.app.fileManager.processFrontMatter(file, mutate);
		} catch (e) {
			console.error("Universe Builder: novel editor failed to update a scene list", e);
			new Notice(t("novel.updateFailed"));
		}
	}
}

/**
 * Floating menu, anchored under the toolbar, listing one sidebar section's entries. Clicking an
 * entry adds it to the scene (or removes it if it's already there); the menu stays open so
 * several can be picked in a row.
 */
export class ScenePicker {
	private el: HTMLElement | null = null;
	private anchor: HTMLElement | null = null;
	private listEl: HTMLElement | null = null;
	private searchEl: HTMLInputElement | null = null;
	private query = "";
	private activeIndex = 0;
	private readonly onOutside = (evt: MouseEvent) => {
		const target = evt.target as Node | null;
		if (!this.el || !target) return;
		if (this.el.contains(target) || this.anchor?.contains(target)) return;
		this.close();
	};

	constructor(
		private readonly plugin: NovelEditor,
		private readonly lists: SceneLists,
		readonly def: SceneListDef,
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
		this.query = "";
		this.activeIndex = 0;
		const el = (this.el = this.host.createDiv({ cls: "ue-props-popover ue-scene-picker" }));

		const header = el.createDiv({ cls: "ue-props-header" });
		const title = header.createSpan({ cls: "ue-props-title ue-scene-picker-title" });
		setIcon(title.createSpan({ cls: "ue-btn-icon" }), this.def.icon);
		title.createSpan({ text: t(this.def.label) });
		const closeBtn = header.createEl("button", { cls: "clickable-icon ue-props-close", attr: { "aria-label": t("novel.close") } });
		setIcon(closeBtn, "x");
		closeBtn.addEventListener("click", () => this.close());

		const search = (this.searchEl = el.createEl("input", { type: "text", cls: "ue-scene-search", placeholder: t("novel.filter") }));
		search.spellcheck = false;
		search.addEventListener("input", () => {
			this.query = search.value;
			this.activeIndex = 0;
			this.renderList();
		});
		search.addEventListener("keydown", (evt) => this.onKey(evt));
		el.addEventListener("keydown", (evt) => {
			if (evt.key === "Escape") {
				evt.preventDefault();
				evt.stopPropagation();
				this.close();
				anchor.focus();
			}
		});

		this.listEl = el.createDiv({ cls: "ue-scene-options" });
		this.renderList();
		this.position();
		this.host.ownerDocument.addEventListener("mousedown", this.onOutside, true);
		this.onToggle(true);
		window.setTimeout(() => search.focus(), 0);
	}

	close(): void {
		if (!this.el) return;
		this.host.ownerDocument.removeEventListener("mousedown", this.onOutside, true);
		this.el.remove();
		this.el = this.listEl = this.searchEl = null;
		this.onToggle(false);
	}

	/** Re-draw the checkmarks after the scene's frontmatter changes. */
	refresh(): void {
		if (this.el) this.renderList();
	}

	private position(): void {
		if (!this.el || !this.anchor) return;
		const hostRect = this.host.getBoundingClientRect();
		const aRect = this.anchor.getBoundingClientRect();
		const left = Math.max(8, Math.min(aRect.left - hostRect.left, hostRect.width - this.el.offsetWidth - 8));
		this.el.style.left = `${left}px`;
	}

	private visibleEntries(): UniverseEntry[] {
		const q = this.query.trim().toLowerCase();
		const all = this.plugin.entries(this.def.kind);
		return q ? all.filter((e) => e.name.toLowerCase().includes(q) || e.file.basename.toLowerCase().includes(q) || !!e.detail?.toLowerCase().includes(q)) : all;
	}

	private renderList(): void {
		const listEl = this.listEl;
		const file = this.getFile();
		if (!listEl || !file) return;
		const scrollTop = listEl.scrollTop;
		listEl.empty();

		const entries = this.visibleEntries();
		const chosen = new Set(this.lists.items(file, this.def).map((i) => i.file).filter((f): f is TFile => !!f));
		if (entries.length === 0) {
			listEl.createDiv({ cls: "ue-props-empty", text: this.query.trim() ? t("novel.noMatches") : t(this.def.empty) });
			return;
		}
		this.activeIndex = Math.min(this.activeIndex, entries.length - 1);
		entries.forEach((entry, i) => {
			const selected = chosen.has(entry.file);
			const row = listEl.createEl("button", {
				cls: "ue-scene-option",
				attr: { "aria-pressed": String(selected), "data-path": entry.file.path },
			});
			if (selected) row.addClass("is-selected");
			if (i === this.activeIndex) row.addClass("is-active");
			const check = row.createSpan({ cls: "ue-scene-check" });
			if (selected) setIcon(check, "check");
			renderAvatar(row.createSpan({ cls: "ue-scene-avatar" }), this.plugin, entry.file, this.def.icon);
			row.createSpan({ cls: "ue-scene-option-name", text: entry.name });
			if (entry.detail) row.createSpan({ cls: "ue-scene-option-detail", text: entry.detail });
			// Keep focus in the filter box so typing and arrow keys keep working.
			row.addEventListener("mousedown", (e) => e.preventDefault());
			row.addEventListener("click", () => {
				this.activeIndex = i;
				void this.toggleEntry(entry.file, selected);
			});
		});
		listEl.scrollTop = scrollTop;
	}

	private onKey(evt: KeyboardEvent): void {
		const count = this.visibleEntries().length;
		if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
			evt.preventDefault();
			if (!count) return;
			this.activeIndex = (this.activeIndex + (evt.key === "ArrowDown" ? 1 : count - 1)) % count;
			this.renderList();
			this.listEl?.querySelector(".ue-scene-option.is-active")?.scrollIntoView({ block: "nearest" });
		} else if (evt.key === "Enter") {
			evt.preventDefault();
			const entry = this.visibleEntries()[this.activeIndex];
			const file = this.getFile();
			if (!entry || !file) return;
			const selected = this.lists.items(file, this.def).some((i) => i.file === entry.file);
			void this.toggleEntry(entry.file, selected);
		}
	}

	private async toggleEntry(entryFile: TFile, selected: boolean): Promise<void> {
		const file = this.getFile();
		if (!file) return;
		if (selected) await this.lists.remove(file, this.def, entryFile);
		else await this.lists.add(file, this.def, entryFile);
		// The metadata cache catches up asynchronously and triggers refresh(); this is just in case
		// nothing changed on disk (e.g. the entry was already there under another spelling).
		this.refresh();
	}
}
