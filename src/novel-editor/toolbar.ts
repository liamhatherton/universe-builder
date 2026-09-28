import { MarkdownView, Notice, TFile, setIcon } from "obsidian";
import { EditorView } from "@codemirror/view";
import type { TranslationKey } from "../i18n";
import { FormatKind, countWords, isActive, toggleFormat } from "./format";
import { Alignment, currentAlignment, setAlignment } from "./align";
import { PropertiesPopover } from "./properties";
import { ENTRY_DRAG_TYPE, SCENE_LISTS, SceneKind, SceneLists, ScenePicker, renderAvatar } from "./scene";
import { t, tn } from "../i18n";
import type { NovelEditor } from "./index";

/** Get the CodeMirror 6 view behind an Obsidian MarkdownView. */
export function cmOf(view: MarkdownView): EditorView | null {
	return (view.editor as unknown as { cm?: EditorView }).cm ?? null;
}

const FORMAT_BUTTONS: { kind: FormatKind; icon: string; label: TranslationKey }[] = [
	{ kind: "bold", icon: "bold", label: "novel.bold" },
	{ kind: "italic", icon: "italic", label: "novel.italic" },
	{ kind: "underline", icon: "underline", label: "novel.underline" },
	{ kind: "strikethrough", icon: "strikethrough", label: "novel.strikethrough" },
];

/** Required properties that don't get a label in the toolbar (they only mark the note as a scene). */
const UNLABELLED_PROPERTIES = new Set(["novelr-status", "novelr-type"]);

const ALIGN_BUTTONS: { align: Alignment; icon: string; label: TranslationKey }[] = [
	{ align: "left", icon: "align-left", label: "novel.alignLeft" },
	{ align: "center", icon: "align-center", label: "novel.alignCenter" },
	{ align: "right", icon: "align-right", label: "novel.alignRight" },
];

/**
 * Toolbar mounted at the top of a MarkdownView (between the view header and the
 * editor): formatting buttons, the scene's Characters / Locations / Groups / Lore / Timeline (with a row of labels
 * for the chosen entries underneath), an optional Properties button, and note info.
 */
export class NovelToolbar {
	readonly el: HTMLElement;
	filePath: string | null = null;
	/** File path we last forced into Live Preview, so we only do it once per open. */
	forcedFor: string | null = null;

	private readonly formatBtns = new Map<FormatKind, HTMLButtonElement>();
	private readonly alignBtns = new Map<Alignment, HTMLButtonElement>();
	private readonly propsBtn: HTMLButtonElement;
	private readonly infoEl: HTMLElement;
	private readonly countEl: HTMLElement;
	private readonly sceneToggle: HTMLButtonElement;
	/** Animated wrapper around the scene grid (see setSceneOpen). */
	private readonly sceneWrap: HTMLElement;
	private readonly sceneEl: HTMLElement;
	/** Each category's row of labels (the "+" button after them stays put across redraws). */
	private readonly scenePills = new Map<SceneKind, HTMLElement>();
	private readonly popover: PropertiesPopover;
	private readonly sceneLists: SceneLists;
	private readonly pickers = new Map<SceneKind, ScenePicker>();
	/** What the scene row last showed, so unrelated metadata changes don't redraw it. */
	private sceneSignature = "";
	private countTimer: number | null = null;
	/** The view element the drop listeners are on (see listenForDrops). */
	private dropHost: HTMLElement | null = null;
	private dropHighlightTimer: number | null = null;

