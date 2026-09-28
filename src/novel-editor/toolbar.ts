import { MarkdownView, TFile, setIcon } from "obsidian";
import { EditorView } from "@codemirror/view";
import type { TranslationKey } from "../i18n";
import { FormatKind, countWords, isActive, toggleFormat } from "./format";
import { Alignment, currentAlignment, setAlignment } from "./align";
import { PropertiesPopover } from "./properties";
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

const ALIGN_BUTTONS: { align: Alignment; icon: string; label: TranslationKey }[] = [
	{ align: "left", icon: "align-left", label: "novel.alignLeft" },
	{ align: "center", icon: "align-center", label: "novel.alignCenter" },
	{ align: "right", icon: "align-right", label: "novel.alignRight" },
];

/**
 * Toolbar mounted at the top of a MarkdownView (between the view header and the
 * editor): formatting buttons, a Properties button, and note info.
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
	private readonly popover: PropertiesPopover;
	private countTimer: number | null = null;

	constructor(private readonly plugin: NovelEditor, readonly view: MarkdownView) {
		this.el = createDiv({ cls: "ue-toolbar" });

		// Three sections: Properties + property tags (left), formatting (center), word count (right).
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

		this.propsBtn = left.createEl("button", { cls: "ue-toolbar-btn ue-props-btn", attr: { "aria-label": t("novel.propertiesTooltip") } });
		setIcon(this.propsBtn.createSpan({ cls: "ue-btn-icon" }), "list");
		this.propsBtn.createSpan({ text: t("novel.properties") });
		this.propsBtn.addEventListener("click", () => this.toggleProperties());
		this.infoEl = left.createDiv({ cls: "ue-toolbar-info ue-toolbar-tags" });
		this.countEl = right.createDiv({ cls: "ue-toolbar-info" });


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
		this.applySettings();
		this.setFile(this.view.file);
	}

	unmount(): void {
		this.popover.close();
		if (this.countTimer !== null) window.clearTimeout(this.countTimer);
		this.el.remove();
		this.view.containerEl.removeClass("ue-editor", "ue-hide-props");
	}

	applySettings(): void {
		this.view.containerEl.toggleClass("ue-hide-props", this.plugin.settings.hideInlineProperties);
		this.refreshInfo();
	}

	setFile(file: TFile | null): void {
		const path = file?.path ?? null;
		if (path !== this.filePath) {
			this.filePath = path;
			this.popover.close();
		}
		this.refreshInfo();
		this.refreshActiveStates();
	}

	toggleProperties(): void {
		this.popover.toggle(this.propsBtn);
	}

	onMetadataChanged(): void {
		this.refreshInfo();
		this.popover.onMetadataChanged();
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
			const raw: unknown = fm[key];
			if (raw == null || raw === "") continue;
			const text = Array.isArray(raw) ? raw.join(", ") : String(raw);
			const chip = info.createEl("button", { cls: "ue-chip", text, attr: { "aria-label": `${key}: ${text}`, "data-key": key } });
			chip.addEventListener("click", () => this.popover.toggle(this.propsBtn));
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
