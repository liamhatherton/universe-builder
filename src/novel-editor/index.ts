/**
 * Novel editor: an opinionated Live Preview for writing scenes.
 *
 * Notes in the main editor area (never the sidebars) that have every required property
 * (by default `novelr-type` and `novelr-status`) get a toolbar above the editor with:
 *   - the Properties button and the note's required property values (left),
 *   - bold / italic / underline / strikethrough and align left / center / right (center),
 *   - the word count (right).
 * The inline properties block is hidden; Properties opens a floating panel to edit them instead.
 *
 * It decorates Obsidian's own MarkdownView rather than replacing it, so every Live Preview
 * feature keeps working. See UNDOCUMENTED-API.md for the two internals it touches.
 */
import { App, Component, MarkdownView, Plugin, TFile, WorkspaceLeaf } from "obsidian";
import { EditorView } from "@codemirror/view";
import { t } from "../i18n";
import type { TranslationKey } from "../i18n";
import { toggleFormat } from "./format";
import { Alignment, alignmentExtension, alignmentKeeper, alignmentPostProcessor, setAlignment } from "./align";
import { NovelToolbar, cmOf } from "./toolbar";

/** The plugin settings the novel editor reads (stored flat in the plugin's data.json). */
export interface NovelEditorSettings {
	/** Whether the novel editor is on at all. */
	novelEditor: boolean;
	/** Comma-separated frontmatter keys a note must all have to get the novel editor. */
	novelEditorProperties: string;
	/** Switch qualifying notes into Live Preview when they're opened. */
	novelEditorLivePreview: boolean;
	/** Hide Obsidian's inline properties block in qualifying notes. */
	novelEditorHideProperties: boolean;
	/** Show the word count in the toolbar. */
	novelEditorWordCount: boolean;
}

export const NOVEL_EDITOR_DEFAULTS: NovelEditorSettings = {
	novelEditor: true,
	novelEditorProperties: "novelr-type, novelr-status",
	novelEditorLivePreview: true,
	novelEditorHideProperties: true,
	novelEditorWordCount: true,
};

/** Stored values checked and filled in, for loadSettings(). */
export function normalizeNovelEditorSettings(data: Partial<Record<keyof NovelEditorSettings, unknown>> | null | undefined): NovelEditorSettings {
	const bool = (v: unknown, d: boolean) => (typeof v === "boolean" ? v : d);
	const props = typeof data?.novelEditorProperties === "string" && parseProperties(data.novelEditorProperties).length
		? data.novelEditorProperties
		: NOVEL_EDITOR_DEFAULTS.novelEditorProperties;
	return {
		novelEditor: bool(data?.novelEditor, NOVEL_EDITOR_DEFAULTS.novelEditor),
		novelEditorProperties: props,
		novelEditorLivePreview: bool(data?.novelEditorLivePreview, NOVEL_EDITOR_DEFAULTS.novelEditorLivePreview),
		novelEditorHideProperties: bool(data?.novelEditorHideProperties, NOVEL_EDITOR_DEFAULTS.novelEditorHideProperties),
		novelEditorWordCount: bool(data?.novelEditorWordCount, NOVEL_EDITOR_DEFAULTS.novelEditorWordCount),
	};
}

export function parseProperties(value: string): string[] {
	return value.split(",").map((s) => s.trim()).filter(Boolean);
}

/** Settings as the toolbar and Properties panel use them. */
interface ResolvedSettings {
	requiredProperties: string[];
	forceLivePreview: boolean;
	hideInlineProperties: boolean;
	showWordCount: boolean;
}

type HostPlugin = Plugin & { settings: NovelEditorSettings };

export class NovelEditor extends Component {
	private readonly toolbars = new Map<MarkdownView, NovelToolbar>();
	private syncQueued = false;

	/** Editor commands: id, name key, action on the note's CodeMirror view. */
	private readonly commands: [string, TranslationKey, (cm: EditorView) => void][] = [
		["novel-toggle-underline", "command.novelUnderline", (cm) => toggleFormat(cm, "underline")],
		["novel-toggle-strikethrough", "command.novelStrikethrough", (cm) => toggleFormat(cm, "strikethrough")],
		...(["left", "center", "right"] as Alignment[]).map(
			(a): [string, TranslationKey, (cm: EditorView) => void] => [
				`novel-align-${a}`,
				a === "left" ? "novel.alignLeft" : a === "center" ? "novel.alignCenter" : "novel.alignRight",
				(cm) => setAlignment(cm, a),
			],
		),
	];

	constructor(private readonly host: HostPlugin) {
		super();
	}

	get app(): App {
		return this.host.app;
	}