	constructor(private readonly plugin: NovelEditor, readonly view: MarkdownView) {
		this.el = createDiv({ cls: "ue-toolbar" });

		// Three sections: Scene Metadata toggle + property tags (left), formatting (center), word count (right).
		const left = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-left" });
		const center = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-center" });
		const right = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-right" });

		const fmt = center.createDiv({ cls: "ue-toolbar-group" });
		for (const b of FORMAT_BUTTONS) {
			const btn = fmt.createEl("button", { cls: "ue-toolbar-btn", attr: { "aria-label": t(b.label), "data-format": b.kind } });
			setIcon(btn, b.icon);
			// Keep editor focus + selection while clicking.
			btn.addEventListener("mousedown", (e) => e.preventDefault());
			btn.addEventListener("click", () => this.applyFormat(b.kind));
			this.formatBtns.set(b.kind, btn);
		}

		const align = center.createDiv({ cls: "ue-toolbar-group ue-align-group" });
		for (const b of ALIGN_BUTTONS) {
			const btn = align.createEl("button", { cls: "ue-toolbar-btn", attr: { "aria-label": t(b.label), "data-align": b.align } });
			setIcon(btn, b.icon);
			btn.addEventListener("mousedown", (e) => e.preventDefault());
			btn.addEventListener("click", () => this.applyAlign(b.align));
			this.alignBtns.set(b.align, btn);
		}

		// Icon only, to save room; its name shows as a tooltip.
		this.propsBtn = left.createEl("button", { cls: "ue-toolbar-btn ue-props-btn", attr: { "aria-label": t("novel.propertiesTooltip") } });
		setIcon(this.propsBtn, "list");
		this.propsBtn.addEventListener("click", () => this.toggleProperties());

		// Shows / hides the Scene Metadata section below the toolbar; the chevron points down while open.
		this.sceneToggle = left.createEl("button", {
			cls: "ue-toolbar-btn ue-scene-toggle",
			attr: { "aria-label": t("novel.sceneMetadataTooltip"), "aria-expanded": "false" },
		});
		setIcon(this.sceneToggle.createSpan({ cls: "ue-btn-icon ue-scene-chevron" }), "chevron-right");
		this.sceneToggle.createSpan({ cls: "ue-btn-label", text: t("novel.sceneMetadata") });
		this.sceneToggle.addEventListener("click", () => this.plugin.setSceneMetadataOpen(!this.plugin.settings.sceneMetadataOpen));

		this.infoEl = left.createDiv({ cls: "ue-toolbar-info ue-toolbar-tags" });
		this.countEl = right.createDiv({ cls: "ue-toolbar-info" });

		// Second row, full width: one row per category (Characters, Locations, Groups, Lore, Timeline)
		// with the category name, a label for each of its entries in the scene, and a "+" menu to add more.
		this.sceneLists = new SceneLists(plugin);
		this.sceneWrap = this.el.createDiv({ cls: "ue-scene-wrap" });
		// The clip box collapses to zero height (padding included) while the grid inside keeps its size.
		this.sceneEl = this.sceneWrap.createDiv({ cls: "ue-scene-clip" }).createDiv({ cls: "ue-toolbar-scene" });
		for (const def of SCENE_LISTS) {
			// Left column: the category name with its "+" right after it, so the labels in the right
			// column all start at the same point.
			const category = this.sceneEl.createDiv({ cls: "ue-scene-category", attr: { "data-kind": def.kind } });
			category.createSpan({ cls: "ue-scene-category-name", text: t(def.label) });
			const add = category.createEl("button", {
				cls: "clickable-icon ue-scene-add",
				attr: { "aria-label": t("novel.addToScene", { section: t(def.label) }), "data-kind": def.kind },
			});
			setIcon(add, "plus");
			const row = this.sceneEl.createDiv({ cls: "ue-scene-entries", attr: { "data-kind": def.kind } });
			this.scenePills.set(def.kind, row.createDiv({ cls: "ue-scene-pills" }));
			const picker = new ScenePicker(plugin, this.sceneLists, def, this.el, () => this.view.file, (open) =>
				add.toggleClass("is-active", open),
			);
			add.addEventListener("click", () => {
				this.closePopovers(picker);
				picker.toggle(add);
			});
			this.pickers.set(def.kind, picker);
		}


		this.popover = new PropertiesPopover(
			plugin,
			this.el,
			() => this.view.file,
			(open) => this.propsBtn.toggleClass("is-active", open),
		);
	}

	mount(): void {
		const container = this.view.containerEl;
		if (this.el.parentElement !== container) container.insertBefore(this.el, this.view.contentEl);
		container.addClass("ue-editor");
		this.listenForDrops(container);
		this.applySettings();
		this.setFile(this.view.file);
	}

	unmount(): void {
		this.closePopovers();
		if (this.countTimer !== null) window.clearTimeout(this.countTimer);
		this.el.remove();
		this.stopListeningForDrops();
		this.view.containerEl.removeClass("ue-editor", "ue-hide-props", "ue-drop-target");
		this.lockInlineTitle(false);
	}

	// ─── Locked title ───────────────────────────────────────────────────────────

	/**
	 * The bold title above a scene's text is Obsidian's inline title: the note's file name, and
	 * editing it renames the file. With "Lock scene title" on it can't be clicked into, focused
	 * (e.g. with the Up arrow from the first line, which is sent back to the text) or typed in.
	 */
	private lockInlineTitle(lock: boolean): void {
		const container = this.view.containerEl;
		container.toggleClass("ue-lock-title", lock);
		const title = container.querySelector<HTMLElement>(".inline-title");
		if (title) title.setAttribute("contenteditable", lock ? "false" : "true");
		if (lock && !this.titleGuarded) {
			container.addEventListener("focusin", this.onTitleFocus, true);
			container.addEventListener("beforeinput", this.onTitleInput, true);
			container.addEventListener("keydown", this.onTitleInput, true);
			this.titleGuarded = true;
		} else if (!lock && this.titleGuarded) {
			container.removeEventListener("focusin", this.onTitleFocus, true);
			container.removeEventListener("beforeinput", this.onTitleInput, true);
			container.removeEventListener("keydown", this.onTitleInput, true);
			this.titleGuarded = false;
		}
	}

	private titleGuarded = false;

	private readonly onTitleFocus = (e: FocusEvent) => {
		const target = e.target as HTMLElement | null;
		if (!target?.closest?.(".inline-title")) return;
		target.blur();
		cmOf(this.view)?.focus();
	};

	private readonly onTitleInput = (e: Event) => {
		const target = e.target as HTMLElement | null;
		if (!target?.closest?.(".inline-title")) return;
		// Let Down / Enter / Tab still move on to the text; block anything that would edit.
		if (e instanceof KeyboardEvent && !isEditingKey(e)) return;
		e.preventDefault();
		e.stopPropagation();
	};

	// ─── Dropping sidebar entries onto the scene ────────────────────────────────

	private readonly onDragOver = (e: DragEvent) => {
		if (!e.dataTransfer?.types.includes(ENTRY_DRAG_TYPE)) return;
		// Capture phase on the whole view, so the editor never sees (or pastes) the drag.
		e.preventDefault();
		e.stopPropagation();
		e.dataTransfer.dropEffect = "copy";
		this.setDropHighlight(true);
	};

	private readonly onDragLeave = (e: DragEvent) => {
		if (!e.dataTransfer?.types.includes(ENTRY_DRAG_TYPE)) return;
		const to = e.relatedTarget as Node | null;
		if (!to || !this.view.containerEl.contains(to)) this.setDropHighlight(false);
	};

	private readonly onDrop = (e: DragEvent) => {
		if (!e.dataTransfer?.types.includes(ENTRY_DRAG_TYPE)) return;
		e.preventDefault();
		e.stopPropagation();
		this.setDropHighlight(false);
		void this.addDroppedEntry(e.dataTransfer.getData(ENTRY_DRAG_TYPE));
	};

	/** Any sidebar card (or an expanded card's header) dropped anywhere on this view joins the scene. */
	private listenForDrops(host: HTMLElement): void {
		if (this.dropHost === host) return;
		this.stopListeningForDrops();
		this.dropHost = host;
		host.addEventListener("dragenter", this.onDragOver, true);
		host.addEventListener("dragover", this.onDragOver, true);
		host.addEventListener("dragleave", this.onDragLeave, true);
		host.addEventListener("drop", this.onDrop, true);
	}

	private stopListeningForDrops(): void {
		const host = this.dropHost;
		if (!host) return;
		host.removeEventListener("dragenter", this.onDragOver, true);
		host.removeEventListener("dragover", this.onDragOver, true);
		host.removeEventListener("dragleave", this.onDragLeave, true);
		host.removeEventListener("drop", this.onDrop, true);
		this.dropHost = null;
		this.setDropHighlight(false);
	}

	/**
	 * Outline the view while an entry is dragged over it. dragleave doesn't fire when a drag is
	 * cancelled (Escape) or ends elsewhere, so the highlight also clears itself shortly after the
	 * last dragover.
	 */
	private setDropHighlight(on: boolean): void {
		if (this.dropHighlightTimer !== null) window.clearTimeout(this.dropHighlightTimer);
		this.dropHighlightTimer = null;
		this.view.containerEl.toggleClass("ue-drop-target", on);
		if (on) this.dropHighlightTimer = window.setTimeout(() => this.setDropHighlight(false), 300);
	}