	get settings(): ResolvedSettings {
		const s = this.host.settings;
		const props = parseProperties(s.novelEditorProperties);
		return {
			requiredProperties: props.length ? props : parseProperties(NOVEL_EDITOR_DEFAULTS.novelEditorProperties),
			forceLivePreview: s.novelEditorLivePreview,
			hideInlineProperties: s.novelEditorHideProperties,
			showWordCount: s.novelEditorWordCount,
		};
	}

	onload(): void {
		// Editor extensions can't be removed again, so they check `toolbars` / markers themselves.
		this.host.registerEditorExtension([alignmentExtension, alignmentKeeper]);
		this.host.registerMarkdownPostProcessor(alignmentPostProcessor);
		this.host.registerEditorExtension(
			EditorView.updateListener.of((update) => {
				if (!update.selectionSet && !update.docChanged) return;
				for (const tb of this.toolbars.values()) {
					if (cmOf(tb.view) === update.view) {
						tb.onEditorUpdate(update.docChanged);
						break;
					}
				}
			}),
		);

		const queue = () => this.queueSync();
		this.registerEvent(this.app.workspace.on("layout-change", queue));
		this.registerEvent(this.app.workspace.on("file-open", queue));
		this.registerEvent(this.app.workspace.on("active-leaf-change", queue));
		this.registerEvent(this.app.vault.on("rename", queue));
		this.registerEvent(
			this.app.metadataCache.on("changed", (file) => {
				this.queueSync();
				for (const tb of this.toolbars.values()) {
					if (tb.view.file === file) tb.onMetadataChanged();
				}
			}),
		);
		this.app.workspace.onLayoutReady(() => this.syncAll());
	}

	onunload(): void {
		this.detachAll();
	}

	/** Adds the novel editor's commands, named in the current language. */
	registerCommands(): void {
		for (const [id, key, run] of this.commands) {
			this.host.addCommand({
				id,
				name: t(key),
				editorCallback: (_editor, ctx) => {
					if (!(ctx instanceof MarkdownView)) return;
					const cm = cmOf(ctx);
					if (cm) run(cm);
				},
			});
		}
		this.host.addCommand({
			id: "novel-open-properties",
			name: t("command.novelProperties"),
			checkCallback: (checking) => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				const tb = view ? this.toolbars.get(view) : undefined;
				if (!tb) return false;
				if (!checking) tb.toggleProperties();
				return true;
			},
		});
	}

	commandIds(): string[] {
		return [...this.commands.map(([id]) => id), "novel-open-properties"];
	}

	/** Rebuild every toolbar (after a language or settings change). */
	refresh(): void {
		this.detachAll();
		this.syncAll();
	}

	private detachAll(): void {
		for (const tb of this.toolbars.values()) tb.unmount();
		this.toolbars.clear();
	}

	/** Does this file carry every required property? */
	qualifies(file: TFile | null): boolean {
		if (!this.host.settings.novelEditor || !file || file.extension !== "md") return false;
		const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
		if (!fm) return false;
		return this.settings.requiredProperties.every((k) => Object.prototype.hasOwnProperty.call(fm, k));
	}

	/** Only editors in the main (center) area, never the left or right sidebars. */
	private isCenterLeaf(leaf: WorkspaceLeaf): boolean {
		const root = leaf.getRoot();
		const ws = this.app.workspace;
		return root !== ws.leftSplit && root !== ws.rightSplit;
	}

	private queueSync(): void {
		if (this.syncQueued) return;
		this.syncQueued = true;
		window.requestAnimationFrame(() => {
			this.syncQueued = false;
			this.syncAll();
		});
	}

	/** Attach, update or detach toolbars so they match the notes currently open. */
	syncAll(): void {
		const live = new Set<MarkdownView>();
		this.app.workspace.iterateAllLeaves((leaf) => {
			const view = leaf.view;
			if (!(view instanceof MarkdownView)) return;
			if (!this.isCenterLeaf(leaf) || !this.qualifies(view.file)) return;
			live.add(view);
			let tb = this.toolbars.get(view);
			if (!tb) {
				tb = new NovelToolbar(this, view);
				this.toolbars.set(view, tb);
			}
			tb.mount(); // (re)attaches if Obsidian rebuilt the container; also refreshes the file
			this.ensureLivePreview(leaf, tb);
		});
		for (const [view, tb] of this.toolbars) {
			if (!live.has(view)) {
				tb.unmount();
				this.toolbars.delete(view);
			}
		}
	}

	/** Switch to Live Preview once per note open; the user can still change modes after. */
	private ensureLivePreview(leaf: WorkspaceLeaf, tb: NovelToolbar): void {
		const path = tb.view.file?.path ?? null;
		if (!this.settings.forceLivePreview || !path || tb.forcedFor === path) return;
		tb.forcedFor = path;
		const vs = leaf.getViewState();
		const st = (vs.state ?? {}) as Record<string, unknown>;
		if (st.mode === "source" && st.source === false) return;
		void leaf.setViewState({ ...vs, state: { ...st, mode: "source", source: false } });
	}
}