	private async addDroppedEntry(path: string): Promise<void> {
		const scene = this.view.file;
		const entry = path ? this.plugin.app.vault.getAbstractFileByPath(path) : null;
		if (!scene || !(entry instanceof TFile)) return;
		const kind = this.plugin.entryKind(entry);
		const def = SCENE_LISTS.find((d) => d.kind === kind);
		if (!def) return;
		const name = this.plugin.entries(def.kind).find((e) => e.file === entry)?.name ?? entry.basename;
		if (this.sceneLists.items(scene, def).some((i) => i.file === entry)) {
			new Notice(t("novel.alreadyInScene", { name }));
			return;
		}
		await this.sceneLists.add(scene, def, entry);
		// Show where it went.
		if (!this.plugin.settings.sceneMetadataOpen) this.plugin.setSceneMetadataOpen(true);
	}

	applySettings(): void {
		this.view.containerEl.toggleClass("ue-hide-props", this.plugin.settings.hideInlineProperties);
		this.propsBtn.toggleClass("is-hidden", !this.plugin.settings.showPropertiesButton);
		this.setSceneOpen(this.plugin.settings.sceneMetadataOpen, false);
		this.lockInlineTitle(this.plugin.settings.lockTitle);
		this.refreshInfo();
		this.refreshScene(true);
	}

	setFile(file: TFile | null): void {
		const path = file?.path ?? null;
		if (path !== this.filePath) {
			this.filePath = path;
			this.closePopovers();
		}
		this.refreshInfo();
		this.refreshScene(true);
		this.refreshActiveStates();
	}

	toggleProperties(): void {
		this.closePopovers(this.popover);
		// With the button hidden (the Properties command), anchor the panel to the toolbar's left edge.
		this.popover.toggle(this.propsBtn.hasClass("is-hidden") ? this.el : this.propsBtn);
	}

	/** Close every floating panel except `keep`. */
	private closePopovers(keep?: PropertiesPopover | ScenePicker): void {
		if (keep !== this.popover) this.popover.close();
		for (const p of this.pickers.values()) if (p !== keep) p.close();
	}

	onMetadataChanged(): void {
		this.refreshInfo();
		this.refreshScene();
		this.popover.onMetadataChanged();
		for (const p of this.pickers.values()) p.refresh();
	}

	/** Portraits loaded or changed: update the labels and any open menu. */
	refreshPortraits(): void {
		this.refreshScene();
		for (const p of this.pickers.values()) p.refresh();
	}

	/**
	 * Show or hide the Scene Metadata section, sliding it open / closed when `animate` (the height
	 * animation itself is CSS, on .ue-scene-wrap).
	 */
	setSceneOpen(open: boolean, animate: boolean): void {
		const wrap = this.sceneWrap;
		if (!animate) {
			wrap.addClass("no-anim");
			// Re-enable transitions once this state has been painted.
			window.requestAnimationFrame(() => window.requestAnimationFrame(() => wrap.removeClass("no-anim")));
		}
		wrap.toggleClass("is-open", open);
		wrap.setAttr("aria-hidden", String(!open));
		// Hidden rows shouldn't be reachable with Tab.
		if (open) wrap.removeAttribute("inert");
		else wrap.setAttribute("inert", "");
		this.sceneToggle.toggleClass("is-open", open);
		this.sceneToggle.setAttr("aria-expanded", String(open));
		if (!open) for (const p of this.pickers.values()) p.close();
	}

	/** Redraw the scene's labels (characters, locations, groups, lore, timeline) if what it shows changed. */
	refreshScene(force = false): void {
		const file = this.view.file;
		const lists = file
			? SCENE_LISTS.map((def) => ({ def, items: this.sceneLists.items(file, def) }))
			: [];
		const signature = JSON.stringify(
			lists.map(({ def, items }) => [def.kind, items.map((i) => [i.raw, i.name, i.file?.path ?? "", i.file ? this.plugin.portrait(i.file) : ""])]),
		);
		if (!force && signature === this.sceneSignature) return;
		this.sceneSignature = signature;

		// Only the labels are redrawn; the category names and "+" buttons (which anchor open menus) stay.
		for (const { def, items } of lists) {
			const row = this.scenePills.get(def.kind);
			if (!row) continue;
			row.empty();
			for (const item of items) {
				const pill = row.createDiv({
					cls: "ue-chip ue-scene-pill",
					attr: {
						role: "button",
						tabindex: "0",
						"data-kind": def.kind,
						"aria-label": item.file ? t("novel.openInSidebar", { name: item.name }) : t("novel.entryNotFound", { name: item.name }),
					},
				});
				if (!item.file) pill.addClass("is-unresolved");
				// The entry's portrait, as on its sidebar card, else the section's icon.
				renderAvatar(pill.createSpan({ cls: "ue-scene-pill-icon" }), this.plugin, item.file, def.icon);
				pill.createSpan({ cls: "ue-scene-pill-name", text: item.name });
				const remove = pill.createSpan({ cls: "ue-scene-pill-remove", attr: { role: "button", "aria-label": t("novel.removeFromScene") } });
				setIcon(remove, "x");

				const open = () => {
					if (item.file) void this.plugin.revealEntry(item.file);
					else new Notice(t("novel.entryNotFound", { name: item.name }));
				};
				remove.addEventListener("click", (e) => {
					e.stopPropagation();
					const f = this.view.file;
					if (f) void this.sceneLists.remove(f, def, item.file ?? item.raw);
				});
				pill.addEventListener("click", open);
				pill.addEventListener("keydown", (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						open();
					}
				});
			}
		}
	}

	/** Called on every CodeMirror update for this view's editor. */
	onEditorUpdate(docChanged: boolean): void {
		this.refreshActiveStates();
		this.scheduleCount(docChanged ? 400 : 120);
	}

	private applyFormat(kind: FormatKind): void {
		const cm = cmOf(this.view);
		if (!cm) return;
		if (this.view.getMode() !== "source") return; // Not editable in reading view.
		toggleFormat(cm, kind);
		cm.focus();
	}

	private applyAlign(align: Alignment): void {
		const cm = cmOf(this.view);
		if (!cm || this.view.getMode() !== "source") return;
		setAlignment(cm, align);
		cm.focus();
	}

	private refreshActiveStates(): void {
		const cm = cmOf(this.view);
		for (const [kind, btn] of this.formatBtns) {
			btn.toggleClass("is-active", !!cm && isActive(cm.state, kind));
		}
		const current = cm ? currentAlignment(cm.state) : null;
		for (const [a, btn] of this.alignBtns) btn.toggleClass("is-active", a === current);
	}

	private scheduleCount(delay: number): void {
		if (this.countTimer !== null) window.clearTimeout(this.countTimer);
		this.countTimer = window.setTimeout(() => {
			this.countTimer = null;
			this.refreshInfo();
		}, delay);
	}

	refreshInfo(): void {
		const info = this.infoEl;
		info.empty();
		this.countEl.empty();
		const file = this.view.file;
		if (!file) return;
		const fm = this.plugin.app.metadataCache.getFileCache(file)?.frontmatter ?? {};

		for (const key of this.plugin.settings.requiredProperties) {
			if (UNLABELLED_PROPERTIES.has(key)) continue;
			const raw: unknown = fm[key];
			if (raw == null || raw === "") continue;
			const text = Array.isArray(raw) ? raw.join(", ") : String(raw);
			const chip = info.createEl("button", { cls: "ue-chip", text, attr: { "aria-label": `${key}: ${text}`, "data-key": key } });
			chip.addEventListener("click", () => this.toggleProperties());
		}

		if (this.plugin.settings.showWordCount) {
			const cm = cmOf(this.view);
			const docText = cm ? cm.state.doc.toString() : this.view.getViewData();
			const total = countWords(docText);
			const wc = this.countEl.createSpan({ cls: "ue-wordcount", text: tn("novel.words", total, { count: total.toLocaleString() }) });
			if (cm) {
				const sel = cm.state.selection.ranges
					.filter((r) => !r.empty)
					.map((r) => cm.state.sliceDoc(r.from, r.to))
					.join(" ");
				if (sel) {
					const n = countWords(sel);
					wc.createSpan({ cls: "ue-wordcount-sel", text: ` · ${t("novel.selected", { count: n.toLocaleString() })}` });
				}
			}
		}
	}
}

/** Would this key change text in a focused editable element (typing, deleting, pasting, cutting)? */
function isEditingKey(e: KeyboardEvent): boolean {
	if (e.key === "Backspace" || e.key === "Delete") return true;
	const mod = e.ctrlKey || e.metaKey;
	if (mod) return ["v", "x", "z", "y"].includes(e.key.toLowerCase());
	return e.key.length === 1;
}
