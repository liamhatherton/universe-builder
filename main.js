var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => UniverseBuilderPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

// src/i18n.ts
var import_obsidian = require("obsidian");

// src/locales/en.ts
var en = {
  // ── Sidebar ─────────────────────────────────────────────────────────────────
  "tab.characters": "Characters",
  "tab.locations": "Locations",
  "tab.groups": "Groups",
  "tab.lore": "Lore",
  "tab.timeline": "Timeline",
  "bookmarks": "Bookmarks",
  "bookmarks.close": "Close bookmarks",
  "bookmarks.add": "Add bookmark",
  "bookmarks.remove": "Remove bookmark",
  "bookmarks.button": "Bookmark",
  "bookmarks.empty": "No bookmarks yet. Expand an entry and click its bookmark icon to add it here.",
  "search.clear": "Clear search",
  "search.characters": "Search characters",
  "search.locations": "Search locations",
  "search.groups": "Search groups",
  "search.lore": "Search lore",
  "search.timeline": "Search timeline",
  "search.bookmarks": "Search bookmarks",
  "search.tip.characters": "Matches name, group, ship and home",
  "search.tip.locations": "Matches the name and the text of the note",
  "search.tip.groups": "Matches the name and the text of the note",
  "search.tip.lore": "Matches the title and the text of the note",
  "search.tip.timeline": "Matches the title and the text of the note",
  "search.tip.bookmarks": "Matches each bookmark the same way its own tab does",
  "noResults.characters": "No characters match \u201C{query}\u201D.",
  "noResults.locations": "No locations match \u201C{query}\u201D.",
  "noResults.groups": "No groups match \u201C{query}\u201D.",
  "noResults.lore": "No lore entries match \u201C{query}\u201D.",
  "noResults.timeline": "No timeline events match \u201C{query}\u201D.",
  "noResults.bookmarks": "No bookmarks match \u201C{query}\u201D.",
  "empty.characters": "No characters yet.",
  "empty.locations": "No locations yet.",
  "empty.groups": "No groups yet.",
  "empty.lore": "No lore entries yet.",
  "empty.timeline": "No timeline events yet.",
  "nav.back": "Back",
  "nav.forward": "Forward",
  "reload": "Reload",
  "reload.done": "Universe Builder reloaded.",
  "new": "+ New",
  "metadata.edit": "Edit Metadata",
  "metadata.title": "Edit Metadata: {section}",
  "metadata.nothing": "This section has no editable fields yet.",
  "metadata.builtIn": "Built-in (can't be removed)",
  "metadata.custom": "Custom",
  "metadata.addPlaceholder": "New value",
  "metadata.add": "Add",
  "metadata.none": "No custom values yet.",
  "metadata.uses.one": "{count} entry",
  "metadata.uses.other": "{count} entries",
  "metadata.remove": 'Remove "{value}"',
  "metadata.exists": '"{value}" is already an option.',
  "metadata.removeTitle": "Remove custom value?",
  "metadata.removeInUse": `Entries using "{value}": {count}. They keep this value, but it won't be offered for new entries any more.`,
  "metadata.removeAction": "Remove",
  "metadata.removeGroupType": "On the {tab} tab they'll be listed under {unassigned}.",
  "metadata.groupCharactersBy": "Group Characters By",
  "metadata.groupCharactersByDesc": "How the Characters tab is split up. Each choice keeps its own drag-and-drop order and collapsed sections.",
  "grouping.ageAsc": "Age (ascending)",
  "grouping.ageDesc": "Age (descending)",
  "character.noShip": "No Ship",
  "character.noHome": "No Home",
  "metadata.modifyOptions": "Modify {field} Options",
  "card.unnamed": "Unnamed",
  "card.untitled": "Untitled",
  "card.age": "Age",
  "card.home": "Home",
  "card.group": "Group",
  "card.ship": "Ship",
  "card.pov": "POV",
  "card.povAdd": "Mark as POV character",
  "card.povRemove": "Unmark as POV character",
  "group.none": "No Group",
  "group.unassigned": "Unassigned",
  "group.subsidiaries": "Subsidiaries",
  "locations.ships": "Ships",
  "card.copy": "Copy",
  "card.copyFailed": "Couldn't copy the selection.",
  "card.modifyMd": "Modify MD",
  "card.edit": "Edit",
  "card.cancel": "Cancel",
  "card.save": "Save",
  "card.delete": "DELETE",
  "card.deleteLabel": "Delete entry",
  "card.image": "Image",
  "card.editLabel": "Edit {name}",
  "card.properties": "Properties",
  "card.propertiesOf": "Properties of {name}",
  "card.thisEntry": "this entry",
  // ── Messages ────────────────────────────────────────────────────────────────
  "confirm.cancel": "Cancel",
  "discard.title": "Discard changes?",
  "discard.message": `Your edits to "{name}" haven't been saved.`,
  "discard.action": "Discard",
  "overwrite.title": "Note changed elsewhere",
  "overwrite.message": '"{name}" was modified outside the sidebar after you started editing. Overwrite it with your version?',
  "overwrite.action": "Overwrite",
  "delete.title": "Delete entry?",
  "delete.message": "Are you sure you want to delete this {category} entry, {name}?",
  "delete.messagePlain": "Are you sure you want to delete this entry, {name}?",
  "delete.action": "Delete",
  "category.characters": "Character",
  "category.locations": "Location",
  "category.groups": "Group",
  "category.lore": "Lore",
  "category.timeline": "Timeline",
  "notice.readFailed": `Couldn't read "{name}".`,
  "notice.saved": 'Saved "{name}".',
  "notice.saveFailed": `Couldn't save "{name}".`,
  "notice.savedNoPortrait": `Saved "{name}", but its portrait couldn't be imported.`,
  "notice.deleted": 'Deleted "{name}".',
  "notice.deleteFailed": `Couldn't delete "{name}".`,
  "notice.linkNotFound": `Couldn't find "{name}".`,
  "notice.finishEditing": "Finish editing the open entry before dropping an image.",
  "notice.notAnImage": `"{name}" isn't an image.`,
  "notice.noImages": "None of those files is an image.",
  "portrait.alreadySet": '"{image}" is already the portrait for "{name}".',
  "portrait.replaceTitle": "Replace portrait?",
  "portrait.replaceMessage": '"{name}" already has a portrait ({old}). Replace it with {image}?',
  "portrait.replaceAction": "Replace",
  "portrait.replaced": 'Portrait replaced for "{name}".',
  "portrait.added": 'Portrait added for "{name}".',
  "portrait.failed": `Couldn't set the portrait for "{name}".`,
  "portrait.dropLabel": "Portrait: drop an image here, or press Enter to choose one",
  "portrait.dropTitle": "Drag and drop an image here to import it into the vault",
  "portrait.dropHint": "Or click to choose a file. It becomes the entry's portrait and is saved to {folder}/.",
  "portrait.remove": "Remove image",
  "portrait.inVault": "{name} (already in the vault)",
  // ── New entry forms ─────────────────────────────────────────────────────────
  "form.create": "Create",
  "form.addNew": "Add new {field}\u2026",
  "form.addNewTitle": "New {field}",
  "form.noneOption": "None",
  "form.yes": "Yes",
  "form.no": "No",
  "form.nameRequired": "Name is required.",
  "form.titleRequired": "Title is required.",
  "form.createdNoPortrait": `"{name}" was created, but its portrait couldn't be imported.`,
  "form.name": "Name",
  "form.title": "Title",
  "form.type": "Type",
  "form.description": "Description",
  "form.goals": "Goals",
  "form.commaSeparated": "Comma-separated",
  "form.commaSeparatedNames": "Comma-separated names",
  "character.new": "New Character",
  "character.namePlaceholder": "Character name",
  "character.role": "Role",
  "character.pov": "POV character",
  "character.age": "Age",
  "character.agePlaceholder": "e.g. 34",
  "character.group": "Group",
  "character.groupPlaceholder": "Group name",
  "character.ship": "Ship",
  "character.shipPlaceholder": "Ship name",
  "character.home": "Home",
  "character.homePlaceholder": "Home name",
  "character.physicalDesc": "Physical Description",
  "character.personality": "Personality",
  "character.created": 'Character "{name}" created.',
  "location.new": "New Location",
  "location.namePlaceholder": "Location name",
  "location.parent": "Parent Location",
  "location.parentPlaceholder": "e.g. The Northern Kingdom",
  "location.inhabitants": "Who Lives Here",
  "location.secrets": "Secrets",
  "location.created": 'Location "{name}" created.',
  "group.new": "New Group",
  "group.namePlaceholder": "Group name",
  "group.subsidiaryOf": "Subsidiary of",
  "group.subsidiaryOfDesc": "Nests this group under its parent's Subsidiaries label instead of its Type section.",
  "group.subsidiaryNone": "None",
  "group.alignment": "Alignment",
  "group.enemies": "Enemies",
  "group.allies": "Allies",
  "group.created": 'Group "{name}" created.',
  "lore.new": "New Lore Entry",
  "lore.titlePlaceholder": "Entry title",
  "lore.category": "Category",
  "lore.content": "Content",
  "lore.created": 'Lore entry "{name}" created.',
  "timeline.new": "New Timeline Event",
  "timeline.date": "Date / Era",
  "timeline.datePlaceholder": "e.g. Year 342 AE",
  "timeline.titlePlaceholder": "Event title",
  "timeline.characters": "Linked Characters",
  "timeline.locations": "Linked Locations",
  "timeline.created": 'Timeline event "{name}" created.',
  // ── Stored values (frontmatter keeps the English key; this is only what's shown) ──
  "role.protagonist": "Protagonist",
  "role.antagonist": "Antagonist",
  "role.supporting": "Supporting",
  "role.minor": "Minor",
  "locationType.planet": "Planet",
  "locationType.dwarf planet": "Dwarf planet",
  "locationType.moon": "Moon",
  "locationType.station": "Station",
  "locationType.asteroid": "Asteroid",
  "locationType.belt": "Belt",
  "locationType.ship": "Ship",
  "locationType.city": "City",
  "locationType.region": "Region",
  "locationType.building": "Building",
  "locationType.landmark": "Landmark",
  "locationType.other": "Other",
  "groupType.corporation": "Corporation",
  "groupType.government": "Government",
  "groupType.military": "Military",
  "groupType.criminal": "Criminal",
  "alignment.lawful": "Lawful",
  "alignment.neutral": "Neutral",
  "alignment.chaotic": "Chaotic",
  "loreCategory.history": "History",
  "loreCategory.tech": "Tech",
  "loreCategory.religion": "Religion",
  "loreCategory.culture": "Culture",
  "loreCategory.other": "Other",
  // ── Text written into new notes ─────────────────────────────────────────────
  "note.origin": "Origin",
  "note.physicalDesc": "Physical Description",
  "note.occupation": "Occupation",
  "note.resume": "Resume",
  "note.roleInStory": "Role In Story",
  "note.goals": "Goals",
  "note.personality": "Personality",
  "note.habits": "Habits/Mannerisms",
  "note.earlierLife": "Earlier Life",
  "note.internalConflicts": "Internal Conflicts",
  "note.externalConflicts": "External Conflicts",
  "note.partOf": "Part of",
  "note.description": "Description",
  "note.inhabitants": "Who Lives Here",
  "note.secrets": "Secrets",
  "note.noneProvided": "_None provided._",
  "note.type": "Type",
  "note.subsidiaryOf": "Subsidiary of",
  "note.alignment": "Alignment",
  "note.enemies": "Enemies",
  "note.allies": "Allies",
  "note.category": "Category",
  "note.noContent": "_No content yet._",
  "note.dateEra": "Date/Era",
  "note.unknown": "_Unknown_",
  "note.characters": "Characters",
  "note.locations": "Locations",
  // ── Folder migration ────────────────────────────────────────────────────────
  "migrate.title": "Universe Builder now has its own folder",
  "migrate.intro": 'Your Universe Builder notes are in "{source}/", a folder other plugins may also use. Universe Builder now keeps its notes in "{target}/" instead.',
  "migrate.scope.one": 'Moving only covers the Characters, Groups, Locations, Lore, Timeline and {images} folders in "{source}/". Found: {found}, {total} file in all. Anything else in "{source}/" stays where it is. Links between notes keep working.',
  "migrate.scope.other": 'Moving only covers the Characters, Groups, Locations, Lore, Timeline and {images} folders in "{source}/". Found: {found}, {total} files in all. Anything else in "{source}/" stays where it is. Links between notes keep working.',
  "migrate.worldBuilder.enabled": "The World Builder plugin is installed in this vault (enabled). After moving, it will no longer see these notes.",
  "migrate.worldBuilder.disabled": "The World Builder plugin is installed in this vault (disabled). After moving, it will no longer see these notes.",
  "migrate.note": `Folder paths typed into other plugins or notes (for example a Dataview query on "{source}") aren't updated.`,
  "migrate.move": "Move to {target}/ (recommended)",
  "migrate.askLater": "Keep {source}/, ask again next update",
  "migrate.decline": "Keep {source}/, don't ask again",
  "migrate.customFolder": `Universe Builder uses the custom folder "{folder}", so there's nothing to move.`,
  "migrate.nothingToMove": 'There are no Universe Builder notes in "{folder}/" to move.',
  "migrate.createFailed": `Couldn't create the "{folder}" folder, so nothing was moved.`,
  "migrate.moved.one": 'Moved {count} file to "{folder}/".',
  "migrate.moved.other": 'Moved {count} files to "{folder}/".',
  "migrate.skipped": "{count} skipped because a file with the same name was already there: {files}.",
  "migrate.failed": "{count} couldn't be moved (see the developer console); you'll be asked again next launch: {files}.",
  "migrate.leftovers": 'Left in "{folder}/": {items}.',
  "cleanup.title": 'Delete the empty "{folder}" folder?',
  "cleanup.message": 'Your notes are now in "{target}/", and "{folder}/" has no files left in it. Nothing uses it any more, so it can be deleted.',
  "cleanup.messageEmptyFolders": 'Your notes are now in "{target}/", and "{folder}/" has no files left in it (only empty folders: {folders}). Nothing uses it any more, so it can be deleted.',
  "cleanup.note": `Deleted folders go to the trash, following Obsidian's "Deleted files" setting.`,
  "cleanup.delete": "Delete {folder}/",
  "cleanup.keep": "Keep {folder}/",
  "cleanup.hasFiles": `"{folder}/" has files in it again, so it wasn't deleted.`,
  "cleanup.deleted": 'Deleted the empty "{folder}/" folder.',
  "cleanup.failed": `Couldn't delete "{folder}/" (see the developer console).`,
  // ── Commands ────────────────────────────────────────────────────────────────
  "command.openSidebar": "Open sidebar",
  "command.newCharacter": "New Character",
  "command.newLocation": "New Location",
  "command.newGroup": "New Group",
  "command.newLore": "New Lore Entry",
  "command.newTimelineEvent": "New Timeline Event",
  "command.moveWorldFolder": "Move notes out of the World folder",
  // ── Settings ────────────────────────────────────────────────────────────────
  "settings.language": "Language",
  "settings.languageDesc": "Language of the plugin's sidebar, forms, messages and new note templates. Automatic follows Obsidian's own language (Settings \u203A General \u203A Language), falling back to English if Universe Builder hasn't been translated into it.",
  "settings.languageAuto": "Automatic ({language})",
  "settings.folder": "Universe folder",
  "settings.folderDesc": `Root folder for all Universe Builder notes. Changing it doesn't move existing notes; to move notes out of an old "World" folder, run the "Move notes out of the World folder" command.`,
  "settings.editor": "Sidebar editor",
  "settings.editorDesc": "What the Edit button on an expanded entry opens. Live Preview uses Obsidian's own editor (formatting shown as you type, [[link]] suggestions); Raw markdown is a plain text box. If Live Preview ever stops working after an Obsidian update, the plugin falls back to Raw markdown on its own.",
  "settings.editorLive": "Live Preview",
  "settings.editorRaw": "Raw markdown",
  // ── Novel scene editor ──────────────────────────────────────────────────────────
  "novel.bold": "Bold",
  "novel.italic": "Italic",
  "novel.underline": "Underline",
  "novel.strikethrough": "Strikethrough",
  "novel.alignLeft": "Align left",
  "novel.alignCenter": "Align center",
  "novel.alignRight": "Align right",
  "novel.properties": "Properties",
  "novel.propertiesTooltip": "Edit note properties",
  "novel.words.one": "{count} word",
  "novel.words.other": "{count} words",
  "novel.selected": "{count} selected",
  "novel.close": "Close",
  "novel.noProperties": "No properties.",
  "novel.newProperty": "New property",
  "novel.value": "Value",
  "novel.add": "Add",
  "novel.removeProperty": "Remove property",
  "novel.requiredProperty": "Required property",
  "novel.listPlaceholder": "item, item, \u2026",
  "novel.propertyExists": 'Property "{name}" already exists.',
  "novel.updateFailed": "Couldn't update properties. Check the note's frontmatter for YAML errors.",
  "novel.charactersTooltip": "Characters in this scene",
  "novel.locationsTooltip": "Locations in this scene",
  "novel.groupsTooltip": "Groups in this scene",
  "novel.loreTooltip": "Lore in this scene",
  "novel.timelineTooltip": "Timeline events in this scene",
  "novel.noCharacters": "No characters in the sidebar yet.",
  "novel.noLocations": "No locations in the sidebar yet.",
  "novel.noGroups": "No groups in the sidebar yet.",
  "novel.noLore": "No lore in the sidebar yet.",
  "novel.noTimeline": "No timeline events in the sidebar yet.",
  "novel.filter": "Filter\u2026",
  "novel.noMatches": "No matches.",
  "novel.openInSidebar": "Open {name} in the sidebar",
  "novel.entryNotFound": `"{name}" isn't in the Universe Builder sidebar.`,
  "novel.removeFromScene": "Remove from scene",
  "command.novelUnderline": "Toggle underline",
  "command.novelStrikethrough": "Toggle strikethrough",
  "command.novelProperties": "Open properties panel",
  "settings.novelHeading": "Novel scene editor",
  "settings.novel": "Use the novel scene editor",
  "settings.novelDesc": "For notes in the main editor that have every required property: adds a toolbar above the text (the scene's characters / locations / groups / lore / timeline, bold / italic / underline / strikethrough, alignment, word count) and hides the properties block at the top of the note.",
  "settings.novelProps": "Required properties",
  "settings.novelPropsDesc": "Comma-separated property names. A note needs all of them to open in the novel scene editor.",
  "settings.novelLivePreview": "Open in Live Preview",
  "settings.novelLivePreviewDesc": "Switch these notes to Live Preview when they're opened.",
  "settings.novelHideProps": "Hide inline properties",
  "settings.novelHidePropsDesc": 'Hide the properties block at the top of the note; edit them with the Properties button or the "Open properties panel" command instead.',
  "settings.novelWordCount": "Show word count",
  "settings.novelWordCountDesc": "Show the note's word count, and the selection's, on the right of the toolbar.",
  "settings.novelPropsButton": "Show Properties button",
  "settings.novelPropsButtonDesc": `Add a Properties button to the toolbar for editing the note's properties. The "Open properties panel" command works either way.`
};

// src/locales/es.ts
var es = {
  // ── Barra lateral ───────────────────────────────────────────────────────────
  "tab.characters": "Personajes",
  "tab.locations": "Lugares",
  "tab.groups": "Grupos",
  "tab.lore": "Trasfondo",
  "tab.timeline": "Cronolog\xEDa",
  "bookmarks": "Marcadores",
  "bookmarks.close": "Cerrar marcadores",
  "bookmarks.add": "A\xF1adir marcador",
  "bookmarks.remove": "Quitar marcador",
  "bookmarks.button": "Marcador",
  "bookmarks.empty": "A\xFAn no hay marcadores. Expande una entrada y haz clic en su icono de marcador para a\xF1adirla aqu\xED.",
  "search.clear": "Borrar b\xFAsqueda",
  "search.characters": "Buscar personajes",
  "search.locations": "Buscar lugares",
  "search.groups": "Buscar grupos",
  "search.lore": "Buscar trasfondo",
  "search.timeline": "Buscar en la cronolog\xEDa",
  "search.bookmarks": "Buscar marcadores",
  "search.tip.characters": "Busca en el nombre, el grupo, la nave y el hogar",
  "search.tip.locations": "Busca en el nombre y el texto de la nota",
  "search.tip.groups": "Busca en el nombre y el texto de la nota",
  "search.tip.lore": "Busca en el t\xEDtulo y el texto de la nota",
  "search.tip.timeline": "Busca en el t\xEDtulo y el texto de la nota",
  "search.tip.bookmarks": "Busca en cada marcador igual que en su propia pesta\xF1a",
  "noResults.characters": "Ning\xFAn personaje coincide con \xAB{query}\xBB.",
  "noResults.locations": "Ning\xFAn lugar coincide con \xAB{query}\xBB.",
  "noResults.groups": "Ning\xFAn grupo coincide con \xAB{query}\xBB.",
  "noResults.lore": "Ninguna entrada de trasfondo coincide con \xAB{query}\xBB.",
  "noResults.timeline": "Ning\xFAn evento de la cronolog\xEDa coincide con \xAB{query}\xBB.",
  "noResults.bookmarks": "Ning\xFAn marcador coincide con \xAB{query}\xBB.",
  "empty.characters": "A\xFAn no hay personajes.",
  "empty.locations": "A\xFAn no hay lugares.",
  "empty.groups": "A\xFAn no hay grupos.",
  "empty.lore": "A\xFAn no hay entradas de trasfondo.",
  "empty.timeline": "A\xFAn no hay eventos en la cronolog\xEDa.",
  "nav.back": "Atr\xE1s",
  "nav.forward": "Adelante",
  "reload": "Recargar",
  "reload.done": "Universe Builder recargado.",
  "new": "+ Nuevo",
  "metadata.edit": "Editar metadatos",
  "metadata.title": "Editar metadatos: {section}",
  "metadata.nothing": "Esta secci\xF3n a\xFAn no tiene campos editables.",
  "metadata.builtIn": "Predefinidos (no se pueden quitar)",
  "metadata.custom": "Personalizados",
  "metadata.addPlaceholder": "Nuevo valor",
  "metadata.add": "A\xF1adir",
  "metadata.none": "A\xFAn no hay valores personalizados.",
  "metadata.uses.one": "{count} entrada",
  "metadata.uses.other": "{count} entradas",
  "metadata.remove": "Quitar \xAB{value}\xBB",
  "metadata.exists": "\xAB{value}\xBB ya es una opci\xF3n.",
  "metadata.removeTitle": "\xBFQuitar el valor personalizado?",
  "metadata.removeInUse": "Entradas que usan \xAB{value}\xBB: {count}. Conservan este valor, pero ya no se ofrecer\xE1 para entradas nuevas.",
  "metadata.removeAction": "Quitar",
  "metadata.removeGroupType": "En la pesta\xF1a {tab} aparecer\xE1n en {unassigned}.",
  "metadata.groupCharactersBy": "Agrupar personajes por",
  "metadata.groupCharactersByDesc": "C\xF3mo se divide la pesta\xF1a Personajes. Cada opci\xF3n conserva su propio orden de arrastrar y soltar y sus secciones contra\xEDdas.",
  "grouping.ageAsc": "Edad (ascendente)",
  "grouping.ageDesc": "Edad (descendente)",
  "character.noShip": "Sin nave",
  "character.noHome": "Sin hogar",
  "metadata.modifyOptions": "Modificar opciones de {field}",
  "card.unnamed": "Sin nombre",
  "card.untitled": "Sin t\xEDtulo",
  "card.age": "Edad",
  "card.home": "Hogar",
  "card.group": "Grupo",
  "card.ship": "Nave",
  "card.pov": "PDV",
  "card.povAdd": "Marcar como personaje PDV",
  "card.povRemove": "Desmarcar como personaje PDV",
  "group.none": "Sin grupo",
  "group.unassigned": "Sin asignar",
  "group.subsidiaries": "Filiales",
  "locations.ships": "Naves",
  "card.copy": "Copiar",
  "card.copyFailed": "No se pudo copiar la selecci\xF3n.",
  "card.modifyMd": "Modificar MD",
  "card.edit": "Editar",
  "card.cancel": "Cancelar",
  "card.save": "Guardar",
  "card.delete": "ELIMINAR",
  "card.deleteLabel": "Eliminar entrada",
  "card.image": "Imagen",
  "card.editLabel": "Editar {name}",
  "card.properties": "Propiedades",
  "card.propertiesOf": "Propiedades de {name}",
  "card.thisEntry": "esta entrada",
  // ── Mensajes ────────────────────────────────────────────────────────────────
  "confirm.cancel": "Cancelar",
  "discard.title": "\xBFDescartar los cambios?",
  "discard.message": "Tus cambios en \xAB{name}\xBB no se han guardado.",
  "discard.action": "Descartar",
  "overwrite.title": "La nota cambi\xF3 en otro lugar",
  "overwrite.message": "\xAB{name}\xBB se modific\xF3 fuera de la barra lateral despu\xE9s de que empezaras a editarla. \xBFSobrescribirla con tu versi\xF3n?",
  "overwrite.action": "Sobrescribir",
  "delete.title": "\xBFEliminar la entrada?",
  "delete.message": "\xBFSeguro que quieres eliminar esta entrada de {category}, {name}?",
  "delete.messagePlain": "\xBFSeguro que quieres eliminar esta entrada, {name}?",
  "delete.action": "Eliminar",
  "category.characters": "Personaje",
  "category.locations": "Lugar",
  "category.groups": "Grupo",
  "category.lore": "Trasfondo",
  "category.timeline": "Cronolog\xEDa",
  "notice.readFailed": "No se pudo leer \xAB{name}\xBB.",
  "notice.saved": "\xAB{name}\xBB guardado.",
  "notice.saveFailed": "No se pudo guardar \xAB{name}\xBB.",
  "notice.savedNoPortrait": "\xAB{name}\xBB guardado, pero no se pudo importar su retrato.",
  "notice.deleted": "\xAB{name}\xBB eliminado.",
  "notice.deleteFailed": "No se pudo eliminar \xAB{name}\xBB.",
  "notice.linkNotFound": "No se encontr\xF3 \xAB{name}\xBB.",
  "notice.finishEditing": "Termina de editar la entrada abierta antes de soltar una imagen.",
  "notice.notAnImage": "\xAB{name}\xBB no es una imagen.",
  "notice.noImages": "Ninguno de esos archivos es una imagen.",
  "portrait.alreadySet": "\xAB{image}\xBB ya es el retrato de \xAB{name}\xBB.",
  "portrait.replaceTitle": "\xBFReemplazar el retrato?",
  "portrait.replaceMessage": "\xAB{name}\xBB ya tiene un retrato ({old}). \xBFReemplazarlo por {image}?",
  "portrait.replaceAction": "Reemplazar",
  "portrait.replaced": "Retrato de \xAB{name}\xBB reemplazado.",
  "portrait.added": "Retrato de \xAB{name}\xBB a\xF1adido.",
  "portrait.failed": "No se pudo establecer el retrato de \xAB{name}\xBB.",
  "portrait.dropLabel": "Retrato: suelta una imagen aqu\xED o pulsa Intro para elegir una",
  "portrait.dropTitle": "Arrastra y suelta una imagen aqu\xED para importarla a la b\xF3veda",
  "portrait.dropHint": "O haz clic para elegir un archivo. Se convierte en el retrato de la entrada y se guarda en {folder}/.",
  "portrait.remove": "Quitar imagen",
  "portrait.inVault": "{name} (ya est\xE1 en la b\xF3veda)",
  // ── Formularios de nueva entrada ────────────────────────────────────────────
  "form.create": "Crear",
  "form.addNew": "A\xF1adir nuevo: {field}\u2026",
  "form.addNewTitle": "Nuevo: {field}",
  "form.noneOption": "Ninguno",
  "form.yes": "S\xED",
  "form.no": "No",
  "form.nameRequired": "El nombre es obligatorio.",
  "form.titleRequired": "El t\xEDtulo es obligatorio.",
  "form.createdNoPortrait": "Se cre\xF3 \xAB{name}\xBB, pero no se pudo importar su retrato.",
  "form.name": "Nombre",
  "form.title": "T\xEDtulo",
  "form.type": "Tipo",
  "form.description": "Descripci\xF3n",
  "form.goals": "Objetivos",
  "form.commaSeparated": "Separados por comas",
  "form.commaSeparatedNames": "Nombres separados por comas",
  "character.new": "Nuevo personaje",
  "character.namePlaceholder": "Nombre del personaje",
  "character.role": "Rol",
  "character.pov": "Personaje PDV",
  "character.age": "Edad",
  "character.agePlaceholder": "p. ej., 34",
  "character.group": "Grupo",
  "character.groupPlaceholder": "Nombre del grupo",
  "character.ship": "Nave",
  "character.shipPlaceholder": "Nombre de la nave",
  "character.home": "Hogar",
  "character.homePlaceholder": "Nombre del hogar",
  "character.physicalDesc": "Descripci\xF3n f\xEDsica",
  "character.personality": "Personalidad",
  "character.created": "Personaje \xAB{name}\xBB creado.",
  "location.new": "Nuevo lugar",
  "location.namePlaceholder": "Nombre del lugar",
  "location.parent": "Lugar superior",
  "location.parentPlaceholder": "p. ej., El Reino del Norte",
  "location.inhabitants": "Qui\xE9n vive aqu\xED",
  "location.secrets": "Secretos",
  "location.created": "Lugar \xAB{name}\xBB creado.",
  "group.new": "Nuevo grupo",
  "group.namePlaceholder": "Nombre del grupo",
  "group.subsidiaryOf": "Filial de",
  "group.subsidiaryOfDesc": "Coloca este grupo bajo la etiqueta Filiales de su matriz en lugar de en la secci\xF3n de su tipo.",
  "group.subsidiaryNone": "Ninguno",
  "group.alignment": "Alineamiento",
  "group.enemies": "Enemigos",
  "group.allies": "Aliados",
  "group.created": "Grupo \xAB{name}\xBB creado.",
  "lore.new": "Nueva entrada de trasfondo",
  "lore.titlePlaceholder": "T\xEDtulo de la entrada",
  "lore.category": "Categor\xEDa",
  "lore.content": "Contenido",
  "lore.created": "Entrada de trasfondo \xAB{name}\xBB creada.",
  "timeline.new": "Nuevo evento de la cronolog\xEDa",
  "timeline.date": "Fecha / Era",
  "timeline.datePlaceholder": "p. ej., A\xF1o 342 DE",
  "timeline.titlePlaceholder": "T\xEDtulo del evento",
  "timeline.characters": "Personajes vinculados",
  "timeline.locations": "Lugares vinculados",
  "timeline.created": "Evento \xAB{name}\xBB creado.",
  // ── Valores guardados (el frontmatter conserva la clave en inglés) ─────────
  "role.protagonist": "Protagonista",
  "role.antagonist": "Antagonista",
  "role.supporting": "Secundario",
  "role.minor": "Menor",
  "locationType.planet": "Planeta",
  "locationType.dwarf planet": "Planeta enano",
  "locationType.moon": "Luna",
  "locationType.station": "Estaci\xF3n",
  "locationType.asteroid": "Asteroide",
  "locationType.belt": "Cintur\xF3n",
  "locationType.ship": "Nave",
  "locationType.city": "Ciudad",
  "locationType.region": "Regi\xF3n",
  "locationType.building": "Edificio",
  "locationType.landmark": "Lugar emblem\xE1tico",
  "locationType.other": "Otro",
  "groupType.corporation": "Corporaci\xF3n",
  "groupType.government": "Gobierno",
  "groupType.military": "Militar",
  "groupType.criminal": "Criminal",
  "alignment.lawful": "Legal",
  "alignment.neutral": "Neutral",
  "alignment.chaotic": "Ca\xF3tico",
  "loreCategory.history": "Historia",
  "loreCategory.tech": "Tecnolog\xEDa",
  "loreCategory.religion": "Religi\xF3n",
  "loreCategory.culture": "Cultura",
  "loreCategory.other": "Otro",
  // ── Texto que se escribe en las notas nuevas ────────────────────────────────
  "note.origin": "Origen",
  "note.physicalDesc": "Descripci\xF3n f\xEDsica",
  "note.occupation": "Ocupaci\xF3n",
  "note.resume": "Curr\xEDculum",
  "note.roleInStory": "Papel en la historia",
  "note.goals": "Objetivos",
  "note.personality": "Personalidad",
  "note.habits": "H\xE1bitos/Gestos",
  "note.earlierLife": "Vida anterior",
  "note.internalConflicts": "Conflictos internos",
  "note.externalConflicts": "Conflictos externos",
  "note.partOf": "Parte de",
  "note.description": "Descripci\xF3n",
  "note.inhabitants": "Qui\xE9n vive aqu\xED",
  "note.secrets": "Secretos",
  "note.noneProvided": "_Sin informaci\xF3n._",
  "note.type": "Tipo",
  "note.subsidiaryOf": "Filial de",
  "note.alignment": "Alineamiento",
  "note.enemies": "Enemigos",
  "note.allies": "Aliados",
  "note.category": "Categor\xEDa",
  "note.noContent": "_A\xFAn sin contenido._",
  "note.dateEra": "Fecha/Era",
  "note.unknown": "_Desconocida_",
  "note.characters": "Personajes",
  "note.locations": "Lugares",
  // ── Traslado de carpeta ─────────────────────────────────────────────────────
  "migrate.title": "Universe Builder ahora tiene su propia carpeta",
  "migrate.intro": "Tus notas de Universe Builder est\xE1n en \xAB{source}/\xBB, una carpeta que otros complementos tambi\xE9n pueden usar. Ahora Universe Builder guarda sus notas en \xAB{target}/\xBB.",
  "migrate.scope.one": "El traslado solo incluye las carpetas Characters, Groups, Locations, Lore, Timeline y {images} de \xAB{source}/\xBB. Encontrado: {found}; {total} archivo en total. Todo lo dem\xE1s en \xAB{source}/\xBB se queda donde est\xE1. Los enlaces entre notas siguen funcionando.",
  "migrate.scope.other": "El traslado solo incluye las carpetas Characters, Groups, Locations, Lore, Timeline y {images} de \xAB{source}/\xBB. Encontrado: {found}; {total} archivos en total. Todo lo dem\xE1s en \xAB{source}/\xBB se queda donde est\xE1. Los enlaces entre notas siguen funcionando.",
  "migrate.worldBuilder.enabled": "El complemento World Builder est\xE1 instalado en esta b\xF3veda (activado). Despu\xE9s del traslado, dejar\xE1 de ver estas notas.",
  "migrate.worldBuilder.disabled": "El complemento World Builder est\xE1 instalado en esta b\xF3veda (desactivado). Despu\xE9s del traslado, dejar\xE1 de ver estas notas.",
  "migrate.note": "Las rutas de carpeta escritas en otros complementos o notas (por ejemplo, una consulta de Dataview sobre \xAB{source}\xBB) no se actualizan.",
  "migrate.move": "Trasladar a {target}/ (recomendado)",
  "migrate.askLater": "Mantener {source}/, preguntar en la pr\xF3xima actualizaci\xF3n",
  "migrate.decline": "Mantener {source}/, no volver a preguntar",
  "migrate.customFolder": "Universe Builder usa la carpeta personalizada \xAB{folder}\xBB, as\xED que no hay nada que trasladar.",
  "migrate.nothingToMove": "No hay notas de Universe Builder en \xAB{folder}/\xBB que trasladar.",
  "migrate.createFailed": "No se pudo crear la carpeta \xAB{folder}\xBB, as\xED que no se traslad\xF3 nada.",
  "migrate.moved.one": "Se traslad\xF3 {count} archivo a \xAB{folder}/\xBB.",
  "migrate.moved.other": "Se trasladaron {count} archivos a \xAB{folder}/\xBB.",
  "migrate.skipped": "{count} omitidos porque ya hab\xEDa un archivo con el mismo nombre: {files}.",
  "migrate.failed": "{count} no se pudieron trasladar (consulta la consola de desarrollador); se te volver\xE1 a preguntar en el pr\xF3ximo inicio: {files}.",
  "migrate.leftovers": "Queda en \xAB{folder}/\xBB: {items}.",
  "cleanup.title": "\xBFEliminar la carpeta vac\xEDa \xAB{folder}\xBB?",
  "cleanup.message": "Tus notas ahora est\xE1n en \xAB{target}/\xBB y \xAB{folder}/\xBB ya no contiene archivos. Nada la usa, as\xED que se puede eliminar.",
  "cleanup.messageEmptyFolders": "Tus notas ahora est\xE1n en \xAB{target}/\xBB y \xAB{folder}/\xBB ya no contiene archivos (solo carpetas vac\xEDas: {folders}). Nada la usa, as\xED que se puede eliminar.",
  "cleanup.note": "Las carpetas eliminadas van a la papelera, seg\xFAn el ajuste \xABArchivos eliminados\xBB de Obsidian.",
  "cleanup.delete": "Eliminar {folder}/",
  "cleanup.keep": "Mantener {folder}/",
  "cleanup.hasFiles": "\xAB{folder}/\xBB vuelve a tener archivos, as\xED que no se elimin\xF3.",
  "cleanup.deleted": "Se elimin\xF3 la carpeta vac\xEDa \xAB{folder}/\xBB.",
  "cleanup.failed": "No se pudo eliminar \xAB{folder}/\xBB (consulta la consola de desarrollador).",
  // ── Comandos ────────────────────────────────────────────────────────────────
  "command.openSidebar": "Abrir barra lateral",
  "command.newCharacter": "Nuevo personaje",
  "command.newLocation": "Nuevo lugar",
  "command.newGroup": "Nuevo grupo",
  "command.newLore": "Nueva entrada de trasfondo",
  "command.newTimelineEvent": "Nuevo evento de la cronolog\xEDa",
  "command.moveWorldFolder": "Trasladar las notas fuera de la carpeta World",
  // ── Ajustes ─────────────────────────────────────────────────────────────────
  "settings.language": "Idioma",
  "settings.languageDesc": "Idioma de la barra lateral, los formularios, los mensajes y las plantillas de notas nuevas del complemento. Autom\xE1tico sigue el idioma de Obsidian (Ajustes \u203A General \u203A Idioma) y usa el ingl\xE9s si Universe Builder no est\xE1 traducido a ese idioma.",
  "settings.languageAuto": "Autom\xE1tico ({language})",
  "settings.folder": "Carpeta del universo",
  "settings.folderDesc": "Carpeta ra\xEDz de todas las notas de Universe Builder. Cambiarla no traslada las notas existentes; para sacar las notas de una antigua carpeta \xABWorld\xBB, ejecuta el comando \xABTrasladar las notas fuera de la carpeta World\xBB.",
  "settings.editor": "Editor de la barra lateral",
  "settings.editorDesc": "Lo que abre el bot\xF3n Editar de una entrada expandida. Vista previa en vivo usa el editor de Obsidian (el formato se ve mientras escribes, sugerencias de [[enlaces]]); Markdown sin formato es un cuadro de texto simple. Si la vista previa en vivo deja de funcionar tras una actualizaci\xF3n de Obsidian, el complemento pasa a Markdown sin formato por s\xED solo.",
  "settings.editorLive": "Vista previa en vivo",
  "settings.editorRaw": "Markdown sin formato",
  // ── Editor de escenas ──────────────────────────────────────────────────────────
  "novel.bold": "Negrita",
  "novel.italic": "Cursiva",
  "novel.underline": "Subrayado",
  "novel.strikethrough": "Tachado",
  "novel.alignLeft": "Alinear a la izquierda",
  "novel.alignCenter": "Centrar",
  "novel.alignRight": "Alinear a la derecha",
  "novel.properties": "Propiedades",
  "novel.propertiesTooltip": "Editar las propiedades de la nota",
  "novel.words.one": "{count} palabra",
  "novel.words.other": "{count} palabras",
  "novel.selected": "{count} seleccionadas",
  "novel.close": "Cerrar",
  "novel.noProperties": "Sin propiedades.",
  "novel.newProperty": "Nueva propiedad",
  "novel.value": "Valor",
  "novel.add": "A\xF1adir",
  "novel.removeProperty": "Quitar propiedad",
  "novel.requiredProperty": "Propiedad obligatoria",
  "novel.listPlaceholder": "elemento, elemento, \u2026",
  "novel.propertyExists": 'La propiedad "{name}" ya existe.',
  "novel.updateFailed": "No se pudieron actualizar las propiedades. Revisa si hay errores de YAML en el frontmatter de la nota.",
  "novel.charactersTooltip": "Personajes de esta escena",
  "novel.locationsTooltip": "Lugares de esta escena",
  "novel.groupsTooltip": "Grupos de esta escena",
  "novel.loreTooltip": "Trasfondo de esta escena",
  "novel.timelineTooltip": "Eventos de la cronolog\xEDa en esta escena",
  "novel.noCharacters": "A\xFAn no hay personajes en la barra lateral.",
  "novel.noLocations": "A\xFAn no hay lugares en la barra lateral.",
  "novel.noGroups": "A\xFAn no hay grupos en la barra lateral.",
  "novel.noLore": "A\xFAn no hay trasfondo en la barra lateral.",
  "novel.noTimeline": "A\xFAn no hay eventos de la cronolog\xEDa en la barra lateral.",
  "novel.filter": "Filtrar\u2026",
  "novel.noMatches": "Sin resultados.",
  "novel.openInSidebar": "Abrir {name} en la barra lateral",
  "novel.entryNotFound": "\xAB{name}\xBB no est\xE1 en la barra lateral de Universe Builder.",
  "novel.removeFromScene": "Quitar de la escena",
  "command.novelUnderline": "Alternar subrayado",
  "command.novelStrikethrough": "Alternar tachado",
  "command.novelProperties": "Abrir el panel de propiedades",
  "settings.novelHeading": "Editor de escenas de novela",
  "settings.novel": "Usar el editor de escenas de novela",
  "settings.novelDesc": "En las notas del editor principal que tienen todas las propiedades obligatorias: a\xF1ade una barra de herramientas sobre el texto (personajes / lugares / grupos / trasfondo / cronolog\xEDa de la escena, negrita / cursiva / subrayado / tachado, alineaci\xF3n, recuento de palabras) y oculta el bloque de propiedades al principio de la nota.",
  "settings.novelProps": "Propiedades obligatorias",
  "settings.novelPropsDesc": "Nombres de propiedades separados por comas. Una nota necesita todas para abrirse en el editor de escenas de novela.",
  "settings.novelLivePreview": "Abrir en vista previa en vivo",
  "settings.novelLivePreviewDesc": "Cambia estas notas a vista previa en vivo al abrirlas.",
  "settings.novelHideProps": "Ocultar las propiedades en la nota",
  "settings.novelHidePropsDesc": "Oculta el bloque de propiedades al principio de la nota; se editan con el bot\xF3n Propiedades o con el comando \xABAbrir el panel de propiedades\xBB.",
  "settings.novelWordCount": "Mostrar el recuento de palabras",
  "settings.novelWordCountDesc": "Muestra el n\xFAmero de palabras de la nota, y de la selecci\xF3n, a la derecha de la barra de herramientas.",
  "settings.novelPropsButton": "Mostrar el bot\xF3n Propiedades",
  "settings.novelPropsButtonDesc": "A\xF1ade a la barra de herramientas un bot\xF3n Propiedades para editar las propiedades de la nota. El comando \xABAbrir el panel de propiedades\xBB funciona en cualquier caso."
};

// src/locales/pt.ts
var pt = {
  // ── Barra lateral ───────────────────────────────────────────────────────────
  "tab.characters": "Personagens",
  "tab.locations": "Locais",
  "tab.groups": "Grupos",
  "tab.lore": "Lore",
  "tab.timeline": "Cronologia",
  "bookmarks": "Marcadores",
  "bookmarks.close": "Fechar marcadores",
  "bookmarks.add": "Adicionar marcador",
  "bookmarks.remove": "Remover marcador",
  "bookmarks.button": "Marcador",
  "bookmarks.empty": "Ainda n\xE3o h\xE1 marcadores. Expanda uma entrada e clique no \xEDcone de marcador para a adicionar aqui.",
  "search.clear": "Limpar pesquisa",
  "search.characters": "Pesquisar personagens",
  "search.locations": "Pesquisar locais",
  "search.groups": "Pesquisar grupos",
  "search.lore": "Pesquisar lore",
  "search.timeline": "Pesquisar na cronologia",
  "search.bookmarks": "Pesquisar marcadores",
  "search.tip.characters": "Procura no nome, grupo, nave e lar",
  "search.tip.locations": "Procura no nome e no texto da nota",
  "search.tip.groups": "Procura no nome e no texto da nota",
  "search.tip.lore": "Procura no t\xEDtulo e no texto da nota",
  "search.tip.timeline": "Procura no t\xEDtulo e no texto da nota",
  "search.tip.bookmarks": "Procura em cada marcador da mesma forma que o respetivo separador",
  "noResults.characters": "Nenhuma personagem corresponde a \xAB{query}\xBB.",
  "noResults.locations": "Nenhum local corresponde a \xAB{query}\xBB.",
  "noResults.groups": "Nenhum grupo corresponde a \xAB{query}\xBB.",
  "noResults.lore": "Nenhuma entrada de lore corresponde a \xAB{query}\xBB.",
  "noResults.timeline": "Nenhum evento da cronologia corresponde a \xAB{query}\xBB.",
  "noResults.bookmarks": "Nenhum marcador corresponde a \xAB{query}\xBB.",
  "empty.characters": "Ainda n\xE3o h\xE1 personagens.",
  "empty.locations": "Ainda n\xE3o h\xE1 locais.",
  "empty.groups": "Ainda n\xE3o h\xE1 grupos.",
  "empty.lore": "Ainda n\xE3o h\xE1 entradas de lore.",
  "empty.timeline": "Ainda n\xE3o h\xE1 eventos na cronologia.",
  "nav.back": "Anterior",
  "nav.forward": "Seguinte",
  "reload": "Recarregar",
  "reload.done": "Universe Builder recarregado.",
  "new": "+ Novo",
  "metadata.edit": "Editar metadados",
  "metadata.title": "Editar metadados: {section}",
  "metadata.nothing": "Esta sec\xE7\xE3o ainda n\xE3o tem campos edit\xE1veis.",
  "metadata.builtIn": "Predefinidos (n\xE3o podem ser removidos)",
  "metadata.custom": "Personalizados",
  "metadata.addPlaceholder": "Novo valor",
  "metadata.add": "Adicionar",
  "metadata.none": "Ainda n\xE3o h\xE1 valores personalizados.",
  "metadata.uses.one": "{count} entrada",
  "metadata.uses.other": "{count} entradas",
  "metadata.remove": "Remover \xAB{value}\xBB",
  "metadata.exists": "\xAB{value}\xBB j\xE1 \xE9 uma op\xE7\xE3o.",
  "metadata.removeTitle": "Remover valor personalizado?",
  "metadata.removeInUse": "Entradas que usam \xAB{value}\xBB: {count}. Mant\xEAm este valor, mas deixa de ser proposto para novas entradas.",
  "metadata.removeAction": "Remover",
  "metadata.removeGroupType": "No separador {tab} passam a aparecer em {unassigned}.",
  "metadata.groupCharactersBy": "Agrupar personagens por",
  "metadata.groupCharactersByDesc": "Como o separador Personagens \xE9 dividido. Cada op\xE7\xE3o mant\xE9m a sua pr\xF3pria ordem de arrastar e largar e as suas sec\xE7\xF5es recolhidas.",
  "grouping.ageAsc": "Idade (crescente)",
  "grouping.ageDesc": "Idade (decrescente)",
  "character.noShip": "Sem nave",
  "character.noHome": "Sem lar",
  "metadata.modifyOptions": "Modificar op\xE7\xF5es de {field}",
  "card.unnamed": "Sem nome",
  "card.untitled": "Sem t\xEDtulo",
  "card.age": "Idade",
  "card.home": "Lar",
  "card.group": "Grupo",
  "card.ship": "Nave",
  "card.pov": "POV",
  "card.povAdd": "Marcar como personagem POV",
  "card.povRemove": "Desmarcar como personagem POV",
  "group.none": "Sem grupo",
  "group.unassigned": "N\xE3o atribu\xEDdo",
  "group.subsidiaries": "Subsidi\xE1rias",
  "locations.ships": "Naves",
  "card.copy": "Copiar",
  "card.copyFailed": "N\xE3o foi poss\xEDvel copiar a sele\xE7\xE3o.",
  "card.modifyMd": "Modificar MD",
  "card.edit": "Editar",
  "card.cancel": "Cancelar",
  "card.save": "Guardar",
  "card.delete": "ELIMINAR",
  "card.deleteLabel": "Eliminar entrada",
  "card.image": "Imagem",
  "card.editLabel": "Editar {name}",
  "card.properties": "Propriedades",
  "card.propertiesOf": "Propriedades de {name}",
  "card.thisEntry": "esta entrada",
  // ── Mensagens ───────────────────────────────────────────────────────────────
  "confirm.cancel": "Cancelar",
  "discard.title": "Descartar altera\xE7\xF5es?",
  "discard.message": "As suas altera\xE7\xF5es a \xAB{name}\xBB n\xE3o foram guardadas.",
  "discard.action": "Descartar",
  "overwrite.title": "A nota foi alterada noutro s\xEDtio",
  "overwrite.message": "\xAB{name}\xBB foi modificada fora da barra lateral depois de come\xE7ar a editar. Substitu\xED-la pela sua vers\xE3o?",
  "overwrite.action": "Substituir",
  "delete.title": "Eliminar entrada?",
  "delete.message": "Tem a certeza de que pretende eliminar esta entrada de {category}, {name}?",
  "delete.messagePlain": "Tem a certeza de que pretende eliminar esta entrada, {name}?",
  "delete.action": "Eliminar",
  "category.characters": "Personagem",
  "category.locations": "Local",
  "category.groups": "Grupo",
  "category.lore": "Lore",
  "category.timeline": "Cronologia",
  "notice.readFailed": "N\xE3o foi poss\xEDvel ler \xAB{name}\xBB.",
  "notice.saved": "\xAB{name}\xBB guardado.",
  "notice.saveFailed": "N\xE3o foi poss\xEDvel guardar \xAB{name}\xBB.",
  "notice.savedNoPortrait": "\xAB{name}\xBB guardado, mas n\xE3o foi poss\xEDvel importar o retrato.",
  "notice.deleted": "\xAB{name}\xBB eliminado.",
  "notice.deleteFailed": "N\xE3o foi poss\xEDvel eliminar \xAB{name}\xBB.",
  "notice.linkNotFound": "N\xE3o foi poss\xEDvel encontrar \xAB{name}\xBB.",
  "notice.finishEditing": "Termine a edi\xE7\xE3o da entrada aberta antes de largar uma imagem.",
  "notice.notAnImage": "\xAB{name}\xBB n\xE3o \xE9 uma imagem.",
  "notice.noImages": "Nenhum desses ficheiros \xE9 uma imagem.",
  "portrait.alreadySet": "\xAB{image}\xBB j\xE1 \xE9 o retrato de \xAB{name}\xBB.",
  "portrait.replaceTitle": "Substituir retrato?",
  "portrait.replaceMessage": "\xAB{name}\xBB j\xE1 tem um retrato ({old}). Substitu\xED-lo por {image}?",
  "portrait.replaceAction": "Substituir",
  "portrait.replaced": "Retrato de \xAB{name}\xBB substitu\xEDdo.",
  "portrait.added": "Retrato de \xAB{name}\xBB adicionado.",
  "portrait.failed": "N\xE3o foi poss\xEDvel definir o retrato de \xAB{name}\xBB.",
  "portrait.dropLabel": "Retrato: largue uma imagem aqui ou prima Enter para escolher uma",
  "portrait.dropTitle": "Arraste e largue uma imagem aqui para a importar para o cofre",
  "portrait.dropHint": "Ou clique para escolher um ficheiro. Passa a ser o retrato da entrada e \xE9 guardado em {folder}/.",
  "portrait.remove": "Remover imagem",
  "portrait.inVault": "{name} (j\xE1 est\xE1 no cofre)",
  // ── Formulários de nova entrada ─────────────────────────────────────────────
  "form.create": "Criar",
  "form.addNew": "Adicionar novo: {field}\u2026",
  "form.addNewTitle": "Novo: {field}",
  "form.noneOption": "Nenhum",
  "form.yes": "Sim",
  "form.no": "N\xE3o",
  "form.nameRequired": "O nome \xE9 obrigat\xF3rio.",
  "form.titleRequired": "O t\xEDtulo \xE9 obrigat\xF3rio.",
  "form.createdNoPortrait": "\xAB{name}\xBB foi criado, mas n\xE3o foi poss\xEDvel importar o retrato.",
  "form.name": "Nome",
  "form.title": "T\xEDtulo",
  "form.type": "Tipo",
  "form.description": "Descri\xE7\xE3o",
  "form.goals": "Objetivos",
  "form.commaSeparated": "Separados por v\xEDrgulas",
  "form.commaSeparatedNames": "Nomes separados por v\xEDrgulas",
  "character.new": "Nova personagem",
  "character.namePlaceholder": "Nome da personagem",
  "character.role": "Papel",
  "character.pov": "Personagem POV",
  "character.age": "Idade",
  "character.agePlaceholder": "p. ex., 34",
  "character.group": "Grupo",
  "character.groupPlaceholder": "Nome do grupo",
  "character.ship": "Nave",
  "character.shipPlaceholder": "Nome da nave",
  "character.home": "Lar",
  "character.homePlaceholder": "Nome do lar",
  "character.physicalDesc": "Descri\xE7\xE3o f\xEDsica",
  "character.personality": "Personalidade",
  "character.created": "Personagem \xAB{name}\xBB criada.",
  "location.new": "Novo local",
  "location.namePlaceholder": "Nome do local",
  "location.parent": "Local superior",
  "location.parentPlaceholder": "p. ex., O Reino do Norte",
  "location.inhabitants": "Quem vive aqui",
  "location.secrets": "Segredos",
  "location.created": "Local \xAB{name}\xBB criado.",
  "group.new": "Novo grupo",
  "group.namePlaceholder": "Nome do grupo",
  "group.subsidiaryOf": "Subsidi\xE1ria de",
  "group.subsidiaryOfDesc": "Coloca este grupo sob a etiqueta Subsidi\xE1rias do grupo principal, em vez da sec\xE7\xE3o do seu tipo.",
  "group.subsidiaryNone": "Nenhum",
  "group.alignment": "Alinhamento",
  "group.enemies": "Inimigos",
  "group.allies": "Aliados",
  "group.created": "Grupo \xAB{name}\xBB criado.",
  "lore.new": "Nova entrada de lore",
  "lore.titlePlaceholder": "T\xEDtulo da entrada",
  "lore.category": "Categoria",
  "lore.content": "Conte\xFAdo",
  "lore.created": "Entrada de lore \xAB{name}\xBB criada.",
  "timeline.new": "Novo evento da cronologia",
  "timeline.date": "Data / Era",
  "timeline.datePlaceholder": "p. ex., Ano 342 DE",
  "timeline.titlePlaceholder": "T\xEDtulo do evento",
  "timeline.characters": "Personagens associadas",
  "timeline.locations": "Locais associados",
  "timeline.created": "Evento \xAB{name}\xBB criado.",
  // ── Valores guardados (o frontmatter mantém a chave em inglês) ─────────────
  "role.protagonist": "Protagonista",
  "role.antagonist": "Antagonista",
  "role.supporting": "Secund\xE1ria",
  "role.minor": "Menor",
  "locationType.planet": "Planeta",
  "locationType.dwarf planet": "Planeta an\xE3o",
  "locationType.moon": "Lua",
  "locationType.station": "Esta\xE7\xE3o",
  "locationType.asteroid": "Asteroide",
  "locationType.belt": "Cintura",
  "locationType.ship": "Nave",
  "locationType.city": "Cidade",
  "locationType.region": "Regi\xE3o",
  "locationType.building": "Edif\xEDcio",
  "locationType.landmark": "Marco",
  "locationType.other": "Outro",
  "groupType.corporation": "Corpora\xE7\xE3o",
  "groupType.government": "Governo",
  "groupType.military": "Militar",
  "groupType.criminal": "Criminoso",
  "alignment.lawful": "Leal",
  "alignment.neutral": "Neutro",
  "alignment.chaotic": "Ca\xF3tico",
  "loreCategory.history": "Hist\xF3ria",
  "loreCategory.tech": "Tecnologia",
  "loreCategory.religion": "Religi\xE3o",
  "loreCategory.culture": "Cultura",
  "loreCategory.other": "Outro",
  // ── Texto escrito nas notas novas ───────────────────────────────────────────
  "note.origin": "Origem",
  "note.physicalDesc": "Descri\xE7\xE3o f\xEDsica",
  "note.occupation": "Ocupa\xE7\xE3o",
  "note.resume": "Curr\xEDculo",
  "note.roleInStory": "Papel na hist\xF3ria",
  "note.goals": "Objetivos",
  "note.personality": "Personalidade",
  "note.habits": "H\xE1bitos/Maneirismos",
  "note.earlierLife": "Vida anterior",
  "note.internalConflicts": "Conflitos internos",
  "note.externalConflicts": "Conflitos externos",
  "note.partOf": "Parte de",
  "note.description": "Descri\xE7\xE3o",
  "note.inhabitants": "Quem vive aqui",
  "note.secrets": "Segredos",
  "note.noneProvided": "_Nada indicado._",
  "note.type": "Tipo",
  "note.subsidiaryOf": "Subsidi\xE1ria de",
  "note.alignment": "Alinhamento",
  "note.enemies": "Inimigos",
  "note.allies": "Aliados",
  "note.category": "Categoria",
  "note.noContent": "_Ainda sem conte\xFAdo._",
  "note.dateEra": "Data/Era",
  "note.unknown": "_Desconhecida_",
  "note.characters": "Personagens",
  "note.locations": "Locais",
  // ── Mudança de pasta ────────────────────────────────────────────────────────
  "migrate.title": "O Universe Builder tem agora a sua pr\xF3pria pasta",
  "migrate.intro": "As suas notas do Universe Builder est\xE3o em \xAB{source}/\xBB, uma pasta que outros plugins tamb\xE9m podem usar. O Universe Builder passa a guardar as notas em \xAB{target}/\xBB.",
  "migrate.scope.one": "A mudan\xE7a abrange apenas as pastas Characters, Groups, Locations, Lore, Timeline e {images} em \xAB{source}/\xBB. Encontrado: {found}; {total} ficheiro no total. Tudo o resto em \xAB{source}/\xBB fica onde est\xE1. As liga\xE7\xF5es entre notas continuam a funcionar.",
  "migrate.scope.other": "A mudan\xE7a abrange apenas as pastas Characters, Groups, Locations, Lore, Timeline e {images} em \xAB{source}/\xBB. Encontrado: {found}; {total} ficheiros no total. Tudo o resto em \xAB{source}/\xBB fica onde est\xE1. As liga\xE7\xF5es entre notas continuam a funcionar.",
  "migrate.worldBuilder.enabled": "O plugin World Builder est\xE1 instalado neste cofre (ativado). Depois da mudan\xE7a, deixar\xE1 de ver estas notas.",
  "migrate.worldBuilder.disabled": "O plugin World Builder est\xE1 instalado neste cofre (desativado). Depois da mudan\xE7a, deixar\xE1 de ver estas notas.",
  "migrate.note": "Os caminhos de pastas escritos noutros plugins ou notas (por exemplo, uma consulta do Dataview sobre \xAB{source}\xBB) n\xE3o s\xE3o atualizados.",
  "migrate.move": "Mover para {target}/ (recomendado)",
  "migrate.askLater": "Manter {source}/, perguntar na pr\xF3xima atualiza\xE7\xE3o",
  "migrate.decline": "Manter {source}/, n\xE3o voltar a perguntar",
  "migrate.customFolder": "O Universe Builder usa a pasta personalizada \xAB{folder}\xBB, por isso n\xE3o h\xE1 nada para mover.",
  "migrate.nothingToMove": "N\xE3o h\xE1 notas do Universe Builder em \xAB{folder}/\xBB para mover.",
  "migrate.createFailed": "N\xE3o foi poss\xEDvel criar a pasta \xAB{folder}\xBB, por isso nada foi movido.",
  "migrate.moved.one": "{count} ficheiro movido para \xAB{folder}/\xBB.",
  "migrate.moved.other": "{count} ficheiros movidos para \xAB{folder}/\xBB.",
  "migrate.skipped": "{count} ignorado(s) porque j\xE1 existia um ficheiro com o mesmo nome: {files}.",
  "migrate.failed": "{count} n\xE3o puderam ser movidos (consulte a consola de programador); ser\xE1 perguntado novamente no pr\xF3ximo arranque: {files}.",
  "migrate.leftovers": "Ficou em \xAB{folder}/\xBB: {items}.",
  "cleanup.title": "Eliminar a pasta vazia \xAB{folder}\xBB?",
  "cleanup.message": "As suas notas est\xE3o agora em \xAB{target}/\xBB e \xAB{folder}/\xBB j\xE1 n\xE3o tem ficheiros. Nada a usa, por isso pode ser eliminada.",
  "cleanup.messageEmptyFolders": "As suas notas est\xE3o agora em \xAB{target}/\xBB e \xAB{folder}/\xBB j\xE1 n\xE3o tem ficheiros (apenas pastas vazias: {folders}). Nada a usa, por isso pode ser eliminada.",
  "cleanup.note": "As pastas eliminadas v\xE3o para o lixo, de acordo com a defini\xE7\xE3o \xABFicheiros eliminados\xBB do Obsidian.",
  "cleanup.delete": "Eliminar {folder}/",
  "cleanup.keep": "Manter {folder}/",
  "cleanup.hasFiles": "\xAB{folder}/\xBB voltou a ter ficheiros, por isso n\xE3o foi eliminada.",
  "cleanup.deleted": "A pasta vazia \xAB{folder}/\xBB foi eliminada.",
  "cleanup.failed": "N\xE3o foi poss\xEDvel eliminar \xAB{folder}/\xBB (consulte a consola de programador).",
  // ── Comandos ────────────────────────────────────────────────────────────────
  "command.openSidebar": "Abrir barra lateral",
  "command.newCharacter": "Nova personagem",
  "command.newLocation": "Novo local",
  "command.newGroup": "Novo grupo",
  "command.newLore": "Nova entrada de lore",
  "command.newTimelineEvent": "Novo evento da cronologia",
  "command.moveWorldFolder": "Mover as notas para fora da pasta World",
  // ── Definições ──────────────────────────────────────────────────────────────
  "settings.language": "Idioma",
  "settings.languageDesc": "Idioma da barra lateral, dos formul\xE1rios, das mensagens e dos modelos de notas novas do plugin. Autom\xE1tico segue o idioma do Obsidian (Defini\xE7\xF5es \u203A Geral \u203A Idioma) e usa o ingl\xEAs se o Universe Builder n\xE3o estiver traduzido para esse idioma.",
  "settings.languageAuto": "Autom\xE1tico ({language})",
  "settings.folder": "Pasta do universo",
  "settings.folderDesc": "Pasta raiz de todas as notas do Universe Builder. Alter\xE1-la n\xE3o move as notas existentes; para tirar as notas de uma antiga pasta \xABWorld\xBB, execute o comando \xABMover as notas para fora da pasta World\xBB.",
  "settings.editor": "Editor da barra lateral",
  "settings.editorDesc": "O que o bot\xE3o Editar de uma entrada expandida abre. Pr\xE9-visualiza\xE7\xE3o em direto usa o pr\xF3prio editor do Obsidian (formata\xE7\xE3o vis\xEDvel enquanto escreve, sugest\xF5es de [[liga\xE7\xF5es]]); Markdown simples \xE9 uma caixa de texto simples. Se a pr\xE9-visualiza\xE7\xE3o em direto deixar de funcionar ap\xF3s uma atualiza\xE7\xE3o do Obsidian, o plugin passa sozinho para Markdown simples.",
  "settings.editorLive": "Pr\xE9-visualiza\xE7\xE3o em direto",
  "settings.editorRaw": "Markdown simples",
  // ── Editor de cenas ──────────────────────────────────────────────────────────
  "novel.bold": "Negrito",
  "novel.italic": "It\xE1lico",
  "novel.underline": "Sublinhado",
  "novel.strikethrough": "Rasurado",
  "novel.alignLeft": "Alinhar \xE0 esquerda",
  "novel.alignCenter": "Centrar",
  "novel.alignRight": "Alinhar \xE0 direita",
  "novel.properties": "Propriedades",
  "novel.propertiesTooltip": "Editar as propriedades da nota",
  "novel.words.one": "{count} palavra",
  "novel.words.other": "{count} palavras",
  "novel.selected": "{count} selecionadas",
  "novel.close": "Fechar",
  "novel.noProperties": "Sem propriedades.",
  "novel.newProperty": "Nova propriedade",
  "novel.value": "Valor",
  "novel.add": "Adicionar",
  "novel.removeProperty": "Remover propriedade",
  "novel.requiredProperty": "Propriedade obrigat\xF3ria",
  "novel.listPlaceholder": "item, item, \u2026",
  "novel.propertyExists": 'A propriedade "{name}" j\xE1 existe.',
  "novel.updateFailed": "N\xE3o foi poss\xEDvel atualizar as propriedades. Verifique se h\xE1 erros de YAML no frontmatter da nota.",
  "novel.charactersTooltip": "Personagens desta cena",
  "novel.locationsTooltip": "Locais desta cena",
  "novel.groupsTooltip": "Grupos desta cena",
  "novel.loreTooltip": "Lore desta cena",
  "novel.timelineTooltip": "Eventos da cronologia desta cena",
  "novel.noCharacters": "Ainda n\xE3o h\xE1 personagens na barra lateral.",
  "novel.noLocations": "Ainda n\xE3o h\xE1 locais na barra lateral.",
  "novel.noGroups": "Ainda n\xE3o h\xE1 grupos na barra lateral.",
  "novel.noLore": "Ainda n\xE3o h\xE1 lore na barra lateral.",
  "novel.noTimeline": "Ainda n\xE3o h\xE1 eventos da cronologia na barra lateral.",
  "novel.filter": "Filtrar\u2026",
  "novel.noMatches": "Sem resultados.",
  "novel.openInSidebar": "Abrir {name} na barra lateral",
  "novel.entryNotFound": "\xAB{name}\xBB n\xE3o est\xE1 na barra lateral do Universe Builder.",
  "novel.removeFromScene": "Retirar da cena",
  "command.novelUnderline": "Alternar sublinhado",
  "command.novelStrikethrough": "Alternar rasurado",
  "command.novelProperties": "Abrir o painel de propriedades",
  "settings.novelHeading": "Editor de cenas de romance",
  "settings.novel": "Usar o editor de cenas de romance",
  "settings.novelDesc": "Nas notas do editor principal que t\xEAm todas as propriedades obrigat\xF3rias: adiciona uma barra de ferramentas acima do texto (personagens / locais / grupos / lore / cronologia da cena, negrito / it\xE1lico / sublinhado / rasurado, alinhamento, contagem de palavras) e oculta o bloco de propriedades no in\xEDcio da nota.",
  "settings.novelProps": "Propriedades obrigat\xF3rias",
  "settings.novelPropsDesc": "Nomes de propriedades separados por v\xEDrgulas. Uma nota precisa de todas para abrir no editor de cenas de romance.",
  "settings.novelLivePreview": "Abrir em pr\xE9-visualiza\xE7\xE3o em direto",
  "settings.novelLivePreviewDesc": "Muda estas notas para pr\xE9-visualiza\xE7\xE3o em direto quando s\xE3o abertas.",
  "settings.novelHideProps": "Ocultar as propriedades na nota",
  "settings.novelHidePropsDesc": "Oculta o bloco de propriedades no in\xEDcio da nota; s\xE3o editadas com o bot\xE3o Propriedades ou com o comando \xABAbrir o painel de propriedades\xBB.",
  "settings.novelWordCount": "Mostrar a contagem de palavras",
  "settings.novelWordCountDesc": "Mostra o n\xFAmero de palavras da nota, e da sele\xE7\xE3o, \xE0 direita da barra de ferramentas.",
  "settings.novelPropsButton": "Mostrar o bot\xE3o Propriedades",
  "settings.novelPropsButtonDesc": "Adiciona \xE0 barra de ferramentas um bot\xE3o Propriedades para editar as propriedades da nota. O comando \xABAbrir o painel de propriedades\xBB funciona de qualquer forma."
};

// src/locales/pt-BR.ts
var ptBR = {
  // ── Barra lateral ───────────────────────────────────────────────────────────
  "tab.characters": "Personagens",
  "tab.locations": "Locais",
  "tab.groups": "Grupos",
  "tab.lore": "Lore",
  "tab.timeline": "Linha do tempo",
  "bookmarks": "Favoritos",
  "bookmarks.close": "Fechar favoritos",
  "bookmarks.add": "Adicionar aos favoritos",
  "bookmarks.remove": "Remover dos favoritos",
  "bookmarks.button": "Favorito",
  "bookmarks.empty": "Nenhum favorito ainda. Expanda uma entrada e clique no \xEDcone de favorito para adicion\xE1-la aqui.",
  "search.clear": "Limpar pesquisa",
  "search.characters": "Pesquisar personagens",
  "search.locations": "Pesquisar locais",
  "search.groups": "Pesquisar grupos",
  "search.lore": "Pesquisar lore",
  "search.timeline": "Pesquisar na linha do tempo",
  "search.bookmarks": "Pesquisar favoritos",
  "search.tip.characters": "Procura no nome, grupo, nave e lar",
  "search.tip.locations": "Procura no nome e no texto da nota",
  "search.tip.groups": "Procura no nome e no texto da nota",
  "search.tip.lore": "Procura no t\xEDtulo e no texto da nota",
  "search.tip.timeline": "Procura no t\xEDtulo e no texto da nota",
  "search.tip.bookmarks": "Procura em cada favorito da mesma forma que a aba dele",
  "noResults.characters": "Nenhum personagem corresponde a \u201C{query}\u201D.",
  "noResults.locations": "Nenhum local corresponde a \u201C{query}\u201D.",
  "noResults.groups": "Nenhum grupo corresponde a \u201C{query}\u201D.",
  "noResults.lore": "Nenhuma entrada de lore corresponde a \u201C{query}\u201D.",
  "noResults.timeline": "Nenhum evento da linha do tempo corresponde a \u201C{query}\u201D.",
  "noResults.bookmarks": "Nenhum favorito corresponde a \u201C{query}\u201D.",
  "empty.characters": "Nenhum personagem ainda.",
  "empty.locations": "Nenhum local ainda.",
  "empty.groups": "Nenhum grupo ainda.",
  "empty.lore": "Nenhuma entrada de lore ainda.",
  "empty.timeline": "Nenhum evento na linha do tempo ainda.",
  "nav.back": "Voltar",
  "nav.forward": "Avan\xE7ar",
  "reload": "Recarregar",
  "reload.done": "Universe Builder recarregado.",
  "new": "+ Novo",
  "metadata.edit": "Editar metadados",
  "metadata.title": "Editar metadados: {section}",
  "metadata.nothing": "Esta se\xE7\xE3o ainda n\xE3o tem campos edit\xE1veis.",
  "metadata.builtIn": "Padr\xE3o (n\xE3o podem ser removidos)",
  "metadata.custom": "Personalizados",
  "metadata.addPlaceholder": "Novo valor",
  "metadata.add": "Adicionar",
  "metadata.none": "Ainda n\xE3o h\xE1 valores personalizados.",
  "metadata.uses.one": "{count} entrada",
  "metadata.uses.other": "{count} entradas",
  "metadata.remove": "Remover \u201C{value}\u201D",
  "metadata.exists": "\u201C{value}\u201D j\xE1 \xE9 uma op\xE7\xE3o.",
  "metadata.removeTitle": "Remover valor personalizado?",
  "metadata.removeInUse": "Entradas que usam \u201C{value}\u201D: {count}. Elas mant\xEAm esse valor, mas ele n\xE3o ser\xE1 mais oferecido para novas entradas.",
  "metadata.removeAction": "Remover",
  "metadata.removeGroupType": "Na aba {tab} elas passar\xE3o a aparecer em {unassigned}.",
  "metadata.groupCharactersBy": "Agrupar personagens por",
  "metadata.groupCharactersByDesc": "Como a aba Personagens \xE9 dividida. Cada op\xE7\xE3o mant\xE9m sua pr\xF3pria ordem de arrastar e soltar e suas se\xE7\xF5es recolhidas.",
  "grouping.ageAsc": "Idade (crescente)",
  "grouping.ageDesc": "Idade (decrescente)",
  "character.noShip": "Sem nave",
  "character.noHome": "Sem lar",
  "metadata.modifyOptions": "Modificar op\xE7\xF5es de {field}",
  "card.unnamed": "Sem nome",
  "card.untitled": "Sem t\xEDtulo",
  "card.age": "Idade",
  "card.home": "Lar",
  "card.group": "Grupo",
  "card.ship": "Nave",
  "card.pov": "POV",
  "card.povAdd": "Marcar como personagem POV",
  "card.povRemove": "Desmarcar como personagem POV",
  "group.none": "Sem grupo",
  "group.unassigned": "N\xE3o atribu\xEDdo",
  "group.subsidiaries": "Subsidi\xE1rias",
  "locations.ships": "Naves",
  "card.copy": "Copiar",
  "card.copyFailed": "N\xE3o foi poss\xEDvel copiar a sele\xE7\xE3o.",
  "card.modifyMd": "Modificar MD",
  "card.edit": "Editar",
  "card.cancel": "Cancelar",
  "card.save": "Salvar",
  "card.delete": "EXCLUIR",
  "card.deleteLabel": "Excluir entrada",
  "card.image": "Imagem",
  "card.editLabel": "Editar {name}",
  "card.properties": "Propriedades",
  "card.propertiesOf": "Propriedades de {name}",
  "card.thisEntry": "esta entrada",
  // ── Mensagens ───────────────────────────────────────────────────────────────
  "confirm.cancel": "Cancelar",
  "discard.title": "Descartar altera\xE7\xF5es?",
  "discard.message": "Suas altera\xE7\xF5es em \u201C{name}\u201D n\xE3o foram salvas.",
  "discard.action": "Descartar",
  "overwrite.title": "A nota foi alterada em outro lugar",
  "overwrite.message": "\u201C{name}\u201D foi modificada fora da barra lateral depois que voc\xEA come\xE7ou a editar. Substitu\xED-la pela sua vers\xE3o?",
  "overwrite.action": "Substituir",
  "delete.title": "Excluir entrada?",
  "delete.message": "Tem certeza de que deseja excluir esta entrada de {category}, {name}?",
  "delete.messagePlain": "Tem certeza de que deseja excluir esta entrada, {name}?",
  "delete.action": "Excluir",
  "category.characters": "Personagem",
  "category.locations": "Local",
  "category.groups": "Grupo",
  "category.lore": "Lore",
  "category.timeline": "Linha do tempo",
  "notice.readFailed": "N\xE3o foi poss\xEDvel ler \u201C{name}\u201D.",
  "notice.saved": "\u201C{name}\u201D salvo.",
  "notice.saveFailed": "N\xE3o foi poss\xEDvel salvar \u201C{name}\u201D.",
  "notice.savedNoPortrait": "\u201C{name}\u201D salvo, mas n\xE3o foi poss\xEDvel importar o retrato.",
  "notice.deleted": "\u201C{name}\u201D exclu\xEDdo.",
  "notice.deleteFailed": "N\xE3o foi poss\xEDvel excluir \u201C{name}\u201D.",
  "notice.linkNotFound": "N\xE3o foi poss\xEDvel encontrar \u201C{name}\u201D.",
  "notice.finishEditing": "Termine de editar a entrada aberta antes de soltar uma imagem.",
  "notice.notAnImage": "\u201C{name}\u201D n\xE3o \xE9 uma imagem.",
  "notice.noImages": "Nenhum desses arquivos \xE9 uma imagem.",
  "portrait.alreadySet": "\u201C{image}\u201D j\xE1 \xE9 o retrato de \u201C{name}\u201D.",
  "portrait.replaceTitle": "Substituir retrato?",
  "portrait.replaceMessage": "\u201C{name}\u201D j\xE1 tem um retrato ({old}). Substitu\xED-lo por {image}?",
  "portrait.replaceAction": "Substituir",
  "portrait.replaced": "Retrato de \u201C{name}\u201D substitu\xEDdo.",
  "portrait.added": "Retrato de \u201C{name}\u201D adicionado.",
  "portrait.failed": "N\xE3o foi poss\xEDvel definir o retrato de \u201C{name}\u201D.",
  "portrait.dropLabel": "Retrato: solte uma imagem aqui ou pressione Enter para escolher uma",
  "portrait.dropTitle": "Arraste e solte uma imagem aqui para import\xE1-la para o cofre",
  "portrait.dropHint": "Ou clique para escolher um arquivo. Ela vira o retrato da entrada e \xE9 salva em {folder}/.",
  "portrait.remove": "Remover imagem",
  "portrait.inVault": "{name} (j\xE1 est\xE1 no cofre)",
  // ── Formulários de nova entrada ─────────────────────────────────────────────
  "form.create": "Criar",
  "form.addNew": "Adicionar novo: {field}\u2026",
  "form.addNewTitle": "Novo: {field}",
  "form.noneOption": "Nenhum",
  "form.yes": "Sim",
  "form.no": "N\xE3o",
  "form.nameRequired": "O nome \xE9 obrigat\xF3rio.",
  "form.titleRequired": "O t\xEDtulo \xE9 obrigat\xF3rio.",
  "form.createdNoPortrait": "\u201C{name}\u201D foi criado, mas n\xE3o foi poss\xEDvel importar o retrato.",
  "form.name": "Nome",
  "form.title": "T\xEDtulo",
  "form.type": "Tipo",
  "form.description": "Descri\xE7\xE3o",
  "form.goals": "Objetivos",
  "form.commaSeparated": "Separados por v\xEDrgula",
  "form.commaSeparatedNames": "Nomes separados por v\xEDrgula",
  "character.new": "Novo personagem",
  "character.namePlaceholder": "Nome do personagem",
  "character.role": "Papel",
  "character.pov": "Personagem POV",
  "character.age": "Idade",
  "character.agePlaceholder": "ex.: 34",
  "character.group": "Grupo",
  "character.groupPlaceholder": "Nome do grupo",
  "character.ship": "Nave",
  "character.shipPlaceholder": "Nome da nave",
  "character.home": "Lar",
  "character.homePlaceholder": "Nome do lar",
  "character.physicalDesc": "Descri\xE7\xE3o f\xEDsica",
  "character.personality": "Personalidade",
  "character.created": "Personagem \u201C{name}\u201D criado.",
  "location.new": "Novo local",
  "location.namePlaceholder": "Nome do local",
  "location.parent": "Local superior",
  "location.parentPlaceholder": "ex.: O Reino do Norte",
  "location.inhabitants": "Quem vive aqui",
  "location.secrets": "Segredos",
  "location.created": "Local \u201C{name}\u201D criado.",
  "group.new": "Novo grupo",
  "group.namePlaceholder": "Nome do grupo",
  "group.subsidiaryOf": "Subsidi\xE1ria de",
  "group.subsidiaryOfDesc": "Coloca este grupo sob o r\xF3tulo Subsidi\xE1rias do grupo principal, em vez da se\xE7\xE3o do seu tipo.",
  "group.subsidiaryNone": "Nenhum",
  "group.alignment": "Alinhamento",
  "group.enemies": "Inimigos",
  "group.allies": "Aliados",
  "group.created": "Grupo \u201C{name}\u201D criado.",
  "lore.new": "Nova entrada de lore",
  "lore.titlePlaceholder": "T\xEDtulo da entrada",
  "lore.category": "Categoria",
  "lore.content": "Conte\xFAdo",
  "lore.created": "Entrada de lore \u201C{name}\u201D criada.",
  "timeline.new": "Novo evento da linha do tempo",
  "timeline.date": "Data / Era",
  "timeline.datePlaceholder": "ex.: Ano 342 DE",
  "timeline.titlePlaceholder": "T\xEDtulo do evento",
  "timeline.characters": "Personagens vinculados",
  "timeline.locations": "Locais vinculados",
  "timeline.created": "Evento \u201C{name}\u201D criado.",
  // ── Valores salvos (o frontmatter mantém a chave em inglês) ────────────────
  "role.protagonist": "Protagonista",
  "role.antagonist": "Antagonista",
  "role.supporting": "Coadjuvante",
  "role.minor": "Secund\xE1rio",
  "locationType.planet": "Planeta",
  "locationType.dwarf planet": "Planeta an\xE3o",
  "locationType.moon": "Lua",
  "locationType.station": "Esta\xE7\xE3o",
  "locationType.asteroid": "Asteroide",
  "locationType.belt": "Cintur\xE3o",
  "locationType.ship": "Nave",
  "locationType.city": "Cidade",
  "locationType.region": "Regi\xE3o",
  "locationType.building": "Edif\xEDcio",
  "locationType.landmark": "Marco",
  "locationType.other": "Outro",
  "groupType.corporation": "Corpora\xE7\xE3o",
  "groupType.government": "Governo",
  "groupType.military": "Militar",
  "groupType.criminal": "Criminoso",
  "alignment.lawful": "Leal",
  "alignment.neutral": "Neutro",
  "alignment.chaotic": "Ca\xF3tico",
  "loreCategory.history": "Hist\xF3ria",
  "loreCategory.tech": "Tecnologia",
  "loreCategory.religion": "Religi\xE3o",
  "loreCategory.culture": "Cultura",
  "loreCategory.other": "Outro",
  // ── Texto escrito nas notas novas ───────────────────────────────────────────
  "note.origin": "Origem",
  "note.physicalDesc": "Descri\xE7\xE3o f\xEDsica",
  "note.occupation": "Ocupa\xE7\xE3o",
  "note.resume": "Curr\xEDculo",
  "note.roleInStory": "Papel na hist\xF3ria",
  "note.goals": "Objetivos",
  "note.personality": "Personalidade",
  "note.habits": "H\xE1bitos/Maneirismos",
  "note.earlierLife": "Vida pregressa",
  "note.internalConflicts": "Conflitos internos",
  "note.externalConflicts": "Conflitos externos",
  "note.partOf": "Parte de",
  "note.description": "Descri\xE7\xE3o",
  "note.inhabitants": "Quem vive aqui",
  "note.secrets": "Segredos",
  "note.noneProvided": "_Nada informado._",
  "note.type": "Tipo",
  "note.subsidiaryOf": "Subsidi\xE1ria de",
  "note.alignment": "Alinhamento",
  "note.enemies": "Inimigos",
  "note.allies": "Aliados",
  "note.category": "Categoria",
  "note.noContent": "_Ainda sem conte\xFAdo._",
  "note.dateEra": "Data/Era",
  "note.unknown": "_Desconhecida_",
  "note.characters": "Personagens",
  "note.locations": "Locais",
  // ── Mudança de pasta ────────────────────────────────────────────────────────
  "migrate.title": "O Universe Builder agora tem sua pr\xF3pria pasta",
  "migrate.intro": "Suas notas do Universe Builder est\xE3o em \u201C{source}/\u201D, uma pasta que outros plugins tamb\xE9m podem usar. Agora o Universe Builder guarda as notas em \u201C{target}/\u201D.",
  "migrate.scope.one": "A mudan\xE7a inclui apenas as pastas Characters, Groups, Locations, Lore, Timeline e {images} em \u201C{source}/\u201D. Encontrado: {found}; {total} arquivo no total. Todo o resto em \u201C{source}/\u201D fica onde est\xE1. Os links entre notas continuam funcionando.",
  "migrate.scope.other": "A mudan\xE7a inclui apenas as pastas Characters, Groups, Locations, Lore, Timeline e {images} em \u201C{source}/\u201D. Encontrado: {found}; {total} arquivos no total. Todo o resto em \u201C{source}/\u201D fica onde est\xE1. Os links entre notas continuam funcionando.",
  "migrate.worldBuilder.enabled": "O plugin World Builder est\xE1 instalado neste cofre (ativado). Depois da mudan\xE7a, ele n\xE3o ver\xE1 mais estas notas.",
  "migrate.worldBuilder.disabled": "O plugin World Builder est\xE1 instalado neste cofre (desativado). Depois da mudan\xE7a, ele n\xE3o ver\xE1 mais estas notas.",
  "migrate.note": "Caminhos de pasta digitados em outros plugins ou notas (por exemplo, uma consulta do Dataview em \u201C{source}\u201D) n\xE3o s\xE3o atualizados.",
  "migrate.move": "Mover para {target}/ (recomendado)",
  "migrate.askLater": "Manter {source}/, perguntar na pr\xF3xima atualiza\xE7\xE3o",
  "migrate.decline": "Manter {source}/, n\xE3o perguntar novamente",
  "migrate.customFolder": "O Universe Builder usa a pasta personalizada \u201C{folder}\u201D, ent\xE3o n\xE3o h\xE1 nada para mover.",
  "migrate.nothingToMove": "N\xE3o h\xE1 notas do Universe Builder em \u201C{folder}/\u201D para mover.",
  "migrate.createFailed": "N\xE3o foi poss\xEDvel criar a pasta \u201C{folder}\u201D, ent\xE3o nada foi movido.",
  "migrate.moved.one": "{count} arquivo movido para \u201C{folder}/\u201D.",
  "migrate.moved.other": "{count} arquivos movidos para \u201C{folder}/\u201D.",
  "migrate.skipped": "{count} ignorado(s) porque j\xE1 havia um arquivo com o mesmo nome: {files}.",
  "migrate.failed": "{count} n\xE3o puderam ser movidos (veja o console do desenvolvedor); voc\xEA ser\xE1 perguntado de novo na pr\xF3xima inicializa\xE7\xE3o: {files}.",
  "migrate.leftovers": "Ficou em \u201C{folder}/\u201D: {items}.",
  "cleanup.title": "Excluir a pasta vazia \u201C{folder}\u201D?",
  "cleanup.message": "Suas notas agora est\xE3o em \u201C{target}/\u201D, e \u201C{folder}/\u201D n\xE3o tem mais arquivos. Nada a usa mais, ent\xE3o ela pode ser exclu\xEDda.",
  "cleanup.messageEmptyFolders": "Suas notas agora est\xE3o em \u201C{target}/\u201D, e \u201C{folder}/\u201D n\xE3o tem mais arquivos (apenas pastas vazias: {folders}). Nada a usa mais, ent\xE3o ela pode ser exclu\xEDda.",
  "cleanup.note": "As pastas exclu\xEDdas v\xE3o para a lixeira, conforme a configura\xE7\xE3o \u201CArquivos exclu\xEDdos\u201D do Obsidian.",
  "cleanup.delete": "Excluir {folder}/",
  "cleanup.keep": "Manter {folder}/",
  "cleanup.hasFiles": "\u201C{folder}/\u201D voltou a ter arquivos, ent\xE3o n\xE3o foi exclu\xEDda.",
  "cleanup.deleted": "A pasta vazia \u201C{folder}/\u201D foi exclu\xEDda.",
  "cleanup.failed": "N\xE3o foi poss\xEDvel excluir \u201C{folder}/\u201D (veja o console do desenvolvedor).",
  // ── Comandos ────────────────────────────────────────────────────────────────
  "command.openSidebar": "Abrir barra lateral",
  "command.newCharacter": "Novo personagem",
  "command.newLocation": "Novo local",
  "command.newGroup": "Novo grupo",
  "command.newLore": "Nova entrada de lore",
  "command.newTimelineEvent": "Novo evento da linha do tempo",
  "command.moveWorldFolder": "Mover as notas para fora da pasta World",
  // ── Configurações ───────────────────────────────────────────────────────────
  "settings.language": "Idioma",
  "settings.languageDesc": "Idioma da barra lateral, dos formul\xE1rios, das mensagens e dos modelos de notas novas do plugin. Autom\xE1tico segue o idioma do Obsidian (Configura\xE7\xF5es \u203A Geral \u203A Idioma) e usa o ingl\xEAs se o Universe Builder n\xE3o tiver sido traduzido para ele.",
  "settings.languageAuto": "Autom\xE1tico ({language})",
  "settings.folder": "Pasta do universo",
  "settings.folderDesc": "Pasta raiz de todas as notas do Universe Builder. Alter\xE1-la n\xE3o move as notas existentes; para tirar as notas de uma antiga pasta \u201CWorld\u201D, execute o comando \u201CMover as notas para fora da pasta World\u201D.",
  "settings.editor": "Editor da barra lateral",
  "settings.editorDesc": "O que o bot\xE3o Editar de uma entrada expandida abre. Visualiza\xE7\xE3o ao vivo usa o pr\xF3prio editor do Obsidian (formata\xE7\xE3o exibida enquanto voc\xEA digita, sugest\xF5es de [[links]]); Markdown bruto \xE9 uma caixa de texto simples. Se a Visualiza\xE7\xE3o ao vivo parar de funcionar ap\xF3s uma atualiza\xE7\xE3o do Obsidian, o plugin passa sozinho para Markdown bruto.",
  "settings.editorLive": "Visualiza\xE7\xE3o ao vivo",
  "settings.editorRaw": "Markdown bruto",
  // ── Editor de cenas ──────────────────────────────────────────────────────────
  "novel.bold": "Negrito",
  "novel.italic": "It\xE1lico",
  "novel.underline": "Sublinhado",
  "novel.strikethrough": "Tachado",
  "novel.alignLeft": "Alinhar \xE0 esquerda",
  "novel.alignCenter": "Centralizar",
  "novel.alignRight": "Alinhar \xE0 direita",
  "novel.properties": "Propriedades",
  "novel.propertiesTooltip": "Editar as propriedades da nota",
  "novel.words.one": "{count} palavra",
  "novel.words.other": "{count} palavras",
  "novel.selected": "{count} selecionadas",
  "novel.close": "Fechar",
  "novel.noProperties": "Sem propriedades.",
  "novel.newProperty": "Nova propriedade",
  "novel.value": "Valor",
  "novel.add": "Adicionar",
  "novel.removeProperty": "Remover propriedade",
  "novel.requiredProperty": "Propriedade obrigat\xF3ria",
  "novel.listPlaceholder": "item, item, \u2026",
  "novel.propertyExists": 'A propriedade "{name}" j\xE1 existe.',
  "novel.updateFailed": "N\xE3o foi poss\xEDvel atualizar as propriedades. Verifique se h\xE1 erros de YAML no frontmatter da nota.",
  "novel.charactersTooltip": "Personagens desta cena",
  "novel.locationsTooltip": "Locais desta cena",
  "novel.groupsTooltip": "Grupos desta cena",
  "novel.loreTooltip": "Lore desta cena",
  "novel.timelineTooltip": "Eventos da linha do tempo desta cena",
  "novel.noCharacters": "Ainda n\xE3o h\xE1 personagens na barra lateral.",
  "novel.noLocations": "Ainda n\xE3o h\xE1 locais na barra lateral.",
  "novel.noGroups": "Ainda n\xE3o h\xE1 grupos na barra lateral.",
  "novel.noLore": "Ainda n\xE3o h\xE1 lore na barra lateral.",
  "novel.noTimeline": "Ainda n\xE3o h\xE1 eventos da linha do tempo na barra lateral.",
  "novel.filter": "Filtrar\u2026",
  "novel.noMatches": "Nenhum resultado.",
  "novel.openInSidebar": "Abrir {name} na barra lateral",
  "novel.entryNotFound": '"{name}" n\xE3o est\xE1 na barra lateral do Universe Builder.',
  "novel.removeFromScene": "Remover da cena",
  "command.novelUnderline": "Alternar sublinhado",
  "command.novelStrikethrough": "Alternar tachado",
  "command.novelProperties": "Abrir o painel de propriedades",
  "settings.novelHeading": "Editor de cenas de romance",
  "settings.novel": "Usar o editor de cenas de romance",
  "settings.novelDesc": "Nas notas do editor principal que t\xEAm todas as propriedades obrigat\xF3rias: adiciona uma barra de ferramentas acima do texto (personagens / locais / grupos / lore / linha do tempo da cena, negrito / it\xE1lico / sublinhado / tachado, alinhamento, contagem de palavras) e oculta o bloco de propriedades no in\xEDcio da nota.",
  "settings.novelProps": "Propriedades obrigat\xF3rias",
  "settings.novelPropsDesc": "Nomes de propriedades separados por v\xEDrgulas. Uma nota precisa de todas para abrir no editor de cenas de romance.",
  "settings.novelLivePreview": "Abrir na visualiza\xE7\xE3o ao vivo",
  "settings.novelLivePreviewDesc": "Muda essas notas para a visualiza\xE7\xE3o ao vivo quando s\xE3o abertas.",
  "settings.novelHideProps": "Ocultar as propriedades na nota",
  "settings.novelHidePropsDesc": 'Oculta o bloco de propriedades no in\xEDcio da nota; elas s\xE3o editadas pelo bot\xE3o Propriedades ou pelo comando "Abrir o painel de propriedades".',
  "settings.novelWordCount": "Mostrar a contagem de palavras",
  "settings.novelWordCountDesc": "Mostra o n\xFAmero de palavras da nota, e da sele\xE7\xE3o, \xE0 direita da barra de ferramentas.",
  "settings.novelPropsButton": "Mostrar o bot\xE3o Propriedades",
  "settings.novelPropsButtonDesc": 'Adiciona \xE0 barra de ferramentas um bot\xE3o Propriedades para editar as propriedades da nota. O comando "Abrir o painel de propriedades" funciona de qualquer jeito.'
};

// src/locales/fr.ts
var fr = {
  // ── Barre latérale ──────────────────────────────────────────────────────────
  "tab.characters": "Personnages",
  "tab.locations": "Lieux",
  "tab.groups": "Groupes",
  "tab.lore": "Lore",
  "tab.timeline": "Chronologie",
  "bookmarks": "Signets",
  "bookmarks.close": "Fermer les signets",
  "bookmarks.add": "Ajouter un signet",
  "bookmarks.remove": "Retirer le signet",
  "bookmarks.button": "Signet",
  "bookmarks.empty": "Aucun signet pour l'instant. D\xE9veloppez une entr\xE9e et cliquez sur son ic\xF4ne de signet pour l'ajouter ici.",
  "search.clear": "Effacer la recherche",
  "search.characters": "Rechercher des personnages",
  "search.locations": "Rechercher des lieux",
  "search.groups": "Rechercher des groupes",
  "search.lore": "Rechercher dans le lore",
  "search.timeline": "Rechercher dans la chronologie",
  "search.bookmarks": "Rechercher dans les signets",
  "search.tip.characters": "Cherche dans le nom, le groupe, le vaisseau et le foyer",
  "search.tip.locations": "Cherche dans le nom et le texte de la note",
  "search.tip.groups": "Cherche dans le nom et le texte de la note",
  "search.tip.lore": "Cherche dans le titre et le texte de la note",
  "search.tip.timeline": "Cherche dans le titre et le texte de la note",
  "search.tip.bookmarks": "Cherche dans chaque signet comme le fait son propre onglet",
  "noResults.characters": "Aucun personnage ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "noResults.locations": "Aucun lieu ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "noResults.groups": "Aucun groupe ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "noResults.lore": "Aucune entr\xE9e de lore ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "noResults.timeline": "Aucun \xE9v\xE9nement de la chronologie ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "noResults.bookmarks": "Aucun signet ne correspond \xE0 \xAB\xA0{query}\xA0\xBB.",
  "empty.characters": "Aucun personnage pour l'instant.",
  "empty.locations": "Aucun lieu pour l'instant.",
  "empty.groups": "Aucun groupe pour l'instant.",
  "empty.lore": "Aucune entr\xE9e de lore pour l'instant.",
  "empty.timeline": "Aucun \xE9v\xE9nement dans la chronologie pour l'instant.",
  "nav.back": "Pr\xE9c\xE9dent",
  "nav.forward": "Suivant",
  "reload": "Recharger",
  "reload.done": "Universe Builder recharg\xE9.",
  "new": "+ Nouveau",
  "metadata.edit": "Modifier les m\xE9tadonn\xE9es",
  "metadata.title": "Modifier les m\xE9tadonn\xE9es : {section}",
  "metadata.nothing": "Cette section n'a pas encore de champ modifiable.",
  "metadata.builtIn": "Int\xE9gr\xE9es (impossible de les retirer)",
  "metadata.custom": "Personnalis\xE9es",
  "metadata.addPlaceholder": "Nouvelle valeur",
  "metadata.add": "Ajouter",
  "metadata.none": "Aucune valeur personnalis\xE9e pour l'instant.",
  "metadata.uses.one": "{count} entr\xE9e",
  "metadata.uses.other": "{count} entr\xE9es",
  "metadata.remove": "Retirer \xAB {value} \xBB",
  "metadata.exists": "\xAB {value} \xBB est d\xE9j\xE0 une option.",
  "metadata.removeTitle": "Retirer la valeur personnalis\xE9e ?",
  "metadata.removeInUse": "Entr\xE9es utilisant \xAB {value} \xBB : {count}. Elles gardent cette valeur, mais elle ne sera plus propos\xE9e pour les nouvelles entr\xE9es.",
  "metadata.removeAction": "Retirer",
  "metadata.removeGroupType": "Dans l'onglet {tab}, ils appara\xEEtront sous {unassigned}.",
  "metadata.groupCharactersBy": "Regrouper les personnages par",
  "metadata.groupCharactersByDesc": "Comment l'onglet Personnages est d\xE9coup\xE9. Chaque choix garde son propre ordre (glisser-d\xE9poser) et ses sections repli\xE9es.",
  "grouping.ageAsc": "\xC2ge (croissant)",
  "grouping.ageDesc": "\xC2ge (d\xE9croissant)",
  "character.noShip": "Sans vaisseau",
  "character.noHome": "Sans foyer",
  "metadata.modifyOptions": "Modifier les options de {field}",
  "card.unnamed": "Sans nom",
  "card.untitled": "Sans titre",
  "card.age": "\xC2ge",
  "card.home": "Foyer",
  "card.group": "Groupe",
  "card.ship": "Vaisseau",
  "card.pov": "PDV",
  "card.povAdd": "Marquer comme personnage PDV",
  "card.povRemove": "Retirer le statut de personnage PDV",
  "group.none": "Sans groupe",
  "group.unassigned": "Non class\xE9",
  "group.subsidiaries": "Filiales",
  "locations.ships": "Vaisseaux",
  "card.copy": "Copier",
  "card.copyFailed": "Impossible de copier la s\xE9lection.",
  "card.modifyMd": "Modifier le MD",
  "card.edit": "\xC9diter",
  "card.cancel": "Annuler",
  "card.save": "Enregistrer",
  "card.delete": "SUPPRIMER",
  "card.deleteLabel": "Supprimer l'entr\xE9e",
  "card.image": "Image",
  "card.editLabel": "\xC9diter {name}",
  "card.properties": "Propri\xE9t\xE9s",
  "card.propertiesOf": "Propri\xE9t\xE9s de {name}",
  "card.thisEntry": "cette entr\xE9e",
  // ── Messages ────────────────────────────────────────────────────────────────
  "confirm.cancel": "Annuler",
  "discard.title": "Abandonner les modifications\xA0?",
  "discard.message": "Vos modifications de \xAB\xA0{name}\xA0\xBB n'ont pas \xE9t\xE9 enregistr\xE9es.",
  "discard.action": "Abandonner",
  "overwrite.title": "Note modifi\xE9e ailleurs",
  "overwrite.message": "\xAB\xA0{name}\xA0\xBB a \xE9t\xE9 modifi\xE9e en dehors de la barre lat\xE9rale apr\xE8s le d\xE9but de votre \xE9dition. La remplacer par votre version\xA0?",
  "overwrite.action": "Remplacer",
  "delete.title": "Supprimer l'entr\xE9e\xA0?",
  "delete.message": "Voulez-vous vraiment supprimer cette entr\xE9e {category}, {name}\xA0?",
  "delete.messagePlain": "Voulez-vous vraiment supprimer cette entr\xE9e, {name}\xA0?",
  "delete.action": "Supprimer",
  "category.characters": "Personnage",
  "category.locations": "Lieu",
  "category.groups": "Groupe",
  "category.lore": "Lore",
  "category.timeline": "Chronologie",
  "notice.readFailed": "Impossible de lire \xAB\xA0{name}\xA0\xBB.",
  "notice.saved": "\xAB\xA0{name}\xA0\xBB enregistr\xE9.",
  "notice.saveFailed": "Impossible d'enregistrer \xAB\xA0{name}\xA0\xBB.",
  "notice.savedNoPortrait": "\xAB\xA0{name}\xA0\xBB enregistr\xE9, mais son portrait n'a pas pu \xEAtre import\xE9.",
  "notice.deleted": "\xAB\xA0{name}\xA0\xBB supprim\xE9.",
  "notice.deleteFailed": "Impossible de supprimer \xAB\xA0{name}\xA0\xBB.",
  "notice.linkNotFound": "Impossible de trouver \xAB\xA0{name}\xA0\xBB.",
  "notice.finishEditing": "Terminez l'\xE9dition de l'entr\xE9e ouverte avant de d\xE9poser une image.",
  "notice.notAnImage": "\xAB\xA0{name}\xA0\xBB n'est pas une image.",
  "notice.noImages": "Aucun de ces fichiers n'est une image.",
  "portrait.alreadySet": "\xAB\xA0{image}\xA0\xBB est d\xE9j\xE0 le portrait de \xAB\xA0{name}\xA0\xBB.",
  "portrait.replaceTitle": "Remplacer le portrait\xA0?",
  "portrait.replaceMessage": "\xAB\xA0{name}\xA0\xBB a d\xE9j\xE0 un portrait ({old}). Le remplacer par {image}\xA0?",
  "portrait.replaceAction": "Remplacer",
  "portrait.replaced": "Portrait de \xAB\xA0{name}\xA0\xBB remplac\xE9.",
  "portrait.added": "Portrait de \xAB\xA0{name}\xA0\xBB ajout\xE9.",
  "portrait.failed": "Impossible de d\xE9finir le portrait de \xAB\xA0{name}\xA0\xBB.",
  "portrait.dropLabel": "Portrait\xA0: d\xE9posez une image ici, ou appuyez sur Entr\xE9e pour en choisir une",
  "portrait.dropTitle": "Glissez-d\xE9posez une image ici pour l'importer dans le coffre",
  "portrait.dropHint": "Ou cliquez pour choisir un fichier. Il devient le portrait de l'entr\xE9e et est enregistr\xE9 dans {folder}/.",
  "portrait.remove": "Retirer l'image",
  "portrait.inVault": "{name} (d\xE9j\xE0 dans le coffre)",
  // ── Formulaires de nouvelle entrée ──────────────────────────────────────────
  "form.create": "Cr\xE9er",
  "form.addNew": "Ajouter : {field}\u2026",
  "form.addNewTitle": "Nouveau : {field}",
  "form.noneOption": "Aucun",
  "form.yes": "Oui",
  "form.no": "Non",
  "form.nameRequired": "Le nom est obligatoire.",
  "form.titleRequired": "Le titre est obligatoire.",
  "form.createdNoPortrait": "\xAB\xA0{name}\xA0\xBB a \xE9t\xE9 cr\xE9\xE9, mais son portrait n'a pas pu \xEAtre import\xE9.",
  "form.name": "Nom",
  "form.title": "Titre",
  "form.type": "Type",
  "form.description": "Description",
  "form.goals": "Objectifs",
  "form.commaSeparated": "S\xE9par\xE9s par des virgules",
  "form.commaSeparatedNames": "Noms s\xE9par\xE9s par des virgules",
  "character.new": "Nouveau personnage",
  "character.namePlaceholder": "Nom du personnage",
  "character.role": "R\xF4le",
  "character.pov": "Personnage PDV",
  "character.age": "\xC2ge",
  "character.agePlaceholder": "p. ex. 34",
  "character.group": "Groupe",
  "character.groupPlaceholder": "Nom du groupe",
  "character.ship": "Vaisseau",
  "character.shipPlaceholder": "Nom du vaisseau",
  "character.home": "Foyer",
  "character.homePlaceholder": "Nom du foyer",
  "character.physicalDesc": "Description physique",
  "character.personality": "Personnalit\xE9",
  "character.created": "Personnage \xAB\xA0{name}\xA0\xBB cr\xE9\xE9.",
  "location.new": "Nouveau lieu",
  "location.namePlaceholder": "Nom du lieu",
  "location.parent": "Lieu parent",
  "location.parentPlaceholder": "p. ex. Le Royaume du Nord",
  "location.inhabitants": "Qui vit ici",
  "location.secrets": "Secrets",
  "location.created": "Lieu \xAB\xA0{name}\xA0\xBB cr\xE9\xE9.",
  "group.new": "Nouveau groupe",
  "group.namePlaceholder": "Nom du groupe",
  "group.subsidiaryOf": "Filiale de",
  "group.subsidiaryOfDesc": "Place ce groupe sous l'\xE9tiquette Filiales de son groupe parent plut\xF4t que dans la section de son type.",
  "group.subsidiaryNone": "Aucun",
  "group.alignment": "Alignement",
  "group.enemies": "Ennemis",
  "group.allies": "Alli\xE9s",
  "group.created": "Groupe \xAB\xA0{name}\xA0\xBB cr\xE9\xE9.",
  "lore.new": "Nouvelle entr\xE9e de lore",
  "lore.titlePlaceholder": "Titre de l'entr\xE9e",
  "lore.category": "Cat\xE9gorie",
  "lore.content": "Contenu",
  "lore.created": "Entr\xE9e de lore \xAB\xA0{name}\xA0\xBB cr\xE9\xE9e.",
  "timeline.new": "Nouvel \xE9v\xE9nement de la chronologie",
  "timeline.date": "Date / \xC8re",
  "timeline.datePlaceholder": "p. ex. An 342 AE",
  "timeline.titlePlaceholder": "Titre de l'\xE9v\xE9nement",
  "timeline.characters": "Personnages li\xE9s",
  "timeline.locations": "Lieux li\xE9s",
  "timeline.created": "\xC9v\xE9nement \xAB\xA0{name}\xA0\xBB cr\xE9\xE9.",
  // ── Valeurs enregistrées (le frontmatter garde la clé anglaise) ─────────────
  "role.protagonist": "Protagoniste",
  "role.antagonist": "Antagoniste",
  "role.supporting": "Secondaire",
  "role.minor": "Mineur",
  "locationType.planet": "Plan\xE8te",
  "locationType.dwarf planet": "Plan\xE8te naine",
  "locationType.moon": "Lune",
  "locationType.station": "Station",
  "locationType.asteroid": "Ast\xE9ro\xEFde",
  "locationType.belt": "Ceinture",
  "locationType.ship": "Vaisseau",
  "locationType.city": "Ville",
  "locationType.region": "R\xE9gion",
  "locationType.building": "B\xE2timent",
  "locationType.landmark": "Site remarquable",
  "locationType.other": "Autre",
  "groupType.corporation": "Corporation",
  "groupType.government": "Gouvernement",
  "groupType.military": "Militaire",
  "groupType.criminal": "Criminel",
  "alignment.lawful": "Loyal",
  "alignment.neutral": "Neutre",
  "alignment.chaotic": "Chaotique",
  "loreCategory.history": "Histoire",
  "loreCategory.tech": "Technologie",
  "loreCategory.religion": "Religion",
  "loreCategory.culture": "Culture",
  "loreCategory.other": "Autre",
  // ── Texte écrit dans les nouvelles notes ────────────────────────────────────
  "note.origin": "Origine",
  "note.physicalDesc": "Description physique",
  "note.occupation": "Occupation",
  "note.resume": "Parcours",
  "note.roleInStory": "R\xF4le dans l'histoire",
  "note.goals": "Objectifs",
  "note.personality": "Personnalit\xE9",
  "note.habits": "Habitudes/Manies",
  "note.earlierLife": "Vie ant\xE9rieure",
  "note.internalConflicts": "Conflits internes",
  "note.externalConflicts": "Conflits externes",
  "note.partOf": "Fait partie de",
  "note.description": "Description",
  "note.inhabitants": "Qui vit ici",
  "note.secrets": "Secrets",
  "note.noneProvided": "_Non renseign\xE9._",
  "note.type": "Type",
  "note.subsidiaryOf": "Filiale de",
  "note.alignment": "Alignement",
  "note.enemies": "Ennemis",
  "note.allies": "Alli\xE9s",
  "note.category": "Cat\xE9gorie",
  "note.noContent": "_Pas encore de contenu._",
  "note.dateEra": "Date/\xC8re",
  "note.unknown": "_Inconnue_",
  "note.characters": "Personnages",
  "note.locations": "Lieux",
  // ── Déplacement de dossier ──────────────────────────────────────────────────
  "migrate.title": "Universe Builder a maintenant son propre dossier",
  "migrate.intro": "Vos notes Universe Builder se trouvent dans \xAB\xA0{source}/\xA0\xBB, un dossier que d'autres plugins peuvent aussi utiliser. Universe Builder range d\xE9sormais ses notes dans \xAB\xA0{target}/\xA0\xBB.",
  "migrate.scope.one": "Le d\xE9placement ne concerne que les dossiers Characters, Groups, Locations, Lore, Timeline et {images} de \xAB\xA0{source}/\xA0\xBB. Trouv\xE9\xA0: {found}\xA0; {total} fichier au total. Tout le reste de \xAB\xA0{source}/\xA0\xBB reste en place. Les liens entre les notes continuent de fonctionner.",
  "migrate.scope.other": "Le d\xE9placement ne concerne que les dossiers Characters, Groups, Locations, Lore, Timeline et {images} de \xAB\xA0{source}/\xA0\xBB. Trouv\xE9\xA0: {found}\xA0; {total} fichiers au total. Tout le reste de \xAB\xA0{source}/\xA0\xBB reste en place. Les liens entre les notes continuent de fonctionner.",
  "migrate.worldBuilder.enabled": "Le plugin World Builder est install\xE9 dans ce coffre (activ\xE9). Apr\xE8s le d\xE9placement, il ne verra plus ces notes.",
  "migrate.worldBuilder.disabled": "Le plugin World Builder est install\xE9 dans ce coffre (d\xE9sactiv\xE9). Apr\xE8s le d\xE9placement, il ne verra plus ces notes.",
  "migrate.note": "Les chemins de dossier saisis dans d'autres plugins ou notes (par exemple une requ\xEAte Dataview sur \xAB\xA0{source}\xA0\xBB) ne sont pas mis \xE0 jour.",
  "migrate.move": "D\xE9placer vers {target}/ (recommand\xE9)",
  "migrate.askLater": "Garder {source}/, redemander \xE0 la prochaine mise \xE0 jour",
  "migrate.decline": "Garder {source}/, ne plus demander",
  "migrate.customFolder": "Universe Builder utilise le dossier personnalis\xE9 \xAB\xA0{folder}\xA0\xBB, il n'y a donc rien \xE0 d\xE9placer.",
  "migrate.nothingToMove": "Il n'y a aucune note Universe Builder \xE0 d\xE9placer dans \xAB\xA0{folder}/\xA0\xBB.",
  "migrate.createFailed": "Impossible de cr\xE9er le dossier \xAB\xA0{folder}\xA0\xBB, rien n'a donc \xE9t\xE9 d\xE9plac\xE9.",
  "migrate.moved.one": "{count} fichier d\xE9plac\xE9 vers \xAB\xA0{folder}/\xA0\xBB.",
  "migrate.moved.other": "{count} fichiers d\xE9plac\xE9s vers \xAB\xA0{folder}/\xA0\xBB.",
  "migrate.skipped": "{count} ignor\xE9(s) car un fichier du m\xEAme nom s'y trouvait d\xE9j\xE0\xA0: {files}.",
  "migrate.failed": "{count} n'ont pas pu \xEAtre d\xE9plac\xE9s (voir la console de d\xE9veloppement)\xA0; la question sera repos\xE9e au prochain d\xE9marrage\xA0: {files}.",
  "migrate.leftovers": "Restent dans \xAB\xA0{folder}/\xA0\xBB\xA0: {items}.",
  "cleanup.title": "Supprimer le dossier vide \xAB\xA0{folder}\xA0\xBB\xA0?",
  "cleanup.message": "Vos notes sont maintenant dans \xAB\xA0{target}/\xA0\xBB et \xAB\xA0{folder}/\xA0\xBB ne contient plus aucun fichier. Plus rien ne l'utilise, il peut donc \xEAtre supprim\xE9.",
  "cleanup.messageEmptyFolders": "Vos notes sont maintenant dans \xAB\xA0{target}/\xA0\xBB et \xAB\xA0{folder}/\xA0\xBB ne contient plus aucun fichier (seulement des dossiers vides\xA0: {folders}). Plus rien ne l'utilise, il peut donc \xEAtre supprim\xE9.",
  "cleanup.note": "Les dossiers supprim\xE9s vont \xE0 la corbeille, selon le param\xE8tre \xAB\xA0Fichiers supprim\xE9s\xA0\xBB d'Obsidian.",
  "cleanup.delete": "Supprimer {folder}/",
  "cleanup.keep": "Garder {folder}/",
  "cleanup.hasFiles": "\xAB\xA0{folder}/\xA0\xBB contient \xE0 nouveau des fichiers, il n'a donc pas \xE9t\xE9 supprim\xE9.",
  "cleanup.deleted": "Le dossier vide \xAB\xA0{folder}/\xA0\xBB a \xE9t\xE9 supprim\xE9.",
  "cleanup.failed": "Impossible de supprimer \xAB\xA0{folder}/\xA0\xBB (voir la console de d\xE9veloppement).",
  // ── Commandes ───────────────────────────────────────────────────────────────
  "command.openSidebar": "Ouvrir la barre lat\xE9rale",
  "command.newCharacter": "Nouveau personnage",
  "command.newLocation": "Nouveau lieu",
  "command.newGroup": "Nouveau groupe",
  "command.newLore": "Nouvelle entr\xE9e de lore",
  "command.newTimelineEvent": "Nouvel \xE9v\xE9nement de la chronologie",
  "command.moveWorldFolder": "Sortir les notes du dossier World",
  // ── Paramètres ──────────────────────────────────────────────────────────────
  "settings.language": "Langue",
  "settings.languageDesc": "Langue de la barre lat\xE9rale, des formulaires, des messages et des mod\xE8les de nouvelles notes du plugin. Automatique suit la langue d'Obsidian (Param\xE8tres \u203A G\xE9n\xE9ral \u203A Langue), avec l'anglais par d\xE9faut si Universe Builder n'est pas traduit dans cette langue.",
  "settings.languageAuto": "Automatique ({language})",
  "settings.folder": "Dossier de l'univers",
  "settings.folderDesc": "Dossier racine de toutes les notes Universe Builder. Le changer ne d\xE9place pas les notes existantes\xA0; pour sortir les notes d'un ancien dossier \xAB\xA0World\xA0\xBB, lancez la commande \xAB\xA0Sortir les notes du dossier World\xA0\xBB.",
  "settings.editor": "\xC9diteur de la barre lat\xE9rale",
  "settings.editorDesc": "Ce qu'ouvre le bouton \xC9diter d'une entr\xE9e d\xE9velopp\xE9e. Aper\xE7u en direct utilise l'\xE9diteur d'Obsidian (mise en forme visible pendant la saisie, suggestions de [[liens]])\xA0; Markdown brut est une simple zone de texte. Si l'aper\xE7u en direct cesse de fonctionner apr\xE8s une mise \xE0 jour d'Obsidian, le plugin passe de lui-m\xEAme au Markdown brut.",
  "settings.editorLive": "Aper\xE7u en direct",
  "settings.editorRaw": "Markdown brut",
  // ── Éditeur de scènes ──────────────────────────────────────────────────────────
  "novel.bold": "Gras",
  "novel.italic": "Italique",
  "novel.underline": "Soulign\xE9",
  "novel.strikethrough": "Barr\xE9",
  "novel.alignLeft": "Aligner \xE0 gauche",
  "novel.alignCenter": "Centrer",
  "novel.alignRight": "Aligner \xE0 droite",
  "novel.properties": "Propri\xE9t\xE9s",
  "novel.propertiesTooltip": "Modifier les propri\xE9t\xE9s de la note",
  "novel.words.one": "{count} mot",
  "novel.words.other": "{count} mots",
  "novel.selected": "{count} s\xE9lectionn\xE9s",
  "novel.close": "Fermer",
  "novel.noProperties": "Aucune propri\xE9t\xE9.",
  "novel.newProperty": "Nouvelle propri\xE9t\xE9",
  "novel.value": "Valeur",
  "novel.add": "Ajouter",
  "novel.removeProperty": "Supprimer la propri\xE9t\xE9",
  "novel.requiredProperty": "Propri\xE9t\xE9 obligatoire",
  "novel.listPlaceholder": "\xE9l\xE9ment, \xE9l\xE9ment, \u2026",
  "novel.propertyExists": "La propri\xE9t\xE9 \xAB {name} \xBB existe d\xE9j\xE0.",
  "novel.updateFailed": "Impossible de mettre \xE0 jour les propri\xE9t\xE9s. V\xE9rifiez le frontmatter de la note (erreurs YAML).",
  "novel.charactersTooltip": "Personnages de cette sc\xE8ne",
  "novel.locationsTooltip": "Lieux de cette sc\xE8ne",
  "novel.groupsTooltip": "Groupes de cette sc\xE8ne",
  "novel.loreTooltip": "Lore de cette sc\xE8ne",
  "novel.timelineTooltip": "\xC9v\xE9nements de la chronologie dans cette sc\xE8ne",
  "novel.noCharacters": "Aucun personnage dans la barre lat\xE9rale pour l'instant.",
  "novel.noLocations": "Aucun lieu dans la barre lat\xE9rale pour l'instant.",
  "novel.noGroups": "Aucun groupe dans la barre lat\xE9rale pour l'instant.",
  "novel.noLore": "Aucun lore dans la barre lat\xE9rale pour l'instant.",
  "novel.noTimeline": "Aucun \xE9v\xE9nement de la chronologie dans la barre lat\xE9rale pour l'instant.",
  "novel.filter": "Filtrer\u2026",
  "novel.noMatches": "Aucun r\xE9sultat.",
  "novel.openInSidebar": "Ouvrir {name} dans la barre lat\xE9rale",
  "novel.entryNotFound": "\xAB {name} \xBB n'est pas dans la barre lat\xE9rale d'Universe Builder.",
  "novel.removeFromScene": "Retirer de la sc\xE8ne",
  "command.novelUnderline": "Activer/d\xE9sactiver le soulign\xE9",
  "command.novelStrikethrough": "Activer/d\xE9sactiver le barr\xE9",
  "command.novelProperties": "Ouvrir le panneau des propri\xE9t\xE9s",
  "settings.novelHeading": "\xC9diteur de sc\xE8nes de roman",
  "settings.novel": "Utiliser l'\xE9diteur de sc\xE8nes de roman",
  "settings.novelDesc": "Pour les notes de l'\xE9diteur principal qui ont toutes les propri\xE9t\xE9s obligatoires : ajoute une barre d'outils au-dessus du texte (personnages / lieux / groupes / lore / chronologie de la sc\xE8ne, gras / italique / soulign\xE9 / barr\xE9, alignement, nombre de mots) et masque le bloc des propri\xE9t\xE9s en haut de la note.",
  "settings.novelProps": "Propri\xE9t\xE9s obligatoires",
  "settings.novelPropsDesc": "Noms de propri\xE9t\xE9s s\xE9par\xE9s par des virgules. Une note doit toutes les avoir pour s'ouvrir dans l'\xE9diteur de sc\xE8nes de roman.",
  "settings.novelLivePreview": "Ouvrir en aper\xE7u en direct",
  "settings.novelLivePreviewDesc": "Passe ces notes en aper\xE7u en direct \xE0 leur ouverture.",
  "settings.novelHideProps": "Masquer les propri\xE9t\xE9s dans la note",
  "settings.novelHidePropsDesc": "Masque le bloc des propri\xE9t\xE9s en haut de la note ; le bouton Propri\xE9t\xE9s ou la commande \xAB Ouvrir le panneau des propri\xE9t\xE9s \xBB permettent de les modifier.",
  "settings.novelWordCount": "Afficher le nombre de mots",
  "settings.novelWordCountDesc": "Affiche le nombre de mots de la note, et de la s\xE9lection, \xE0 droite de la barre d'outils.",
  "settings.novelPropsButton": "Afficher le bouton Propri\xE9t\xE9s",
  "settings.novelPropsButtonDesc": "Ajoute \xE0 la barre d'outils un bouton Propri\xE9t\xE9s pour modifier les propri\xE9t\xE9s de la note. La commande \xAB Ouvrir le panneau des propri\xE9t\xE9s \xBB fonctionne dans tous les cas."
};

// src/locales/de.ts
var de = {
  // ── Seitenleiste ────────────────────────────────────────────────────────────
  "tab.characters": "Figuren",
  "tab.locations": "Orte",
  "tab.groups": "Gruppen",
  "tab.lore": "Lore",
  "tab.timeline": "Zeitleiste",
  "bookmarks": "Lesezeichen",
  "bookmarks.close": "Lesezeichen schlie\xDFen",
  "bookmarks.add": "Lesezeichen hinzuf\xFCgen",
  "bookmarks.remove": "Lesezeichen entfernen",
  "bookmarks.button": "Lesezeichen",
  "bookmarks.empty": "Noch keine Lesezeichen. Klappe einen Eintrag auf und klicke auf sein Lesezeichen-Symbol, um ihn hier hinzuzuf\xFCgen.",
  "search.clear": "Suche l\xF6schen",
  "search.characters": "Figuren durchsuchen",
  "search.locations": "Orte durchsuchen",
  "search.groups": "Gruppen durchsuchen",
  "search.lore": "Lore durchsuchen",
  "search.timeline": "Zeitleiste durchsuchen",
  "search.bookmarks": "Lesezeichen durchsuchen",
  "search.tip.characters": "Sucht in Name, Gruppe, Schiff und Heimat",
  "search.tip.locations": "Sucht im Namen und im Text der Notiz",
  "search.tip.groups": "Sucht im Namen und im Text der Notiz",
  "search.tip.lore": "Sucht im Titel und im Text der Notiz",
  "search.tip.timeline": "Sucht im Titel und im Text der Notiz",
  "search.tip.bookmarks": "Sucht in jedem Lesezeichen so wie in seinem eigenen Tab",
  "noResults.characters": "Keine Figuren passen zu \u201E{query}\u201C.",
  "noResults.locations": "Keine Orte passen zu \u201E{query}\u201C.",
  "noResults.groups": "Keine Gruppen passen zu \u201E{query}\u201C.",
  "noResults.lore": "Keine Lore-Eintr\xE4ge passen zu \u201E{query}\u201C.",
  "noResults.timeline": "Keine Ereignisse der Zeitleiste passen zu \u201E{query}\u201C.",
  "noResults.bookmarks": "Keine Lesezeichen passen zu \u201E{query}\u201C.",
  "empty.characters": "Noch keine Figuren.",
  "empty.locations": "Noch keine Orte.",
  "empty.groups": "Noch keine Gruppen.",
  "empty.lore": "Noch keine Lore-Eintr\xE4ge.",
  "empty.timeline": "Noch keine Ereignisse in der Zeitleiste.",
  "nav.back": "Zur\xFCck",
  "nav.forward": "Vorw\xE4rts",
  "reload": "Neu laden",
  "reload.done": "Universe Builder neu geladen.",
  "new": "+ Neu",
  "metadata.edit": "Metadaten bearbeiten",
  "metadata.title": "Metadaten bearbeiten: {section}",
  "metadata.nothing": "Dieser Bereich hat noch keine bearbeitbaren Felder.",
  "metadata.builtIn": "Integriert (nicht entfernbar)",
  "metadata.custom": "Eigene",
  "metadata.addPlaceholder": "Neuer Wert",
  "metadata.add": "Hinzuf\xFCgen",
  "metadata.none": "Noch keine eigenen Werte.",
  "metadata.uses.one": "{count} Eintrag",
  "metadata.uses.other": "{count} Eintr\xE4ge",
  "metadata.remove": "\u201E{value}\u201C entfernen",
  "metadata.exists": "\u201E{value}\u201C ist bereits eine Option.",
  "metadata.removeTitle": "Eigenen Wert entfernen?",
  "metadata.removeInUse": "Eintr\xE4ge mit \u201E{value}\u201C: {count}. Sie behalten diesen Wert, er wird f\xFCr neue Eintr\xE4ge aber nicht mehr angeboten.",
  "metadata.removeAction": "Entfernen",
  "metadata.removeGroupType": "Im Tab {tab} erscheinen sie dann unter {unassigned}.",
  "metadata.groupCharactersBy": "Figuren gruppieren nach",
  "metadata.groupCharactersByDesc": "Wie der Tab Figuren aufgeteilt wird. Jede Auswahl beh\xE4lt ihre eigene Drag-and-drop-Reihenfolge und eingeklappten Abschnitte.",
  "grouping.ageAsc": "Alter (aufsteigend)",
  "grouping.ageDesc": "Alter (absteigend)",
  "character.noShip": "Kein Schiff",
  "character.noHome": "Keine Heimat",
  "metadata.modifyOptions": "Optionen f\xFCr {field} bearbeiten",
  "card.unnamed": "Unbenannt",
  "card.untitled": "Ohne Titel",
  "card.age": "Alter",
  "card.home": "Heimat",
  "card.group": "Gruppe",
  "card.ship": "Schiff",
  "card.pov": "POV",
  "card.povAdd": "Als POV-Figur markieren",
  "card.povRemove": "POV-Markierung entfernen",
  "group.none": "Keine Gruppe",
  "group.unassigned": "Nicht zugeordnet",
  "group.subsidiaries": "Tochtergesellschaften",
  "locations.ships": "Schiffe",
  "card.copy": "Kopieren",
  "card.copyFailed": "Die Auswahl konnte nicht kopiert werden.",
  "card.modifyMd": "MD bearbeiten",
  "card.edit": "Bearbeiten",
  "card.cancel": "Abbrechen",
  "card.save": "Speichern",
  "card.delete": "L\xD6SCHEN",
  "card.deleteLabel": "Eintrag l\xF6schen",
  "card.image": "Bild",
  "card.editLabel": "{name} bearbeiten",
  "card.properties": "Eigenschaften",
  "card.propertiesOf": "Eigenschaften von {name}",
  "card.thisEntry": "dieser Eintrag",
  // ── Meldungen ───────────────────────────────────────────────────────────────
  "confirm.cancel": "Abbrechen",
  "discard.title": "\xC4nderungen verwerfen?",
  "discard.message": "Deine \xC4nderungen an \u201E{name}\u201C wurden nicht gespeichert.",
  "discard.action": "Verwerfen",
  "overwrite.title": "Notiz wurde anderswo ge\xE4ndert",
  "overwrite.message": "\u201E{name}\u201C wurde au\xDFerhalb der Seitenleiste ge\xE4ndert, nachdem du mit dem Bearbeiten begonnen hast. Mit deiner Version \xFCberschreiben?",
  "overwrite.action": "\xDCberschreiben",
  "delete.title": "Eintrag l\xF6schen?",
  "delete.message": "M\xF6chtest du diesen Eintrag ({category}) \u201E{name}\u201C wirklich l\xF6schen?",
  "delete.messagePlain": "M\xF6chtest du diesen Eintrag \u201E{name}\u201C wirklich l\xF6schen?",
  "delete.action": "L\xF6schen",
  "category.characters": "Figur",
  "category.locations": "Ort",
  "category.groups": "Gruppe",
  "category.lore": "Lore",
  "category.timeline": "Zeitleiste",
  "notice.readFailed": "\u201E{name}\u201C konnte nicht gelesen werden.",
  "notice.saved": "\u201E{name}\u201C gespeichert.",
  "notice.saveFailed": "\u201E{name}\u201C konnte nicht gespeichert werden.",
  "notice.savedNoPortrait": "\u201E{name}\u201C gespeichert, aber das Portr\xE4t konnte nicht importiert werden.",
  "notice.deleted": "\u201E{name}\u201C gel\xF6scht.",
  "notice.deleteFailed": "\u201E{name}\u201C konnte nicht gel\xF6scht werden.",
  "notice.linkNotFound": "\u201E{name}\u201C wurde nicht gefunden.",
  "notice.finishEditing": "Beende die Bearbeitung des ge\xF6ffneten Eintrags, bevor du ein Bild ablegst.",
  "notice.notAnImage": "\u201E{name}\u201C ist kein Bild.",
  "notice.noImages": "Keine dieser Dateien ist ein Bild.",
  "portrait.alreadySet": "\u201E{image}\u201C ist bereits das Portr\xE4t von \u201E{name}\u201C.",
  "portrait.replaceTitle": "Portr\xE4t ersetzen?",
  "portrait.replaceMessage": "\u201E{name}\u201C hat bereits ein Portr\xE4t ({old}). Durch {image} ersetzen?",
  "portrait.replaceAction": "Ersetzen",
  "portrait.replaced": "Portr\xE4t von \u201E{name}\u201C ersetzt.",
  "portrait.added": "Portr\xE4t f\xFCr \u201E{name}\u201C hinzugef\xFCgt.",
  "portrait.failed": "Das Portr\xE4t f\xFCr \u201E{name}\u201C konnte nicht gesetzt werden.",
  "portrait.dropLabel": "Portr\xE4t: Bild hier ablegen oder Eingabetaste dr\xFCcken, um eines auszuw\xE4hlen",
  "portrait.dropTitle": "Bild hierher ziehen, um es in den Tresor zu importieren",
  "portrait.dropHint": "Oder klicken, um eine Datei auszuw\xE4hlen. Sie wird zum Portr\xE4t des Eintrags und in {folder}/ gespeichert.",
  "portrait.remove": "Bild entfernen",
  "portrait.inVault": "{name} (bereits im Tresor)",
  // ── Formulare für neue Einträge ─────────────────────────────────────────────
  "form.create": "Erstellen",
  "form.addNew": "Neu hinzuf\xFCgen: {field}\u2026",
  "form.addNewTitle": "Neu: {field}",
  "form.noneOption": "Keine Angabe",
  "form.yes": "Ja",
  "form.no": "Nein",
  "form.nameRequired": "Ein Name ist erforderlich.",
  "form.titleRequired": "Ein Titel ist erforderlich.",
  "form.createdNoPortrait": "\u201E{name}\u201C wurde erstellt, aber das Portr\xE4t konnte nicht importiert werden.",
  "form.name": "Name",
  "form.title": "Titel",
  "form.type": "Typ",
  "form.description": "Beschreibung",
  "form.goals": "Ziele",
  "form.commaSeparated": "Durch Kommas getrennt",
  "form.commaSeparatedNames": "Namen, durch Kommas getrennt",
  "character.new": "Neue Figur",
  "character.namePlaceholder": "Name der Figur",
  "character.role": "Rolle",
  "character.pov": "POV-Figur",
  "character.age": "Alter",
  "character.agePlaceholder": "z. B. 34",
  "character.group": "Gruppe",
  "character.groupPlaceholder": "Name der Gruppe",
  "character.ship": "Schiff",
  "character.shipPlaceholder": "Name des Schiffs",
  "character.home": "Heimat",
  "character.homePlaceholder": "Name der Heimat",
  "character.physicalDesc": "\xC4u\xDFere Beschreibung",
  "character.personality": "Pers\xF6nlichkeit",
  "character.created": "Figur \u201E{name}\u201C erstellt.",
  "location.new": "Neuer Ort",
  "location.namePlaceholder": "Name des Orts",
  "location.parent": "\xDCbergeordneter Ort",
  "location.parentPlaceholder": "z. B. Das Nordreich",
  "location.inhabitants": "Wer hier lebt",
  "location.secrets": "Geheimnisse",
  "location.created": "Ort \u201E{name}\u201C erstellt.",
  "group.new": "Neue Gruppe",
  "group.namePlaceholder": "Name der Gruppe",
  "group.subsidiaryOf": "Tochter von",
  "group.subsidiaryOfDesc": "Ordnet diese Gruppe unter dem Label \u201ETochtergesellschaften\u201C ihrer Muttergruppe ein statt im Abschnitt ihres Typs.",
  "group.subsidiaryNone": "Keine",
  "group.alignment": "Gesinnung",
  "group.enemies": "Feinde",
  "group.allies": "Verb\xFCndete",
  "group.created": "Gruppe \u201E{name}\u201C erstellt.",
  "lore.new": "Neuer Lore-Eintrag",
  "lore.titlePlaceholder": "Titel des Eintrags",
  "lore.category": "Kategorie",
  "lore.content": "Inhalt",
  "lore.created": "Lore-Eintrag \u201E{name}\u201C erstellt.",
  "timeline.new": "Neues Ereignis in der Zeitleiste",
  "timeline.date": "Datum / \xC4ra",
  "timeline.datePlaceholder": "z. B. Jahr 342 NE",
  "timeline.titlePlaceholder": "Titel des Ereignisses",
  "timeline.characters": "Verkn\xFCpfte Figuren",
  "timeline.locations": "Verkn\xFCpfte Orte",
  "timeline.created": "Ereignis \u201E{name}\u201C erstellt.",
  // ── Gespeicherte Werte (das Frontmatter behält den englischen Schlüssel) ────
  "role.protagonist": "Protagonist",
  "role.antagonist": "Antagonist",
  "role.supporting": "Nebenfigur",
  "role.minor": "Randfigur",
  "locationType.planet": "Planet",
  "locationType.dwarf planet": "Zwergplanet",
  "locationType.moon": "Mond",
  "locationType.station": "Station",
  "locationType.asteroid": "Asteroid",
  "locationType.belt": "G\xFCrtel",
  "locationType.ship": "Schiff",
  "locationType.city": "Stadt",
  "locationType.region": "Region",
  "locationType.building": "Geb\xE4ude",
  "locationType.landmark": "Wahrzeichen",
  "locationType.other": "Sonstiges",
  "groupType.corporation": "Konzern",
  "groupType.government": "Regierung",
  "groupType.military": "Milit\xE4r",
  "groupType.criminal": "Kriminell",
  "alignment.lawful": "Rechtschaffen",
  "alignment.neutral": "Neutral",
  "alignment.chaotic": "Chaotisch",
  "loreCategory.history": "Geschichte",
  "loreCategory.tech": "Technik",
  "loreCategory.religion": "Religion",
  "loreCategory.culture": "Kultur",
  "loreCategory.other": "Sonstiges",
  // ── Text in neuen Notizen ───────────────────────────────────────────────────
  "note.origin": "Herkunft",
  "note.physicalDesc": "\xC4u\xDFere Beschreibung",
  "note.occupation": "Beruf",
  "note.resume": "Lebenslauf",
  "note.roleInStory": "Rolle in der Geschichte",
  "note.goals": "Ziele",
  "note.personality": "Pers\xF6nlichkeit",
  "note.habits": "Gewohnheiten/Eigenheiten",
  "note.earlierLife": "Fr\xFCheres Leben",
  "note.internalConflicts": "Innere Konflikte",
  "note.externalConflicts": "\xC4u\xDFere Konflikte",
  "note.partOf": "Teil von",
  "note.description": "Beschreibung",
  "note.inhabitants": "Wer hier lebt",
  "note.secrets": "Geheimnisse",
  "note.noneProvided": "_Keine Angabe._",
  "note.type": "Typ",
  "note.subsidiaryOf": "Tochter von",
  "note.alignment": "Gesinnung",
  "note.enemies": "Feinde",
  "note.allies": "Verb\xFCndete",
  "note.category": "Kategorie",
  "note.noContent": "_Noch kein Inhalt._",
  "note.dateEra": "Datum/\xC4ra",
  "note.unknown": "_Unbekannt_",
  "note.characters": "Figuren",
  "note.locations": "Orte",
  // ── Ordnerumzug ─────────────────────────────────────────────────────────────
  "migrate.title": "Universe Builder hat jetzt einen eigenen Ordner",
  "migrate.intro": "Deine Universe-Builder-Notizen liegen in \u201E{source}/\u201C, einem Ordner, den auch andere Plugins verwenden k\xF6nnen. Universe Builder speichert seine Notizen jetzt stattdessen in \u201E{target}/\u201C.",
  "migrate.scope.one": "Verschoben werden nur die Ordner Characters, Groups, Locations, Lore, Timeline und {images} in \u201E{source}/\u201C. Gefunden: {found}; insgesamt {total} Datei. Alles andere in \u201E{source}/\u201C bleibt, wo es ist. Links zwischen Notizen funktionieren weiter.",
  "migrate.scope.other": "Verschoben werden nur die Ordner Characters, Groups, Locations, Lore, Timeline und {images} in \u201E{source}/\u201C. Gefunden: {found}; insgesamt {total} Dateien. Alles andere in \u201E{source}/\u201C bleibt, wo es ist. Links zwischen Notizen funktionieren weiter.",
  "migrate.worldBuilder.enabled": "Das Plugin World Builder ist in diesem Tresor installiert (aktiviert). Nach dem Verschieben sieht es diese Notizen nicht mehr.",
  "migrate.worldBuilder.disabled": "Das Plugin World Builder ist in diesem Tresor installiert (deaktiviert). Nach dem Verschieben sieht es diese Notizen nicht mehr.",
  "migrate.note": "Ordnerpfade, die in anderen Plugins oder Notizen eingetragen sind (zum Beispiel eine Dataview-Abfrage auf \u201E{source}\u201C), werden nicht angepasst.",
  "migrate.move": "Nach {target}/ verschieben (empfohlen)",
  "migrate.askLater": "{source}/ behalten, beim n\xE4chsten Update erneut fragen",
  "migrate.decline": "{source}/ behalten, nicht mehr fragen",
  "migrate.customFolder": "Universe Builder verwendet den eigenen Ordner \u201E{folder}\u201C, daher gibt es nichts zu verschieben.",
  "migrate.nothingToMove": "In \u201E{folder}/\u201C gibt es keine Universe-Builder-Notizen zum Verschieben.",
  "migrate.createFailed": "Der Ordner \u201E{folder}\u201C konnte nicht erstellt werden, daher wurde nichts verschoben.",
  "migrate.moved.one": "{count} Datei nach \u201E{folder}/\u201C verschoben.",
  "migrate.moved.other": "{count} Dateien nach \u201E{folder}/\u201C verschoben.",
  "migrate.skipped": "{count} \xFCbersprungen, weil dort bereits eine Datei mit demselben Namen lag: {files}.",
  "migrate.failed": "{count} konnten nicht verschoben werden (siehe Entwicklerkonsole); beim n\xE4chsten Start wirst du erneut gefragt: {files}.",
  "migrate.leftovers": "Verbleibt in \u201E{folder}/\u201C: {items}.",
  "cleanup.title": "Leeren Ordner \u201E{folder}\u201C l\xF6schen?",
  "cleanup.message": "Deine Notizen liegen jetzt in \u201E{target}/\u201C, und \u201E{folder}/\u201C enth\xE4lt keine Dateien mehr. Er wird nicht mehr verwendet und kann gel\xF6scht werden.",
  "cleanup.messageEmptyFolders": "Deine Notizen liegen jetzt in \u201E{target}/\u201C, und \u201E{folder}/\u201C enth\xE4lt keine Dateien mehr (nur leere Ordner: {folders}). Er wird nicht mehr verwendet und kann gel\xF6scht werden.",
  "cleanup.note": "Gel\xF6schte Ordner landen im Papierkorb, gem\xE4\xDF der Obsidian-Einstellung \u201EGel\xF6schte Dateien\u201C.",
  "cleanup.delete": "{folder}/ l\xF6schen",
  "cleanup.keep": "{folder}/ behalten",
  "cleanup.hasFiles": "\u201E{folder}/\u201C enth\xE4lt wieder Dateien und wurde daher nicht gel\xF6scht.",
  "cleanup.deleted": "Leerer Ordner \u201E{folder}/\u201C gel\xF6scht.",
  "cleanup.failed": "\u201E{folder}/\u201C konnte nicht gel\xF6scht werden (siehe Entwicklerkonsole).",
  // ── Befehle ─────────────────────────────────────────────────────────────────
  "command.openSidebar": "Seitenleiste \xF6ffnen",
  "command.newCharacter": "Neue Figur",
  "command.newLocation": "Neuer Ort",
  "command.newGroup": "Neue Gruppe",
  "command.newLore": "Neuer Lore-Eintrag",
  "command.newTimelineEvent": "Neues Ereignis in der Zeitleiste",
  "command.moveWorldFolder": "Notizen aus dem Ordner World verschieben",
  // ── Einstellungen ───────────────────────────────────────────────────────────
  "settings.language": "Sprache",
  "settings.languageDesc": "Sprache der Seitenleiste, der Formulare, der Meldungen und der Vorlagen f\xFCr neue Notizen des Plugins. Automatisch folgt der Sprache von Obsidian (Einstellungen \u203A Allgemein \u203A Sprache) und verwendet Englisch, wenn Universe Builder nicht in diese Sprache \xFCbersetzt ist.",
  "settings.languageAuto": "Automatisch ({language})",
  "settings.folder": "Universum-Ordner",
  "settings.folderDesc": "Stammordner f\xFCr alle Universe-Builder-Notizen. Eine \xC4nderung verschiebt vorhandene Notizen nicht; um Notizen aus einem alten Ordner \u201EWorld\u201C zu verschieben, f\xFChre den Befehl \u201ENotizen aus dem Ordner World verschieben\u201C aus.",
  "settings.editor": "Editor der Seitenleiste",
  "settings.editorDesc": "Was die Schaltfl\xE4che Bearbeiten eines aufgeklappten Eintrags \xF6ffnet. Live-Vorschau nutzt den Editor von Obsidian (Formatierung beim Tippen, Vorschl\xE4ge f\xFCr [[Links]]); Rohes Markdown ist ein einfaches Textfeld. Falls die Live-Vorschau nach einem Obsidian-Update nicht mehr funktioniert, wechselt das Plugin von selbst zu rohem Markdown.",
  "settings.editorLive": "Live-Vorschau",
  "settings.editorRaw": "Rohes Markdown",
  // ── Szeneneditor ──────────────────────────────────────────────────────────
  "novel.bold": "Fett",
  "novel.italic": "Kursiv",
  "novel.underline": "Unterstrichen",
  "novel.strikethrough": "Durchgestrichen",
  "novel.alignLeft": "Linksb\xFCndig",
  "novel.alignCenter": "Zentriert",
  "novel.alignRight": "Rechtsb\xFCndig",
  "novel.properties": "Eigenschaften",
  "novel.propertiesTooltip": "Eigenschaften der Notiz bearbeiten",
  "novel.words.one": "{count} Wort",
  "novel.words.other": "{count} W\xF6rter",
  "novel.selected": "{count} ausgew\xE4hlt",
  "novel.close": "Schlie\xDFen",
  "novel.noProperties": "Keine Eigenschaften.",
  "novel.newProperty": "Neue Eigenschaft",
  "novel.value": "Wert",
  "novel.add": "Hinzuf\xFCgen",
  "novel.removeProperty": "Eigenschaft entfernen",
  "novel.requiredProperty": "Pflichteigenschaft",
  "novel.listPlaceholder": "Eintrag, Eintrag, \u2026",
  "novel.propertyExists": "Die Eigenschaft \u201E{name}\u201C gibt es schon.",
  "novel.updateFailed": "Die Eigenschaften konnten nicht aktualisiert werden. Pr\xFCfe das Frontmatter der Notiz auf YAML-Fehler.",
  "novel.charactersTooltip": "Figuren in dieser Szene",
  "novel.locationsTooltip": "Orte in dieser Szene",
  "novel.groupsTooltip": "Gruppen in dieser Szene",
  "novel.loreTooltip": "Lore in dieser Szene",
  "novel.timelineTooltip": "Zeitleisten-Ereignisse in dieser Szene",
  "novel.noCharacters": "Noch keine Figuren in der Seitenleiste.",
  "novel.noLocations": "Noch keine Orte in der Seitenleiste.",
  "novel.noGroups": "Noch keine Gruppen in der Seitenleiste.",
  "novel.noLore": "Noch keine Lore in der Seitenleiste.",
  "novel.noTimeline": "Noch keine Zeitleisten-Ereignisse in der Seitenleiste.",
  "novel.filter": "Filtern\u2026",
  "novel.noMatches": "Keine Treffer.",
  "novel.openInSidebar": "{name} in der Seitenleiste \xF6ffnen",
  "novel.entryNotFound": "\u201E{name}\u201C ist nicht in der Universe-Builder-Seitenleiste.",
  "novel.removeFromScene": "Aus der Szene entfernen",
  "command.novelUnderline": "Unterstreichen umschalten",
  "command.novelStrikethrough": "Durchstreichen umschalten",
  "command.novelProperties": "Eigenschaften-Panel \xF6ffnen",
  "settings.novelHeading": "Roman-Szeneneditor",
  "settings.novel": "Roman-Szeneneditor verwenden",
  "settings.novelDesc": "F\xFCr Notizen im Haupteditor, die alle Pflichteigenschaften haben: f\xFCgt \xFCber dem Text eine Werkzeugleiste hinzu (Figuren / Orte / Gruppen / Lore / Zeitleiste der Szene, fett / kursiv / unterstrichen / durchgestrichen, Ausrichtung, Wortzahl) und blendet den Eigenschaftenblock oben in der Notiz aus.",
  "settings.novelProps": "Pflichteigenschaften",
  "settings.novelPropsDesc": "Durch Kommas getrennte Eigenschaftsnamen. Eine Notiz braucht alle, um im Roman-Szeneneditor ge\xF6ffnet zu werden.",
  "settings.novelLivePreview": "In der Live-Vorschau \xF6ffnen",
  "settings.novelLivePreviewDesc": "Schaltet diese Notizen beim \xD6ffnen in die Live-Vorschau.",
  "settings.novelHideProps": "Eigenschaften in der Notiz ausblenden",
  "settings.novelHidePropsDesc": "Blendet den Eigenschaftenblock oben in der Notiz aus; bearbeitet werden sie \xFCber die Schaltfl\xE4che Eigenschaften oder den Befehl \u201EEigenschaften-Panel \xF6ffnen\u201C.",
  "settings.novelWordCount": "Wortzahl anzeigen",
  "settings.novelWordCountDesc": "Zeigt die Wortzahl der Notiz, und der Auswahl, rechts in der Werkzeugleiste.",
  "settings.novelPropsButton": "Schaltfl\xE4che Eigenschaften anzeigen",
  "settings.novelPropsButtonDesc": "F\xFCgt der Werkzeugleiste eine Schaltfl\xE4che Eigenschaften zum Bearbeiten der Eigenschaften der Notiz hinzu. Der Befehl \u201EEigenschaften-Panel \xF6ffnen\u201C funktioniert in jedem Fall."
};

// src/locales/ru.ts
var ru = {
  // ── Боковая панель ──────────────────────────────────────────────────────────
  "tab.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438",
  "tab.locations": "\u041C\u0435\u0441\u0442\u0430",
  "tab.groups": "\u0413\u0440\u0443\u043F\u043F\u044B",
  "tab.lore": "\u041B\u043E\u0440",
  "tab.timeline": "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F",
  "bookmarks": "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  "bookmarks.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  "bookmarks.add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  "bookmarks.remove": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A",
  "bookmarks.button": "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430",
  "bookmarks.empty": "\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u044C \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0435\u0451 \u0437\u043D\u0430\u0447\u043E\u043A \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0451 \u0441\u044E\u0434\u0430.",
  "search.clear": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
  "search.characters": "\u041F\u043E\u0438\u0441\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439",
  "search.locations": "\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0441\u0442",
  "search.groups": "\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u043F\u043F",
  "search.lore": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043B\u043E\u0440\u0443",
  "search.timeline": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
  "search.bookmarks": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C",
  "search.tip.characters": "\u0418\u0449\u0435\u0442 \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u0433\u0440\u0443\u043F\u043F\u0435, \u043A\u043E\u0440\u0430\u0431\u043B\u044E \u0438 \u0434\u043E\u043C\u0443",
  "search.tip.locations": "\u0418\u0449\u0435\u0442 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438 \u0442\u0435\u043A\u0441\u0442\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "search.tip.groups": "\u0418\u0449\u0435\u0442 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438 \u0442\u0435\u043A\u0441\u0442\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "search.tip.lore": "\u0418\u0449\u0435\u0442 \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443 \u0438 \u0442\u0435\u043A\u0441\u0442\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "search.tip.timeline": "\u0418\u0449\u0435\u0442 \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443 \u0438 \u0442\u0435\u043A\u0441\u0442\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "search.tip.bookmarks": "\u0418\u0449\u0435\u0442 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0435 \u0442\u0430\u043A \u0436\u0435, \u043A\u0430\u043A \u0435\u0451 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
  "noResults.characters": "\u041D\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "noResults.locations": "\u041D\u0435\u0442 \u043C\u0435\u0441\u0442, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "noResults.groups": "\u041D\u0435\u0442 \u0433\u0440\u0443\u043F\u043F, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "noResults.lore": "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043B\u043E\u0440\u0430, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "noResults.timeline": "\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "noResults.bookmarks": "\u041D\u0435\u0442 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \xAB{query}\xBB.",
  "empty.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "empty.locations": "\u041C\u0435\u0441\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "empty.groups": "\u0413\u0440\u0443\u043F\u043F \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "empty.lore": "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u043B\u043E\u0440\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "empty.timeline": "\u0421\u043E\u0431\u044B\u0442\u0438\u0439 \u0432 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "nav.back": "\u041D\u0430\u0437\u0430\u0434",
  "nav.forward": "\u0412\u043F\u0435\u0440\u0451\u0434",
  "reload": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
  "reload.done": "Universe Builder \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D.",
  "new": "+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C",
  "metadata.edit": "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435",
  "metadata.title": "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435: {section}",
  "metadata.nothing": "\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043F\u043E\u043B\u0435\u0439.",
  "metadata.builtIn": "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 (\u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C)",
  "metadata.custom": "\u0421\u0432\u043E\u0438",
  "metadata.addPlaceholder": "\u041D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
  "metadata.add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
  "metadata.none": "\u0421\u0432\u043E\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
  "metadata.uses.one": "\u0417\u0430\u043F\u0438\u0441\u0435\u0439: {count}",
  "metadata.uses.other": "\u0417\u0430\u043F\u0438\u0441\u0435\u0439: {count}",
  "metadata.remove": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \xAB{value}\xBB",
  "metadata.exists": "\xAB{value}\xBB \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435.",
  "metadata.removeTitle": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u043E\u0451 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435?",
  "metadata.removeInUse": "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \xAB{value}\xBB: {count}. \u041E\u043D\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043D\u043E \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043E\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F.",
  "metadata.removeAction": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  "metadata.removeGroupType": "\u041D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \xAB{tab}\xBB \u043E\u043D\u0438 \u043E\u043A\u0430\u0436\u0443\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB{unassigned}\xBB.",
  "metadata.groupCharactersBy": "\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439 \u043F\u043E",
  "metadata.groupCharactersByDesc": "\u041A\u0430\u043A \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430 \xAB\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438\xBB. \u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0441\u0432\u043E\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u0432\u043E\u0438 \u0441\u0432\u0451\u0440\u043D\u0443\u0442\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B.",
  "grouping.ageAsc": "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 (\u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E)",
  "grouping.ageDesc": "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 (\u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E)",
  "character.noShip": "\u0411\u0435\u0437 \u043A\u043E\u0440\u0430\u0431\u043B\u044F",
  "character.noHome": "\u0411\u0435\u0437 \u0434\u043E\u043C\u0430",
  "metadata.modifyOptions": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: {field}",
  "card.unnamed": "\u0411\u0435\u0437 \u0438\u043C\u0435\u043D\u0438",
  "card.untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",
  "card.age": "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
  "card.home": "\u0414\u043E\u043C",
  "card.group": "\u0413\u0440\u0443\u043F\u043F\u0430",
  "card.ship": "\u041A\u043E\u0440\u0430\u0431\u043B\u044C",
  "card.pov": "POV",
  "card.povAdd": "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u043A POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "card.povRemove": "\u0421\u043D\u044F\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0443 POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "group.none": "\u0411\u0435\u0437 \u0433\u0440\u0443\u043F\u043F\u044B",
  "group.unassigned": "\u0411\u0435\u0437 \u0442\u0438\u043F\u0430",
  "group.subsidiaries": "\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0435",
  "locations.ships": "\u041A\u043E\u0440\u0430\u0431\u043B\u0438",
  "card.copy": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "card.copyFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435.",
  "card.modifyMd": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C MD",
  "card.edit": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "card.cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
  "card.save": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  "card.delete": "\u0423\u0414\u0410\u041B\u0418\u0422\u042C",
  "card.deleteLabel": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",
  "card.image": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  "card.editLabel": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435: {name}",
  "card.properties": "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430",
  "card.propertiesOf": "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430: {name}",
  "card.thisEntry": "\u044D\u0442\u0430 \u0437\u0430\u043F\u0438\u0441\u044C",
  // ── Сообщения ───────────────────────────────────────────────────────────────
  "confirm.cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
  "discard.title": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F?",
  "discard.message": "\u0412\u0430\u0448\u0438 \u043F\u0440\u0430\u0432\u043A\u0438 \u0432 \xAB{name}\xBB \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B.",
  "discard.action": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
  "overwrite.title": "\u0417\u0430\u043C\u0435\u0442\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u043C\u0435\u0441\u0442\u0435",
  "overwrite.message": "\xAB{name}\xBB \u0431\u044B\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0432\u043D\u0435 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0432\u044B \u043D\u0430\u0447\u0430\u043B\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0435\u0451 \u0432\u0430\u0448\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439?",
  "overwrite.action": "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C",
  "delete.title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?",
  "delete.message": "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C ({category}) \xAB{name}\xBB?",
  "delete.messagePlain": "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C \xAB{name}\xBB?",
  "delete.action": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  "category.characters": "\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "category.locations": "\u043C\u0435\u0441\u0442\u043E",
  "category.groups": "\u0433\u0440\u0443\u043F\u043F\u0430",
  "category.lore": "\u043B\u043E\u0440",
  "category.timeline": "\u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F",
  "notice.readFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \xAB{name}\xBB.",
  "notice.saved": "\xAB{name}\xBB \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E.",
  "notice.saveFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \xAB{name}\xBB.",
  "notice.savedNoPortrait": "\xAB{name}\xBB \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E, \u043D\u043E \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C.",
  "notice.deleted": "\xAB{name}\xBB \u0443\u0434\u0430\u043B\u0435\u043D\u043E.",
  "notice.deleteFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \xAB{name}\xBB.",
  "notice.linkNotFound": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \xAB{name}\xBB.",
  "notice.finishEditing": "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.",
  "notice.notAnImage": "\xAB{name}\xBB \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C.",
  "notice.noImages": "\u041D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u044D\u0442\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C.",
  "portrait.alreadySet": "\xAB{image}\xBB \u0443\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0440\u0442\u0440\u0435\u0442\u043E\u043C \u0434\u043B\u044F \xAB{name}\xBB.",
  "portrait.replaceTitle": "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u0442\u0440\u0435\u0442?",
  "portrait.replaceMessage": "\u0423 \xAB{name}\xBB \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043F\u043E\u0440\u0442\u0440\u0435\u0442 ({old}). \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E \u043D\u0430 {image}?",
  "portrait.replaceAction": "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C",
  "portrait.replaced": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB \u0437\u0430\u043C\u0435\u043D\u0451\u043D.",
  "portrait.added": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D.",
  "portrait.failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB.",
  "portrait.dropLabel": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442: \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u044E\u0434\u0430 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C",
  "portrait.dropTitle": "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u044E\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",
  "portrait.dropHint": "\u0418\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B. \u041E\u043D \u0441\u0442\u0430\u043D\u0435\u0442 \u043F\u043E\u0440\u0442\u0440\u0435\u0442\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 {folder}/.",
  "portrait.remove": "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  "portrait.inVault": "{name} (\u0443\u0436\u0435 \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435)",
  // ── Формы новых записей ─────────────────────────────────────────────────────
  "form.create": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C",
  "form.addNew": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C: {field}\u2026",
  "form.addNewTitle": "\u041D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: {field}",
  "form.noneOption": "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E",
  "form.yes": "\u0414\u0430",
  "form.no": "\u041D\u0435\u0442",
  "form.nameRequired": "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F.",
  "form.titleRequired": "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435.",
  "form.createdNoPortrait": "\xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D\u043E, \u043D\u043E \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C.",
  "form.name": "\u0418\u043C\u044F",
  "form.title": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
  "form.type": "\u0422\u0438\u043F",
  "form.description": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  "form.goals": "\u0426\u0435\u043B\u0438",
  "form.commaSeparated": "\u0427\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E",
  "form.commaSeparatedNames": "\u0418\u043C\u0435\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E",
  "character.new": "\u041D\u043E\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "character.namePlaceholder": "\u0418\u043C\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "character.role": "\u0420\u043E\u043B\u044C",
  "character.pov": "POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "character.age": "\u0412\u043E\u0437\u0440\u0430\u0441\u0442",
  "character.agePlaceholder": "\u043D\u0430\u043F\u0440. 34",
  "character.group": "\u0413\u0440\u0443\u043F\u043F\u0430",
  "character.groupPlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B",
  "character.ship": "\u041A\u043E\u0440\u0430\u0431\u043B\u044C",
  "character.shipPlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0440\u0430\u0431\u043B\u044F",
  "character.home": "\u0414\u043E\u043C",
  "character.homePlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043C\u0430",
  "character.physicalDesc": "\u0412\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C",
  "character.personality": "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
  "character.created": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D.",
  "location.new": "\u041D\u043E\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",
  "location.namePlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430",
  "location.parent": "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",
  "location.parentPlaceholder": "\u043D\u0430\u043F\u0440. \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E",
  "location.inhabitants": "\u041A\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0436\u0438\u0432\u0451\u0442",
  "location.secrets": "\u0422\u0430\u0439\u043D\u044B",
  "location.created": "\u041C\u0435\u0441\u0442\u043E \xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D\u043E.",
  "group.new": "\u041D\u043E\u0432\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430",
  "group.namePlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B",
  "group.subsidiaryOf": "\u0414\u043E\u0447\u0435\u0440\u043D\u044F\u044F \u0434\u043B\u044F",
  "group.subsidiaryOfDesc": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u044D\u0442\u0443 \u0433\u0440\u0443\u043F\u043F\u0443 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB\u0414\u043E\u0447\u0435\u0440\u043D\u0438\u0435\xBB \u0435\u0451 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B, \u0430 \u043D\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0435\u0451 \u0442\u0438\u043F\u0430.",
  "group.subsidiaryNone": "\u041D\u0435\u0442",
  "group.alignment": "\u041C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435",
  "group.enemies": "\u0412\u0440\u0430\u0433\u0438",
  "group.allies": "\u0421\u043E\u044E\u0437\u043D\u0438\u043A\u0438",
  "group.created": "\u0413\u0440\u0443\u043F\u043F\u0430 \xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",
  "lore.new": "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043B\u043E\u0440\u0430",
  "lore.titlePlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438",
  "lore.category": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
  "lore.content": "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
  "lore.created": "\u0417\u0430\u043F\u0438\u0441\u044C \u043B\u043E\u0440\u0430 \xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",
  "timeline.new": "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
  "timeline.date": "\u0414\u0430\u0442\u0430 / \u042D\u043F\u043E\u0445\u0430",
  "timeline.datePlaceholder": "\u043D\u0430\u043F\u0440. 342 \u0433\u043E\u0434 \u041D\u042D",
  "timeline.titlePlaceholder": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F",
  "timeline.characters": "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438",
  "timeline.locations": "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430",
  "timeline.created": "\u0421\u043E\u0431\u044B\u0442\u0438\u0435 \xAB{name}\xBB \u0441\u043E\u0437\u0434\u0430\u043D\u043E.",
  // ── Сохранённые значения (во frontmatter остаётся английский ключ) ──────────
  "role.protagonist": "\u041F\u0440\u043E\u0442\u0430\u0433\u043E\u043D\u0438\u0441\u0442",
  "role.antagonist": "\u0410\u043D\u0442\u0430\u0433\u043E\u043D\u0438\u0441\u0442",
  "role.supporting": "\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0439",
  "role.minor": "\u042D\u043F\u0438\u0437\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
  "locationType.planet": "\u041F\u043B\u0430\u043D\u0435\u0442\u0430",
  "locationType.dwarf planet": "\u041A\u0430\u0440\u043B\u0438\u043A\u043E\u0432\u0430\u044F \u043F\u043B\u0430\u043D\u0435\u0442\u0430",
  "locationType.moon": "\u0421\u043F\u0443\u0442\u043D\u0438\u043A",
  "locationType.station": "\u0421\u0442\u0430\u043D\u0446\u0438\u044F",
  "locationType.asteroid": "\u0410\u0441\u0442\u0435\u0440\u043E\u0438\u0434",
  "locationType.belt": "\u041F\u043E\u044F\u0441",
  "locationType.ship": "\u041A\u043E\u0440\u0430\u0431\u043B\u044C",
  "locationType.city": "\u0413\u043E\u0440\u043E\u0434",
  "locationType.region": "\u0420\u0435\u0433\u0438\u043E\u043D",
  "locationType.building": "\u0417\u0434\u0430\u043D\u0438\u0435",
  "locationType.landmark": "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
  "locationType.other": "\u0414\u0440\u0443\u0433\u043E\u0435",
  "groupType.corporation": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u044F",
  "groupType.government": "\u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
  "groupType.military": "\u0412\u043E\u0435\u043D\u043D\u044B\u0435",
  "groupType.criminal": "\u041A\u0440\u0438\u043C\u0438\u043D\u0430\u043B",
  "alignment.lawful": "\u0417\u0430\u043A\u043E\u043D\u043E\u043F\u043E\u0441\u043B\u0443\u0448\u043D\u043E\u0435",
  "alignment.neutral": "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0435",
  "alignment.chaotic": "\u0425\u0430\u043E\u0442\u0438\u0447\u043D\u043E\u0435",
  "loreCategory.history": "\u0418\u0441\u0442\u043E\u0440\u0438\u044F",
  "loreCategory.tech": "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
  "loreCategory.religion": "\u0420\u0435\u043B\u0438\u0433\u0438\u044F",
  "loreCategory.culture": "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u0430",
  "loreCategory.other": "\u0414\u0440\u0443\u0433\u043E\u0435",
  // ── Текст новых заметок ─────────────────────────────────────────────────────
  "note.origin": "\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
  "note.physicalDesc": "\u0412\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C",
  "note.occupation": "\u0420\u043E\u0434 \u0437\u0430\u043D\u044F\u0442\u0438\u0439",
  "note.resume": "\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
  "note.roleInStory": "\u0420\u043E\u043B\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438",
  "note.goals": "\u0426\u0435\u043B\u0438",
  "note.personality": "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
  "note.habits": "\u041F\u0440\u0438\u0432\u044B\u0447\u043A\u0438/\u041C\u0430\u043D\u0435\u0440\u044B",
  "note.earlierLife": "\u041F\u0440\u043E\u0448\u043B\u0430\u044F \u0436\u0438\u0437\u043D\u044C",
  "note.internalConflicts": "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B",
  "note.externalConflicts": "\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B",
  "note.partOf": "\u0412\u0445\u043E\u0434\u0438\u0442 \u0432",
  "note.description": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  "note.inhabitants": "\u041A\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0436\u0438\u0432\u0451\u0442",
  "note.secrets": "\u0422\u0430\u0439\u043D\u044B",
  "note.noneProvided": "_\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E._",
  "note.type": "\u0422\u0438\u043F",
  "note.subsidiaryOf": "\u0414\u043E\u0447\u0435\u0440\u043D\u044F\u044F \u0434\u043B\u044F",
  "note.alignment": "\u041C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435",
  "note.enemies": "\u0412\u0440\u0430\u0433\u0438",
  "note.allies": "\u0421\u043E\u044E\u0437\u043D\u0438\u043A\u0438",
  "note.category": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
  "note.noContent": "_\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E._",
  "note.dateEra": "\u0414\u0430\u0442\u0430/\u042D\u043F\u043E\u0445\u0430",
  "note.unknown": "_\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E_",
  "note.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438",
  "note.locations": "\u041C\u0435\u0441\u0442\u0430",
  // ── Перенос папки ───────────────────────────────────────────────────────────
  "migrate.title": "\u0423 Universe Builder \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u0432\u043E\u044F \u043F\u0430\u043F\u043A\u0430",
  "migrate.intro": "\u0412\u0430\u0448\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 Universe Builder \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432 \xAB{source}/\xBB \u2014 \u043F\u0430\u043F\u043A\u0435, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B. \u0422\u0435\u043F\u0435\u0440\u044C Universe Builder \u0445\u0440\u0430\u043D\u0438\u0442 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0432 \xAB{target}/\xBB.",
  "migrate.scope.one": "\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u043F\u043A\u0438 Characters, Groups, Locations, Lore, Timeline \u0438 {images} \u0438\u0437 \xAB{source}/\xBB. \u041D\u0430\u0439\u0434\u0435\u043D\u043E: {found}; \u0432\u0441\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u043E\u0432: {total}. \u0412\u0441\u0451 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432 \xAB{source}/\xBB \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0421\u0441\u044B\u043B\u043A\u0438 \u043C\u0435\u0436\u0434\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.",
  "migrate.scope.other": "\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u043F\u043A\u0438 Characters, Groups, Locations, Lore, Timeline \u0438 {images} \u0438\u0437 \xAB{source}/\xBB. \u041D\u0430\u0439\u0434\u0435\u043D\u043E: {found}; \u0432\u0441\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u043E\u0432: {total}. \u0412\u0441\u0451 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432 \xAB{source}/\xBB \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0421\u0441\u044B\u043B\u043A\u0438 \u043C\u0435\u0436\u0434\u0443 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.",
  "migrate.worldBuilder.enabled": "\u0412 \u044D\u0442\u043E\u043C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F\u043B\u0430\u0433\u0438\u043D World Builder (\u0432\u043A\u043B\u044E\u0447\u0451\u043D). \u041F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430 \u043E\u043D \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u044D\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438.",
  "migrate.worldBuilder.disabled": "\u0412 \u044D\u0442\u043E\u043C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F\u043B\u0430\u0433\u0438\u043D World Builder (\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D). \u041F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430 \u043E\u043D \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u044D\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438.",
  "migrate.note": "\u041F\u0443\u0442\u0438 \u043A \u043F\u0430\u043F\u043A\u0430\u043C, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u0445 \u0438\u043B\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u0445 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0430\u043F\u0440\u043E\u0441 Dataview \u043A \xAB{source}\xBB), \u043D\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F.",
  "migrate.move": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0432 {target}/ (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",
  "migrate.askLater": "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C {source}/, \u0441\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438",
  "migrate.decline": "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C {source}/, \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C",
  "migrate.customFolder": "Universe Builder \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E.",
  "migrate.nothingToMove": "\u0412 \xAB{folder}/\xBB \u043D\u0435\u0442 \u0437\u0430\u043C\u0435\u0442\u043E\u043A Universe Builder \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430.",
  "migrate.createFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E.",
  "migrate.moved.one": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E \u0432 \xAB{folder}/\xBB \u0444\u0430\u0439\u043B\u043E\u0432: {count}.",
  "migrate.moved.other": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E \u0432 \xAB{folder}/\xBB \u0444\u0430\u0439\u043B\u043E\u0432: {count}.",
  "migrate.skipped": "\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E (\u0444\u0430\u0439\u043B \u0441 \u0442\u0430\u043A\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C \u0443\u0436\u0435 \u0435\u0441\u0442\u044C): {count} \u2014 {files}.",
  "migrate.failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 (\u0441\u043C. \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430): {count} \u2014 {files}. \u0412\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u043A\u0435.",
  "migrate.leftovers": "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0432 \xAB{folder}/\xBB: {items}.",
  "cleanup.title": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB?",
  "cleanup.message": "\u0412\u0430\u0448\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \xAB{target}/\xBB, \u0430 \u0432 \xAB{folder}/\xBB \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0444\u0430\u0439\u043B\u043E\u0432. \u041E\u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C.",
  "cleanup.messageEmptyFolders": "\u0412\u0430\u0448\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \xAB{target}/\xBB, \u0430 \u0432 \xAB{folder}/\xBB \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0444\u0430\u0439\u043B\u043E\u0432 (\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0443\u0441\u0442\u044B\u0435 \u043F\u0430\u043F\u043A\u0438: {folders}). \u041E\u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C.",
  "cleanup.note": "\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u0430\u043F\u043A\u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 Obsidian \xAB\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B\xBB.",
  "cleanup.delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {folder}/",
  "cleanup.keep": "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C {folder}/",
  "cleanup.hasFiles": "\u0412 \xAB{folder}/\xBB \u0441\u043D\u043E\u0432\u0430 \u0435\u0441\u0442\u044C \u0444\u0430\u0439\u043B\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u043D\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",
  "cleanup.deleted": "\u041F\u0443\u0441\u0442\u0430\u044F \u043F\u0430\u043F\u043A\u0430 \xAB{folder}/\xBB \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",
  "cleanup.failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \xAB{folder}/\xBB (\u0441\u043C. \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430).",
  // ── Команды ─────────────────────────────────────────────────────────────────
  "command.openSidebar": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "command.newCharacter": "\u041D\u043E\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "command.newLocation": "\u041D\u043E\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E",
  "command.newGroup": "\u041D\u043E\u0432\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430",
  "command.newLore": "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043B\u043E\u0440\u0430",
  "command.newTimelineEvent": "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
  "command.moveWorldFolder": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 World",
  // ── Настройки ───────────────────────────────────────────────────────────────
  "settings.language": "\u042F\u0437\u044B\u043A",
  "settings.languageDesc": "\u042F\u0437\u044B\u043A \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438, \u0444\u043E\u0440\u043C, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u043B\u0430\u0433\u0438\u043D\u0430. \xAB\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\xBB \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u044F\u0437\u044B\u043A\u0443 Obsidian (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u203A \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u203A \u042F\u0437\u044B\u043A) \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u0435\u0441\u043B\u0438 Universe Builder \u043D\u0435 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043D \u043D\u0430 \u044D\u0442\u043E\u0442 \u044F\u0437\u044B\u043A.",
  "settings.languageAuto": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 ({language})",
  "settings.folder": "\u041F\u0430\u043F\u043A\u0430 \u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439",
  "settings.folderDesc": "\u041A\u043E\u0440\u043D\u0435\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A Universe Builder. \u0415\u0451 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438; \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0438\u0437 \u0441\u0442\u0430\u0440\u043E\u0439 \u043F\u0430\u043F\u043A\u0438 \xABWorld\xBB, \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \xAB\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0438\u0437 \u043F\u0430\u043F\u043A\u0438 World\xBB.",
  "settings.editor": "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
  "settings.editorDesc": "\u0427\u0442\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\xBB \u0443 \u0440\u0430\u0437\u0432\u0451\u0440\u043D\u0443\u0442\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438. \xAB\u0416\u0438\u0432\u043E\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\xBB \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 Obsidian (\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u043D\u043E \u043F\u0440\u0438 \u043D\u0430\u0431\u043E\u0440\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 [[\u0441\u0441\u044B\u043B\u043E\u043A]]); \xAB\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 Markdown\xBB \u2014 \u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u043F\u043E\u043B\u0435. \u0415\u0441\u043B\u0438 \u0436\u0438\u0432\u043E\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F Obsidian, \u043F\u043B\u0430\u0433\u0438\u043D \u0441\u0430\u043C \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 Markdown.",
  "settings.editorLive": "\u0416\u0438\u0432\u043E\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
  "settings.editorRaw": "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 Markdown",
  // ── Редактор сцен ──────────────────────────────────────────────────────────
  "novel.bold": "\u0416\u0438\u0440\u043D\u044B\u0439",
  "novel.italic": "\u041A\u0443\u0440\u0441\u0438\u0432",
  "novel.underline": "\u041F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
  "novel.strikethrough": "\u0417\u0430\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
  "novel.alignLeft": "\u041F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  "novel.alignCenter": "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
  "novel.alignRight": "\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  "novel.properties": "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430",
  "novel.propertiesTooltip": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
  "novel.words.one": "{count} \u0441\u043B\u043E\u0432\u043E",
  "novel.words.other": "\u0421\u043B\u043E\u0432: {count}",
  "novel.selected": "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043E: {count}",
  "novel.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  "novel.noProperties": "\u041D\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432.",
  "novel.newProperty": "\u041D\u043E\u0432\u043E\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E",
  "novel.value": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
  "novel.add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
  "novel.removeProperty": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E",
  "novel.requiredProperty": "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E",
  "novel.listPlaceholder": "\u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u2026",
  "novel.propertyExists": "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E \xAB{name}\xBB \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
  "novel.updateFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 frontmatter \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 YAML.",
  "novel.charactersTooltip": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438 \u0432 \u044D\u0442\u043E\u0439 \u0441\u0446\u0435\u043D\u0435",
  "novel.locationsTooltip": "\u041C\u0435\u0441\u0442\u0430 \u0432 \u044D\u0442\u043E\u0439 \u0441\u0446\u0435\u043D\u0435",
  "novel.groupsTooltip": "\u0413\u0440\u0443\u043F\u043F\u044B \u0432 \u044D\u0442\u043E\u0439 \u0441\u0446\u0435\u043D\u0435",
  "novel.loreTooltip": "\u041B\u043E\u0440 \u0432 \u044D\u0442\u043E\u0439 \u0441\u0446\u0435\u043D\u0435",
  "novel.timelineTooltip": "\u0421\u043E\u0431\u044B\u0442\u0438\u044F \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u044D\u0442\u043E\u0439 \u0441\u0446\u0435\u043D\u0435",
  "novel.noCharacters": "\u041D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439.",
  "novel.noLocations": "\u041D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043C\u0435\u0441\u0442.",
  "novel.noGroups": "\u041D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0433\u0440\u0443\u043F\u043F.",
  "novel.noLore": "\u041D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043B\u043E\u0440\u0430.",
  "novel.noTimeline": "\u041D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u0438.",
  "novel.filter": "\u0424\u0438\u043B\u044C\u0442\u0440\u2026",
  "novel.noMatches": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.",
  "novel.openInSidebar": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \xAB{name}\xBB \u043D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
  "novel.entryNotFound": "\xAB{name}\xBB \u043D\u0435\u0442 \u043D\u0430 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 Universe Builder.",
  "novel.removeFromScene": "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0441\u0446\u0435\u043D\u044B",
  "command.novelUnderline": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435",
  "command.novelStrikethrough": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435",
  "command.novelProperties": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432",
  "settings.novelHeading": "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0430",
  "settings.novel": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0430",
  "settings.novelDesc": "\u0414\u043B\u044F \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430: \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430\u0434 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 (\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438 / \u043C\u0435\u0441\u0442\u0430 / \u0433\u0440\u0443\u043F\u043F\u044B / \u043B\u043E\u0440 / \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0441\u0446\u0435\u043D\u044B, \u0436\u0438\u0440\u043D\u044B\u0439 / \u043A\u0443\u0440\u0441\u0438\u0432 / \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439 / \u0437\u0430\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439, \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435, \u0447\u0438\u0441\u043B\u043E \u0441\u043B\u043E\u0432) \u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0431\u043B\u043E\u043A \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438.",
  "settings.novelProps": "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430",
  "settings.novelPropsDesc": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E. \u0427\u0442\u043E\u0431\u044B \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0430\u0441\u044C \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0430, \u0443 \u043D\u0435\u0451 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u0441\u0435 \u043E\u043D\u0438.",
  "settings.novelLivePreview": "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0436\u0438\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",
  "settings.novelLivePreviewDesc": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u044D\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0432 \u0436\u0438\u0432\u043E\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438.",
  "settings.novelHideProps": "\u0421\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0432 \u0437\u0430\u043C\u0435\u0442\u043A\u0435",
  "settings.novelHidePropsDesc": "\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0431\u043B\u043E\u043A \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438; \u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430\xBB \u0438\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \xAB\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\xBB.",
  "settings.novelWordCount": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0441\u043B\u043E\u0432",
  "settings.novelWordCountDesc": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u0441\u043B\u043E\u0432 \u0432 \u0437\u0430\u043C\u0435\u0442\u043A\u0435 \u0438 \u0432 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432.",
  "settings.novelPropsButton": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430\xBB",
  "settings.novelPropsButtonDesc": "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430\xBB \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0437\u0430\u043C\u0435\u0442\u043A\u0438. \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \xAB\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\xBB \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435."
};

// src/locales/uk.ts
var uk = {
  // ── Бічна панель ────────────────────────────────────────────────────────────
  "tab.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456",
  "tab.locations": "\u041C\u0456\u0441\u0446\u044F",
  "tab.groups": "\u0413\u0440\u0443\u043F\u0438",
  "tab.lore": "\u041B\u043E\u0440",
  "tab.timeline": "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u044F",
  "bookmarks": "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  "bookmarks.close": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  "bookmarks.add": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A",
  "bookmarks.remove": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0456\u0437 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A",
  "bookmarks.button": "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430",
  "bookmarks.empty": "\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A \u0449\u0435 \u043D\u0435\u043C\u0430\u0454. \u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0456\u0442\u044C \u0437\u0430\u043F\u0438\u0441 \u0456 \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0439\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u043E\u043A \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0439\u043E\u0433\u043E \u0441\u044E\u0434\u0438.",
  "search.clear": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0448\u0443\u043A",
  "search.characters": "\u041F\u043E\u0448\u0443\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\u0432",
  "search.locations": "\u041F\u043E\u0448\u0443\u043A \u043C\u0456\u0441\u0446\u044C",
  "search.groups": "\u041F\u043E\u0448\u0443\u043A \u0433\u0440\u0443\u043F",
  "search.lore": "\u041F\u043E\u0448\u0443\u043A \u0443 \u043B\u043E\u0440\u0456",
  "search.timeline": "\u041F\u043E\u0448\u0443\u043A \u0443 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457",
  "search.bookmarks": "\u041F\u043E\u0448\u0443\u043A \u0443 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u0445",
  "search.tip.characters": "\u0428\u0443\u043A\u0430\u0454 \u0437\u0430 \u0456\u043C\u0435\u043D\u0435\u043C, \u0433\u0440\u0443\u043F\u043E\u044E, \u043A\u043E\u0440\u0430\u0431\u043B\u0435\u043C \u0456 \u0434\u043E\u043C\u043E\u043C",
  "search.tip.locations": "\u0428\u0443\u043A\u0430\u0454 \u0437\u0430 \u043D\u0430\u0437\u0432\u043E\u044E \u0442\u0430 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
  "search.tip.groups": "\u0428\u0443\u043A\u0430\u0454 \u0437\u0430 \u043D\u0430\u0437\u0432\u043E\u044E \u0442\u0430 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
  "search.tip.lore": "\u0428\u0443\u043A\u0430\u0454 \u0437\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0456 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
  "search.tip.timeline": "\u0428\u0443\u043A\u0430\u0454 \u0437\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C \u0456 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
  "search.tip.bookmarks": "\u0428\u0443\u043A\u0430\u0454 \u0432 \u043A\u043E\u0436\u043D\u0456\u0439 \u0437\u0430\u043A\u043B\u0430\u0434\u0446\u0456 \u0442\u0430\u043A \u0441\u0430\u043C\u043E, \u044F\u043A \u0457\u0457 \u0432\u043B\u0430\u0441\u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
  "noResults.characters": "\u041D\u0435\u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\u0432, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "noResults.locations": "\u041D\u0435\u043C\u0430\u0454 \u043C\u0456\u0441\u0446\u044C, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "noResults.groups": "\u041D\u0435\u043C\u0430\u0454 \u0433\u0440\u0443\u043F, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "noResults.lore": "\u041D\u0435\u043C\u0430\u0454 \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043B\u043E\u0440\u0443, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "noResults.timeline": "\u041D\u0435\u043C\u0430\u0454 \u043F\u043E\u0434\u0456\u0439 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "noResults.bookmarks": "\u041D\u0435\u043C\u0430\u0454 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \xAB{query}\xBB.",
  "empty.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\u0432 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454.",
  "empty.locations": "\u041C\u0456\u0441\u0446\u044C \u0449\u0435 \u043D\u0435\u043C\u0430\u0454.",
  "empty.groups": "\u0413\u0440\u0443\u043F \u0449\u0435 \u043D\u0435\u043C\u0430\u0454.",
  "empty.lore": "\u0417\u0430\u043F\u0438\u0441\u0456\u0432 \u043B\u043E\u0440\u0443 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454.",
  "empty.timeline": "\u041F\u043E\u0434\u0456\u0439 \u0443 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454.",
  "nav.back": "\u041D\u0430\u0437\u0430\u0434",
  "nav.forward": "\u0423\u043F\u0435\u0440\u0435\u0434",
  "reload": "\u041E\u043D\u043E\u0432\u0438\u0442\u0438",
  "reload.done": "Universe Builder \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E.",
  "new": "+ \u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",
  "metadata.edit": "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u0456",
  "metadata.title": "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u0456: {section}",
  "metadata.nothing": "\u0423 \u0446\u044C\u043E\u043C\u0443 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u043F\u043E\u043B\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F.",
  "metadata.builtIn": "\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0456 (\u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438)",
  "metadata.custom": "\u0412\u043B\u0430\u0441\u043D\u0456",
  "metadata.addPlaceholder": "\u041D\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
  "metadata.add": "\u0414\u043E\u0434\u0430\u0442\u0438",
  "metadata.none": "\u0412\u043B\u0430\u0441\u043D\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454.",
  "metadata.uses.one": "\u0417\u0430\u043F\u0438\u0441\u0456\u0432: {count}",
  "metadata.uses.other": "\u0417\u0430\u043F\u0438\u0441\u0456\u0432: {count}",
  "metadata.remove": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \xAB{value}\xBB",
  "metadata.exists": "\xAB{value}\xBB \u0432\u0436\u0435 \u0454 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443.",
  "metadata.removeTitle": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043B\u0430\u0441\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F?",
  "metadata.removeInUse": "\u0417\u0430\u043F\u0438\u0441\u0456\u0432 \u0437\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \xAB{value}\xBB: {count}. \u0412\u043E\u043D\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0443\u0442\u044C \u0446\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F, \u0430\u043B\u0435 \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u0439\u043E\u0433\u043E \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438\u043C\u0435.",
  "metadata.removeAction": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  "metadata.removeGroupType": "\u041D\u0430 \u0432\u043A\u043B\u0430\u0434\u0446\u0456 \xAB{tab}\xBB \u0432\u043E\u043D\u0438 \u043E\u043F\u0438\u043D\u044F\u0442\u044C\u0441\u044F \u0432 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 \xAB{unassigned}\xBB.",
  "metadata.groupCharactersBy": "\u0413\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\u0432 \u0437\u0430",
  "metadata.groupCharactersByDesc": "\u042F\u043A \u043F\u043E\u0434\u0456\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430 \xAB\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\xBB. \u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0440\u0456\u0430\u043D\u0442 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0456 \u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0456 \u0440\u043E\u0437\u0434\u0456\u043B\u0438.",
  "grouping.ageAsc": "\u0412\u0456\u043A (\u0437\u0430 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F\u043C)",
  "grouping.ageDesc": "\u0412\u0456\u043A (\u0437\u0430 \u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F\u043C)",
  "character.noShip": "\u0411\u0435\u0437 \u043A\u043E\u0440\u0430\u0431\u043B\u044F",
  "character.noHome": "\u0411\u0435\u0437 \u0434\u043E\u043C\u0443",
  "metadata.modifyOptions": "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438: {field}",
  "card.unnamed": "\u0411\u0435\u0437 \u0456\u043C\u0435\u043D\u0456",
  "card.untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438",
  "card.age": "\u0412\u0456\u043A",
  "card.home": "\u0414\u0456\u043C",
  "card.group": "\u0413\u0440\u0443\u043F\u0430",
  "card.ship": "\u041A\u043E\u0440\u0430\u0431\u0435\u043B\u044C",
  "card.pov": "POV",
  "card.povAdd": "\u041F\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u0438 \u044F\u043A POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "card.povRemove": "\u0417\u043D\u044F\u0442\u0438 \u043F\u043E\u0437\u043D\u0430\u0447\u043A\u0443 POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "group.none": "\u0411\u0435\u0437 \u0433\u0440\u0443\u043F\u0438",
  "group.unassigned": "\u0411\u0435\u0437 \u0442\u0438\u043F\u0443",
  "group.subsidiaries": "\u0414\u043E\u0447\u0456\u0440\u043D\u0456",
  "locations.ships": "\u041A\u043E\u0440\u0430\u0431\u043B\u0456",
  "card.copy": "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
  "card.copyFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0441\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u0435.",
  "card.modifyMd": "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 MD",
  "card.edit": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",
  "card.cancel": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  "card.save": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
  "card.delete": "\u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418",
  "card.deleteLabel": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441",
  "card.image": "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
  "card.editLabel": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F: {name}",
  "card.properties": "\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456",
  "card.propertiesOf": "\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456: {name}",
  "card.thisEntry": "\u0446\u0435\u0439 \u0437\u0430\u043F\u0438\u0441",
  // ── Повідомлення ────────────────────────────────────────────────────────────
  "confirm.cancel": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  "discard.title": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0438?",
  "discard.message": "\u0412\u0430\u0448\u0456 \u0437\u043C\u0456\u043D\u0438 \u0432 \xAB{name}\xBB \u043D\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E.",
  "discard.action": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0438",
  "overwrite.title": "\u041D\u043E\u0442\u0430\u0442\u043A\u0443 \u0437\u043C\u0456\u043D\u0435\u043D\u043E \u0432 \u0456\u043D\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456",
  "overwrite.message": "\xAB{name}\xBB \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E \u043F\u043E\u0437\u0430 \u0431\u0456\u0447\u043D\u043E\u044E \u043F\u0430\u043D\u0435\u043B\u043B\u044E \u043F\u0456\u0441\u043B\u044F \u0442\u043E\u0433\u043E, \u044F\u043A \u0432\u0438 \u043F\u043E\u0447\u0430\u043B\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0457\u0457 \u0432\u0430\u0448\u043E\u044E \u0432\u0435\u0440\u0441\u0456\u0454\u044E?",
  "overwrite.action": "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u0442\u0438",
  "delete.title": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441?",
  "delete.message": "\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043F\u0438\u0441 ({category}) \xAB{name}\xBB?",
  "delete.messagePlain": "\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043F\u0438\u0441 \xAB{name}\xBB?",
  "delete.action": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  "category.characters": "\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "category.locations": "\u043C\u0456\u0441\u0446\u0435",
  "category.groups": "\u0433\u0440\u0443\u043F\u0430",
  "category.lore": "\u043B\u043E\u0440",
  "category.timeline": "\u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u044F",
  "notice.readFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u0438 \xAB{name}\xBB.",
  "notice.saved": "\xAB{name}\xBB \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E.",
  "notice.saveFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \xAB{name}\xBB.",
  "notice.savedNoPortrait": "\xAB{name}\xBB \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E, \u0430\u043B\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0456\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F.",
  "notice.deleted": "\xAB{name}\xBB \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E.",
  "notice.deleteFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \xAB{name}\xBB.",
  "notice.linkNotFound": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u043D\u0430\u0439\u0442\u0438 \xAB{name}\xBB.",
  "notice.finishEditing": "\u0417\u0430\u0432\u0435\u0440\u0448\u0456\u0442\u044C \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443, \u043F\u0435\u0440\u0448 \u043D\u0456\u0436 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F.",
  "notice.notAnImage": "\xAB{name}\xBB \u043D\u0435 \u0454 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C.",
  "notice.noImages": "\u0416\u043E\u0434\u0435\u043D \u0456\u0437 \u0446\u0438\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 \u043D\u0435 \u0454 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C.",
  "portrait.alreadySet": "\xAB{image}\xBB \u0443\u0436\u0435 \u0454 \u043F\u043E\u0440\u0442\u0440\u0435\u0442\u043E\u043C \u0434\u043B\u044F \xAB{name}\xBB.",
  "portrait.replaceTitle": "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u043E\u0440\u0442\u0440\u0435\u0442?",
  "portrait.replaceMessage": "\xAB{name}\xBB \u0432\u0436\u0435 \u043C\u0430\u0454 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 ({old}). \u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u043D\u0430 {image}?",
  "portrait.replaceAction": "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438",
  "portrait.replaced": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB \u0437\u0430\u043C\u0456\u043D\u0435\u043D\u043E.",
  "portrait.added": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB \u0434\u043E\u0434\u0430\u043D\u043E.",
  "portrait.failed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0434\u043B\u044F \xAB{name}\xBB.",
  "portrait.dropLabel": "\u041F\u043E\u0440\u0442\u0440\u0435\u0442: \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u044E\u0434\u0438 \u0430\u0431\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u0432\u0438\u0431\u0440\u0430\u0442\u0438",
  "portrait.dropTitle": "\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u044E\u0434\u0438, \u0449\u043E\u0431 \u0456\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E \u0434\u043E \u0441\u0445\u043E\u0432\u0438\u0449\u0430",
  "portrait.dropHint": "\u0410\u0431\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0444\u0430\u0439\u043B. \u0412\u0456\u043D \u0441\u0442\u0430\u043D\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0443 \u0439 \u0431\u0443\u0434\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 \u0443 {folder}/.",
  "portrait.remove": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
  "portrait.inVault": "{name} (\u0443\u0436\u0435 \u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456)",
  // ── Форми нових записів ─────────────────────────────────────────────────────
  "form.create": "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",
  "form.addNew": "\u0414\u043E\u0434\u0430\u0442\u0438: {field}\u2026",
  "form.addNewTitle": "\u041D\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: {field}",
  "form.noneOption": "\u041D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E",
  "form.yes": "\u0422\u0430\u043A",
  "form.no": "\u041D\u0456",
  "form.nameRequired": "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0456\u043C'\u044F.",
  "form.titleRequired": "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443.",
  "form.createdNoPortrait": "\xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E, \u0430\u043B\u0435 \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0456\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F.",
  "form.name": "\u0406\u043C'\u044F",
  "form.title": "\u041D\u0430\u0437\u0432\u0430",
  "form.type": "\u0422\u0438\u043F",
  "form.description": "\u041E\u043F\u0438\u0441",
  "form.goals": "\u0426\u0456\u043B\u0456",
  "form.commaSeparated": "\u0427\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443",
  "form.commaSeparatedNames": "\u0406\u043C\u0435\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443",
  "character.new": "\u041D\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "character.namePlaceholder": "\u0406\u043C'\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
  "character.role": "\u0420\u043E\u043B\u044C",
  "character.pov": "POV-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "character.age": "\u0412\u0456\u043A",
  "character.agePlaceholder": "\u043D\u0430\u043F\u0440. 34",
  "character.group": "\u0413\u0440\u0443\u043F\u0430",
  "character.groupPlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u0433\u0440\u0443\u043F\u0438",
  "character.ship": "\u041A\u043E\u0440\u0430\u0431\u0435\u043B\u044C",
  "character.shipPlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u043A\u043E\u0440\u0430\u0431\u043B\u044F",
  "character.home": "\u0414\u0456\u043C",
  "character.homePlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u0434\u043E\u043C\u0443",
  "character.physicalDesc": "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0441\u0442\u044C",
  "character.personality": "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
  "character.created": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430 \xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E.",
  "location.new": "\u041D\u043E\u0432\u0435 \u043C\u0456\u0441\u0446\u0435",
  "location.namePlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u043C\u0456\u0441\u0446\u044F",
  "location.parent": "\u0411\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0435 \u043C\u0456\u0441\u0446\u0435",
  "location.parentPlaceholder": "\u043D\u0430\u043F\u0440. \u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0435 \u043A\u043E\u0440\u043E\u043B\u0456\u0432\u0441\u0442\u0432\u043E",
  "location.inhabitants": "\u0425\u0442\u043E \u0442\u0443\u0442 \u0436\u0438\u0432\u0435",
  "location.secrets": "\u0422\u0430\u0454\u043C\u043D\u0438\u0446\u0456",
  "location.created": "\u041C\u0456\u0441\u0446\u0435 \xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E.",
  "group.new": "\u041D\u043E\u0432\u0430 \u0433\u0440\u0443\u043F\u0430",
  "group.namePlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u0433\u0440\u0443\u043F\u0438",
  "group.subsidiaryOf": "\u0414\u043E\u0447\u0456\u0440\u043D\u044F \u0434\u043B\u044F",
  "group.subsidiaryOfDesc": "\u041F\u043E\u043A\u0430\u0437\u0443\u0454 \u0446\u044E \u0433\u0440\u0443\u043F\u0443 \u0432 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 \xAB\u0414\u043E\u0447\u0456\u0440\u043D\u0456\xBB \u0457\u0457 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u043E\u0457 \u0433\u0440\u0443\u043F\u0438, \u0430 \u043D\u0435 \u0432 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 \u0457\u0457 \u0442\u0438\u043F\u0443.",
  "group.subsidiaryNone": "\u041D\u0435\u043C\u0430\u0454",
  "group.alignment": "\u0421\u0432\u0456\u0442\u043E\u0433\u043B\u044F\u0434",
  "group.enemies": "\u0412\u043E\u0440\u043E\u0433\u0438",
  "group.allies": "\u0421\u043E\u044E\u0437\u043D\u0438\u043A\u0438",
  "group.created": "\u0413\u0440\u0443\u043F\u0443 \xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E.",
  "lore.new": "\u041D\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u043B\u043E\u0440\u0443",
  "lore.titlePlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u0437\u0430\u043F\u0438\u0441\u0443",
  "lore.category": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",
  "lore.content": "\u0417\u043C\u0456\u0441\u0442",
  "lore.created": "\u0417\u0430\u043F\u0438\u0441 \u043B\u043E\u0440\u0443 \xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E.",
  "timeline.new": "\u041D\u043E\u0432\u0430 \u043F\u043E\u0434\u0456\u044F \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457",
  "timeline.date": "\u0414\u0430\u0442\u0430 / \u0415\u043F\u043E\u0445\u0430",
  "timeline.datePlaceholder": "\u043D\u0430\u043F\u0440. 342 \u0440\u0456\u043A \u041D\u0415",
  "timeline.titlePlaceholder": "\u041D\u0430\u0437\u0432\u0430 \u043F\u043E\u0434\u0456\u0457",
  "timeline.characters": "\u041F\u043E\u0432'\u044F\u0437\u0430\u043D\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456",
  "timeline.locations": "\u041F\u043E\u0432'\u044F\u0437\u0430\u043D\u0456 \u043C\u0456\u0441\u0446\u044F",
  "timeline.created": "\u041F\u043E\u0434\u0456\u044E \xAB{name}\xBB \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E.",
  // ── Збережені значення (у frontmatter лишається англійський ключ) ───────────
  "role.protagonist": "\u041F\u0440\u043E\u0442\u0430\u0433\u043E\u043D\u0456\u0441\u0442",
  "role.antagonist": "\u0410\u043D\u0442\u0430\u0433\u043E\u043D\u0456\u0441\u0442",
  "role.supporting": "\u0414\u0440\u0443\u0433\u043E\u0440\u044F\u0434\u043D\u0438\u0439",
  "role.minor": "\u0415\u043F\u0456\u0437\u043E\u0434\u0438\u0447\u043D\u0438\u0439",
  "locationType.planet": "\u041F\u043B\u0430\u043D\u0435\u0442\u0430",
  "locationType.dwarf planet": "\u041A\u0430\u0440\u043B\u0438\u043A\u043E\u0432\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u0430",
  "locationType.moon": "\u0421\u0443\u043F\u0443\u0442\u043D\u0438\u043A",
  "locationType.station": "\u0421\u0442\u0430\u043D\u0446\u0456\u044F",
  "locationType.asteroid": "\u0410\u0441\u0442\u0435\u0440\u043E\u0457\u0434",
  "locationType.belt": "\u041F\u043E\u044F\u0441",
  "locationType.ship": "\u041A\u043E\u0440\u0430\u0431\u0435\u043B\u044C",
  "locationType.city": "\u041C\u0456\u0441\u0442\u043E",
  "locationType.region": "\u0420\u0435\u0433\u0456\u043E\u043D",
  "locationType.building": "\u0411\u0443\u0434\u0456\u0432\u043B\u044F",
  "locationType.landmark": "\u041F\u0430\u043C'\u044F\u0442\u043A\u0430",
  "locationType.other": "\u0406\u043D\u0448\u0435",
  "groupType.corporation": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0456\u044F",
  "groupType.government": "\u0423\u0440\u044F\u0434",
  "groupType.military": "\u0412\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0456",
  "groupType.criminal": "\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B",
  "alignment.lawful": "\u0417\u0430\u043A\u043E\u043D\u043E\u0441\u043B\u0443\u0445\u043D\u044F\u043D\u0438\u0439",
  "alignment.neutral": "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439",
  "alignment.chaotic": "\u0425\u0430\u043E\u0442\u0438\u0447\u043D\u0438\u0439",
  "loreCategory.history": "\u0406\u0441\u0442\u043E\u0440\u0456\u044F",
  "loreCategory.tech": "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457",
  "loreCategory.religion": "\u0420\u0435\u043B\u0456\u0433\u0456\u044F",
  "loreCategory.culture": "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u0430",
  "loreCategory.other": "\u0406\u043D\u0448\u0435",
  // ── Текст нових нотаток ─────────────────────────────────────────────────────
  "note.origin": "\u041F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
  "note.physicalDesc": "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0441\u0442\u044C",
  "note.occupation": "\u0420\u0456\u0434 \u0437\u0430\u043D\u044F\u0442\u044C",
  "note.resume": "\u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F",
  "note.roleInStory": "\u0420\u043E\u043B\u044C \u0432 \u0456\u0441\u0442\u043E\u0440\u0456\u0457",
  "note.goals": "\u0426\u0456\u043B\u0456",
  "note.personality": "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
  "note.habits": "\u0417\u0432\u0438\u0447\u043A\u0438/\u041C\u0430\u043D\u0435\u0440\u0438",
  "note.earlierLife": "\u041C\u0438\u043D\u0443\u043B\u0435 \u0436\u0438\u0442\u0442\u044F",
  "note.internalConflicts": "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0438",
  "note.externalConflicts": "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0438",
  "note.partOf": "\u0412\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043E",
  "note.description": "\u041E\u043F\u0438\u0441",
  "note.inhabitants": "\u0425\u0442\u043E \u0442\u0443\u0442 \u0436\u0438\u0432\u0435",
  "note.secrets": "\u0422\u0430\u0454\u043C\u043D\u0438\u0446\u0456",
  "note.noneProvided": "_\u041D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E._",
  "note.type": "\u0422\u0438\u043F",
  "note.subsidiaryOf": "\u0414\u043E\u0447\u0456\u0440\u043D\u044F \u0434\u043B\u044F",
  "note.alignment": "\u0421\u0432\u0456\u0442\u043E\u0433\u043B\u044F\u0434",
  "note.enemies": "\u0412\u043E\u0440\u043E\u0433\u0438",
  "note.allies": "\u0421\u043E\u044E\u0437\u043D\u0438\u043A\u0438",
  "note.category": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",
  "note.noContent": "_\u041F\u043E\u043A\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044C\u043E._",
  "note.dateEra": "\u0414\u0430\u0442\u0430/\u0415\u043F\u043E\u0445\u0430",
  "note.unknown": "_\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u043E_",
  "note.characters": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456",
  "note.locations": "\u041C\u0456\u0441\u0446\u044F",
  // ── Перенесення папки ───────────────────────────────────────────────────────
  "migrate.title": "Universe Builder \u0442\u0435\u043F\u0435\u0440 \u043C\u0430\u0454 \u0432\u043B\u0430\u0441\u043D\u0443 \u043F\u0430\u043F\u043A\u0443",
  "migrate.intro": "\u0412\u0430\u0448\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 Universe Builder \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0456 \u0432 \xAB{source}/\xBB \u2014 \u043F\u0430\u043F\u0446\u0456, \u044F\u043A\u0443 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0439 \u0456\u043D\u0448\u0456 \u043F\u043B\u0430\u0433\u0456\u043D\u0438. \u0422\u0435\u043F\u0435\u0440 Universe Builder \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0432 \xAB{target}/\xBB.",
  "migrate.scope.one": "\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u043F\u0430\u043F\u043A\u0438 Characters, Groups, Locations, Lore, Timeline \u0456 {images} \u0437 \xAB{source}/\xBB. \u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E: {found}; \u0443\u0441\u044C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0456\u0432: {total}. \u0423\u0441\u0435 \u0456\u043D\u0448\u0435 \u0432 \xAB{source}/\xBB \u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0456\u0441\u0446\u0456. \u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043C\u0456\u0436 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u043C\u0438 \u0439 \u0434\u0430\u043B\u0456 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C.",
  "migrate.scope.other": "\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u043F\u0430\u043F\u043A\u0438 Characters, Groups, Locations, Lore, Timeline \u0456 {images} \u0437 \xAB{source}/\xBB. \u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E: {found}; \u0443\u0441\u044C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0456\u0432: {total}. \u0423\u0441\u0435 \u0456\u043D\u0448\u0435 \u0432 \xAB{source}/\xBB \u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0456\u0441\u0446\u0456. \u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043C\u0456\u0436 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u043C\u0438 \u0439 \u0434\u0430\u043B\u0456 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C.",
  "migrate.worldBuilder.enabled": "\u0423 \u0446\u044C\u043E\u043C\u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043B\u0430\u0433\u0456\u043D World Builder (\u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E). \u041F\u0456\u0441\u043B\u044F \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0432\u0456\u043D \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0430\u0447\u0438\u0442\u0438\u043C\u0435 \u0446\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438.",
  "migrate.worldBuilder.disabled": "\u0423 \u0446\u044C\u043E\u043C\u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043B\u0430\u0433\u0456\u043D World Builder (\u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E). \u041F\u0456\u0441\u043B\u044F \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0432\u0456\u043D \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0430\u0447\u0438\u0442\u0438\u043C\u0435 \u0446\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438.",
  "migrate.note": "\u0428\u043B\u044F\u0445\u0438 \u0434\u043E \u043F\u0430\u043F\u043E\u043A, \u0443\u043A\u0430\u0437\u0430\u043D\u0456 \u0432 \u0456\u043D\u0448\u0438\u0445 \u043F\u043B\u0430\u0433\u0456\u043D\u0430\u0445 \u0447\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u0445 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0437\u0430\u043F\u0438\u0442 Dataview \u0434\u043E \xAB{source}\xBB), \u043D\u0435 \u043E\u043D\u043E\u0432\u043B\u044E\u044E\u0442\u044C\u0441\u044F.",
  "migrate.move": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0434\u043E {target}/ (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043E)",
  "migrate.askLater": "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 {source}/, \u0437\u0430\u043F\u0438\u0442\u0430\u0442\u0438 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
  "migrate.decline": "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 {source}/, \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u0438\u0442\u0430\u0442\u0438",
  "migrate.customFolder": "Universe Builder \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0432\u043B\u0430\u0441\u043D\u0443 \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB, \u0442\u043E\u0436 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0438 \u043D\u0456\u0447\u043E\u0433\u043E.",
  "migrate.nothingToMove": "\u0423 \xAB{folder}/\xBB \u043D\u0435\u043C\u0430\u0454 \u043D\u043E\u0442\u0430\u0442\u043E\u043A Universe Builder \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043D\u044F.",
  "migrate.createFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB, \u0442\u043E\u0436 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E.",
  "migrate.moved.one": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E \u0434\u043E \xAB{folder}/\xBB \u0444\u0430\u0439\u043B\u0456\u0432: {count}.",
  "migrate.moved.other": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u043E \u0434\u043E \xAB{folder}/\xBB \u0444\u0430\u0439\u043B\u0456\u0432: {count}.",
  "migrate.skipped": "\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E (\u0444\u0430\u0439\u043B \u0456\u0437 \u0442\u0430\u043A\u043E\u044E \u043D\u0430\u0437\u0432\u043E\u044E \u0432\u0436\u0435 \u0454): {count} \u2014 {files}.",
  "migrate.failed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 (\u0434\u0438\u0432. \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430): {count} \u2014 {files}. \u041F\u0438\u0442\u0430\u043D\u043D\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C\u0441\u044F \u043F\u0456\u0434 \u0447\u0430\u0441 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443.",
  "migrate.leftovers": "\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044F \u0432 \xAB{folder}/\xBB: {items}.",
  "cleanup.title": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044E \u043F\u0430\u043F\u043A\u0443 \xAB{folder}\xBB?",
  "cleanup.message": "\u0412\u0430\u0448\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0442\u0435\u043F\u0435\u0440 \u0443 \xAB{target}/\xBB, \u0430 \u0432 \xAB{folder}/\xBB \u043D\u0435 \u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044F \u0444\u0430\u0439\u043B\u0456\u0432. \u0412\u043E\u043D\u0430 \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F, \u0457\u0457 \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438.",
  "cleanup.messageEmptyFolders": "\u0412\u0430\u0448\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0442\u0435\u043F\u0435\u0440 \u0443 \xAB{target}/\xBB, \u0430 \u0432 \xAB{folder}/\xBB \u043D\u0435 \u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044F \u0444\u0430\u0439\u043B\u0456\u0432 (\u043B\u0438\u0448\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456 \u043F\u0430\u043F\u043A\u0438: {folders}). \u0412\u043E\u043D\u0430 \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F, \u0457\u0457 \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438.",
  "cleanup.note": "\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u0456 \u043F\u0430\u043F\u043A\u0438 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u044E\u0442\u044C \u0434\u043E \u043A\u043E\u0448\u0438\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F Obsidian \xAB\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u0456 \u0444\u0430\u0439\u043B\u0438\xBB.",
  "cleanup.delete": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 {folder}/",
  "cleanup.keep": "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 {folder}/",
  "cleanup.hasFiles": "\u0423 \xAB{folder}/\xBB \u0437\u043D\u043E\u0432\u0443 \u0454 \u0444\u0430\u0439\u043B\u0438, \u0442\u043E\u0436 \u0457\u0457 \u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E.",
  "cleanup.deleted": "\u041F\u043E\u0440\u043E\u0436\u043D\u044E \u043F\u0430\u043F\u043A\u0443 \xAB{folder}/\xBB \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E.",
  "cleanup.failed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \xAB{folder}/\xBB (\u0434\u0438\u0432. \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430).",
  // ── Команди ─────────────────────────────────────────────────────────────────
  "command.openSidebar": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0431\u0456\u0447\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C",
  "command.newCharacter": "\u041D\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436",
  "command.newLocation": "\u041D\u043E\u0432\u0435 \u043C\u0456\u0441\u0446\u0435",
  "command.newGroup": "\u041D\u043E\u0432\u0430 \u0433\u0440\u0443\u043F\u0430",
  "command.newLore": "\u041D\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u043B\u043E\u0440\u0443",
  "command.newTimelineEvent": "\u041D\u043E\u0432\u0430 \u043F\u043E\u0434\u0456\u044F \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457",
  "command.moveWorldFolder": "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0437 \u043F\u0430\u043F\u043A\u0438 World",
  // ── Налаштування ────────────────────────────────────────────────────────────
  "settings.language": "\u041C\u043E\u0432\u0430",
  "settings.languageDesc": "\u041C\u043E\u0432\u0430 \u0431\u0456\u0447\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456, \u0444\u043E\u0440\u043C, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u0456 \u0448\u0430\u0431\u043B\u043E\u043D\u0456\u0432 \u043D\u043E\u0432\u0438\u0445 \u043D\u043E\u0442\u0430\u0442\u043E\u043A \u043F\u043B\u0430\u0433\u0456\u043D\u0430. \xAB\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E\xBB \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043C\u043E\u0432\u0456 Obsidian (\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u203A \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456 \u203A \u041C\u043E\u0432\u0430) \u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443, \u044F\u043A\u0449\u043E Universe Builder \u043D\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0435\u043D\u043E \u0446\u0456\u0454\u044E \u043C\u043E\u0432\u043E\u044E.",
  "settings.languageAuto": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E ({language})",
  "settings.folder": "\u041F\u0430\u043F\u043A\u0430 \u0432\u0441\u0435\u0441\u0432\u0456\u0442\u0443",
  "settings.folderDesc": "\u041A\u043E\u0440\u0435\u043D\u0435\u0432\u0430 \u043F\u0430\u043F\u043A\u0430 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u043D\u043E\u0442\u0430\u0442\u043E\u043A Universe Builder. \u0407\u0457 \u0437\u043C\u0456\u043D\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u044F\u0432\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438; \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0437\u0456 \u0441\u0442\u0430\u0440\u043E\u0457 \u043F\u0430\u043F\u043A\u0438 \xABWorld\xBB, \u0432\u0438\u043A\u043E\u043D\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \xAB\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0437 \u043F\u0430\u043F\u043A\u0438 World\xBB.",
  "settings.editor": "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0431\u0456\u0447\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",
  "settings.editorDesc": "\u0429\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438\xBB \u0440\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443. \xAB\u0416\u0438\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\xBB \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 Obsidian (\u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u0434\u043D\u043E \u043F\u0456\u0434 \u0447\u0430\u0441 \u043D\u0430\u0431\u043E\u0440\u0443, \u043F\u0456\u0434\u043A\u0430\u0437\u043A\u0438 [[\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u044C]]); \xAB\u0421\u0438\u0440\u0438\u0439 Markdown\xBB \u2014 \u043F\u0440\u043E\u0441\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0435 \u043F\u043E\u043B\u0435. \u042F\u043A\u0449\u043E \u0436\u0438\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 \u043F\u0456\u0441\u043B\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F Obsidian, \u043F\u043B\u0430\u0433\u0456\u043D \u0441\u0430\u043C \u043F\u0435\u0440\u0435\u0439\u0434\u0435 \u043D\u0430 \u0441\u0438\u0440\u0438\u0439 Markdown.",
  "settings.editorLive": "\u0416\u0438\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",
  "settings.editorRaw": "\u0421\u0438\u0440\u0438\u0439 Markdown",
  // ── Редактор сцен ──────────────────────────────────────────────────────────
  "novel.bold": "\u0416\u0438\u0440\u043D\u0438\u0439",
  "novel.italic": "\u041A\u0443\u0440\u0441\u0438\u0432",
  "novel.underline": "\u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
  "novel.strikethrough": "\u0417\u0430\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
  "novel.alignLeft": "\u0417\u0430 \u043B\u0456\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
  "novel.alignCenter": "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
  "novel.alignRight": "\u0417\u0430 \u043F\u0440\u0430\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
  "novel.properties": "\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456",
  "novel.propertiesTooltip": "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",
  "novel.words.one": "{count} \u0441\u043B\u043E\u0432\u043E",
  "novel.words.other": "\u0421\u043B\u0456\u0432: {count}",
  "novel.selected": "\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E: {count}",
  "novel.close": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
  "novel.noProperties": "\u041D\u0435\u043C\u0430\u0454 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439.",
  "novel.newProperty": "\u041D\u043E\u0432\u0430 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044C",
  "novel.value": "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
  "novel.add": "\u0414\u043E\u0434\u0430\u0442\u0438",
  "novel.removeProperty": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044C",
  "novel.requiredProperty": "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0430 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044C",
  "novel.listPlaceholder": "\u0435\u043B\u0435\u043C\u0435\u043D\u0442, \u0435\u043B\u0435\u043C\u0435\u043D\u0442, \u2026",
  "novel.propertyExists": "\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044C \xAB{name}\xBB \u0443\u0436\u0435 \u0456\u0441\u043D\u0443\u0454.",
  "novel.updateFailed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 frontmatter \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 YAML.",
  "novel.charactersTooltip": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456 \u0432 \u0446\u0456\u0439 \u0441\u0446\u0435\u043D\u0456",
  "novel.locationsTooltip": "\u041C\u0456\u0441\u0446\u044F \u0432 \u0446\u0456\u0439 \u0441\u0446\u0435\u043D\u0456",
  "novel.groupsTooltip": "\u0413\u0440\u0443\u043F\u0438 \u0432 \u0446\u0456\u0439 \u0441\u0446\u0435\u043D\u0456",
  "novel.loreTooltip": "\u041B\u043E\u0440 \u0443 \u0446\u0456\u0439 \u0441\u0446\u0435\u043D\u0456",
  "novel.timelineTooltip": "\u041F\u043E\u0434\u0456\u0457 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457 \u0432 \u0446\u0456\u0439 \u0441\u0446\u0435\u043D\u0456",
  "novel.noCharacters": "\u041D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456\u0432.",
  "novel.noLocations": "\u041D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043C\u0456\u0441\u0446\u044C.",
  "novel.noGroups": "\u041D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u0433\u0440\u0443\u043F.",
  "novel.noLore": "\u041D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043B\u043E\u0440\u0443.",
  "novel.noTimeline": "\u041D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043F\u043E\u0434\u0456\u0439 \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u0457.",
  "novel.filter": "\u0424\u0456\u043B\u044C\u0442\u0440\u2026",
  "novel.noMatches": "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E.",
  "novel.openInSidebar": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \xAB{name}\xBB \u043D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456",
  "novel.entryNotFound": "\xAB{name}\xBB \u043D\u0435\u043C\u0430\u0454 \u043D\u0430 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456 Universe Builder.",
  "novel.removeFromScene": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437\u0456 \u0441\u0446\u0435\u043D\u0438",
  "command.novelUnderline": "\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F",
  "command.novelStrikethrough": "\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0430\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F",
  "command.novelProperties": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u0430\u043D\u0435\u043B\u044C \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439",
  "settings.novelHeading": "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0443",
  "settings.novel": "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0443",
  "settings.novelDesc": "\u0414\u043B\u044F \u043D\u043E\u0442\u0430\u0442\u043E\u043A \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0456, \u0449\u043E \u043C\u0430\u044E\u0442\u044C \u0443\u0441\u0456 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456: \u0434\u043E\u0434\u0430\u0454 \u043D\u0430\u0434 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043F\u0430\u043D\u0435\u043B\u044C \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432 (\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0456 / \u043C\u0456\u0441\u0446\u044F / \u0433\u0440\u0443\u043F\u0438 / \u043B\u043E\u0440 / \u0445\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0441\u0446\u0435\u043D\u0438, \u0436\u0438\u0440\u043D\u0438\u0439 / \u043A\u0443\u0440\u0441\u0438\u0432 / \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439 / \u0437\u0430\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439, \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F, \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u043B\u0456\u0432) \u0456 \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0454 \u0431\u043B\u043E\u043A \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u043E\u0442\u0430\u0442\u043A\u0438.",
  "settings.novelProps": "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456",
  "settings.novelPropsDesc": "\u041D\u0430\u0437\u0432\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443. \u0429\u043E\u0431 \u043D\u043E\u0442\u0430\u0442\u043A\u0430 \u0432\u0456\u0434\u043A\u0440\u0438\u043B\u0430\u0441\u044F \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0456 \u0441\u0446\u0435\u043D \u0440\u043E\u043C\u0430\u043D\u0443, \u0432\u043E\u043D\u0430 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u043C\u0430\u0442\u0438 \u0457\u0445 \u0443\u0441\u0456.",
  "settings.novelLivePreview": "\u0412\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0456 \u0436\u0438\u0432\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443",
  "settings.novelLivePreviewDesc": "\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u0442\u0438 \u0446\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0432 \u0436\u0438\u0432\u0438\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F.",
  "settings.novelHideProps": "\u041F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456 \u0432 \u043D\u043E\u0442\u0430\u0442\u0446\u0456",
  "settings.novelHidePropsDesc": "\u041F\u0440\u0438\u0445\u043E\u0432\u0443\u0454 \u0431\u043B\u043E\u043A \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u043E\u0442\u0430\u0442\u043A\u0438; \u0457\u0445 \u043C\u043E\u0436\u043D\u0430 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u043E\u044E \xAB\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456\xBB \u0430\u0431\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u044E \xAB\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u0430\u043D\u0435\u043B\u044C \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439\xBB.",
  "settings.novelWordCount": "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u043B\u0456\u0432",
  "settings.novelWordCountDesc": "\u041F\u043E\u043A\u0430\u0437\u0443\u0454 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u043B\u0456\u0432 \u0443 \u043D\u043E\u0442\u0430\u0442\u0446\u0456 \u0442\u0430 \u0443 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u0456 \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432.",
  "settings.novelPropsButton": "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456\xBB",
  "settings.novelPropsButtonDesc": "\u0414\u043E\u0434\u0430\u0454 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0412\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0456\xBB \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u043E\u0442\u0430\u0442\u043A\u0438. \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \xAB\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u0430\u043D\u0435\u043B\u044C \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u0435\u0439\xBB \u043F\u0440\u0430\u0446\u044E\u0454 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0430\u0437\u0456."
};

// src/locales/zh.ts
var zh = {
  // ── 侧边栏 ──────────────────────────────────────────────────────────────────
  "tab.characters": "\u89D2\u8272",
  "tab.locations": "\u5730\u70B9",
  "tab.groups": "\u7EC4\u7EC7",
  "tab.lore": "\u8BBE\u5B9A",
  "tab.timeline": "\u65F6\u95F4\u7EBF",
  "bookmarks": "\u4E66\u7B7E",
  "bookmarks.close": "\u5173\u95ED\u4E66\u7B7E",
  "bookmarks.add": "\u6DFB\u52A0\u4E66\u7B7E",
  "bookmarks.remove": "\u79FB\u9664\u4E66\u7B7E",
  "bookmarks.button": "\u4E66\u7B7E",
  "bookmarks.empty": "\u8FD8\u6CA1\u6709\u4E66\u7B7E\u3002\u5C55\u5F00\u4E00\u4E2A\u6761\u76EE\u5E76\u70B9\u51FB\u5B83\u7684\u4E66\u7B7E\u56FE\u6807\uFF0C\u5373\u53EF\u5C06\u5176\u6DFB\u52A0\u5230\u8FD9\u91CC\u3002",
  "search.clear": "\u6E05\u9664\u641C\u7D22",
  "search.characters": "\u641C\u7D22\u89D2\u8272",
  "search.locations": "\u641C\u7D22\u5730\u70B9",
  "search.groups": "\u641C\u7D22\u7EC4\u7EC7",
  "search.lore": "\u641C\u7D22\u8BBE\u5B9A",
  "search.timeline": "\u641C\u7D22\u65F6\u95F4\u7EBF",
  "search.bookmarks": "\u641C\u7D22\u4E66\u7B7E",
  "search.tip.characters": "\u5339\u914D\u540D\u79F0\u3001\u7EC4\u7EC7\u3001\u98DE\u8239\u548C\u5BB6\u4E61",
  "search.tip.locations": "\u5339\u914D\u540D\u79F0\u548C\u7B14\u8BB0\u6B63\u6587",
  "search.tip.groups": "\u5339\u914D\u540D\u79F0\u548C\u7B14\u8BB0\u6B63\u6587",
  "search.tip.lore": "\u5339\u914D\u6807\u9898\u548C\u7B14\u8BB0\u6B63\u6587",
  "search.tip.timeline": "\u5339\u914D\u6807\u9898\u548C\u7B14\u8BB0\u6B63\u6587",
  "search.tip.bookmarks": "\u6309\u5404\u4E66\u7B7E\u6240\u5C5E\u6807\u7B7E\u9875\u7684\u65B9\u5F0F\u8FDB\u884C\u5339\u914D",
  "noResults.characters": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u89D2\u8272\u3002",
  "noResults.locations": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u5730\u70B9\u3002",
  "noResults.groups": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u7EC4\u7EC7\u3002",
  "noResults.lore": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u8BBE\u5B9A\u6761\u76EE\u3002",
  "noResults.timeline": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u65F6\u95F4\u7EBF\u4E8B\u4EF6\u3002",
  "noResults.bookmarks": "\u6CA1\u6709\u4E0E\u201C{query}\u201D\u5339\u914D\u7684\u4E66\u7B7E\u3002",
  "empty.characters": "\u8FD8\u6CA1\u6709\u89D2\u8272\u3002",
  "empty.locations": "\u8FD8\u6CA1\u6709\u5730\u70B9\u3002",
  "empty.groups": "\u8FD8\u6CA1\u6709\u7EC4\u7EC7\u3002",
  "empty.lore": "\u8FD8\u6CA1\u6709\u8BBE\u5B9A\u6761\u76EE\u3002",
  "empty.timeline": "\u65F6\u95F4\u7EBF\u4E0A\u8FD8\u6CA1\u6709\u4E8B\u4EF6\u3002",
  "nav.back": "\u540E\u9000",
  "nav.forward": "\u524D\u8FDB",
  "reload": "\u91CD\u65B0\u52A0\u8F7D",
  "reload.done": "Universe Builder \u5DF2\u91CD\u65B0\u52A0\u8F7D\u3002",
  "new": "+ \u65B0\u5EFA",
  "metadata.edit": "\u7F16\u8F91\u5143\u6570\u636E",
  "metadata.title": "\u7F16\u8F91\u5143\u6570\u636E\uFF1A{section}",
  "metadata.nothing": "\u6B64\u5206\u533A\u6682\u65E0\u53EF\u7F16\u8F91\u7684\u5B57\u6BB5\u3002",
  "metadata.builtIn": "\u5185\u7F6E\uFF08\u65E0\u6CD5\u5220\u9664\uFF09",
  "metadata.custom": "\u81EA\u5B9A\u4E49",
  "metadata.addPlaceholder": "\u65B0\u503C",
  "metadata.add": "\u6DFB\u52A0",
  "metadata.none": "\u6682\u65E0\u81EA\u5B9A\u4E49\u503C\u3002",
  "metadata.uses.one": "{count} \u4E2A\u6761\u76EE",
  "metadata.uses.other": "{count} \u4E2A\u6761\u76EE",
  "metadata.remove": "\u5220\u9664\u201C{value}\u201D",
  "metadata.exists": "\u201C{value}\u201D\u5DF2\u662F\u9009\u9879\u3002",
  "metadata.removeTitle": "\u5220\u9664\u81EA\u5B9A\u4E49\u503C\uFF1F",
  "metadata.removeInUse": "\u4F7F\u7528\u201C{value}\u201D\u7684\u6761\u76EE\uFF1A{count}\u3002\u8FD9\u4E9B\u6761\u76EE\u4F1A\u4FDD\u7559\u8BE5\u503C\uFF0C\u4F46\u65B0\u5EFA\u6761\u76EE\u65F6\u5C06\u4E0D\u518D\u63D0\u4F9B\u6B64\u9009\u9879\u3002",
  "metadata.removeAction": "\u5220\u9664",
  "metadata.removeGroupType": "\u5728\u201C{tab}\u201D\u6807\u7B7E\u9875\u4E2D\uFF0C\u5B83\u4EEC\u5C06\u663E\u793A\u5728\u201C{unassigned}\u201D\u4E0B\u3002",
  "metadata.groupCharactersBy": "\u89D2\u8272\u5206\u7EC4\u4F9D\u636E",
  "metadata.groupCharactersByDesc": "\u89D2\u8272\u6807\u7B7E\u9875\u7684\u5212\u5206\u65B9\u5F0F\u3002\u6BCF\u79CD\u65B9\u5F0F\u90FD\u4FDD\u7559\u5404\u81EA\u7684\u62D6\u653E\u987A\u5E8F\u548C\u6298\u53E0\u72B6\u6001\u3002",
  "grouping.ageAsc": "\u5E74\u9F84\uFF08\u5347\u5E8F\uFF09",
  "grouping.ageDesc": "\u5E74\u9F84\uFF08\u964D\u5E8F\uFF09",
  "character.noShip": "\u65E0\u98DE\u8239",
  "character.noHome": "\u65E0\u5BB6\u4E61",
  "metadata.modifyOptions": "\u4FEE\u6539{field}\u9009\u9879",
  "card.unnamed": "\u672A\u547D\u540D",
  "card.untitled": "\u65E0\u6807\u9898",
  "card.age": "\u5E74\u9F84",
  "card.home": "\u5BB6\u4E61",
  "card.group": "\u7EC4\u7EC7",
  "card.ship": "\u98DE\u8239",
  "card.pov": "\u89C6\u89D2",
  "card.povAdd": "\u6807\u8BB0\u4E3A\u89C6\u89D2\u89D2\u8272",
  "card.povRemove": "\u53D6\u6D88\u89C6\u89D2\u89D2\u8272\u6807\u8BB0",
  "group.none": "\u65E0\u7EC4\u7EC7",
  "group.unassigned": "\u672A\u5206\u7C7B",
  "group.subsidiaries": "\u4E0B\u5C5E\u7EC4\u7EC7",
  "locations.ships": "\u98DE\u8239",
  "card.copy": "\u590D\u5236",
  "card.copyFailed": "\u65E0\u6CD5\u590D\u5236\u6240\u9009\u5185\u5BB9\u3002",
  "card.modifyMd": "\u4FEE\u6539 MD",
  "card.edit": "\u7F16\u8F91",
  "card.cancel": "\u53D6\u6D88",
  "card.save": "\u4FDD\u5B58",
  "card.delete": "\u5220\u9664",
  "card.deleteLabel": "\u5220\u9664\u6761\u76EE",
  "card.image": "\u56FE\u7247",
  "card.editLabel": "\u7F16\u8F91 {name}",
  "card.properties": "\u5C5E\u6027",
  "card.propertiesOf": "{name} \u7684\u5C5E\u6027",
  "card.thisEntry": "\u6B64\u6761\u76EE",
  // ── 消息 ────────────────────────────────────────────────────────────────────
  "confirm.cancel": "\u53D6\u6D88",
  "discard.title": "\u653E\u5F03\u66F4\u6539\uFF1F",
  "discard.message": "\u4F60\u5BF9\u201C{name}\u201D\u7684\u4FEE\u6539\u5C1A\u672A\u4FDD\u5B58\u3002",
  "discard.action": "\u653E\u5F03",
  "overwrite.title": "\u7B14\u8BB0\u5DF2\u5728\u522B\u5904\u88AB\u4FEE\u6539",
  "overwrite.message": "\u5728\u4F60\u5F00\u59CB\u7F16\u8F91\u540E\uFF0C\u201C{name}\u201D\u5728\u4FA7\u8FB9\u680F\u4E4B\u5916\u88AB\u4FEE\u6539\u8FC7\u3002\u8981\u7528\u4F60\u7684\u7248\u672C\u8986\u76D6\u5B83\u5417\uFF1F",
  "overwrite.action": "\u8986\u76D6",
  "delete.title": "\u5220\u9664\u6761\u76EE\uFF1F",
  "delete.message": "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A{category}\u6761\u76EE\u201C{name}\u201D\u5417\uFF1F",
  "delete.messagePlain": "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u6761\u76EE\u201C{name}\u201D\u5417\uFF1F",
  "delete.action": "\u5220\u9664",
  "category.characters": "\u89D2\u8272",
  "category.locations": "\u5730\u70B9",
  "category.groups": "\u7EC4\u7EC7",
  "category.lore": "\u8BBE\u5B9A",
  "category.timeline": "\u65F6\u95F4\u7EBF",
  "notice.readFailed": "\u65E0\u6CD5\u8BFB\u53D6\u201C{name}\u201D\u3002",
  "notice.saved": "\u5DF2\u4FDD\u5B58\u201C{name}\u201D\u3002",
  "notice.saveFailed": "\u65E0\u6CD5\u4FDD\u5B58\u201C{name}\u201D\u3002",
  "notice.savedNoPortrait": "\u5DF2\u4FDD\u5B58\u201C{name}\u201D\uFF0C\u4F46\u65E0\u6CD5\u5BFC\u5165\u5176\u8096\u50CF\u3002",
  "notice.deleted": "\u5DF2\u5220\u9664\u201C{name}\u201D\u3002",
  "notice.deleteFailed": "\u65E0\u6CD5\u5220\u9664\u201C{name}\u201D\u3002",
  "notice.linkNotFound": "\u627E\u4E0D\u5230\u201C{name}\u201D\u3002",
  "notice.finishEditing": "\u8BF7\u5148\u5B8C\u6210\u6B63\u5728\u7F16\u8F91\u7684\u6761\u76EE\uFF0C\u518D\u62D6\u653E\u56FE\u7247\u3002",
  "notice.notAnImage": "\u201C{name}\u201D\u4E0D\u662F\u56FE\u7247\u3002",
  "notice.noImages": "\u8FD9\u4E9B\u6587\u4EF6\u90FD\u4E0D\u662F\u56FE\u7247\u3002",
  "portrait.alreadySet": "\u201C{image}\u201D\u5DF2\u7ECF\u662F\u201C{name}\u201D\u7684\u8096\u50CF\u3002",
  "portrait.replaceTitle": "\u66FF\u6362\u8096\u50CF\uFF1F",
  "portrait.replaceMessage": "\u201C{name}\u201D\u5DF2\u6709\u8096\u50CF\uFF08{old}\uFF09\u3002\u8981\u66FF\u6362\u4E3A {image} \u5417\uFF1F",
  "portrait.replaceAction": "\u66FF\u6362",
  "portrait.replaced": "\u5DF2\u66FF\u6362\u201C{name}\u201D\u7684\u8096\u50CF\u3002",
  "portrait.added": "\u5DF2\u4E3A\u201C{name}\u201D\u6DFB\u52A0\u8096\u50CF\u3002",
  "portrait.failed": "\u65E0\u6CD5\u4E3A\u201C{name}\u201D\u8BBE\u7F6E\u8096\u50CF\u3002",
  "portrait.dropLabel": "\u8096\u50CF\uFF1A\u5C06\u56FE\u7247\u62D6\u653E\u5230\u6B64\u5904\uFF0C\u6216\u6309 Enter \u9009\u62E9\u56FE\u7247",
  "portrait.dropTitle": "\u5C06\u56FE\u7247\u62D6\u653E\u5230\u6B64\u5904\uFF0C\u5BFC\u5165\u5230\u4ED3\u5E93\u4E2D",
  "portrait.dropHint": "\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u3002\u5B83\u5C06\u6210\u4E3A\u6761\u76EE\u7684\u8096\u50CF\uFF0C\u5E76\u4FDD\u5B58\u5230 {folder}/\u3002",
  "portrait.remove": "\u79FB\u9664\u56FE\u7247",
  "portrait.inVault": "{name}\uFF08\u5DF2\u5728\u4ED3\u5E93\u4E2D\uFF09",
  // ── 新建条目表单 ────────────────────────────────────────────────────────────
  "form.create": "\u521B\u5EFA",
  "form.addNew": "\u65B0\u589E{field}\u2026",
  "form.addNewTitle": "\u65B0{field}",
  "form.noneOption": "\u65E0",
  "form.yes": "\u662F",
  "form.no": "\u5426",
  "form.nameRequired": "\u540D\u79F0\u4E3A\u5FC5\u586B\u9879\u3002",
  "form.titleRequired": "\u6807\u9898\u4E3A\u5FC5\u586B\u9879\u3002",
  "form.createdNoPortrait": "\u5DF2\u521B\u5EFA\u201C{name}\u201D\uFF0C\u4F46\u65E0\u6CD5\u5BFC\u5165\u5176\u8096\u50CF\u3002",
  "form.name": "\u540D\u79F0",
  "form.title": "\u6807\u9898",
  "form.type": "\u7C7B\u578B",
  "form.description": "\u63CF\u8FF0",
  "form.goals": "\u76EE\u6807",
  "form.commaSeparated": "\u7528\u9017\u53F7\u5206\u9694",
  "form.commaSeparatedNames": "\u540D\u79F0\uFF0C\u7528\u9017\u53F7\u5206\u9694",
  "character.new": "\u65B0\u5EFA\u89D2\u8272",
  "character.namePlaceholder": "\u89D2\u8272\u540D\u79F0",
  "character.role": "\u89D2\u8272\u5B9A\u4F4D",
  "character.pov": "\u89C6\u89D2\u89D2\u8272",
  "character.age": "\u5E74\u9F84",
  "character.agePlaceholder": "\u4F8B\u5982 34",
  "character.group": "\u7EC4\u7EC7",
  "character.groupPlaceholder": "\u7EC4\u7EC7\u540D\u79F0",
  "character.ship": "\u98DE\u8239",
  "character.shipPlaceholder": "\u98DE\u8239\u540D\u79F0",
  "character.home": "\u5BB6\u4E61",
  "character.homePlaceholder": "\u5BB6\u4E61\u540D\u79F0",
  "character.physicalDesc": "\u5916\u8C8C\u63CF\u8FF0",
  "character.personality": "\u6027\u683C",
  "character.created": "\u5DF2\u521B\u5EFA\u89D2\u8272\u201C{name}\u201D\u3002",
  "location.new": "\u65B0\u5EFA\u5730\u70B9",
  "location.namePlaceholder": "\u5730\u70B9\u540D\u79F0",
  "location.parent": "\u4E0A\u7EA7\u5730\u70B9",
  "location.parentPlaceholder": "\u4F8B\u5982 \u5317\u65B9\u738B\u56FD",
  "location.inhabitants": "\u5C45\u4F4F\u8005",
  "location.secrets": "\u79D8\u5BC6",
  "location.created": "\u5DF2\u521B\u5EFA\u5730\u70B9\u201C{name}\u201D\u3002",
  "group.new": "\u65B0\u5EFA\u7EC4\u7EC7",
  "group.namePlaceholder": "\u7EC4\u7EC7\u540D\u79F0",
  "group.subsidiaryOf": "\u96B6\u5C5E\u4E8E",
  "group.subsidiaryOfDesc": "\u5C06\u6B64\u7EC4\u7EC7\u653E\u5728\u5176\u4E0A\u7EA7\u7EC4\u7EC7\u7684\u201C\u4E0B\u5C5E\u7EC4\u7EC7\u201D\u6807\u7B7E\u4E0B\uFF0C\u800C\u4E0D\u662F\u5176\u7C7B\u578B\u5206\u533A\u4E2D\u3002",
  "group.subsidiaryNone": "\u65E0",
  "group.alignment": "\u9635\u8425",
  "group.enemies": "\u654C\u4EBA",
  "group.allies": "\u76DF\u53CB",
  "group.created": "\u5DF2\u521B\u5EFA\u7EC4\u7EC7\u201C{name}\u201D\u3002",
  "lore.new": "\u65B0\u5EFA\u8BBE\u5B9A\u6761\u76EE",
  "lore.titlePlaceholder": "\u6761\u76EE\u6807\u9898",
  "lore.category": "\u7C7B\u522B",
  "lore.content": "\u5185\u5BB9",
  "lore.created": "\u5DF2\u521B\u5EFA\u8BBE\u5B9A\u6761\u76EE\u201C{name}\u201D\u3002",
  "timeline.new": "\u65B0\u5EFA\u65F6\u95F4\u7EBF\u4E8B\u4EF6",
  "timeline.date": "\u65E5\u671F / \u7EAA\u5143",
  "timeline.datePlaceholder": "\u4F8B\u5982 \u65B0\u7EAA\u5143 342 \u5E74",
  "timeline.titlePlaceholder": "\u4E8B\u4EF6\u6807\u9898",
  "timeline.characters": "\u5173\u8054\u89D2\u8272",
  "timeline.locations": "\u5173\u8054\u5730\u70B9",
  "timeline.created": "\u5DF2\u521B\u5EFA\u65F6\u95F4\u7EBF\u4E8B\u4EF6\u201C{name}\u201D\u3002",
  // ── 存储值（frontmatter 中保留英文键） ─────────────────────────────────────
  "role.protagonist": "\u4E3B\u89D2",
  "role.antagonist": "\u53CD\u6D3E",
  "role.supporting": "\u914D\u89D2",
  "role.minor": "\u6B21\u8981\u89D2\u8272",
  "locationType.planet": "\u884C\u661F",
  "locationType.dwarf planet": "\u77EE\u884C\u661F",
  "locationType.moon": "\u536B\u661F",
  "locationType.station": "\u7A7A\u95F4\u7AD9",
  "locationType.asteroid": "\u5C0F\u884C\u661F",
  "locationType.belt": "\u5C0F\u884C\u661F\u5E26",
  "locationType.ship": "\u98DE\u8239",
  "locationType.city": "\u57CE\u5E02",
  "locationType.region": "\u5730\u533A",
  "locationType.building": "\u5EFA\u7B51",
  "locationType.landmark": "\u5730\u6807",
  "locationType.other": "\u5176\u4ED6",
  "groupType.corporation": "\u4F01\u4E1A",
  "groupType.government": "\u653F\u5E9C",
  "groupType.military": "\u519B\u65B9",
  "groupType.criminal": "\u72AF\u7F6A\u7EC4\u7EC7",
  "alignment.lawful": "\u5B88\u5E8F",
  "alignment.neutral": "\u4E2D\u7ACB",
  "alignment.chaotic": "\u6DF7\u4E71",
  "loreCategory.history": "\u5386\u53F2",
  "loreCategory.tech": "\u79D1\u6280",
  "loreCategory.religion": "\u5B97\u6559",
  "loreCategory.culture": "\u6587\u5316",
  "loreCategory.other": "\u5176\u4ED6",
  // ── 写入新笔记的文字 ────────────────────────────────────────────────────────
  "note.origin": "\u51FA\u8EAB",
  "note.physicalDesc": "\u5916\u8C8C\u63CF\u8FF0",
  "note.occupation": "\u804C\u4E1A",
  "note.resume": "\u5C65\u5386",
  "note.roleInStory": "\u5728\u6545\u4E8B\u4E2D\u7684\u4F5C\u7528",
  "note.goals": "\u76EE\u6807",
  "note.personality": "\u6027\u683C",
  "note.habits": "\u4E60\u60EF/\u7656\u597D",
  "note.earlierLife": "\u65E9\u5E74\u7ECF\u5386",
  "note.internalConflicts": "\u5185\u5FC3\u51B2\u7A81",
  "note.externalConflicts": "\u5916\u90E8\u51B2\u7A81",
  "note.partOf": "\u96B6\u5C5E\u4E8E",
  "note.description": "\u63CF\u8FF0",
  "note.inhabitants": "\u5C45\u4F4F\u8005",
  "note.secrets": "\u79D8\u5BC6",
  "note.noneProvided": "_\u672A\u586B\u5199\u3002_",
  "note.type": "\u7C7B\u578B",
  "note.subsidiaryOf": "\u96B6\u5C5E\u4E8E",
  "note.alignment": "\u9635\u8425",
  "note.enemies": "\u654C\u4EBA",
  "note.allies": "\u76DF\u53CB",
  "note.category": "\u7C7B\u522B",
  "note.noContent": "_\u6682\u65E0\u5185\u5BB9\u3002_",
  "note.dateEra": "\u65E5\u671F/\u7EAA\u5143",
  "note.unknown": "_\u672A\u77E5_",
  "note.characters": "\u89D2\u8272",
  "note.locations": "\u5730\u70B9",
  // ── 文件夹迁移 ──────────────────────────────────────────────────────────────
  "migrate.title": "Universe Builder \u73B0\u5728\u6709\u4E86\u81EA\u5DF1\u7684\u6587\u4EF6\u5939",
  "migrate.intro": "\u4F60\u7684 Universe Builder \u7B14\u8BB0\u4F4D\u4E8E\u201C{source}/\u201D\uFF0C\u5176\u4ED6\u63D2\u4EF6\u4E5F\u53EF\u80FD\u4F7F\u7528\u8FD9\u4E2A\u6587\u4EF6\u5939\u3002Universe Builder \u73B0\u5728\u6539\u4E3A\u5C06\u7B14\u8BB0\u4FDD\u5B58\u5728\u201C{target}/\u201D\u4E2D\u3002",
  "migrate.scope.one": "\u8FC1\u79FB\u53EA\u5305\u62EC\u201C{source}/\u201D\u4E2D\u7684 Characters\u3001Groups\u3001Locations\u3001Lore\u3001Timeline \u548C {images} \u6587\u4EF6\u5939\u3002\u627E\u5230\uFF1A{found}\uFF0C\u5171 {total} \u4E2A\u6587\u4EF6\u3002\u201C{source}/\u201D\u4E2D\u7684\u5176\u4ED6\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002\u7B14\u8BB0\u4E4B\u95F4\u7684\u94FE\u63A5\u4ECD\u7136\u6709\u6548\u3002",
  "migrate.scope.other": "\u8FC1\u79FB\u53EA\u5305\u62EC\u201C{source}/\u201D\u4E2D\u7684 Characters\u3001Groups\u3001Locations\u3001Lore\u3001Timeline \u548C {images} \u6587\u4EF6\u5939\u3002\u627E\u5230\uFF1A{found}\uFF0C\u5171 {total} \u4E2A\u6587\u4EF6\u3002\u201C{source}/\u201D\u4E2D\u7684\u5176\u4ED6\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002\u7B14\u8BB0\u4E4B\u95F4\u7684\u94FE\u63A5\u4ECD\u7136\u6709\u6548\u3002",
  "migrate.worldBuilder.enabled": "\u6B64\u4ED3\u5E93\u4E2D\u5B89\u88C5\u4E86 World Builder \u63D2\u4EF6\uFF08\u5DF2\u542F\u7528\uFF09\u3002\u8FC1\u79FB\u540E\uFF0C\u5B83\u5C06\u65E0\u6CD5\u518D\u770B\u5230\u8FD9\u4E9B\u7B14\u8BB0\u3002",
  "migrate.worldBuilder.disabled": "\u6B64\u4ED3\u5E93\u4E2D\u5B89\u88C5\u4E86 World Builder \u63D2\u4EF6\uFF08\u5DF2\u7981\u7528\uFF09\u3002\u8FC1\u79FB\u540E\uFF0C\u5B83\u5C06\u65E0\u6CD5\u518D\u770B\u5230\u8FD9\u4E9B\u7B14\u8BB0\u3002",
  "migrate.note": "\u5176\u4ED6\u63D2\u4EF6\u6216\u7B14\u8BB0\u4E2D\u586B\u5199\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\uFF08\u4F8B\u5982\u9488\u5BF9\u201C{source}\u201D\u7684 Dataview \u67E5\u8BE2\uFF09\u4E0D\u4F1A\u88AB\u66F4\u65B0\u3002",
  "migrate.move": "\u8FC1\u79FB\u5230 {target}/\uFF08\u63A8\u8350\uFF09",
  "migrate.askLater": "\u4FDD\u7559 {source}/\uFF0C\u4E0B\u6B21\u66F4\u65B0\u65F6\u518D\u8BE2\u95EE",
  "migrate.decline": "\u4FDD\u7559 {source}/\uFF0C\u4E0D\u518D\u8BE2\u95EE",
  "migrate.customFolder": "Universe Builder \u4F7F\u7528\u7684\u662F\u81EA\u5B9A\u4E49\u6587\u4EF6\u5939\u201C{folder}\u201D\uFF0C\u56E0\u6B64\u65E0\u9700\u8FC1\u79FB\u3002",
  "migrate.nothingToMove": "\u201C{folder}/\u201D\u4E2D\u6CA1\u6709\u9700\u8981\u8FC1\u79FB\u7684 Universe Builder \u7B14\u8BB0\u3002",
  "migrate.createFailed": "\u65E0\u6CD5\u521B\u5EFA\u6587\u4EF6\u5939\u201C{folder}\u201D\uFF0C\u56E0\u6B64\u672A\u8FC1\u79FB\u4EFB\u4F55\u5185\u5BB9\u3002",
  "migrate.moved.one": "\u5DF2\u5C06 {count} \u4E2A\u6587\u4EF6\u8FC1\u79FB\u5230\u201C{folder}/\u201D\u3002",
  "migrate.moved.other": "\u5DF2\u5C06 {count} \u4E2A\u6587\u4EF6\u8FC1\u79FB\u5230\u201C{folder}/\u201D\u3002",
  "migrate.skipped": "\u6709 {count} \u4E2A\u6587\u4EF6\u56E0\u76EE\u6807\u4F4D\u7F6E\u5DF2\u6709\u540C\u540D\u6587\u4EF6\u800C\u88AB\u8DF3\u8FC7\uFF1A{files}\u3002",
  "migrate.failed": "\u6709 {count} \u4E2A\u6587\u4EF6\u65E0\u6CD5\u8FC1\u79FB\uFF08\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0\uFF09\uFF1B\u4E0B\u6B21\u542F\u52A8\u65F6\u4F1A\u518D\u6B21\u8BE2\u95EE\uFF1A{files}\u3002",
  "migrate.leftovers": "\u7559\u5728\u201C{folder}/\u201D\u4E2D\u7684\u5185\u5BB9\uFF1A{items}\u3002",
  "cleanup.title": "\u5220\u9664\u7A7A\u6587\u4EF6\u5939\u201C{folder}\u201D\uFF1F",
  "cleanup.message": "\u4F60\u7684\u7B14\u8BB0\u73B0\u5728\u4F4D\u4E8E\u201C{target}/\u201D\uFF0C\u201C{folder}/\u201D\u4E2D\u5DF2\u6CA1\u6709\u4EFB\u4F55\u6587\u4EF6\u3002\u5B83\u5DF2\u4E0D\u518D\u88AB\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5220\u9664\u3002",
  "cleanup.messageEmptyFolders": "\u4F60\u7684\u7B14\u8BB0\u73B0\u5728\u4F4D\u4E8E\u201C{target}/\u201D\uFF0C\u201C{folder}/\u201D\u4E2D\u5DF2\u6CA1\u6709\u4EFB\u4F55\u6587\u4EF6\uFF08\u53EA\u5269\u7A7A\u6587\u4EF6\u5939\uFF1A{folders}\uFF09\u3002\u5B83\u5DF2\u4E0D\u518D\u88AB\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5220\u9664\u3002",
  "cleanup.note": "\u5220\u9664\u7684\u6587\u4EF6\u5939\u4F1A\u6309\u7167 Obsidian \u7684\u201C\u5DF2\u5220\u9664\u7684\u6587\u4EF6\u201D\u8BBE\u7F6E\u79FB\u81F3\u56DE\u6536\u7AD9\u3002",
  "cleanup.delete": "\u5220\u9664 {folder}/",
  "cleanup.keep": "\u4FDD\u7559 {folder}/",
  "cleanup.hasFiles": "\u201C{folder}/\u201D\u4E2D\u53C8\u6709\u4E86\u6587\u4EF6\uFF0C\u56E0\u6B64\u672A\u88AB\u5220\u9664\u3002",
  "cleanup.deleted": "\u5DF2\u5220\u9664\u7A7A\u6587\u4EF6\u5939\u201C{folder}/\u201D\u3002",
  "cleanup.failed": "\u65E0\u6CD5\u5220\u9664\u201C{folder}/\u201D\uFF08\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0\uFF09\u3002",
  // ── 命令 ────────────────────────────────────────────────────────────────────
  "command.openSidebar": "\u6253\u5F00\u4FA7\u8FB9\u680F",
  "command.newCharacter": "\u65B0\u5EFA\u89D2\u8272",
  "command.newLocation": "\u65B0\u5EFA\u5730\u70B9",
  "command.newGroup": "\u65B0\u5EFA\u7EC4\u7EC7",
  "command.newLore": "\u65B0\u5EFA\u8BBE\u5B9A\u6761\u76EE",
  "command.newTimelineEvent": "\u65B0\u5EFA\u65F6\u95F4\u7EBF\u4E8B\u4EF6",
  "command.moveWorldFolder": "\u5C06\u7B14\u8BB0\u8FC1\u51FA World \u6587\u4EF6\u5939",
  // ── 设置 ────────────────────────────────────────────────────────────────────
  "settings.language": "\u8BED\u8A00",
  "settings.languageDesc": "\u63D2\u4EF6\u4FA7\u8FB9\u680F\u3001\u8868\u5355\u3001\u6D88\u606F\u548C\u65B0\u7B14\u8BB0\u6A21\u677F\u4F7F\u7528\u7684\u8BED\u8A00\u3002\u201C\u81EA\u52A8\u201D\u8DDF\u968F Obsidian \u7684\u8BED\u8A00\uFF08\u8BBE\u7F6E \u203A \u901A\u7528 \u203A \u8BED\u8A00\uFF09\uFF1B\u5982\u679C Universe Builder \u6CA1\u6709\u8BE5\u8BED\u8A00\u7684\u7FFB\u8BD1\uFF0C\u5219\u4F7F\u7528\u82F1\u8BED\u3002",
  "settings.languageAuto": "\u81EA\u52A8\uFF08{language}\uFF09",
  "settings.folder": "\u5B87\u5B99\u6587\u4EF6\u5939",
  "settings.folderDesc": "\u6240\u6709 Universe Builder \u7B14\u8BB0\u7684\u6839\u6587\u4EF6\u5939\u3002\u66F4\u6539\u5B83\u4E0D\u4F1A\u79FB\u52A8\u5DF2\u6709\u7B14\u8BB0\uFF1B\u5982\u9700\u5C06\u7B14\u8BB0\u8FC1\u51FA\u65E7\u7684\u201CWorld\u201D\u6587\u4EF6\u5939\uFF0C\u8BF7\u8FD0\u884C\u201C\u5C06\u7B14\u8BB0\u8FC1\u51FA World \u6587\u4EF6\u5939\u201D\u547D\u4EE4\u3002",
  "settings.editor": "\u4FA7\u8FB9\u680F\u7F16\u8F91\u5668",
  "settings.editorDesc": "\u5C55\u5F00\u6761\u76EE\u4E0A\u7684\u201C\u7F16\u8F91\u201D\u6309\u94AE\u6253\u5F00\u7684\u7F16\u8F91\u5668\u3002\u201C\u5B9E\u65F6\u9884\u89C8\u201D\u4F7F\u7528 Obsidian \u81EA\u5E26\u7684\u7F16\u8F91\u5668\uFF08\u8F93\u5165\u65F6\u663E\u793A\u683C\u5F0F\uFF0C\u63D0\u4F9B [[\u94FE\u63A5]] \u5EFA\u8BAE\uFF09\uFF1B\u201C\u539F\u59CB Markdown\u201D\u662F\u4E00\u4E2A\u666E\u901A\u6587\u672C\u6846\u3002\u5982\u679C Obsidian \u66F4\u65B0\u540E\u5B9E\u65F6\u9884\u89C8\u65E0\u6CD5\u4F7F\u7528\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u6539\u7528\u539F\u59CB Markdown\u3002",
  "settings.editorLive": "\u5B9E\u65F6\u9884\u89C8",
  "settings.editorRaw": "\u539F\u59CB Markdown",
  // ── 场景编辑器 ──────────────────────────────────────────────────────────
  "novel.bold": "\u7C97\u4F53",
  "novel.italic": "\u659C\u4F53",
  "novel.underline": "\u4E0B\u5212\u7EBF",
  "novel.strikethrough": "\u5220\u9664\u7EBF",
  "novel.alignLeft": "\u5DE6\u5BF9\u9F50",
  "novel.alignCenter": "\u5C45\u4E2D",
  "novel.alignRight": "\u53F3\u5BF9\u9F50",
  "novel.properties": "\u5C5E\u6027",
  "novel.propertiesTooltip": "\u7F16\u8F91\u7B14\u8BB0\u5C5E\u6027",
  "novel.words.one": "{count} \u4E2A\u5B57\u8BCD",
  "novel.words.other": "{count} \u4E2A\u5B57\u8BCD",
  "novel.selected": "\u5DF2\u9009 {count}",
  "novel.close": "\u5173\u95ED",
  "novel.noProperties": "\u6CA1\u6709\u5C5E\u6027\u3002",
  "novel.newProperty": "\u65B0\u5C5E\u6027",
  "novel.value": "\u503C",
  "novel.add": "\u6DFB\u52A0",
  "novel.removeProperty": "\u79FB\u9664\u5C5E\u6027",
  "novel.requiredProperty": "\u5FC5\u9700\u5C5E\u6027",
  "novel.listPlaceholder": "\u9879\u76EE, \u9879\u76EE, \u2026",
  "novel.propertyExists": "\u5C5E\u6027\u201C{name}\u201D\u5DF2\u5B58\u5728\u3002",
  "novel.updateFailed": "\u65E0\u6CD5\u66F4\u65B0\u5C5E\u6027\u3002\u8BF7\u68C0\u67E5\u7B14\u8BB0\u7684 frontmatter \u662F\u5426\u6709 YAML \u9519\u8BEF\u3002",
  "novel.charactersTooltip": "\u672C\u573A\u666F\u4E2D\u7684\u89D2\u8272",
  "novel.locationsTooltip": "\u672C\u573A\u666F\u4E2D\u7684\u5730\u70B9",
  "novel.groupsTooltip": "\u672C\u573A\u666F\u4E2D\u7684\u7EC4\u7EC7",
  "novel.loreTooltip": "\u672C\u573A\u666F\u4E2D\u7684\u8BBE\u5B9A",
  "novel.timelineTooltip": "\u672C\u573A\u666F\u4E2D\u7684\u65F6\u95F4\u7EBF\u4E8B\u4EF6",
  "novel.noCharacters": "\u4FA7\u8FB9\u680F\u4E2D\u8FD8\u6CA1\u6709\u89D2\u8272\u3002",
  "novel.noLocations": "\u4FA7\u8FB9\u680F\u4E2D\u8FD8\u6CA1\u6709\u5730\u70B9\u3002",
  "novel.noGroups": "\u4FA7\u8FB9\u680F\u4E2D\u8FD8\u6CA1\u6709\u7EC4\u7EC7\u3002",
  "novel.noLore": "\u4FA7\u8FB9\u680F\u4E2D\u8FD8\u6CA1\u6709\u8BBE\u5B9A\u3002",
  "novel.noTimeline": "\u4FA7\u8FB9\u680F\u4E2D\u8FD8\u6CA1\u6709\u65F6\u95F4\u7EBF\u4E8B\u4EF6\u3002",
  "novel.filter": "\u7B5B\u9009\u2026",
  "novel.noMatches": "\u6CA1\u6709\u5339\u914D\u9879\u3002",
  "novel.openInSidebar": "\u5728\u4FA7\u8FB9\u680F\u4E2D\u6253\u5F00 {name}",
  "novel.entryNotFound": "\u201C{name}\u201D\u4E0D\u5728 Universe Builder \u4FA7\u8FB9\u680F\u4E2D\u3002",
  "novel.removeFromScene": "\u4ECE\u573A\u666F\u4E2D\u79FB\u9664",
  "command.novelUnderline": "\u5207\u6362\u4E0B\u5212\u7EBF",
  "command.novelStrikethrough": "\u5207\u6362\u5220\u9664\u7EBF",
  "command.novelProperties": "\u6253\u5F00\u5C5E\u6027\u9762\u677F",
  "settings.novelHeading": "\u5C0F\u8BF4\u573A\u666F\u7F16\u8F91\u5668",
  "settings.novel": "\u4F7F\u7528\u5C0F\u8BF4\u573A\u666F\u7F16\u8F91\u5668",
  "settings.novelDesc": "\u5BF9\u4E3B\u7F16\u8F91\u5668\u4E2D\u5177\u6709\u5168\u90E8\u5FC5\u9700\u5C5E\u6027\u7684\u7B14\u8BB0\uFF1A\u5728\u6B63\u6587\u4E0A\u65B9\u6DFB\u52A0\u5DE5\u5177\u680F\uFF08\u573A\u666F\u7684\u89D2\u8272 / \u5730\u70B9 / \u7EC4\u7EC7 / \u8BBE\u5B9A / \u65F6\u95F4\u7EBF\u3001\u7C97\u4F53 / \u659C\u4F53 / \u4E0B\u5212\u7EBF / \u5220\u9664\u7EBF\u3001\u5BF9\u9F50\u3001\u5B57\u6570\uFF09\uFF0C\u5E76\u9690\u85CF\u7B14\u8BB0\u9876\u90E8\u7684\u5C5E\u6027\u533A\u5757\u3002",
  "settings.novelProps": "\u5FC5\u9700\u5C5E\u6027",
  "settings.novelPropsDesc": "\u4EE5\u9017\u53F7\u5206\u9694\u7684\u5C5E\u6027\u540D\u3002\u7B14\u8BB0\u5FC5\u987B\u5177\u6709\u5168\u90E8\u8FD9\u4E9B\u5C5E\u6027\u624D\u4F1A\u5728\u5C0F\u8BF4\u573A\u666F\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u3002",
  "settings.novelLivePreview": "\u4EE5\u5B9E\u65F6\u9884\u89C8\u6253\u5F00",
  "settings.novelLivePreviewDesc": "\u6253\u5F00\u8FD9\u4E9B\u7B14\u8BB0\u65F6\u5207\u6362\u5230\u5B9E\u65F6\u9884\u89C8\u3002",
  "settings.novelHideProps": "\u9690\u85CF\u7B14\u8BB0\u4E2D\u7684\u5C5E\u6027",
  "settings.novelHidePropsDesc": "\u9690\u85CF\u7B14\u8BB0\u9876\u90E8\u7684\u5C5E\u6027\u533A\u5757\uFF1B\u6539\u7528\u201C\u5C5E\u6027\u201D\u6309\u94AE\u6216\u201C\u6253\u5F00\u5C5E\u6027\u9762\u677F\u201D\u547D\u4EE4\u7F16\u8F91\u3002",
  "settings.novelWordCount": "\u663E\u793A\u5B57\u6570",
  "settings.novelWordCountDesc": "\u5728\u5DE5\u5177\u680F\u53F3\u4FA7\u663E\u793A\u7B14\u8BB0\u548C\u6240\u9009\u5185\u5BB9\u7684\u5B57\u6570\u3002",
  "settings.novelPropsButton": "\u663E\u793A\u201C\u5C5E\u6027\u201D\u6309\u94AE",
  "settings.novelPropsButtonDesc": "\u5728\u5DE5\u5177\u680F\u4E0A\u6DFB\u52A0\u201C\u5C5E\u6027\u201D\u6309\u94AE\uFF0C\u7528\u4E8E\u7F16\u8F91\u7B14\u8BB0\u5C5E\u6027\u3002\u65E0\u8BBA\u662F\u5426\u5F00\u542F\uFF0C\u201C\u6253\u5F00\u5C5E\u6027\u9762\u677F\u201D\u547D\u4EE4\u90FD\u53EF\u4F7F\u7528\u3002"
};

// src/locales/ja.ts
var ja = {
  // ── サイドバー ──────────────────────────────────────────────────────────────
  "tab.characters": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "tab.locations": "\u5834\u6240",
  "tab.groups": "\u7D44\u7E54",
  "tab.lore": "\u8A2D\u5B9A",
  "tab.timeline": "\u5E74\u8868",
  "bookmarks": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF",
  "bookmarks.close": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u9589\u3058\u308B",
  "bookmarks.add": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0",
  "bookmarks.remove": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u304B\u3089\u524A\u9664",
  "bookmarks.button": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF",
  "bookmarks.empty": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002\u30A8\u30F3\u30C8\u30EA\u3092\u5C55\u958B\u3057\u3066\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u3053\u3053\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002",
  "search.clear": "\u691C\u7D22\u3092\u30AF\u30EA\u30A2",
  "search.characters": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u691C\u7D22",
  "search.locations": "\u5834\u6240\u3092\u691C\u7D22",
  "search.groups": "\u7D44\u7E54\u3092\u691C\u7D22",
  "search.lore": "\u8A2D\u5B9A\u3092\u691C\u7D22",
  "search.timeline": "\u5E74\u8868\u3092\u691C\u7D22",
  "search.bookmarks": "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u691C\u7D22",
  "search.tip.characters": "\u540D\u524D\u3001\u7D44\u7E54\u3001\u5B87\u5B99\u8239\u3001\u51FA\u8EAB\u5730\u3067\u691C\u7D22\u3057\u307E\u3059",
  "search.tip.locations": "\u540D\u524D\u3068\u30CE\u30FC\u30C8\u306E\u672C\u6587\u3067\u691C\u7D22\u3057\u307E\u3059",
  "search.tip.groups": "\u540D\u524D\u3068\u30CE\u30FC\u30C8\u306E\u672C\u6587\u3067\u691C\u7D22\u3057\u307E\u3059",
  "search.tip.lore": "\u30BF\u30A4\u30C8\u30EB\u3068\u30CE\u30FC\u30C8\u306E\u672C\u6587\u3067\u691C\u7D22\u3057\u307E\u3059",
  "search.tip.timeline": "\u30BF\u30A4\u30C8\u30EB\u3068\u30CE\u30FC\u30C8\u306E\u672C\u6587\u3067\u691C\u7D22\u3057\u307E\u3059",
  "search.tip.bookmarks": "\u5404\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u3001\u5143\u306E\u30BF\u30D6\u3068\u540C\u3058\u65B9\u6CD5\u3067\u691C\u7D22\u3057\u307E\u3059",
  "noResults.characters": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "noResults.locations": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u5834\u6240\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "noResults.groups": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D44\u7E54\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "noResults.lore": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u8A2D\u5B9A\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "noResults.timeline": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u5E74\u8868\u306E\u51FA\u6765\u4E8B\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "noResults.bookmarks": "\u300C{query}\u300D\u306B\u4E00\u81F4\u3059\u308B\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "empty.characters": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "empty.locations": "\u5834\u6240\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "empty.groups": "\u7D44\u7E54\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "empty.lore": "\u8A2D\u5B9A\u9805\u76EE\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "empty.timeline": "\u5E74\u8868\u306E\u51FA\u6765\u4E8B\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "nav.back": "\u623B\u308B",
  "nav.forward": "\u9032\u3080",
  "reload": "\u518D\u8AAD\u307F\u8FBC\u307F",
  "reload.done": "Universe Builder \u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3057\u305F\u3002",
  "new": "+ \u65B0\u898F",
  "metadata.edit": "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u7DE8\u96C6",
  "metadata.title": "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u7DE8\u96C6\uFF1A{section}",
  "metadata.nothing": "\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u7DE8\u96C6\u3067\u304D\u308B\u9805\u76EE\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "metadata.builtIn": "\u7D44\u307F\u8FBC\u307F\uFF08\u524A\u9664\u4E0D\u53EF\uFF09",
  "metadata.custom": "\u30AB\u30B9\u30BF\u30E0",
  "metadata.addPlaceholder": "\u65B0\u3057\u3044\u5024",
  "metadata.add": "\u8FFD\u52A0",
  "metadata.none": "\u30AB\u30B9\u30BF\u30E0\u5024\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002",
  "metadata.uses.one": "{count} \u4EF6",
  "metadata.uses.other": "{count} \u4EF6",
  "metadata.remove": "\u300C{value}\u300D\u3092\u524A\u9664",
  "metadata.exists": "\u300C{value}\u300D\u306F\u3059\u3067\u306B\u9078\u629E\u80A2\u306B\u3042\u308A\u307E\u3059\u3002",
  "metadata.removeTitle": "\u30AB\u30B9\u30BF\u30E0\u5024\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F",
  "metadata.removeInUse": "\u300C{value}\u300D\u3092\u4F7F\u3063\u3066\u3044\u308B\u30A8\u30F3\u30C8\u30EA\uFF1A{count} \u4EF6\u3002\u5024\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u304C\u3001\u65B0\u898F\u30A8\u30F3\u30C8\u30EA\u306E\u9078\u629E\u80A2\u306B\u306F\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002",
  "metadata.removeAction": "\u524A\u9664",
  "metadata.removeGroupType": "\u300C{tab}\u300D\u30BF\u30D6\u3067\u306F\u300C{unassigned}\u300D\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
  "metadata.groupCharactersBy": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u30B0\u30EB\u30FC\u30D7\u5206\u3051",
  "metadata.groupCharactersByDesc": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30BF\u30D6\u306E\u5206\u3051\u65B9\u3067\u3059\u3002\u9078\u629E\u80A2\u3054\u3068\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u306E\u4E26\u3073\u9806\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u304C\u500B\u5225\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",
  "grouping.ageAsc": "\u5E74\u9F62\uFF08\u6607\u9806\uFF09",
  "grouping.ageDesc": "\u5E74\u9F62\uFF08\u964D\u9806\uFF09",
  "character.noShip": "\u5B87\u5B99\u8239\u306A\u3057",
  "character.noHome": "\u51FA\u8EAB\u5730\u306A\u3057",
  "metadata.modifyOptions": "{field}\u306E\u9078\u629E\u80A2\u3092\u7DE8\u96C6",
  "card.unnamed": "\u540D\u524D\u306A\u3057",
  "card.untitled": "\u7121\u984C",
  "card.age": "\u5E74\u9F62",
  "card.home": "\u51FA\u8EAB\u5730",
  "card.group": "\u7D44\u7E54",
  "card.ship": "\u5B87\u5B99\u8239",
  "card.pov": "\u8996\u70B9",
  "card.povAdd": "\u8996\u70B9\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306B\u3059\u308B",
  "card.povRemove": "\u8996\u70B9\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u89E3\u9664",
  "group.none": "\u7D44\u7E54\u306A\u3057",
  "group.unassigned": "\u672A\u5206\u985E",
  "group.subsidiaries": "\u4E0B\u90E8\u7D44\u7E54",
  "locations.ships": "\u5B87\u5B99\u8239",
  "card.copy": "\u30B3\u30D4\u30FC",
  "card.copyFailed": "\u9078\u629E\u7BC4\u56F2\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "card.modifyMd": "MD \u3092\u7DE8\u96C6",
  "card.edit": "\u7DE8\u96C6",
  "card.cancel": "\u30AD\u30E3\u30F3\u30BB\u30EB",
  "card.save": "\u4FDD\u5B58",
  "card.delete": "\u524A\u9664",
  "card.deleteLabel": "\u30A8\u30F3\u30C8\u30EA\u3092\u524A\u9664",
  "card.image": "\u753B\u50CF",
  "card.editLabel": "{name} \u3092\u7DE8\u96C6",
  "card.properties": "\u30D7\u30ED\u30D1\u30C6\u30A3",
  "card.propertiesOf": "{name} \u306E\u30D7\u30ED\u30D1\u30C6\u30A3",
  "card.thisEntry": "\u3053\u306E\u30A8\u30F3\u30C8\u30EA",
  // ── メッセージ ──────────────────────────────────────────────────────────────
  "confirm.cancel": "\u30AD\u30E3\u30F3\u30BB\u30EB",
  "discard.title": "\u5909\u66F4\u3092\u7834\u68C4\u3057\u307E\u3059\u304B\uFF1F",
  "discard.message": "\u300C{name}\u300D\u3078\u306E\u5909\u66F4\u306F\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
  "discard.action": "\u7834\u68C4",
  "overwrite.title": "\u30CE\u30FC\u30C8\u304C\u307B\u304B\u306E\u5834\u6240\u3067\u5909\u66F4\u3055\u308C\u307E\u3057\u305F",
  "overwrite.message": "\u7DE8\u96C6\u3092\u59CB\u3081\u305F\u5F8C\u306B\u3001\u300C{name}\u300D\u304C\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5916\u3067\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u306E\u5185\u5BB9\u3067\u4E0A\u66F8\u304D\u3057\u307E\u3059\u304B\uFF1F",
  "overwrite.action": "\u4E0A\u66F8\u304D",
  "delete.title": "\u30A8\u30F3\u30C8\u30EA\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F",
  "delete.message": "\u3053\u306E{category}\u30A8\u30F3\u30C8\u30EA\u300C{name}\u300D\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
  "delete.messagePlain": "\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u300C{name}\u300D\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
  "delete.action": "\u524A\u9664",
  "category.characters": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "category.locations": "\u5834\u6240",
  "category.groups": "\u7D44\u7E54",
  "category.lore": "\u8A2D\u5B9A",
  "category.timeline": "\u5E74\u8868",
  "notice.readFailed": "\u300C{name}\u300D\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "notice.saved": "\u300C{name}\u300D\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002",
  "notice.saveFailed": "\u300C{name}\u300D\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "notice.savedNoPortrait": "\u300C{name}\u300D\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\u304C\u3001\u8096\u50CF\u753B\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "notice.deleted": "\u300C{name}\u300D\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002",
  "notice.deleteFailed": "\u300C{name}\u300D\u3092\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "notice.linkNotFound": "\u300C{name}\u300D\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "notice.finishEditing": "\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u524D\u306B\u3001\u958B\u3044\u3066\u3044\u308B\u30A8\u30F3\u30C8\u30EA\u306E\u7DE8\u96C6\u3092\u7D42\u3048\u3066\u304F\u3060\u3055\u3044\u3002",
  "notice.notAnImage": "\u300C{name}\u300D\u306F\u753B\u50CF\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "notice.noImages": "\u3069\u306E\u30D5\u30A1\u30A4\u30EB\u3082\u753B\u50CF\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "portrait.alreadySet": "\u300C{image}\u300D\u306F\u3059\u3067\u306B\u300C{name}\u300D\u306E\u8096\u50CF\u753B\u3067\u3059\u3002",
  "portrait.replaceTitle": "\u8096\u50CF\u753B\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3059\u304B\uFF1F",
  "portrait.replaceMessage": "\u300C{name}\u300D\u306B\u306F\u3059\u3067\u306B\u8096\u50CF\u753B\uFF08{old}\uFF09\u304C\u3042\u308A\u307E\u3059\u3002{image} \u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u304B\uFF1F",
  "portrait.replaceAction": "\u7F6E\u304D\u63DB\u3048\u308B",
  "portrait.replaced": "\u300C{name}\u300D\u306E\u8096\u50CF\u753B\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3057\u305F\u3002",
  "portrait.added": "\u300C{name}\u300D\u306B\u8096\u50CF\u753B\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002",
  "portrait.failed": "\u300C{name}\u300D\u306E\u8096\u50CF\u753B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "portrait.dropLabel": "\u8096\u50CF\u753B\uFF1A\u3053\u3053\u306B\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u9078\u629E\u3057\u307E\u3059",
  "portrait.dropTitle": "\u3053\u3053\u306B\u753B\u50CF\u3092\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u4FDD\u7BA1\u5EAB\u306B\u30A4\u30F3\u30DD\u30FC\u30C8",
  "portrait.dropHint": "\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u307E\u3059\u3002\u30A8\u30F3\u30C8\u30EA\u306E\u8096\u50CF\u753B\u306B\u306A\u308A\u3001{folder}/ \u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",
  "portrait.remove": "\u753B\u50CF\u3092\u524A\u9664",
  "portrait.inVault": "{name}\uFF08\u3059\u3067\u306B\u4FDD\u7BA1\u5EAB\u306B\u3042\u308A\u307E\u3059\uFF09",
  // ── 新規エントリのフォーム ──────────────────────────────────────────────────
  "form.create": "\u4F5C\u6210",
  "form.addNew": "{field}\u3092\u8FFD\u52A0\u2026",
  "form.addNewTitle": "\u65B0\u3057\u3044{field}",
  "form.noneOption": "\u306A\u3057",
  "form.yes": "\u306F\u3044",
  "form.no": "\u3044\u3044\u3048",
  "form.nameRequired": "\u540D\u524D\u306F\u5FC5\u9808\u3067\u3059\u3002",
  "form.titleRequired": "\u30BF\u30A4\u30C8\u30EB\u306F\u5FC5\u9808\u3067\u3059\u3002",
  "form.createdNoPortrait": "\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u304C\u3001\u8096\u50CF\u753B\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "form.name": "\u540D\u524D",
  "form.title": "\u30BF\u30A4\u30C8\u30EB",
  "form.type": "\u7A2E\u985E",
  "form.description": "\u8AAC\u660E",
  "form.goals": "\u76EE\u7684",
  "form.commaSeparated": "\u30AB\u30F3\u30DE\u533A\u5207\u308A",
  "form.commaSeparatedNames": "\u540D\u524D\u3092\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067",
  "character.new": "\u65B0\u3057\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "character.namePlaceholder": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D",
  "character.role": "\u5F79\u5272",
  "character.pov": "\u8996\u70B9\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "character.age": "\u5E74\u9F62",
  "character.agePlaceholder": "\u4F8B\uFF1A34",
  "character.group": "\u7D44\u7E54",
  "character.groupPlaceholder": "\u7D44\u7E54\u540D",
  "character.ship": "\u5B87\u5B99\u8239",
  "character.shipPlaceholder": "\u5B87\u5B99\u8239\u540D",
  "character.home": "\u51FA\u8EAB\u5730",
  "character.homePlaceholder": "\u51FA\u8EAB\u5730\u306E\u540D\u524D",
  "character.physicalDesc": "\u5916\u898B",
  "character.personality": "\u6027\u683C",
  "character.created": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
  "location.new": "\u65B0\u3057\u3044\u5834\u6240",
  "location.namePlaceholder": "\u5834\u6240\u306E\u540D\u524D",
  "location.parent": "\u89AA\u306E\u5834\u6240",
  "location.parentPlaceholder": "\u4F8B\uFF1A\u5317\u306E\u738B\u56FD",
  "location.inhabitants": "\u4F4F\u3093\u3067\u3044\u308B\u8005",
  "location.secrets": "\u79D8\u5BC6",
  "location.created": "\u5834\u6240\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
  "group.new": "\u65B0\u3057\u3044\u7D44\u7E54",
  "group.namePlaceholder": "\u7D44\u7E54\u540D",
  "group.subsidiaryOf": "\u89AA\u7D44\u7E54",
  "group.subsidiaryOfDesc": "\u3053\u306E\u7D44\u7E54\u3092\u3001\u7A2E\u985E\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u89AA\u7D44\u7E54\u306E\u300C\u4E0B\u90E8\u7D44\u7E54\u300D\u30E9\u30D9\u30EB\u306E\u4E0B\u306B\u8868\u793A\u3057\u307E\u3059\u3002",
  "group.subsidiaryNone": "\u306A\u3057",
  "group.alignment": "\u5C5E\u6027",
  "group.enemies": "\u6575\u5BFE\u8005",
  "group.allies": "\u540C\u76DF\u8005",
  "group.created": "\u7D44\u7E54\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
  "lore.new": "\u65B0\u3057\u3044\u8A2D\u5B9A\u9805\u76EE",
  "lore.titlePlaceholder": "\u9805\u76EE\u306E\u30BF\u30A4\u30C8\u30EB",
  "lore.category": "\u30AB\u30C6\u30B4\u30EA",
  "lore.content": "\u5185\u5BB9",
  "lore.created": "\u8A2D\u5B9A\u9805\u76EE\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
  "timeline.new": "\u65B0\u3057\u3044\u5E74\u8868\u306E\u51FA\u6765\u4E8B",
  "timeline.date": "\u65E5\u4ED8 / \u6642\u4EE3",
  "timeline.datePlaceholder": "\u4F8B\uFF1A\u65B0\u66A6342\u5E74",
  "timeline.titlePlaceholder": "\u51FA\u6765\u4E8B\u306E\u30BF\u30A4\u30C8\u30EB",
  "timeline.characters": "\u95A2\u9023\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "timeline.locations": "\u95A2\u9023\u3059\u308B\u5834\u6240",
  "timeline.created": "\u5E74\u8868\u306E\u51FA\u6765\u4E8B\u300C{name}\u300D\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002",
  // ── 保存される値（フロントマターには英語のキーが残ります） ──────────────────
  "role.protagonist": "\u4E3B\u4EBA\u516C",
  "role.antagonist": "\u6575\u5F79",
  "role.supporting": "\u8107\u5F79",
  "role.minor": "\u7AEF\u5F79",
  "locationType.planet": "\u60D1\u661F",
  "locationType.dwarf planet": "\u6E96\u60D1\u661F",
  "locationType.moon": "\u885B\u661F",
  "locationType.station": "\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",
  "locationType.asteroid": "\u5C0F\u60D1\u661F",
  "locationType.belt": "\u5C0F\u60D1\u661F\u5E2F",
  "locationType.ship": "\u5B87\u5B99\u8239",
  "locationType.city": "\u90FD\u5E02",
  "locationType.region": "\u5730\u57DF",
  "locationType.building": "\u5EFA\u7269",
  "locationType.landmark": "\u540D\u6240",
  "locationType.other": "\u305D\u306E\u4ED6",
  "groupType.corporation": "\u4F01\u696D",
  "groupType.government": "\u653F\u5E9C",
  "groupType.military": "\u8ECD",
  "groupType.criminal": "\u72AF\u7F6A\u7D44\u7E54",
  "alignment.lawful": "\u79E9\u5E8F",
  "alignment.neutral": "\u4E2D\u7ACB",
  "alignment.chaotic": "\u6DF7\u6C8C",
  "loreCategory.history": "\u6B74\u53F2",
  "loreCategory.tech": "\u6280\u8853",
  "loreCategory.religion": "\u5B97\u6559",
  "loreCategory.culture": "\u6587\u5316",
  "loreCategory.other": "\u305D\u306E\u4ED6",
  // ── 新しいノートに書き込まれるテキスト ──────────────────────────────────────
  "note.origin": "\u751F\u3044\u7ACB\u3061",
  "note.physicalDesc": "\u5916\u898B",
  "note.occupation": "\u8077\u696D",
  "note.resume": "\u7D4C\u6B74",
  "note.roleInStory": "\u7269\u8A9E\u3067\u306E\u5F79\u5272",
  "note.goals": "\u76EE\u7684",
  "note.personality": "\u6027\u683C",
  "note.habits": "\u7656/\u3057\u3050\u3055",
  "note.earlierLife": "\u904E\u53BB",
  "note.internalConflicts": "\u5185\u9762\u306E\u845B\u85E4",
  "note.externalConflicts": "\u5916\u90E8\u3068\u306E\u5BFE\u7ACB",
  "note.partOf": "\u6240\u5C5E",
  "note.description": "\u8AAC\u660E",
  "note.inhabitants": "\u4F4F\u3093\u3067\u3044\u308B\u8005",
  "note.secrets": "\u79D8\u5BC6",
  "note.noneProvided": "_\u672A\u8A18\u5165\u3002_",
  "note.type": "\u7A2E\u985E",
  "note.subsidiaryOf": "\u89AA\u7D44\u7E54",
  "note.alignment": "\u5C5E\u6027",
  "note.enemies": "\u6575\u5BFE\u8005",
  "note.allies": "\u540C\u76DF\u8005",
  "note.category": "\u30AB\u30C6\u30B4\u30EA",
  "note.noContent": "_\u307E\u3060\u5185\u5BB9\u304C\u3042\u308A\u307E\u305B\u3093\u3002_",
  "note.dateEra": "\u65E5\u4ED8/\u6642\u4EE3",
  "note.unknown": "_\u4E0D\u660E_",
  "note.characters": "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "note.locations": "\u5834\u6240",
  // ── フォルダーの移動 ────────────────────────────────────────────────────────
  "migrate.title": "Universe Builder \u5C02\u7528\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u3067\u304D\u307E\u3057\u305F",
  "migrate.intro": "Universe Builder \u306E\u30CE\u30FC\u30C8\u306F\u300C{source}/\u300D\u306B\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u307B\u304B\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3082\u4F7F\u3046\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002Universe Builder \u306F\u4ECA\u5F8C\u3001\u30CE\u30FC\u30C8\u3092\u300C{target}/\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002",
  "migrate.scope.one": "\u79FB\u52D5\u3059\u308B\u306E\u306F\u300C{source}/\u300D\u5185\u306E Characters\u3001Groups\u3001Locations\u3001Lore\u3001Timeline\u3001{images} \u30D5\u30A9\u30EB\u30C0\u30FC\u3060\u3051\u3067\u3059\u3002\u898B\u3064\u304B\u3063\u305F\u3082\u306E\uFF1A{found}\u3001\u5408\u8A08 {total} \u500B\u306E\u30D5\u30A1\u30A4\u30EB\u3002\u300C{source}/\u300D\u5185\u306E\u307B\u304B\u306E\u3082\u306E\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u9593\u306E\u30EA\u30F3\u30AF\u306F\u5F15\u304D\u7D9A\u304D\u6A5F\u80FD\u3057\u307E\u3059\u3002",
  "migrate.scope.other": "\u79FB\u52D5\u3059\u308B\u306E\u306F\u300C{source}/\u300D\u5185\u306E Characters\u3001Groups\u3001Locations\u3001Lore\u3001Timeline\u3001{images} \u30D5\u30A9\u30EB\u30C0\u30FC\u3060\u3051\u3067\u3059\u3002\u898B\u3064\u304B\u3063\u305F\u3082\u306E\uFF1A{found}\u3001\u5408\u8A08 {total} \u500B\u306E\u30D5\u30A1\u30A4\u30EB\u3002\u300C{source}/\u300D\u5185\u306E\u307B\u304B\u306E\u3082\u306E\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u9593\u306E\u30EA\u30F3\u30AF\u306F\u5F15\u304D\u7D9A\u304D\u6A5F\u80FD\u3057\u307E\u3059\u3002",
  "migrate.worldBuilder.enabled": "\u3053\u306E\u4FDD\u7BA1\u5EAB\u306B\u306F World Builder \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\uFF08\u6709\u52B9\uFF09\u3002\u79FB\u52D5\u5F8C\u3001\u3053\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u304B\u3089\u306F\u3053\u308C\u3089\u306E\u30CE\u30FC\u30C8\u304C\u898B\u3048\u306A\u304F\u306A\u308A\u307E\u3059\u3002",
  "migrate.worldBuilder.disabled": "\u3053\u306E\u4FDD\u7BA1\u5EAB\u306B\u306F World Builder \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\uFF08\u7121\u52B9\uFF09\u3002\u79FB\u52D5\u5F8C\u3001\u3053\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u304B\u3089\u306F\u3053\u308C\u3089\u306E\u30CE\u30FC\u30C8\u304C\u898B\u3048\u306A\u304F\u306A\u308A\u307E\u3059\u3002",
  "migrate.note": "\u307B\u304B\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3084\u30CE\u30FC\u30C8\u306B\u5165\u529B\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u30D1\u30B9\uFF08\u4F8B\uFF1A\u300C{source}\u300D\u306B\u5BFE\u3059\u308B Dataview \u30AF\u30A8\u30EA\uFF09\u306F\u66F4\u65B0\u3055\u308C\u307E\u305B\u3093\u3002",
  "migrate.move": "{target}/ \u306B\u79FB\u52D5\uFF08\u63A8\u5968\uFF09",
  "migrate.askLater": "{source}/ \u3092\u7DAD\u6301\u3057\u3001\u6B21\u56DE\u306E\u66F4\u65B0\u6642\u306B\u518D\u78BA\u8A8D",
  "migrate.decline": "{source}/ \u3092\u7DAD\u6301\u3057\u3001\u4ECA\u5F8C\u306F\u78BA\u8A8D\u3057\u306A\u3044",
  "migrate.customFolder": "Universe Builder \u306F\u30AB\u30B9\u30BF\u30E0\u30D5\u30A9\u30EB\u30C0\u30FC\u300C{folder}\u300D\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u79FB\u52D5\u3059\u308B\u3082\u306E\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "migrate.nothingToMove": "\u300C{folder}/\u300D\u306B\u306F\u79FB\u52D5\u3059\u308B Universe Builder \u306E\u30CE\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "migrate.createFailed": "\u30D5\u30A9\u30EB\u30C0\u30FC\u300C{folder}\u300D\u3092\u4F5C\u6210\u3067\u304D\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u4F55\u3082\u79FB\u52D5\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "migrate.moved.one": "{count} \u500B\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u300C{folder}/\u300D\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002",
  "migrate.moved.other": "{count} \u500B\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u300C{folder}/\u300D\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002",
  "migrate.skipped": "\u540C\u3058\u540D\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u3059\u3067\u306B\u3042\u3063\u305F\u305F\u3081\u3001{count} \u500B\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u307E\u3057\u305F\uFF1A{files}\u3002",
  "migrate.failed": "{count} \u500B\u3092\u79FB\u52D5\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u958B\u767A\u8005\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u53C2\u7167\uFF09\u3002\u6B21\u56DE\u306E\u8D77\u52D5\u6642\u306B\u518D\u5EA6\u78BA\u8A8D\u3057\u307E\u3059\uFF1A{files}\u3002",
  "migrate.leftovers": "\u300C{folder}/\u300D\u306B\u6B8B\u3063\u3066\u3044\u308B\u3082\u306E\uFF1A{items}\u3002",
  "cleanup.title": "\u7A7A\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u300C{folder}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F",
  "cleanup.message": "\u30CE\u30FC\u30C8\u306F\u300C{target}/\u300D\u306B\u79FB\u308A\u3001\u300C{folder}/\u300D\u306B\u306F\u30D5\u30A1\u30A4\u30EB\u304C\u6B8B\u3063\u3066\u3044\u307E\u305B\u3093\u3002\u3082\u3046\u4F7F\u308F\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u524A\u9664\u3067\u304D\u307E\u3059\u3002",
  "cleanup.messageEmptyFolders": "\u30CE\u30FC\u30C8\u306F\u300C{target}/\u300D\u306B\u79FB\u308A\u3001\u300C{folder}/\u300D\u306B\u306F\u30D5\u30A1\u30A4\u30EB\u304C\u6B8B\u3063\u3066\u3044\u307E\u305B\u3093\uFF08\u7A7A\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u307F\uFF1A{folders}\uFF09\u3002\u3082\u3046\u4F7F\u308F\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u524A\u9664\u3067\u304D\u307E\u3059\u3002",
  "cleanup.note": "\u524A\u9664\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u3001Obsidian \u306E\u300C\u524A\u9664\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u300D\u306E\u8A2D\u5B9A\u306B\u5F93\u3063\u3066\u30B4\u30DF\u7BB1\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002",
  "cleanup.delete": "{folder}/ \u3092\u524A\u9664",
  "cleanup.keep": "{folder}/ \u3092\u6B8B\u3059",
  "cleanup.hasFiles": "\u300C{folder}/\u300D\u306B\u518D\u3073\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308B\u305F\u3081\u3001\u524A\u9664\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
  "cleanup.deleted": "\u7A7A\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u300C{folder}/\u300D\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002",
  "cleanup.failed": "\u300C{folder}/\u300D\u3092\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u958B\u767A\u8005\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u53C2\u7167\uFF09\u3002",
  // ── コマンド ────────────────────────────────────────────────────────────────
  "command.openSidebar": "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F",
  "command.newCharacter": "\u65B0\u3057\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "command.newLocation": "\u65B0\u3057\u3044\u5834\u6240",
  "command.newGroup": "\u65B0\u3057\u3044\u7D44\u7E54",
  "command.newLore": "\u65B0\u3057\u3044\u8A2D\u5B9A\u9805\u76EE",
  "command.newTimelineEvent": "\u65B0\u3057\u3044\u5E74\u8868\u306E\u51FA\u6765\u4E8B",
  "command.moveWorldFolder": "World \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u30CE\u30FC\u30C8\u3092\u79FB\u52D5",
  // ── 設定 ────────────────────────────────────────────────────────────────────
  "settings.language": "\u8A00\u8A9E",
  "settings.languageDesc": "\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30B5\u30A4\u30C9\u30D0\u30FC\u3001\u30D5\u30A9\u30FC\u30E0\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u3001\u65B0\u3057\u3044\u30CE\u30FC\u30C8\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u8A00\u8A9E\u3067\u3059\u3002\u300C\u81EA\u52D5\u300D\u306F Obsidian \u306E\u8A00\u8A9E\uFF08\u8A2D\u5B9A \u203A \u4E00\u822C \u203A \u8A00\u8A9E\uFF09\u306B\u5F93\u3044\u3001Universe Builder \u304C\u305D\u306E\u8A00\u8A9E\u306B\u7FFB\u8A33\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u82F1\u8A9E\u3092\u4F7F\u3044\u307E\u3059\u3002",
  "settings.languageAuto": "\u81EA\u52D5\uFF08{language}\uFF09",
  "settings.folder": "\u30E6\u30CB\u30D0\u30FC\u30B9\u30D5\u30A9\u30EB\u30C0\u30FC",
  "settings.folderDesc": "Universe Builder \u306E\u3059\u3079\u3066\u306E\u30CE\u30FC\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3067\u3059\u3002\u5909\u66F4\u3057\u3066\u3082\u65E2\u5B58\u306E\u30CE\u30FC\u30C8\u306F\u79FB\u52D5\u3057\u307E\u305B\u3093\u3002\u53E4\u3044\u300CWorld\u300D\u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u30CE\u30FC\u30C8\u3092\u79FB\u52D5\u3059\u308B\u306B\u306F\u3001\u300CWorld \u30D5\u30A9\u30EB\u30C0\u30FC\u304B\u3089\u30CE\u30FC\u30C8\u3092\u79FB\u52D5\u300D\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "settings.editor": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u30A8\u30C7\u30A3\u30BF\u30FC",
  "settings.editorDesc": "\u5C55\u958B\u3057\u305F\u30A8\u30F3\u30C8\u30EA\u306E\u300C\u7DE8\u96C6\u300D\u30DC\u30BF\u30F3\u3067\u958B\u304F\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u3059\u3002\u300C\u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC\u300D\u306F Obsidian \u672C\u4F53\u306E\u30A8\u30C7\u30A3\u30BF\u30FC\uFF08\u5165\u529B\u4E2D\u306B\u66F8\u5F0F\u3092\u8868\u793A\u3001[[\u30EA\u30F3\u30AF]] \u306E\u5019\u88DC\u8868\u793A\uFF09\u3092\u4F7F\u3044\u3001\u300CMarkdown \u30BD\u30FC\u30B9\u300D\u306F\u30B7\u30F3\u30D7\u30EB\u306A\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u3059\u3002Obsidian \u306E\u66F4\u65B0\u5F8C\u306B\u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC\u304C\u52D5\u304B\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u81EA\u52D5\u7684\u306B Markdown \u30BD\u30FC\u30B9\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002",
  "settings.editorLive": "\u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC",
  "settings.editorRaw": "Markdown \u30BD\u30FC\u30B9",
  // ── シーンエディター ──────────────────────────────────────────────────────────
  "novel.bold": "\u592A\u5B57",
  "novel.italic": "\u659C\u4F53",
  "novel.underline": "\u4E0B\u7DDA",
  "novel.strikethrough": "\u53D6\u308A\u6D88\u3057\u7DDA",
  "novel.alignLeft": "\u5DE6\u63C3\u3048",
  "novel.alignCenter": "\u4E2D\u592E\u63C3\u3048",
  "novel.alignRight": "\u53F3\u63C3\u3048",
  "novel.properties": "\u30D7\u30ED\u30D1\u30C6\u30A3",
  "novel.propertiesTooltip": "\u30CE\u30FC\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7DE8\u96C6",
  "novel.words.one": "{count} \u8A9E",
  "novel.words.other": "{count} \u8A9E",
  "novel.selected": "{count} \u8A9E\u3092\u9078\u629E\u4E2D",
  "novel.close": "\u9589\u3058\u308B",
  "novel.noProperties": "\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.newProperty": "\u65B0\u3057\u3044\u30D7\u30ED\u30D1\u30C6\u30A3",
  "novel.value": "\u5024",
  "novel.add": "\u8FFD\u52A0",
  "novel.removeProperty": "\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u524A\u9664",
  "novel.requiredProperty": "\u5FC5\u9808\u30D7\u30ED\u30D1\u30C6\u30A3",
  "novel.listPlaceholder": "\u9805\u76EE, \u9805\u76EE, \u2026",
  "novel.propertyExists": "\u30D7\u30ED\u30D1\u30C6\u30A3\u300C{name}\u300D\u306F\u3059\u3067\u306B\u3042\u308A\u307E\u3059\u3002",
  "novel.updateFailed": "\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u66F4\u65B0\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30CE\u30FC\u30C8\u306E\u30D5\u30ED\u30F3\u30C8\u30DE\u30BF\u30FC\u306B YAML \u306E\u30A8\u30E9\u30FC\u304C\u306A\u3044\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "novel.charactersTooltip": "\u3053\u306E\u30B7\u30FC\u30F3\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
  "novel.locationsTooltip": "\u3053\u306E\u30B7\u30FC\u30F3\u306E\u5834\u6240",
  "novel.groupsTooltip": "\u3053\u306E\u30B7\u30FC\u30F3\u306E\u7D44\u7E54",
  "novel.loreTooltip": "\u3053\u306E\u30B7\u30FC\u30F3\u306E\u8A2D\u5B9A",
  "novel.timelineTooltip": "\u3053\u306E\u30B7\u30FC\u30F3\u306E\u5E74\u8868\u306E\u51FA\u6765\u4E8B",
  "novel.noCharacters": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u306F\u307E\u3060\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.noLocations": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u306F\u307E\u3060\u5834\u6240\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.noGroups": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u306F\u307E\u3060\u7D44\u7E54\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.noLore": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u306F\u307E\u3060\u8A2D\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.noTimeline": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u306F\u307E\u3060\u5E74\u8868\u306E\u51FA\u6765\u4E8B\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.filter": "\u7D5E\u308A\u8FBC\u307F\u2026",
  "novel.noMatches": "\u4E00\u81F4\u3059\u308B\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.openInSidebar": "{name} \u3092\u30B5\u30A4\u30C9\u30D0\u30FC\u3067\u958B\u304F",
  "novel.entryNotFound": "\u300C{name}\u300D\u306F Universe Builder \u306E\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u3042\u308A\u307E\u305B\u3093\u3002",
  "novel.removeFromScene": "\u30B7\u30FC\u30F3\u304B\u3089\u5916\u3059",
  "command.novelUnderline": "\u4E0B\u7DDA\u306E\u5207\u308A\u66FF\u3048",
  "command.novelStrikethrough": "\u53D6\u308A\u6D88\u3057\u7DDA\u306E\u5207\u308A\u66FF\u3048",
  "command.novelProperties": "\u30D7\u30ED\u30D1\u30C6\u30A3\u30D1\u30CD\u30EB\u3092\u958B\u304F",
  "settings.novelHeading": "\u5C0F\u8AAC\u30B7\u30FC\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC",
  "settings.novel": "\u5C0F\u8AAC\u30B7\u30FC\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC\u3092\u4F7F\u3046",
  "settings.novelDesc": "\u5FC5\u9808\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3059\u3079\u3066\u6301\u3064\u30E1\u30A4\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u30CE\u30FC\u30C8\u3067\u3001\u672C\u6587\u306E\u4E0A\u306B\u30C4\u30FC\u30EB\u30D0\u30FC\uFF08\u30B7\u30FC\u30F3\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC / \u5834\u6240 / \u7D44\u7E54 / \u8A2D\u5B9A / \u5E74\u8868\u3001\u592A\u5B57 / \u659C\u4F53 / \u4E0B\u7DDA / \u53D6\u308A\u6D88\u3057\u7DDA\u3001\u914D\u7F6E\u3001\u8A9E\u6570\uFF09\u3092\u8FFD\u52A0\u3057\u3001\u30CE\u30FC\u30C8\u4E0A\u90E8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u6B04\u3092\u96A0\u3057\u307E\u3059\u3002",
  "settings.novelProps": "\u5FC5\u9808\u30D7\u30ED\u30D1\u30C6\u30A3",
  "settings.novelPropsDesc": "\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u3067\u3059\u3002\u30CE\u30FC\u30C8\u304C\u5C0F\u8AAC\u30B7\u30FC\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u958B\u304F\u306B\u306F\u3001\u3053\u308C\u3089\u3059\u3079\u3066\u304C\u5FC5\u8981\u3067\u3059\u3002",
  "settings.novelLivePreview": "\u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC\u3067\u958B\u304F",
  "settings.novelLivePreviewDesc": "\u3053\u308C\u3089\u306E\u30CE\u30FC\u30C8\u3092\u958B\u3044\u305F\u3068\u304D\u306B\u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002",
  "settings.novelHideProps": "\u30CE\u30FC\u30C8\u5185\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u96A0\u3059",
  "settings.novelHidePropsDesc": "\u30CE\u30FC\u30C8\u4E0A\u90E8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u6B04\u3092\u96A0\u3057\u307E\u3059\u3002\u7DE8\u96C6\u306F\u300C\u30D7\u30ED\u30D1\u30C6\u30A3\u300D\u30DC\u30BF\u30F3\u304B\u300C\u30D7\u30ED\u30D1\u30C6\u30A3\u30D1\u30CD\u30EB\u3092\u958B\u304F\u300D\u30B3\u30DE\u30F3\u30C9\u3067\u884C\u3044\u307E\u3059\u3002",
  "settings.novelWordCount": "\u8A9E\u6570\u3092\u8868\u793A",
  "settings.novelWordCountDesc": "\u30CE\u30FC\u30C8\u3068\u9078\u629E\u7BC4\u56F2\u306E\u8A9E\u6570\u3092\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u53F3\u5074\u306B\u8868\u793A\u3057\u307E\u3059\u3002",
  "settings.novelPropsButton": "\u300C\u30D7\u30ED\u30D1\u30C6\u30A3\u300D\u30DC\u30BF\u30F3\u3092\u8868\u793A",
  "settings.novelPropsButtonDesc": "\u30CE\u30FC\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7DE8\u96C6\u3059\u308B\u300C\u30D7\u30ED\u30D1\u30C6\u30A3\u300D\u30DC\u30BF\u30F3\u3092\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002\u300C\u30D7\u30ED\u30D1\u30C6\u30A3\u30D1\u30CD\u30EB\u3092\u958B\u304F\u300D\u30B3\u30DE\u30F3\u30C9\u306F\u3069\u3061\u3089\u306E\u5834\u5408\u3082\u4F7F\u3048\u307E\u3059\u3002"
};

// src/i18n.ts
var LOCALES = ["en", "es", "pt", "pt-BR", "fr", "de", "ru", "uk", "zh", "ja"];
var LANGUAGE_NAMES = {
  en: "English",
  es: "Espa\xF1ol",
  pt: "Portugu\xEAs",
  "pt-BR": "Portugu\xEAs (Brasil)",
  fr: "Fran\xE7ais",
  de: "Deutsch",
  ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  zh: "\u7B80\u4F53\u4E2D\u6587",
  ja: "\u65E5\u672C\u8A9E"
};
var DICTIONARIES = { en, es, pt, "pt-BR": ptBR, fr, de, ru, uk, zh, ja };
var current = "en";
function detectLocale() {
  let code = "en";
  try {
    code = (0, import_obsidian.getLanguage)() || "en";
  } catch (e) {
  }
  const lower = code.toLowerCase().replace(/_/g, "-");
  const exact = LOCALES.find((l) => l.toLowerCase() === lower);
  if (exact) return exact;
  const base = LOCALES.find((l) => l === lower.split("-")[0]);
  return base != null ? base : "en";
}
function setLanguage(setting) {
  current = setting === "auto" ? detectLocale() : setting;
}
function t(key, vars = {}) {
  var _a, _b;
  const text = (_b = (_a = DICTIONARIES[current][key]) != null ? _a : en[key]) != null ? _b : key;
  return text.replace(/\{(\w+)\}/g, (whole, name) => name in vars ? String(vars[name]) : whole);
}
function tn(key, count, vars = {}) {
  return t(`${key}.${count === 1 ? "one" : "other"}`, { count, ...vars });
}
function displayValue(prefix, value) {
  if (current === "en" || !value) return value;
  const key = `${prefix}.${value.trim().toLowerCase()}`;
  if (!(key in en)) return value;
  return current === "de" ? t(key) : t(key).toLocaleLowerCase(current);
}
function optionLabel(prefix, value) {
  const key = `${prefix}.${value}`;
  return key in en ? t(key) : value;
}

// src/novel-editor/index.ts
var import_obsidian6 = require("obsidian");
var import_view2 = require("@codemirror/view");

// src/novel-editor/format.ts
var import_state = require("@codemirror/state");
var MARKERS = {
  bold: { open: "**", close: "**" },
  italic: { open: "*", close: "*" },
  underline: { open: "<u>", close: "</u>" },
  strikethrough: { open: "~~", close: "~~" }
};
var RUN_MARKERS = {
  bold: { chars: ["*", "_"], len: 2, has: (a, b) => a >= 2 && b >= 2 },
  italic: { chars: ["*", "_"], len: 1, has: (a, b) => a % 2 === 1 && b % 2 === 1 },
  strikethrough: { chars: ["~"], len: 2, has: (a, b) => a >= 2 && b >= 2 }
};
var BLOCK_PREFIX = /^\s*(?:>\s*)*(?:#{1,6}\s+|[-*+]\s+(?:\[.\]\s+)?|\d+[.)]\s+)?/;
function countRun(doc, pos, dir, ch, limit, bound) {
  let n = 0;
  while (n < limit) {
    const p = dir === -1 ? pos - n - 1 : pos + n;
    if (dir === -1 ? p < bound : p >= bound) break;
    if (doc.sliceString(p, p + 1) !== ch) break;
    n++;
  }
  return n;
}
function detectWrapping(doc, from, to, kind) {
  if (kind === "underline") {
    const { open, close } = MARKERS.underline;
    const slice = (a, b) => a < 0 || b > doc.length ? "" : doc.sliceString(a, b).toLowerCase();
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
    const sIn = countRun(doc, from, 1, ch, 3, to);
    const eIn = countRun(doc, to, -1, ch, 3, from + sIn);
    if (to - from <= sIn + eIn && to > from) continue;
    const sOut = countRun(doc, from, -1, ch, 3 - sIn, 0);
    const eOut = countRun(doc, to, 1, ch, 3 - eIn, doc.length);
    if (!has(sIn + sOut, eIn + eOut)) continue;
    const textFrom = from + sIn;
    const textTo = to - eIn;
    return { openFrom: textFrom - len, openTo: textFrom, closeFrom: textTo, closeTo: textTo + len };
  }
  return null;
}
function segmentsFor(state, range) {
  const doc = state.doc;
  const segs = [];
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
var WORD = /[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu;
var MARKERS_BEFORE = /(?:[*_~]|<\/?u>)+$/i;
var MARKERS_AFTER = /^(?:[*_~]|<\/?u>)+/i;
function wordInLine(text, offset) {
  WORD.lastIndex = 0;
  let m;
  while (m = WORD.exec(text)) {
    const from = m.index, to = from + m[0].length;
    if (offset >= from && offset <= to) return { from, to };
    if (from > offset) break;
  }
  return null;
}
function wordAround(state, pos) {
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
function toggleFormat(view, kind) {
  const { open, close } = MARKERS[kind];
  const state = view.state;
  const tr = state.changeByRange((range) => {
    if (range.empty) {
      const pos = range.head;
      const word = wordAround(state, pos);
      const around = word ? null : detectWrapping(state.doc, pos, pos, kind);
      if (around) {
        const changes3 = state.changes([
          { from: around.openFrom, to: around.openTo },
          { from: around.closeFrom, to: around.closeTo }
        ]);
        return { changes: changes3, range: import_state.EditorSelection.cursor(changes3.mapPos(pos, -1)) };
      }
      if (word) {
        const w = detectWrapping(state.doc, word.from, word.to, kind);
        const changes3 = state.changes(
          w ? [{ from: w.openFrom, to: w.openTo }, { from: w.closeFrom, to: w.closeTo }] : [{ from: word.from, insert: open }, { from: word.to, insert: close }]
        );
        return { changes: changes3, range: import_state.EditorSelection.cursor(changes3.mapPos(pos, pos >= word.to ? -1 : 1)) };
      }
      const changes2 = state.changes({ from: pos, insert: open + close });
      return { changes: changes2, range: import_state.EditorSelection.cursor(pos + open.length) };
    }
    const segs = segmentsFor(state, range);
    if (segs.length === 0) return { range };
    const found = segs.map((s) => detectWrapping(state.doc, s.from, s.to, kind));
    const unwrap = found.every((f) => f !== null);
    const specs = [];
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
    const anchorFrom = unwrap ? Math.min(first.from, found[0].openTo) : first.from;
    const anchorTo = unwrap ? Math.max(last.to, found[found.length - 1].closeFrom) : last.to;
    return {
      changes,
      range: import_state.EditorSelection.range(changes.mapPos(anchorFrom, 1), changes.mapPos(anchorTo, -1))
    };
  });
  view.dispatch(state.update(tr, { scrollIntoView: true, userEvent: "input.format" }));
}
function isActive(state, kind) {
  const range = state.selection.main;
  if (range.empty) {
    const word = wordAround(state, range.head);
    if (word) return !!detectWrapping(state.doc, word.from, word.to, kind);
    return !!detectWrapping(state.doc, range.head, range.head, kind);
  }
  const segs = segmentsFor(state, range);
  return segs.length > 0 && segs.every((s) => detectWrapping(state.doc, s.from, s.to, kind));
}
function countWords(text) {
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/, "").replace(/%%[\s\S]*?%%/g, " ").replace(/<!--[\s\S]*?-->/g, " ").replace(/<[^>\n]+>/g, " ");
  const m = body.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu);
  return m ? m.length : 0;
}

// src/novel-editor/align.ts
var import_state2 = require("@codemirror/state");
var import_view = require("@codemirror/view");
var import_obsidian2 = require("obsidian");
var MARKER_RE = /[ \t]*%%\s*align:(left|center|right)\s*%%/i;
var MARKER_RE_G = /[ \t]*%%\s*align:(left|center|right)\s*%%/gi;
function markerText(a) {
  return ` %%align:${a}%%`;
}
function alignmentOfText(text) {
  const m = MARKER_RE.exec(text);
  return m ? m[1].toLowerCase() : "left";
}
function frontmatterEnd(doc) {
  if (doc.lines < 2 || doc.line(1).text.trim() !== "---") return 0;
  for (let n = 2; n <= doc.lines; n++) {
    if (/^(---|\.\.\.)\s*$/.test(doc.line(n).text)) return n;
  }
  return 0;
}
function targetLines(state) {
  const doc = state.doc;
  const fmEnd = frontmatterEnd(doc);
  const out = /* @__PURE__ */ new Set();
  for (const r of state.selection.ranges) {
    const a = doc.lineAt(r.from).number;
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
function currentAlignment(state) {
  return alignmentOfText(state.doc.lineAt(state.selection.main.head).text);
}
function setAlignment(view, align) {
  const state = view.state;
  const lines = targetLines(state);
  if (lines.length === 0) return;
  const allSet = lines.every((n) => alignmentOfText(state.doc.line(n).text) === align);
  const target = allSet ? "left" : align;
  const changes = [];
  for (const n of lines) changes.push(...lineAlignChanges(state.doc.line(n).from, state.doc.line(n).text, target));
  view.dispatch({ changes, userEvent: "input.align" });
}
function lineAlignChanges(lineFrom, text, align) {
  const out = [];
  let end = text.length;
  for (; ; ) {
    const trimmed = text.slice(0, end).replace(/\s+$/, "");
    const m2 = /[ \t]*%%\s*align:(?:left|center|right)\s*%%$/i.exec(trimmed);
    if (m2) end = m2.index;
    else {
      end = trimmed.length;
      break;
    }
  }
  MARKER_RE_G.lastIndex = 0;
  let m;
  while (m = MARKER_RE_G.exec(text.slice(0, end))) {
    out.push({ from: lineFrom + m.index, to: lineFrom + m.index + m[0].length, insert: "" });
  }
  const insert = align === "left" ? "" : markerText(align);
  if (end < text.length || insert) out.push({ from: lineFrom + end, to: lineFrom + text.length, insert });
  return out;
}
var alignmentKeeper = import_state2.EditorState.transactionFilter.of((tr) => {
  if (!tr.docChanged || !tr.isUserEvent("input") || tr.isUserEvent("input.align")) return tr;
  const startDoc = tr.startState.doc;
  const newDoc = tr.newDoc;
  const fixes = [];
  const seen = /* @__PURE__ */ new Set();
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
      const want = visible === "" ? "left" : align;
      if (alignmentOfText(line.text) === want && (want !== "left" || !MARKER_RE.test(line.text))) continue;
      fixes.push(...lineAlignChanges(line.from, line.text, want));
    }
  });
  if (fixes.length === 0) return tr;
  return [tr, { changes: fixes, sequential: true }];
});
var HiddenMarker = class extends import_view.WidgetType {
  eq() {
    return true;
  }
  toDOM() {
    const span = document.createElement("span");
    span.className = "ue-align-marker";
    return span;
  }
  ignoreEvent() {
    return false;
  }
};
var LINE_DECO = {
  left: import_view.Decoration.line({ class: "ue-align-left" }),
  center: import_view.Decoration.line({ class: "ue-align-center" }),
  right: import_view.Decoration.line({ class: "ue-align-right" })
};
var HIDE = import_view.Decoration.replace({ widget: new HiddenMarker() });
function isLivePreview(state) {
  var _a;
  try {
    return (_a = state.field(import_obsidian2.editorLivePreviewField, false)) != null ? _a : false;
  } catch (e) {
    return false;
  }
}
function build(view) {
  const lines = new import_state2.RangeSetBuilder();
  const hidden = new import_state2.RangeSetBuilder();
  const doc = view.state.doc;
  const live = isLivePreview(view.state);
  for (const { from, to } of view.visibleRanges) {
    let pos = from;
    while (pos <= to) {
      const line = doc.lineAt(pos);
      const m = MARKER_RE.exec(line.text);
      if (m) {
        lines.add(line.from, line.from, LINE_DECO[m[1].toLowerCase()]);
        if (live) {
          MARKER_RE_G.lastIndex = 0;
          let mm;
          while (mm = MARKER_RE_G.exec(line.text)) {
            hidden.add(line.from + mm.index, line.from + mm.index + mm[0].length, HIDE);
          }
        }
      }
      pos = line.to + 1;
    }
  }
  return { lines: lines.finish(), hidden: hidden.finish() };
}
var alignmentExtension = import_view.ViewPlugin.fromClass(
  class {
    constructor(view) {
      ({ lines: this.lines, hidden: this.hidden } = build(view));
    }
    update(u) {
      if (u.docChanged || u.viewportChanged || isLivePreview(u.startState) !== isLivePreview(u.state)) {
        ({ lines: this.lines, hidden: this.hidden } = build(u.view));
      }
    }
  },
  {
    provide: (plugin) => [
      import_view.EditorView.decorations.of((v) => {
        var _a, _b;
        return (_b = (_a = v.plugin(plugin)) == null ? void 0 : _a.lines) != null ? _b : import_view.Decoration.none;
      }),
      import_view.EditorView.decorations.of((v) => {
        var _a, _b;
        return (_b = (_a = v.plugin(plugin)) == null ? void 0 : _a.hidden) != null ? _b : import_view.Decoration.none;
      }),
      // The cursor steps over hidden markers instead of into them.
      import_view.EditorView.atomicRanges.of((v) => {
        var _a, _b;
        return (_b = (_a = v.plugin(plugin)) == null ? void 0 : _a.hidden) != null ? _b : import_view.Decoration.none;
      })
    ]
  }
);
function alignmentPostProcessor(el, ctx) {
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

// src/novel-editor/toolbar.ts
var import_obsidian5 = require("obsidian");

// src/novel-editor/properties.ts
var import_obsidian3 = require("obsidian");
var datalistCounter = 0;
var PropertiesPopover = class {
  constructor(plugin, host, getFile, onToggle) {
    this.plugin = plugin;
    this.host = host;
    this.getFile = getFile;
    this.onToggle = onToggle;
    this.el = null;
    this.anchor = null;
    this.onOutside = (evt) => {
      var _a;
      const t2 = evt.target;
      if (!this.el || !t2) return;
      if (this.el.contains(t2) || ((_a = this.anchor) == null ? void 0 : _a.contains(t2))) return;
      this.close();
    };
    this.pendingFocusAdd = false;
  }
  get isOpen() {
    return this.el !== null;
  }
  toggle(anchor) {
    if (this.isOpen) this.close();
    else this.open(anchor);
  }
  open(anchor) {
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
  close() {
    if (!this.el) return;
    this.host.ownerDocument.removeEventListener("mousedown", this.onOutside, true);
    this.el.remove();
    this.el = null;
    this.onToggle(false);
  }
  /** Re-render with fresh metadata, unless the user is mid-edit inside the panel. */
  refresh() {
    if (!this.el) return;
    const active = this.el.ownerDocument.activeElement;
    if (active && this.el.contains(active)) return;
    this.render();
  }
  position() {
    if (!this.el || !this.anchor) return;
    const hostRect = this.host.getBoundingClientRect();
    const aRect = this.anchor.getBoundingClientRect();
    const left = Math.max(8, Math.min(aRect.left - hostRect.left, hostRect.width - this.el.offsetWidth - 8));
    this.el.style.left = `${left}px`;
  }
  render() {
    var _a, _b;
    const el = this.el;
    if (!el) return;
    el.empty();
    const file = this.getFile();
    if (!file) return;
    const fm = { ...(_b = (_a = this.plugin.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {} };
    const required = this.plugin.settings.requiredProperties;
    const suggestions = this.collectSuggestions(Object.keys(fm));
    const header = el.createDiv({ cls: "ue-props-header" });
    header.createSpan({ cls: "ue-props-title", text: t("novel.properties") });
    const closeBtn = header.createEl("button", { cls: "clickable-icon ue-props-close", attr: { "aria-label": t("novel.close") } });
    (0, import_obsidian3.setIcon)(closeBtn, "x");
    closeBtn.addEventListener("click", () => this.close());
    const list = el.createDiv({ cls: "ue-props-list" });
    const keys = Object.keys(fm);
    keys.sort((a, b) => {
      const ia = required.indexOf(a), ib = required.indexOf(b);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
    for (const key of keys) this.renderRow(list, key, fm[key], required.includes(key), suggestions.get(key));
    if (keys.length === 0) list.createDiv({ cls: "ue-props-empty", text: t("novel.noProperties") });
    this.renderAddRow(el, fm);
  }
  renderRow(parent, key, value, locked, suggestions) {
    const row = parent.createDiv({ cls: "ue-props-row" });
    if (locked) row.addClass("is-required");
    const state = { key };
    const kind = this.kindFor(key, value);
    const iconEl = row.createSpan({ cls: "ue-props-icon" });
    (0, import_obsidian3.setIcon)(iconEl, KIND_ICON[kind]);
    const keyInput = row.createEl("input", { cls: "ue-props-key", type: "text", value: key });
    keyInput.spellcheck = false;
    if (locked) {
      keyInput.readOnly = true;
      keyInput.setAttr("aria-label", t("novel.requiredProperty"));
    } else {
      keyInput.addEventListener("change", () => void this.renameKey(state, keyInput));
      keyInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") keyInput.blur();
      });
    }
    const valueWrap = row.createDiv({ cls: "ue-props-value" });
    this.renderValueEditor(
      valueWrap,
      kind,
      value,
      suggestions,
      (v) => this.write((fm) => {
        fm[state.key] = v;
      })
    );
    const del = row.createEl("button", { cls: "clickable-icon ue-props-delete", attr: { "aria-label": t("novel.removeProperty") } });
    (0, import_obsidian3.setIcon)(del, "trash-2");
    if (locked) {
      del.disabled = true;
      del.addClass("is-hidden");
    } else {
      del.addEventListener("click", async () => {
        await this.write((fm) => {
          delete fm[state.key];
        });
        row.remove();
      });
    }
  }
  renderValueEditor(wrap, kind, value, suggestions, commit) {
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
        inp.addEventListener(
          "change",
          () => void commit(inp.value.split(",").map((s) => s.trim()).filter(Boolean))
        );
        enterBlurs(inp);
        return;
      }
      case "json": {
        const ta = wrap.createEl("textarea", { cls: "ue-props-input ue-props-json" });
        ta.value = JSON.stringify(value, null, 2);
        ta.addEventListener("change", () => {
          try {
            const parsed = JSON.parse(ta.value);
            ta.removeClass("is-invalid");
            void commit(parsed);
          } catch (e) {
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
  renderAddRow(parent, fm) {
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
        new import_obsidian3.Notice(t("novel.propertyExists", { name: key }));
        return;
      }
      const raw = valInput.value.trim();
      await this.write((f) => {
        f[key] = raw === "" ? null : raw;
      });
      fm[key] = raw;
      keyInput.value = "";
      valInput.value = "";
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
  /** Called when the file's metadata changes; re-render even if the add row had focus. */
  onMetadataChanged() {
    if (!this.el) return;
    if (this.pendingFocusAdd) this.render();
    else this.refresh();
  }
  async renameKey(state, input) {
    var _a, _b;
    const oldKey = state.key;
    const newKey = input.value.trim();
    if (!newKey || newKey === oldKey) {
      input.value = oldKey;
      return;
    }
    const file = this.getFile();
    const existing = file ? (_b = (_a = this.plugin.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {} : {};
    if (Object.prototype.hasOwnProperty.call(existing, newKey)) {
      new import_obsidian3.Notice(t("novel.propertyExists", { name: newKey }));
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
  async write(mutate) {
    const file = this.getFile();
    if (!file) return;
    try {
      await this.plugin.app.fileManager.processFrontMatter(file, mutate);
    } catch (e) {
      console.error("Universe Builder: novel editor failed to update properties", e);
      new import_obsidian3.Notice(t("novel.updateFailed"));
    }
  }
  /** Decide which editor to show, using Obsidian's property types when available. */
  kindFor(key, value) {
    const assigned = this.assignedType(key);
    switch (assigned) {
      case "checkbox":
        return "checkbox";
      case "number":
        return "number";
      case "date":
        return "date";
      case "datetime":
        return "datetime";
      case "multitext":
      case "tags":
      case "aliases":
        return "list";
      case "text":
        return value !== null && typeof value === "object" ? "json" : "text";
    }
    if (typeof value === "boolean") return "checkbox";
    if (typeof value === "number") return "number";
    if (Array.isArray(value)) return value.every((v) => v === null || typeof v !== "object") ? "list" : "json";
    if (value !== null && typeof value === "object") return "json";
    return "text";
  }
  assignedType(key) {
    var _a, _b, _c, _d, _e, _f;
    try {
      const mtm = this.plugin.app.metadataTypeManager;
      if (!mtm) return null;
      const lower = key.toLowerCase();
      const t2 = (_f = (_d = (_a = mtm.getAssignedType) == null ? void 0 : _a.call(mtm, lower)) != null ? _d : (_c = (_b = mtm.types) == null ? void 0 : _b[lower]) == null ? void 0 : _c.type) != null ? _f : (_e = mtm.getAssignedWidget) == null ? void 0 : _e.call(mtm, lower);
      return typeof t2 === "string" ? t2 : null;
    } catch (e) {
      return null;
    }
  }
  /** Existing text values for each key across the vault, offered as autocomplete. */
  collectSuggestions(keys) {
    var _a;
    const out = /* @__PURE__ */ new Map();
    if (keys.length === 0) return out;
    for (const k of keys) out.set(k, /* @__PURE__ */ new Set());
    const { metadataCache, vault } = this.plugin.app;
    for (const f of vault.getMarkdownFiles()) {
      const fm = (_a = metadataCache.getFileCache(f)) == null ? void 0 : _a.frontmatter;
      if (!fm) continue;
      for (const k of keys) {
        const v = fm[k];
        const set = out.get(k);
        if (set && typeof v === "string" && v && set.size < 100) set.add(v);
      }
    }
    return out;
  }
};
var KIND_ICON = {
  text: "text",
  list: "list",
  number: "binary",
  checkbox: "check-square",
  date: "calendar",
  datetime: "clock",
  json: "braces"
};
function enterBlurs(inp) {
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") inp.blur();
  });
}

// src/novel-editor/scene.ts
var import_obsidian4 = require("obsidian");
var SCENE_LISTS = [
  { kind: "characters", key: "universe-builder-scene-characterlist", icon: "user", label: "tab.characters", tooltip: "novel.charactersTooltip", empty: "novel.noCharacters" },
  { kind: "locations", key: "universe-builder-scene-locationlist", icon: "map-pin", label: "tab.locations", tooltip: "novel.locationsTooltip", empty: "novel.noLocations" },
  { kind: "groups", key: "universe-builder-scene-grouplist", icon: "users", label: "tab.groups", tooltip: "novel.groupsTooltip", empty: "novel.noGroups" },
  { kind: "lore", key: "universe-builder-scene-lorelist", icon: "book-open", label: "tab.lore", tooltip: "novel.loreTooltip", empty: "novel.noLore" },
  { kind: "timeline", key: "universe-builder-scene-timelinelist", icon: "calendar-clock", label: "tab.timeline", tooltip: "novel.timelineTooltip", empty: "novel.noTimeline" }
];
function renderAvatar(el, plugin, file, icon) {
  el.empty();
  const src = file ? plugin.portrait(file) : null;
  if (!src) {
    el.removeClass("has-portrait");
    (0, import_obsidian4.setIcon)(el, icon);
    return;
  }
  el.addClass("has-portrait");
  const img = el.createEl("img", { attr: { src, alt: "", draggable: "false" } });
  img.onerror = () => {
    img.remove();
    el.removeClass("has-portrait");
    (0, import_obsidian4.setIcon)(el, icon);
  };
}
function asList(value) {
  if (Array.isArray(value)) return value.filter((v) => v != null && v !== "").map((v) => String(v));
  if (value == null || value === "") return [];
  return [String(value)];
}
function parseItem(raw) {
  const m = /^\s*\[\[([^\]]*)\]\]\s*$/.exec(raw);
  const inner = m ? m[1] : raw.trim();
  const [target, alias] = inner.split("|");
  return { linkpath: target.split("#")[0].trim(), alias: (alias == null ? void 0 : alias.trim()) || null };
}
var SceneLists = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  /** Resolve a stored item: as a link first, then by entry name or file name within the section. */
  resolve(raw, def, source, entries) {
    var _a, _b, _c, _d, _e;
    const { linkpath, alias } = parseItem(raw);
    let file = linkpath ? this.plugin.app.metadataCache.getFirstLinkpathDest(linkpath, source.path) : null;
    if (!file && linkpath) {
      const wanted = linkpath.toLowerCase();
      file = (_b = (_a = entries.find((e) => e.name.toLowerCase() === wanted || e.file.basename.toLowerCase() === wanted)) == null ? void 0 : _a.file) != null ? _b : null;
    }
    const entry = file ? entries.find((e) => e.file === file) : void 0;
    return { raw, file, name: (_e = (_d = (_c = entry == null ? void 0 : entry.name) != null ? _c : alias) != null ? _d : file == null ? void 0 : file.basename) != null ? _e : linkpath };
  }
  items(source, def, entries = this.plugin.entries(def.kind)) {
    var _a;
    const fm = (_a = this.plugin.app.metadataCache.getFileCache(source)) == null ? void 0 : _a.frontmatter;
    return asList(fm == null ? void 0 : fm[def.key]).map((raw) => this.resolve(raw, def, source, entries));
  }
  /** Add an entry to the list (no-op if it's already there). */
  async add(source, def, file) {
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
  async remove(source, def, target) {
    const entries = this.plugin.entries(def.kind);
    await this.write(source, (fm) => {
      const list = asList(fm[def.key]).filter(
        (raw) => typeof target === "string" ? raw !== target : this.resolve(raw, def, source, entries).file !== target
      );
      if (list.length) fm[def.key] = list;
      else delete fm[def.key];
    });
  }
  async write(file, mutate) {
    try {
      await this.plugin.app.fileManager.processFrontMatter(file, mutate);
    } catch (e) {
      console.error("Universe Builder: novel editor failed to update a scene list", e);
      new import_obsidian4.Notice(t("novel.updateFailed"));
    }
  }
};
var ScenePicker = class {
  constructor(plugin, lists, def, host, getFile, onToggle) {
    this.plugin = plugin;
    this.lists = lists;
    this.def = def;
    this.host = host;
    this.getFile = getFile;
    this.onToggle = onToggle;
    this.el = null;
    this.anchor = null;
    this.listEl = null;
    this.searchEl = null;
    this.query = "";
    this.activeIndex = 0;
    this.onOutside = (evt) => {
      var _a;
      const target = evt.target;
      if (!this.el || !target) return;
      if (this.el.contains(target) || ((_a = this.anchor) == null ? void 0 : _a.contains(target))) return;
      this.close();
    };
  }
  get isOpen() {
    return this.el !== null;
  }
  toggle(anchor) {
    if (this.isOpen) this.close();
    else this.open(anchor);
  }
  open(anchor) {
    if (this.isOpen) return;
    this.anchor = anchor;
    this.query = "";
    this.activeIndex = 0;
    const el = this.el = this.host.createDiv({ cls: "ue-props-popover ue-scene-picker" });
    const header = el.createDiv({ cls: "ue-props-header" });
    const title = header.createSpan({ cls: "ue-props-title ue-scene-picker-title" });
    (0, import_obsidian4.setIcon)(title.createSpan({ cls: "ue-btn-icon" }), this.def.icon);
    title.createSpan({ text: t(this.def.label) });
    const closeBtn = header.createEl("button", { cls: "clickable-icon ue-props-close", attr: { "aria-label": t("novel.close") } });
    (0, import_obsidian4.setIcon)(closeBtn, "x");
    closeBtn.addEventListener("click", () => this.close());
    const search = this.searchEl = el.createEl("input", { type: "text", cls: "ue-scene-search", placeholder: t("novel.filter") });
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
  close() {
    if (!this.el) return;
    this.host.ownerDocument.removeEventListener("mousedown", this.onOutside, true);
    this.el.remove();
    this.el = this.listEl = this.searchEl = null;
    this.onToggle(false);
  }
  /** Re-draw the checkmarks after the scene's frontmatter changes. */
  refresh() {
    if (this.el) this.renderList();
  }
  position() {
    if (!this.el || !this.anchor) return;
    const hostRect = this.host.getBoundingClientRect();
    const aRect = this.anchor.getBoundingClientRect();
    const left = Math.max(8, Math.min(aRect.left - hostRect.left, hostRect.width - this.el.offsetWidth - 8));
    this.el.style.left = `${left}px`;
  }
  visibleEntries() {
    const q = this.query.trim().toLowerCase();
    const all = this.plugin.entries(this.def.kind);
    return q ? all.filter((e) => {
      var _a;
      return e.name.toLowerCase().includes(q) || e.file.basename.toLowerCase().includes(q) || !!((_a = e.detail) == null ? void 0 : _a.toLowerCase().includes(q));
    }) : all;
  }
  renderList() {
    const listEl = this.listEl;
    const file = this.getFile();
    if (!listEl || !file) return;
    const scrollTop = listEl.scrollTop;
    listEl.empty();
    const entries = this.visibleEntries();
    const chosen = new Set(this.lists.items(file, this.def).map((i) => i.file).filter((f) => !!f));
    if (entries.length === 0) {
      listEl.createDiv({ cls: "ue-props-empty", text: this.query.trim() ? t("novel.noMatches") : t(this.def.empty) });
      return;
    }
    this.activeIndex = Math.min(this.activeIndex, entries.length - 1);
    entries.forEach((entry, i) => {
      const selected = chosen.has(entry.file);
      const row = listEl.createEl("button", {
        cls: "ue-scene-option",
        attr: { "aria-pressed": String(selected), "data-path": entry.file.path }
      });
      if (selected) row.addClass("is-selected");
      if (i === this.activeIndex) row.addClass("is-active");
      const check = row.createSpan({ cls: "ue-scene-check" });
      if (selected) (0, import_obsidian4.setIcon)(check, "check");
      renderAvatar(row.createSpan({ cls: "ue-scene-avatar" }), this.plugin, entry.file, this.def.icon);
      row.createSpan({ cls: "ue-scene-option-name", text: entry.name });
      if (entry.detail) row.createSpan({ cls: "ue-scene-option-detail", text: entry.detail });
      row.addEventListener("mousedown", (e) => e.preventDefault());
      row.addEventListener("click", () => {
        this.activeIndex = i;
        void this.toggleEntry(entry.file, selected);
      });
    });
    listEl.scrollTop = scrollTop;
  }
  onKey(evt) {
    var _a, _b;
    const count = this.visibleEntries().length;
    if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
      evt.preventDefault();
      if (!count) return;
      this.activeIndex = (this.activeIndex + (evt.key === "ArrowDown" ? 1 : count - 1)) % count;
      this.renderList();
      (_b = (_a = this.listEl) == null ? void 0 : _a.querySelector(".ue-scene-option.is-active")) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
    } else if (evt.key === "Enter") {
      evt.preventDefault();
      const entry = this.visibleEntries()[this.activeIndex];
      const file = this.getFile();
      if (!entry || !file) return;
      const selected = this.lists.items(file, this.def).some((i) => i.file === entry.file);
      void this.toggleEntry(entry.file, selected);
    }
  }
  async toggleEntry(entryFile, selected) {
    const file = this.getFile();
    if (!file) return;
    if (selected) await this.lists.remove(file, this.def, entryFile);
    else await this.lists.add(file, this.def, entryFile);
    this.refresh();
  }
};

// src/novel-editor/toolbar.ts
function cmOf(view) {
  var _a;
  return (_a = view.editor.cm) != null ? _a : null;
}
var FORMAT_BUTTONS = [
  { kind: "bold", icon: "bold", label: "novel.bold" },
  { kind: "italic", icon: "italic", label: "novel.italic" },
  { kind: "underline", icon: "underline", label: "novel.underline" },
  { kind: "strikethrough", icon: "strikethrough", label: "novel.strikethrough" }
];
var UNLABELLED_PROPERTIES = /* @__PURE__ */ new Set(["novelr-status", "novelr-type"]);
var ALIGN_BUTTONS = [
  { align: "left", icon: "align-left", label: "novel.alignLeft" },
  { align: "center", icon: "align-center", label: "novel.alignCenter" },
  { align: "right", icon: "align-right", label: "novel.alignRight" }
];
var NovelToolbar = class {
  constructor(plugin, view) {
    this.plugin = plugin;
    this.view = view;
    this.filePath = null;
    /** File path we last forced into Live Preview, so we only do it once per open. */
    this.forcedFor = null;
    this.formatBtns = /* @__PURE__ */ new Map();
    this.alignBtns = /* @__PURE__ */ new Map();
    this.pickers = /* @__PURE__ */ new Map();
    /** What the scene row last showed, so unrelated metadata changes don't redraw it. */
    this.sceneSignature = "";
    this.countTimer = null;
    this.el = createDiv({ cls: "ue-toolbar" });
    const left = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-left" });
    const center = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-center" });
    const right = this.el.createDiv({ cls: "ue-toolbar-section ue-toolbar-right" });
    const fmt = center.createDiv({ cls: "ue-toolbar-group" });
    for (const b of FORMAT_BUTTONS) {
      const btn = fmt.createEl("button", { cls: "ue-toolbar-btn", attr: { "aria-label": t(b.label), "data-format": b.kind } });
      (0, import_obsidian5.setIcon)(btn, b.icon);
      btn.addEventListener("mousedown", (e) => e.preventDefault());
      btn.addEventListener("click", () => this.applyFormat(b.kind));
      this.formatBtns.set(b.kind, btn);
    }
    const align = center.createDiv({ cls: "ue-toolbar-group ue-align-group" });
    for (const b of ALIGN_BUTTONS) {
      const btn = align.createEl("button", { cls: "ue-toolbar-btn", attr: { "aria-label": t(b.label), "data-align": b.align } });
      (0, import_obsidian5.setIcon)(btn, b.icon);
      btn.addEventListener("mousedown", (e) => e.preventDefault());
      btn.addEventListener("click", () => this.applyAlign(b.align));
      this.alignBtns.set(b.align, btn);
    }
    this.propsBtn = left.createEl("button", { cls: "ue-toolbar-btn ue-props-btn", attr: { "aria-label": t("novel.propertiesTooltip") } });
    (0, import_obsidian5.setIcon)(this.propsBtn, "list");
    this.propsBtn.addEventListener("click", () => this.toggleProperties());
    this.sceneLists = new SceneLists(plugin);
    const sceneBtns = left.createDiv({ cls: "ue-toolbar-group ue-scene-group" });
    for (const def of SCENE_LISTS) {
      const btn = sceneBtns.createEl("button", {
        cls: "ue-toolbar-btn ue-scene-btn",
        attr: { "aria-label": t(def.tooltip), "data-kind": def.kind }
      });
      (0, import_obsidian5.setIcon)(btn.createSpan({ cls: "ue-btn-icon" }), def.icon);
      btn.createSpan({ cls: "ue-btn-label", text: t(def.label) });
      const picker = new ScenePicker(
        plugin,
        this.sceneLists,
        def,
        this.el,
        () => this.view.file,
        (open) => btn.toggleClass("is-active", open)
      );
      btn.addEventListener("click", () => {
        this.closePopovers(picker);
        picker.toggle(btn);
      });
      this.pickers.set(def.kind, picker);
    }
    this.infoEl = left.createDiv({ cls: "ue-toolbar-info ue-toolbar-tags" });
    this.countEl = right.createDiv({ cls: "ue-toolbar-info" });
    this.sceneEl = this.el.createDiv({ cls: "ue-toolbar-scene" });
    this.popover = new PropertiesPopover(
      plugin,
      this.el,
      () => this.view.file,
      (open) => this.propsBtn.toggleClass("is-active", open)
    );
  }
  mount() {
    const container = this.view.containerEl;
    if (this.el.parentElement !== container) container.insertBefore(this.el, this.view.contentEl);
    container.addClass("ue-editor");
    this.applySettings();
    this.setFile(this.view.file);
  }
  unmount() {
    this.closePopovers();
    if (this.countTimer !== null) window.clearTimeout(this.countTimer);
    this.el.remove();
    this.view.containerEl.removeClass("ue-editor", "ue-hide-props");
  }
  applySettings() {
    this.view.containerEl.toggleClass("ue-hide-props", this.plugin.settings.hideInlineProperties);
    this.propsBtn.toggleClass("is-hidden", !this.plugin.settings.showPropertiesButton);
    this.refreshInfo();
    this.refreshScene(true);
  }
  setFile(file) {
    var _a;
    const path = (_a = file == null ? void 0 : file.path) != null ? _a : null;
    if (path !== this.filePath) {
      this.filePath = path;
      this.closePopovers();
    }
    this.refreshInfo();
    this.refreshScene(true);
    this.refreshActiveStates();
  }
  toggleProperties() {
    this.closePopovers(this.popover);
    this.popover.toggle(this.propsBtn.hasClass("is-hidden") ? this.el : this.propsBtn);
  }
  /** Close every floating panel except `keep`. */
  closePopovers(keep) {
    if (keep !== this.popover) this.popover.close();
    for (const p of this.pickers.values()) if (p !== keep) p.close();
  }
  onMetadataChanged() {
    this.refreshInfo();
    this.refreshScene();
    this.popover.onMetadataChanged();
    for (const p of this.pickers.values()) p.refresh();
  }
  /** Portraits loaded or changed: update the labels and any open menu. */
  refreshPortraits() {
    this.refreshScene();
    for (const p of this.pickers.values()) p.refresh();
  }
  /** Redraw the row of scene labels (characters, locations, groups, lore, timeline) if what it shows changed. */
  refreshScene(force = false) {
    const file = this.view.file;
    const lists = file ? SCENE_LISTS.map((def) => ({ def, items: this.sceneLists.items(file, def) })) : [];
    const signature = JSON.stringify(
      lists.map(({ def, items }) => [def.kind, items.map((i) => {
        var _a, _b;
        return [i.raw, i.name, (_b = (_a = i.file) == null ? void 0 : _a.path) != null ? _b : "", i.file ? this.plugin.portrait(i.file) : ""];
      })])
    );
    if (!force && signature === this.sceneSignature) return;
    this.sceneSignature = signature;
    const row = this.sceneEl;
    row.empty();
    let any = false;
    for (const { def, items } of lists) {
      for (const item of items) {
        any = true;
        const pill = row.createDiv({
          cls: "ue-chip ue-scene-pill",
          attr: {
            role: "button",
            tabindex: "0",
            "data-kind": def.kind,
            "aria-label": item.file ? t("novel.openInSidebar", { name: item.name }) : t("novel.entryNotFound", { name: item.name })
          }
        });
        if (!item.file) pill.addClass("is-unresolved");
        renderAvatar(pill.createSpan({ cls: "ue-scene-pill-icon" }), this.plugin, item.file, def.icon);
        pill.createSpan({ cls: "ue-scene-pill-name", text: item.name });
        const remove = pill.createSpan({ cls: "ue-scene-pill-remove", attr: { role: "button", "aria-label": t("novel.removeFromScene") } });
        (0, import_obsidian5.setIcon)(remove, "x");
        const open = () => {
          if (item.file) void this.plugin.revealEntry(item.file);
          else new import_obsidian5.Notice(t("novel.entryNotFound", { name: item.name }));
        };
        remove.addEventListener("click", (e) => {
          var _a;
          e.stopPropagation();
          const f = this.view.file;
          if (f) void this.sceneLists.remove(f, def, (_a = item.file) != null ? _a : item.raw);
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
    row.toggleClass("is-empty", !any);
  }
  /** Called on every CodeMirror update for this view's editor. */
  onEditorUpdate(docChanged) {
    this.refreshActiveStates();
    this.scheduleCount(docChanged ? 400 : 120);
  }
  applyFormat(kind) {
    const cm = cmOf(this.view);
    if (!cm) return;
    if (this.view.getMode() !== "source") return;
    toggleFormat(cm, kind);
    cm.focus();
  }
  applyAlign(align) {
    const cm = cmOf(this.view);
    if (!cm || this.view.getMode() !== "source") return;
    setAlignment(cm, align);
    cm.focus();
  }
  refreshActiveStates() {
    const cm = cmOf(this.view);
    for (const [kind, btn] of this.formatBtns) {
      btn.toggleClass("is-active", !!cm && isActive(cm.state, kind));
    }
    const current2 = cm ? currentAlignment(cm.state) : null;
    for (const [a, btn] of this.alignBtns) btn.toggleClass("is-active", a === current2);
  }
  scheduleCount(delay) {
    if (this.countTimer !== null) window.clearTimeout(this.countTimer);
    this.countTimer = window.setTimeout(() => {
      this.countTimer = null;
      this.refreshInfo();
    }, delay);
  }
  refreshInfo() {
    var _a, _b;
    const info = this.infoEl;
    info.empty();
    this.countEl.empty();
    const file = this.view.file;
    if (!file) return;
    const fm = (_b = (_a = this.plugin.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {};
    for (const key of this.plugin.settings.requiredProperties) {
      if (UNLABELLED_PROPERTIES.has(key)) continue;
      const raw = fm[key];
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
        const sel = cm.state.selection.ranges.filter((r) => !r.empty).map((r) => cm.state.sliceDoc(r.from, r.to)).join(" ");
        if (sel) {
          const n = countWords(sel);
          wc.createSpan({ cls: "ue-wordcount-sel", text: ` \xB7 ${t("novel.selected", { count: n.toLocaleString() })}` });
        }
      }
    }
  }
};

// src/novel-editor/index.ts
var NOVEL_EDITOR_DEFAULTS = {
  novelEditor: true,
  novelEditorProperties: "novelr-type, novelr-status",
  novelEditorLivePreview: true,
  novelEditorHideProperties: true,
  novelEditorWordCount: true,
  novelEditorPropertiesButton: false
};
function normalizeNovelEditorSettings(data) {
  const bool = (v, d) => typeof v === "boolean" ? v : d;
  const props = typeof (data == null ? void 0 : data.novelEditorProperties) === "string" && parseProperties(data.novelEditorProperties).length ? data.novelEditorProperties : NOVEL_EDITOR_DEFAULTS.novelEditorProperties;
  return {
    novelEditor: bool(data == null ? void 0 : data.novelEditor, NOVEL_EDITOR_DEFAULTS.novelEditor),
    novelEditorProperties: props,
    novelEditorLivePreview: bool(data == null ? void 0 : data.novelEditorLivePreview, NOVEL_EDITOR_DEFAULTS.novelEditorLivePreview),
    novelEditorHideProperties: bool(data == null ? void 0 : data.novelEditorHideProperties, NOVEL_EDITOR_DEFAULTS.novelEditorHideProperties),
    novelEditorWordCount: bool(data == null ? void 0 : data.novelEditorWordCount, NOVEL_EDITOR_DEFAULTS.novelEditorWordCount),
    novelEditorPropertiesButton: bool(data == null ? void 0 : data.novelEditorPropertiesButton, NOVEL_EDITOR_DEFAULTS.novelEditorPropertiesButton)
  };
}
function parseProperties(value) {
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}
var NovelEditor = class extends import_obsidian6.Component {
  constructor(host) {
    super();
    this.host = host;
    this.toolbars = /* @__PURE__ */ new Map();
    this.syncQueued = false;
    /** Editor commands: id, name key, action on the note's CodeMirror view. */
    this.commands = [
      ["novel-toggle-underline", "command.novelUnderline", (cm) => toggleFormat(cm, "underline")],
      ["novel-toggle-strikethrough", "command.novelStrikethrough", (cm) => toggleFormat(cm, "strikethrough")],
      ...["left", "center", "right"].map(
        (a) => [
          `novel-align-${a}`,
          a === "left" ? "novel.alignLeft" : a === "center" ? "novel.alignCenter" : "novel.alignRight",
          (cm) => setAlignment(cm, a)
        ]
      )
    ];
    this.portraitsQueued = false;
  }
  get app() {
    return this.host.app;
  }
  get settings() {
    const s = this.host.settings;
    const props = parseProperties(s.novelEditorProperties);
    return {
      requiredProperties: props.length ? props : parseProperties(NOVEL_EDITOR_DEFAULTS.novelEditorProperties),
      forceLivePreview: s.novelEditorLivePreview,
      hideInlineProperties: s.novelEditorHideProperties,
      showWordCount: s.novelEditorWordCount,
      showPropertiesButton: s.novelEditorPropertiesButton
    };
  }
  entries(kind) {
    return this.host.universeEntries(kind);
  }
  revealEntry(file) {
    return this.host.revealUniverseEntry(file);
  }
  portrait(file) {
    var _a;
    return (_a = this.host.universePortrait(file)) != null ? _a : null;
  }
  /** Portraits finished loading or changed: redraw the scene labels and open menus (once per frame). */
  portraitsChanged() {
    if (this.portraitsQueued) return;
    this.portraitsQueued = true;
    window.requestAnimationFrame(() => {
      this.portraitsQueued = false;
      for (const tb of this.toolbars.values()) tb.refreshPortraits();
    });
  }
  onload() {
    this.host.registerEditorExtension([alignmentExtension, alignmentKeeper]);
    this.host.registerMarkdownPostProcessor(alignmentPostProcessor);
    this.host.registerEditorExtension(
      import_view2.EditorView.updateListener.of((update) => {
        if (!update.selectionSet && !update.docChanged) return;
        for (const tb of this.toolbars.values()) {
          if (cmOf(tb.view) === update.view) {
            tb.onEditorUpdate(update.docChanged);
            break;
          }
        }
      })
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
          else tb.refreshScene();
        }
      })
    );
    this.app.workspace.onLayoutReady(() => this.syncAll());
  }
  onunload() {
    this.detachAll();
  }
  /** Adds the novel editor's commands, named in the current language. */
  registerCommands() {
    for (const [id, key, run] of this.commands) {
      this.host.addCommand({
        id,
        name: t(key),
        editorCallback: (_editor, ctx) => {
          if (!(ctx instanceof import_obsidian6.MarkdownView)) return;
          const cm = cmOf(ctx);
          if (cm) run(cm);
        }
      });
    }
    this.host.addCommand({
      id: "novel-open-properties",
      name: t("command.novelProperties"),
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
        const tb = view ? this.toolbars.get(view) : void 0;
        if (!tb) return false;
        if (!checking) tb.toggleProperties();
        return true;
      }
    });
  }
  commandIds() {
    return [...this.commands.map(([id]) => id), "novel-open-properties"];
  }
  /** Rebuild every toolbar (after a language or settings change). */
  refresh() {
    this.detachAll();
    this.syncAll();
  }
  detachAll() {
    for (const tb of this.toolbars.values()) tb.unmount();
    this.toolbars.clear();
  }
  /** Does this file carry every required property? */
  qualifies(file) {
    var _a;
    if (!this.host.settings.novelEditor || !file || file.extension !== "md") return false;
    const fm = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
    if (!fm) return false;
    return this.settings.requiredProperties.every((k) => Object.prototype.hasOwnProperty.call(fm, k));
  }
  /** Only editors in the main (center) area, never the left or right sidebars. */
  isCenterLeaf(leaf) {
    const root = leaf.getRoot();
    const ws = this.app.workspace;
    return root !== ws.leftSplit && root !== ws.rightSplit;
  }
  queueSync() {
    if (this.syncQueued) return;
    this.syncQueued = true;
    window.requestAnimationFrame(() => {
      this.syncQueued = false;
      this.syncAll();
    });
  }
  /** Attach, update or detach toolbars so they match the notes currently open. */
  syncAll() {
    const live = /* @__PURE__ */ new Set();
    this.app.workspace.iterateAllLeaves((leaf) => {
      const view = leaf.view;
      if (!(view instanceof import_obsidian6.MarkdownView)) return;
      if (!this.isCenterLeaf(leaf) || !this.qualifies(view.file)) return;
      live.add(view);
      let tb = this.toolbars.get(view);
      if (!tb) {
        tb = new NovelToolbar(this, view);
        this.toolbars.set(view, tb);
      }
      tb.mount();
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
  ensureLivePreview(leaf, tb) {
    var _a, _b, _c;
    const path = (_b = (_a = tb.view.file) == null ? void 0 : _a.path) != null ? _b : null;
    if (!this.settings.forceLivePreview || !path || tb.forcedFor === path) return;
    tb.forcedFor = path;
    const vs = leaf.getViewState();
    const st = (_c = vs.state) != null ? _c : {};
    if (st.mode === "source" && st.source === false) return;
    void leaf.setViewState({ ...vs, state: { ...st, mode: "source", source: false } });
  }
};

// src/main.ts
function getMarkdownFilesIn(app, folderPath) {
  const folder = app.vault.getAbstractFileByPath((0, import_obsidian7.normalizePath)(folderPath));
  if (!(folder instanceof import_obsidian7.TFolder)) return [];
  const out = [];
  import_obsidian7.Vault.recurseChildren(folder, (f) => {
    if (f instanceof import_obsidian7.TFile && f.extension === "md") out.push(f);
  });
  return out;
}
var DEFAULT_FOLDER = "UniverseBuilder";
var LEGACY_FOLDER = "World";
var WORLD_BUILDER_ID = "world-builder";
var DEFAULT_SETTINGS = {
  worldFolder: DEFAULT_FOLDER,
  characterOrder: {},
  collapsedGroups: [],
  characterGrouping: "group",
  characterOrderBy: {},
  collapsedCharacterSections: {},
  collapsedGroupTypes: [],
  collapsedParents: [],
  collapsedSubsidiaries: [],
  sectionOrder: {},
  bookmarks: [],
  collapsedBookmarkGroups: [],
  inlineEditor: "live",
  folderMigration: {},
  language: "auto",
  customOptions: {},
  ...NOVEL_EDITOR_DEFAULTS
};
var GROUP_TYPES = ["corporation", "government", "military", "criminal"];
var CHARACTER_ROLES = ["protagonist", "antagonist", "supporting", "minor"];
var CHARACTER_GROUPINGS = ["group", "name", "role", "age-asc", "age-desc", "ship", "home"];
function groupingLabel(g) {
  switch (g) {
    case "group":
      return t("character.group");
    case "name":
      return t("form.name");
    case "role":
      return t("character.role");
    case "age-asc":
      return t("grouping.ageAsc");
    case "age-desc":
      return t("grouping.ageDesc");
    case "ship":
      return t("character.ship");
    case "home":
      return t("character.home");
  }
}
function ageNumber(age) {
  const m = (age != null ? age : "").replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}
var LOCATION_TYPES = ["planet", "dwarf planet", "moon", "station", "asteroid", "belt", "ship", "city", "region", "building", "landmark"];
var GROUP_ALIGNMENTS = ["lawful", "neutral", "chaotic"];
var LORE_CATEGORIES = ["history", "tech", "religion", "culture", "other"];
var SECTION_METADATA = {
  characters: [{ id: "role", key: "role", label: "character.role", builtIn: CHARACTER_ROLES, shapesSidebar: true }],
  locations: [{ id: "locationType", key: "type", label: "form.type", builtIn: LOCATION_TYPES }],
  groups: [
    { id: "groupType", key: "type", label: "form.type", builtIn: GROUP_TYPES, shapesSidebar: true, removeNote: "metadata.removeGroupType" },
    { id: "alignment", key: "alignment", label: "group.alignment", builtIn: GROUP_ALIGNMENTS }
  ],
  lore: [{ id: "loreCategory", key: "category", label: "lore.category", builtIn: LORE_CATEGORIES }],
  timeline: []
};
var METADATA_FIELDS = Object.values(SECTION_METADATA).flat();
function metadataField(tab, id) {
  const field = SECTION_METADATA[tab].find((f) => f.id === id);
  if (!field) throw new Error(`Universe Builder: no editable field ${id} in ${tab}`);
  return field;
}
function optionKey(value) {
  return value.trim().toLowerCase();
}
function yamlScalar(value) {
  return /^[\p{L}\p{N}][\p{L}\p{N} _-]*$/u.test(value) && !/^(true|false|yes|no|on|off|null|~)$/i.test(value) && !/^[\d\s._-]+$/.test(value) ? value : JSON.stringify(value);
}
function slugify(s) {
  return s.replace(/[/\\:*?"<>|#^[\]]/g, "-").trim();
}
var SUBSIDIARY_OF = "subsidiary-of";
function isShip(fm) {
  var _a;
  return ((_a = fm.type) != null ? _a : "").trim().toLowerCase() === "ship";
}
function compareTimelineDates(a, b) {
  if (!a || !b) return (a ? 0 : 1) - (b ? 0 : 1);
  const num = /^[-+−]?\d+(\.\d+)?$/;
  if (num.test(a) && num.test(b)) return Number(a.replace("\u2212", "-")) - Number(b.replace("\u2212", "-"));
  return a.localeCompare(b, void 0, { sensitivity: "base", numeric: true });
}
var IMG_EXT = /\.(png|jpe?g|gif|webp|svg|bmp|avif)$/i;
var SIZE_SPEC = /^\d+(x\d+)?$/;
function findFirstImage(app, content, file) {
  var _a, _b, _c, _d;
  const re = /!\[\[([^\]]+)\]\]|!\[([^\]]*)\]\((<[^>]+>|[^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const start = m.index;
    const end = m.index + m[0].length;
    let target;
    let size = "";
    if (m[1] !== void 0) {
      const parts = m[1].split("|");
      target = parts[0].split("#")[0].trim();
      size = ((_a = parts[1]) != null ? _a : "").trim();
    } else {
      size = ((_b = m[2]) != null ? _b : "").split("|").pop().trim();
      target = ((_c = m[3]) != null ? _c : "").trim();
      if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
      if (/^https?:\/\//i.test(target)) {
        const bare = target.split(/[?#]/)[0];
        if (IMG_EXT.test(bare)) {
          return { src: target, start, end, file: null, name: bare.split("/").pop() || target, size: SIZE_SPEC.test(size) ? size : "" };
        }
        continue;
      }
      try {
        target = decodeURIComponent(target);
      } catch (e) {
      }
      target = target.split("#")[0];
    }
    if (!IMG_EXT.test(target)) continue;
    const dest = (_d = app.metadataCache.getFirstLinkpathDest(target, file.path)) != null ? _d : app.vault.getAbstractFileByPath(target);
    if (dest instanceof import_obsidian7.TFile) {
      return { src: app.vault.getResourcePath(dest), start, end, file: dest, name: dest.name, size: SIZE_SPEC.test(size) ? size : "" };
    }
  }
  return null;
}
var SHOW_NAV_BUTTONS = false;
var FLOAT_GAP = 20;
var FLOAT_GAP_BOTTOM = FLOAT_GAP + 18;
var FLOAT_MS = 220;
var IMAGES_SUBFOLDER = "Images";
function migratedFolderNames() {
  return [...SECTION_TABS.map((tab) => SECTION_FOLDERS[tab]), IMAGES_SUBFOLDER];
}
function imagesFolderPath(worldFolder) {
  return (0, import_obsidian7.normalizePath)(`${worldFolder}/${IMAGES_SUBFOLDER}`);
}
function portraitFolderFor(worldFolder, notePath) {
  const root = (0, import_obsidian7.normalizePath)(worldFolder);
  const images = imagesFolderPath(worldFolder);
  const path = (0, import_obsidian7.normalizePath)(notePath);
  if (!path.toLowerCase().startsWith(root.toLowerCase() + "/")) return images;
  const first = path.slice(root.length + 1).split("/")[0].toLowerCase();
  const section = SECTION_TABS.map((tab) => SECTION_FOLDERS[tab]).find((label) => label.toLowerCase() === first);
  return section ? `${images}/${section}` : images;
}
async function ensureFolderPath(app, path) {
  let current2 = "";
  for (const part of (0, import_obsidian7.normalizePath)(path).split("/")) {
    current2 = current2 ? `${current2}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current2)) await app.vault.createFolder(current2);
  }
}
function draggedVaultImage(app) {
  var _a, _b;
  const draggable = (_a = app.dragManager) == null ? void 0 : _a.draggable;
  if (!draggable) return null;
  const candidates = draggable.type === "file" ? [draggable.file] : draggable.type === "files" ? (_b = draggable.files) != null ? _b : [] : [];
  for (const f of candidates) if (f instanceof import_obsidian7.TFile && IMG_EXT.test(f.name)) return f;
  return null;
}
function vaultFileForDropped(app, dropped) {
  var _a, _b, _c, _d;
  const adapter = app.vault.adapter;
  if (!(adapter instanceof import_obsidian7.FileSystemAdapter)) return null;
  let osPath = "";
  try {
    const electron = (_a = window.require) == null ? void 0 : _a.call(window, "electron");
    osPath = ((_c = (_b = electron == null ? void 0 : electron.webUtils) == null ? void 0 : _b.getPathForFile) == null ? void 0 : _c.call(_b, dropped)) || dropped.path || "";
  } catch (e) {
    osPath = (_d = dropped.path) != null ? _d : "";
  }
  if (!osPath) return null;
  const norm = (p) => p.replace(/\\/g, "/").replace(/\/+$/, "");
  const base = norm(adapter.getBasePath());
  const full = norm(osPath);
  if (!full.toLowerCase().startsWith(base.toLowerCase() + "/")) return null;
  const found = app.vault.getAbstractFileByPath((0, import_obsidian7.normalizePath)(full.slice(base.length + 1)));
  return found instanceof import_obsidian7.TFile ? found : null;
}
function isImageDrag(app, e) {
  var _a;
  const dt = e.dataTransfer;
  if (!dt || dt.types.includes("application/x-wb-card")) return false;
  if (dt.types.includes("Files")) {
    const items = Array.from((_a = dt.items) != null ? _a : []);
    return items.length === 0 || items.some((i) => i.kind === "file" && (i.type === "" || i.type.startsWith("image/")));
  }
  return draggedVaultImage(app) !== null;
}
function droppedImageFrom(app, dt) {
  if (dt.types.includes("Files")) return imageFromFiles(app, Array.from(dt.files));
  const vaultFile = draggedVaultImage(app);
  return vaultFile ? { kind: "vault", file: vaultFile } : null;
}
function imageFromFiles(app, files) {
  if (files.length === 0) return null;
  const picked = files.find((f) => IMG_EXT.test(f.name));
  if (!picked) {
    new import_obsidian7.Notice(files.length === 1 ? t("notice.notAnImage", { name: files[0].name }) : t("notice.noImages"));
    return null;
  }
  const inVault = vaultFileForDropped(app, picked);
  return inVault ? { kind: "vault", file: inVault } : { kind: "external", file: picked };
}
function sameBytes(a, b) {
  if (a.byteLength !== b.byteLength) return false;
  const x = new Uint8Array(a);
  const y = new Uint8Array(b);
  for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
  return true;
}
async function importImage(app, worldFolder, file, notePath) {
  const folder = portraitFolderFor(worldFolder, notePath);
  await ensureFolderPath(app, folder);
  const data = await file.arrayBuffer();
  const dot = file.name.lastIndexOf(".");
  const stem = slugify(dot > 0 ? file.name.slice(0, dot) : file.name) || "image";
  const ext = (dot > 0 ? file.name.slice(dot + 1) : "png").toLowerCase();
  const folderObj = app.vault.getAbstractFileByPath(folder);
  const siblings = /* @__PURE__ */ new Map();
  if (folderObj instanceof import_obsidian7.TFolder) {
    for (const child of folderObj.children) if (child instanceof import_obsidian7.TFile) siblings.set(child.name.toLowerCase(), child);
  }
  for (let n = 0; ; n++) {
    const name = n === 0 ? `${stem}.${ext}` : `${stem} ${n}.${ext}`;
    const clash = siblings.get(name.toLowerCase());
    if (!clash) return await app.vault.createBinary(`${folder}/${name}`, data);
    if (clash.stat.size === data.byteLength && sameBytes(await app.vault.readBinary(clash), data)) return clash;
  }
}
function portraitEmbed(app, image, notePath, size = "") {
  const link = app.fileManager.generateMarkdownLink(image, notePath, void 0, size || void 0);
  return link.startsWith("!") ? link : `!${link}`;
}
function insertAtBodyTop(data, embed) {
  const bodyStart = data.length - stripFrontmatterBlock(data).length;
  let head = data.slice(0, bodyStart);
  if (head && !head.endsWith("\n")) head += "\n";
  return `${head}${embed}
${data.slice(bodyStart)}`;
}
function stripFrontmatterBlock(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/, "");
}
function stripLeadingHeading(markdown) {
  var _a;
  const lines = markdown.replace(/^\s+/, "").split("\n");
  if (!/^#\s+\S/.test((_a = lines[0]) != null ? _a : "")) return markdown;
  lines.shift();
  while (lines[0] === "") lines.shift();
  return lines.join("\n");
}
function openImageZoom(src, alt) {
  var _a;
  (_a = document.querySelector(".wb-zoom-overlay")) == null ? void 0 : _a.remove();
  const overlay = document.body.createDiv({ cls: "wb-zoom-overlay", attr: { role: "dialog", "aria-modal": "true", "aria-label": alt || t("card.image") } });
  const img = overlay.createEl("img", { cls: "wb-zoom-img", attr: { src, alt, draggable: "false" } });
  let scale = 1;
  let x = 0;
  let y = 0;
  const apply = () => {
    img.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    overlay.toggleClass("is-zoomed", scale > 1);
  };
  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey, true);
  };
  const onKey = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
  };
  document.addEventListener("keydown", onKey, true);
  overlay.addEventListener("wheel", (e) => {
    e.preventDefault();
    const prev = scale;
    scale = Math.min(10, Math.max(1, scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15)));
    if (scale === 1) {
      x = 0;
      y = 0;
    } else {
      const cx = e.clientX - window.innerWidth / 2;
      const cy = e.clientY - window.innerHeight / 2;
      x = cx - (cx - x) * scale / prev;
      y = cy - (cy - y) * scale / prev;
    }
    apply();
  }, { passive: false });
  let dragStart = null;
  let moved = false;
  overlay.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    dragStart = { mx: e.clientX, my: e.clientY, x, y };
    moved = false;
    overlay.setPointerCapture(e.pointerId);
  });
  overlay.addEventListener("pointermove", (e) => {
    if (!dragStart) return;
    const dx = e.clientX - dragStart.mx;
    const dy = e.clientY - dragStart.my;
    if (!moved && Math.hypot(dx, dy) < 4) return;
    moved = true;
    if (scale > 1) {
      overlay.addClass("is-panning");
      x = dragStart.x + dx;
      y = dragStart.y + dy;
      apply();
    }
  });
  overlay.addEventListener("pointerup", () => {
    overlay.removeClass("is-panning");
    const wasClick = dragStart && !moved;
    dragStart = null;
    if (wasClick) close();
  });
  img.onerror = close;
}
async function ensureFolder(app, path) {
  if (!app.vault.getAbstractFileByPath(path)) {
    await app.vault.createFolder(path);
  }
}
async function createNote(app, folder, filename, content) {
  await ensureFolder(app, folder);
  const path = `${folder}/${slugify(filename)}.md`;
  const existing = app.vault.getAbstractFileByPath(path);
  if (existing instanceof import_obsidian7.TFile) {
    await app.vault.modify(existing, content);
    return existing;
  }
  return await app.vault.create(path, content);
}
function readFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    let value = line.slice(idx + 1).trim();
    if (value.length >= 2 && (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    result[line.slice(0, idx).trim()] = value;
  }
  return result;
}
function labeledLine(pairs) {
  return pairs.filter(([, value]) => value).map(([label, value]) => `${label}:\xA0${value}`).join(" \u2022 ");
}
function normalizeForSearch(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function parseRefName(raw) {
  const trimmed = raw.trim();
  const m = trimmed.match(/^\[\[([^\]]+)\]\]$/);
  const inner = m ? m[1] : trimmed;
  return inner.split("|")[0].split("#")[0].trim();
}
function documentSearchText(content, fm) {
  const body = stripFrontmatterBlock(content).replace(/!\[\[[^\]]*\]\]/g, " ").replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, "$1").replace(/\[\[([^\]]*)\]\]/g, "$1").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, " ");
  const values = Object.entries(fm).filter(([key]) => key !== "entry_type").map(([, value]) => value);
  return [...values, body].join(" ");
}
var hasValue = (v) => v !== void 0 && v !== null && !(typeof v === "string" && v.trim() === "");
var isPov = (v) => hasValue(v) && !/^(no|false|n|0|off)$/i.test(String(v).trim());
function setYamlLine(yaml, key, value) {
  const line = `${key}: ${value}`;
  if (!yaml.trim()) return line;
  const eol = yaml.includes("\r\n") ? "\r\n" : "\n";
  const lines = yaml.split(/\r?\n/);
  const keyRe = new RegExp(`^${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:`);
  const idx = lines.findIndex((l) => keyRe.test(l));
  if (idx !== -1) {
    lines[idx] = line;
  } else {
    let at = lines.length;
    while (at > 0 && !lines[at - 1].trim()) at--;
    lines.splice(at, 0, line);
  }
  return lines.join(eol);
}
function yamlPov(yaml) {
  return readFrontmatter(`---
${yaml.replace(/\r\n/g, "\n")}
---`).pov;
}
function createPovToggle(row, getYaml, setYaml, watch, onChange) {
  const btn = row.createEl("button", {
    cls: "wb-btn-secondary wb-icon-btn wb-pov-toggle",
    attr: { type: "button" }
  });
  (0, import_obsidian7.setIcon)(btn.createSpan({ cls: "wb-btn-icon" }), "user");
  btn.createSpan({ text: t("card.pov") });
  const sync = () => {
    const on = isPov(yamlPov(getYaml()));
    btn.classList.toggle("is-pov", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? t("card.povRemove") : t("card.povAdd"));
    onChange == null ? void 0 : onChange(on);
  };
  btn.onclick = () => {
    setYaml(setYamlLine(getYaml(), "pov", isPov(yamlPov(getYaml())) ? "no" : "yes"));
    watch.dispatchEvent(new Event("input"));
  };
  watch.addEventListener("input", sync);
  sync();
}
var SECTION_TABS = ["characters", "locations", "groups", "lore", "timeline"];
var SECTION_FOLDERS = {
  characters: "Characters",
  locations: "Locations",
  groups: "Groups",
  lore: "Lore",
  timeline: "Timeline"
};
function buildParentTree(entries, getParentName, getOwnName) {
  const nameIndex = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const key = normalizeForSearch(parseRefName(getOwnName(entry.fm) || ""));
    if (key && !nameIndex.has(key)) nameIndex.set(key, entry);
  }
  const parentOf = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const raw = parseRefName(getParentName(entry.fm) || "");
    if (!raw) continue;
    const parent = nameIndex.get(normalizeForSearch(raw));
    if (parent && parent.file.path !== entry.file.path) parentOf.set(entry.file.path, parent);
  }
  const isAcyclic = (start) => {
    const seen = /* @__PURE__ */ new Set();
    let cur = start;
    while (cur) {
      if (seen.has(cur.file.path)) return false;
      seen.add(cur.file.path);
      cur = parentOf.get(cur.file.path);
    }
    return true;
  };
  for (const entry of entries) {
    if (parentOf.has(entry.file.path) && !isAcyclic(entry)) parentOf.delete(entry.file.path);
  }
  const childrenOf = /* @__PURE__ */ new Map();
  const roots = [];
  for (const entry of entries) {
    const parent = parentOf.get(entry.file.path);
    if (!parent) {
      roots.push(entry);
      continue;
    }
    const list = childrenOf.get(parent.file.path);
    if (list) list.push(entry);
    else childrenOf.set(parent.file.path, [entry]);
  }
  return { roots, childrenOf };
}
function mergeGroupOrder(overall, groupPaths, newGroupOrder) {
  const groupSet = new Set(groupPaths);
  const result = [];
  let inserted = false;
  for (const path of overall) {
    if (groupSet.has(path)) {
      if (!inserted) {
        result.push(...newGroupOrder);
        inserted = true;
      }
    } else {
      result.push(path);
    }
  }
  if (!inserted) result.push(...newGroupOrder);
  return result;
}
var VIEW_TYPE = "universe-builder-sidebar";
var UniverseBuilderView = class extends import_obsidian7.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.activeTab = "characters";
    /** What is typed in the search bar for each tab; kept here so it survives a redraw (Reload, new note, ...). */
    this.searchQueries = { characters: "", locations: "", groups: "", lore: "", timeline: "", bookmarks: "" };
    /** The section tab to return to when the Bookmarks button is clicked again while viewing bookmarks. */
    this.lastSectionTab = "characters";
    /** How each section draws its cards, captured in renderSection() so the Bookmarks view can draw them the same way. */
    this.sectionConfigs = {};
    /** The Bookmarks button in the title row, highlighted while the Bookmarks view is open. */
    this.bookmarkHeaderButtons = [];
    this.searchTargets = {};
    /** Normalised text each card is matched against. */
    this.searchIndex = /* @__PURE__ */ new WeakMap();
    /** Every note currently drawn in the sidebar, keyed by path, so a wiki-link click can find its entry. */
    this.entryByPath = /* @__PURE__ */ new Map();
    /** Tabs whose lists nest child entries under their parent (see renderHierarchicalGroup). */
    this.hierarchicalTabs = /* @__PURE__ */ new Set(["locations"]);
    /** Un-collapses one hierarchical parent's subtree, keyed by the parent's note path (used by revealCard). */
    this.treeExpanders = /* @__PURE__ */ new Map();
    /**
     * Every collapsible group label drawn in the sidebar, mapped to a function that folds it and
     * records that in settings (without saving). Used by collapseAllInTab(); weak so old DOM from a
     * previous render() is simply dropped.
     */
    this.groupCollapsers = /* @__PURE__ */ new WeakMap();
    /** Whether the click that started the current (possible) double-click landed on the tab that was already active. */
    this.tabClickWasOnActive = false;
    /**
     * The one card whose inline markdown editor is open (only one entry is edited at a time).
     * finish() saves any changes and leaves edit mode, resolving false if that was cancelled.
     */
    this.activeEdit = null;
    /** Note path whose editor should open as soon as its card is redrawn (after switching edits triggers a save + redraw). */
    this.pendingEditPath = null;
    /** The expanded card, floating over the list (see enterFloat). Only one card is expanded at a time. */
    this.floating = null;
    /** Set while re-opening a card after a redraw, so it floats straight into place without animating. */
    this.floatInstantly = false;
    // Rebuilt on every render(); let switchTab() and the nav buttons operate without closures.
    this.tabBarEl = null;
    this.tabContents = {};
    this.showTabSearchFn = null;
    this.updateShadowFn = null;
    /**
     * Back/forward history across tab switches and card expansions (including ones triggered by
     * clicking a wiki-link in an expanded card). Persists across render() calls; only the DOM it
     * points at is rebuilt.
     */
    this.navHistory = [];
    this.navIndex = -1;
    /** True while a back/forward navigation is replaying a history entry, so it isn't re-recorded. */
    this.restoringNav = false;
    this.navButtons = [];
    /** Back / Forward in the expanded card's toolbar; these step between expanded entries only (see navigateCard). */
    this.cardNavButtons = [];
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Universe Builder";
  }
  getIcon() {
    return "orbit";
  }
  async onOpen() {
    await this.render();
  }
  async onClose() {
  }
  /**
   * Redraws the whole sidebar. With keepExpanded, the cards that were expanded (per tab) are
   * re-opened afterwards, e.g. after saving an inline edit, so the saved card stays open.
   */
  async render(opts = {}) {
    var _a, _b, _c, _d;
    const { containerEl } = this;
    const scrollTop = (_b = (_a = containerEl.querySelector(".wb-scroll")) == null ? void 0 : _a.scrollTop) != null ? _b : 0;
    const reopen = [];
    if (opts.keepExpanded) {
      for (const [tab, pane] of Object.entries(this.tabContents)) {
        pane.body.querySelectorAll(".wb-card.wb-card-expanded").forEach((card) => {
          const path = card.getAttribute("data-path");
          if (path) reopen.push({ tab, path });
        });
      }
    }
    const oldSearch = containerEl.querySelector(".wb-search-input");
    const searchHadFocus = !!oldSearch && containerEl.ownerDocument.activeElement === oldSearch;
    containerEl.empty();
    containerEl.addClass("wb-sidebar");
    this.entryByPath = /* @__PURE__ */ new Map();
    this.treeExpanders = /* @__PURE__ */ new Map();
    (_c = this.activeEdit) == null ? void 0 : _c.abandon();
    this.activeEdit = null;
    void this.exitFloat(true);
    this.navButtons = [];
    this.cardNavButtons = [];
    this.bookmarkHeaderButtons = [];
    this.sectionConfigs = {};
    const fixed = containerEl.createDiv("wb-fixed");
    const scroll = containerEl.createDiv("wb-scroll");
    const header = fixed.createDiv("wb-header");
    header.createEl("h2", { text: "Universe Builder" });
    const bookmarksBtn = header.createEl("button", {
      cls: "wb-btn-secondary wb-icon-btn wb-bookmarks-btn wb-header-btn",
      attr: { type: "button", "aria-label": t("bookmarks") }
    });
    (0, import_obsidian7.setIcon)(bookmarksBtn.createSpan({ cls: "wb-btn-icon" }), "bookmark");
    bookmarksBtn.createSpan({ text: t("bookmarks") });
    bookmarksBtn.onclick = () => this.toggleBookmarksView();
    this.bookmarkHeaderButtons.push(bookmarksBtn);
    const tabBar = fixed.createDiv("wb-tabs");
    const tabs = SECTION_TABS.map((id) => ({ id, label: t(`tab.${id}`) }));
    this.tabBarEl = tabBar;
    const contents = {};
    tabs.forEach(({ id, label }) => {
      const btn = tabBar.createEl("button", { text: label, cls: "wb-tab" });
      btn.setAttribute("data-tab", id);
      if (id === this.activeTab) btn.addClass("active");
      btn.onclick = (e) => {
        if (e.detail <= 1) this.tabClickWasOnActive = id === this.activeTab;
        if (id === this.activeTab) return;
        this.switchTab(id);
        this.recordNav(id, null);
      };
      btn.ondblclick = () => {
        if (!this.tabClickWasOnActive || id !== this.activeTab) return;
        void this.collapseAllInTab(id);
      };
      const pane = {
        head: fixed.createDiv("wb-tab-content wb-tab-head"),
        body: scroll.createDiv("wb-tab-content wb-tab-body")
      };
      if (id === this.activeTab) {
        pane.head.addClass("active");
        pane.body.addClass("active");
      }
      contents[id] = pane;
      this.searchTargets[id] = pane.body;
    });
    const bookmarksPane = {
      head: fixed.createDiv("wb-tab-content wb-tab-head"),
      body: scroll.createDiv("wb-tab-content wb-tab-body wb-bookmarks-body")
    };
    if (this.activeTab === "bookmarks") {
      bookmarksPane.head.addClass("active");
      bookmarksPane.body.addClass("active");
    }
    contents.bookmarks = bookmarksPane;
    this.searchTargets.bookmarks = bookmarksPane.body;
    this.tabContents = contents;
    const searchBox = fixed.createDiv("wb-search");
    (0, import_obsidian7.setIcon)(searchBox.createSpan({ cls: "wb-search-icon" }), "search");
    const searchInput = searchBox.createEl("input", {
      cls: "wb-search-input",
      attr: { type: "text", spellcheck: "false" }
    });
    const clearBtn = searchBox.createEl("button", {
      cls: "wb-search-clear",
      attr: { type: "button", "aria-label": t("search.clear") }
    });
    (0, import_obsidian7.setIcon)(clearBtn, "x");
    const syncClear = () => clearBtn.classList.toggle("is-visible", searchInput.value.length > 0);
    const showTabSearch = () => {
      const label = t(`search.${this.activeTab}`);
      searchInput.value = this.searchQueries[this.activeTab];
      searchInput.setAttribute("placeholder", `${label}\u2026`);
      searchInput.setAttribute("title", t(`search.tip.${this.activeTab}`));
      searchInput.setAttribute("aria-label", label);
      syncClear();
    };
    const updateShadow = () => fixed.classList.toggle("is-scrolled", scroll.scrollTop > 0);
    scroll.addEventListener("scroll", updateShadow, { passive: true });
    this.showTabSearchFn = showTabSearch;
    this.updateShadowFn = updateShadow;
    const setQuery = (q) => {
      this.searchQueries[this.activeTab] = q;
      syncClear();
      this.applySearch(this.activeTab);
      scroll.scrollTop = 0;
      updateShadow();
    };
    searchInput.addEventListener("input", () => setQuery(searchInput.value));
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchInput.value) {
        e.preventDefault();
        e.stopPropagation();
        searchInput.value = "";
        setQuery("");
      }
    });
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      setQuery("");
      searchInput.focus();
    });
    showTabSearch();
    const folder = this.plugin.settings.worldFolder;
    await this.renderSection(
      "characters",
      contents.characters,
      `${folder}/${SECTION_FOLDERS.characters}`,
      () => new CharacterModal(this.app, this.plugin, () => void this.render()).open(),
      (fm) => {
        var _a2, _b2, _c2;
        return {
          title: (_a2 = fm.name) != null ? _a2 : t("card.unnamed"),
          // Two lines: age/home, then group/ship (a line with no values is dropped).
          meta: [
            labeledLine([[t("card.age"), fm.age], [t("card.home"), fm.home]]),
            labeledLine([[t("card.group"), fm.group], [t("card.ship"), fm.ship]])
          ].filter(Boolean).join("\n"),
          badge: (_b2 = fm.role) != null ? _b2 : "",
          badgeText: displayValue("role", (_c2 = fm.role) != null ? _c2 : ""),
          // `pov` is set by the New Character form, the expanded card's POV toggle, or by hand.
          extraBadges: isPov(fm.pov) ? [{ text: t("card.pov"), cls: "wb-badge-pov" }] : [],
          // What the search bar matches against.
          search: [fm.name, fm.group, fm.ship, fm.home].filter(Boolean).join(" ")
        };
      },
      { thumbs: true, groupGroups: true, stackBadge: true, expandable: true }
    );
    await this.renderSection(
      "locations",
      contents.locations,
      `${folder}/${SECTION_FOLDERS.locations}`,
      () => new LocationModal(this.app, this.plugin, () => void this.render()).open(),
      (fm) => {
        var _a2, _b2, _c2, _d2;
        return {
          title: (_a2 = fm.name) != null ? _a2 : t("card.unnamed"),
          // Type already shows as the badge, so the sub-line is just the parent location.
          meta: ((_b2 = fm.parent) != null ? _b2 : "").trim(),
          badge: (_c2 = fm.type) != null ? _c2 : "",
          badgeText: displayValue("locationType", (_d2 = fm.type) != null ? _d2 : "")
        };
      },
      {
        thumbs: true,
        expandable: true,
        hierarchical: true,
        // Ships travel, so their `parent` (where they are right now) never nests them: they
        // always start their own tree, drawn in the separate Ships section below.
        getParentName: (fm) => {
          var _a2;
          return isShip(fm) ? "" : (_a2 = fm.parent) != null ? _a2 : "";
        },
        getOwnName: (fm) => {
          var _a2;
          return (_a2 = fm.name) != null ? _a2 : "";
        },
        movableSection: { id: "ships", label: t("locations.ships"), isMovable: isShip }
      }
    );
    await this.renderSection(
      "groups",
      contents.groups,
      `${folder}/${SECTION_FOLDERS.groups}`,
      () => new GroupModal(this.app, this.plugin, () => void this.render()).open(),
      (fm) => {
        var _a2, _b2, _c2, _d2;
        return {
          title: (_a2 = fm.name) != null ? _a2 : t("card.unnamed"),
          meta: (_b2 = fm.goals) != null ? _b2 : "",
          badge: (_c2 = fm.alignment) != null ? _c2 : "",
          badgeText: displayValue("alignment", (_d2 = fm.alignment) != null ? _d2 : "")
        };
      },
      { thumbs: true, expandable: true, typeGroups: true }
    );
    await this.renderSection(
      "lore",
      contents.lore,
      `${folder}/${SECTION_FOLDERS.lore}`,
      () => new LoreModal(this.app, this.plugin, () => void this.render()).open(),
      (fm) => {
        var _a2, _b2, _c2, _d2;
        return {
          title: (_a2 = fm.title) != null ? _a2 : t("card.untitled"),
          meta: displayValue("loreCategory", (_b2 = fm.category) != null ? _b2 : ""),
          badge: (_c2 = fm.category) != null ? _c2 : "",
          badgeText: displayValue("loreCategory", (_d2 = fm.category) != null ? _d2 : "")
        };
      },
      { thumbs: true, expandable: true }
    );
    await this.renderSection(
      "timeline",
      contents.timeline,
      `${folder}/${SECTION_FOLDERS.timeline}`,
      () => new TimelineModal(this.app, this.plugin, () => void this.render()).open(),
      (fm) => {
        var _a2, _b2;
        return {
          title: (_a2 = fm.title) != null ? _a2 : t("card.untitled"),
          meta: (_b2 = fm.date) != null ? _b2 : "",
          badge: ""
        };
      },
      { thumbs: true, expandable: true }
    );
    this.renderSectionHeader(bookmarksPane, null, true);
    this.renderBookmarks();
    if (reopen.length) {
      this.restoringNav = true;
      this.floatInstantly = true;
      try {
        for (const { tab, path } of reopen) {
          const card = (_d = contents[tab]) == null ? void 0 : _d.body.querySelector(`.wb-card[data-path="${CSS.escape(path)}"]`);
          const entry = this.entryByPath.get(path);
          if (card && entry && !card.classList.contains("wb-card-expanded")) this.toggleCardExpand(tab, card, entry);
        }
      } finally {
        this.restoringNav = false;
        this.floatInstantly = false;
      }
      this.refreshCurrentCardHighlight();
    }
    scroll.scrollTop = scrollTop;
    for (const { id } of tabs) this.applySearch(id);
    updateShadow();
    if (searchHadFocus) {
      searchInput.focus();
      const end = searchInput.value.length;
      searchInput.setSelectionRange(end, end);
    }
    if (this.navHistory.length === 0) {
      this.navHistory = [{ tab: this.activeTab, cardPath: null }];
      this.navIndex = 0;
    }
    this.updateNavButtonStates();
    this.updateBookmarkHeaderButtons();
  }
  /**
   * Hides the cards on one tab that don't match its search text (and, on Characters, any group
   * section left empty). Every word typed must appear in the card's searchable text, in any order,
   * ignoring case and accents. Works on the existing cards, so nothing is re-read or re-rendered.
   * Characters are matched on name, group, ship and home; other tabs on the name and the note's text.
   */
  applySearch(tab) {
    const body = this.searchTargets[tab];
    if (!body) return;
    const query = this.searchQueries[tab];
    const terms = normalizeForSearch(query).split(/\s+/).filter(Boolean);
    const searching = terms.length > 0;
    body.classList.toggle("is-searching", searching);
    const filterList = (list) => {
      let shown = 0;
      list.querySelectorAll(".wb-card").forEach((card) => {
        var _a;
        const haystack = (_a = this.searchIndex.get(card)) != null ? _a : "";
        const match = terms.every((t2) => haystack.includes(t2));
        card.classList.toggle("wb-filtered-out", !match);
        if (match) shown++;
      });
      return shown;
    };
    let matches = 0;
    if (this.hierarchicalTabs.has(tab)) {
      const evalGroup = (list) => {
        let anyVisible = false;
        list.querySelectorAll(":scope > .wb-card").forEach((el) => {
          var _a;
          const card = el;
          const haystack = (_a = this.searchIndex.get(card)) != null ? _a : "";
          const ownMatch = terms.every((t2) => haystack.includes(t2));
          if (ownMatch) matches++;
          const childGroup = card.nextElementSibling;
          const childList = (childGroup == null ? void 0 : childGroup.classList.contains("wb-child-group")) ? childGroup.querySelector(":scope > .wb-list") : null;
          const descendantMatch = childList ? evalGroup(childList) : false;
          const show = ownMatch || descendantMatch;
          card.classList.toggle("wb-filtered-out", searching && !show);
          const treeHeader = card.previousElementSibling;
          if (treeHeader == null ? void 0 : treeHeader.classList.contains("wb-tree-header")) {
            treeHeader.classList.toggle("wb-filtered-out", searching && !show);
          }
          if (show) anyVisible = true;
        });
        return anyVisible;
      };
      body.querySelectorAll(":scope > .wb-list").forEach((topList) => {
        const anyVisible = evalGroup(topList);
        const sectionHeader = topList.previousElementSibling;
        if (sectionHeader == null ? void 0 : sectionHeader.classList.contains("wb-tree-section-header")) {
          sectionHeader.classList.toggle("wb-filtered-out", searching && !anyVisible);
        }
      });
    } else {
      body.querySelectorAll(".wb-group-header:not(.wb-subsidiary-header)").forEach((header) => {
        const list = header.nextElementSibling;
        if (!list || !list.classList.contains("wb-list")) return;
        const shown = filterList(list);
        const hideGroup = searching && shown === 0;
        header.classList.toggle("wb-filtered-out", hideGroup);
        list.classList.toggle("wb-filtered-out", hideGroup);
        matches += shown;
      });
      body.querySelectorAll(":scope > .wb-list").forEach((list) => {
        var _a;
        if ((_a = list.previousElementSibling) == null ? void 0 : _a.classList.contains("wb-group-header")) return;
        matches += filterList(list);
      });
      const subGroups = Array.from(body.querySelectorAll(".wb-subsidiary-group")).reverse();
      for (const group of subGroups) {
        const anyShown = !!group.querySelector(":scope > .wb-list > .wb-card:not(.wb-filtered-out)");
        group.classList.toggle("wb-filtered-out", searching && !anyShown);
        const owner = group.previousElementSibling;
        if (searching && anyShown && (owner == null ? void 0 : owner.classList.contains("wb-card"))) owner.classList.remove("wb-filtered-out");
      }
    }
    const none = body.querySelector(".wb-no-results");
    if (none) {
      none.textContent = t(`noResults.${tab}`, { query: query.trim() });
      none.classList.toggle("wb-filtered-out", !(searching && matches === 0));
    }
  }
  /** Returns a displayable URL for the first image embedded in a note, or null. */
  findFirstImageSrc(content, file) {
    var _a, _b;
    return (_b = (_a = this.findFirstImage(content, file)) == null ? void 0 : _a.src) != null ? _b : null;
  }
  /** The first image embedded in a note, i.e. its portrait (see the module-level findFirstImage). */
  findFirstImage(content, file) {
    return findFirstImage(this.app, content, file);
  }
  async renderSection(tab, pane, folderPath, onCreate, getCard, opts = {}) {
    var _a, _b, _c, _d;
    const container = pane.body;
    this.sectionConfigs[tab] = { getCard, thumbs: !!opts.thumbs, stackBadge: !!opts.stackBadge };
    this.renderSectionHeader(pane, onCreate, (_a = opts.reload) != null ? _a : true, tab);
    const files = getMarkdownFilesIn(this.app, folderPath);
    if (files.length === 0) {
      container.createDiv("wb-list").createDiv({ cls: "wb-empty", text: t(`empty.${tab}`) });
      return;
    }
    const entries = [];
    for (const file of files) {
      const content = await this.app.vault.cachedRead(file);
      const entry = { file, content, fm: readFrontmatter(content) };
      entries.push(entry);
      this.entryByPath.set(file.path, entry);
    }
    if (opts.hierarchical) {
      const { roots, childrenOf } = buildParentTree(
        entries,
        (_b = opts.getParentName) != null ? _b : (() => ""),
        (_c = opts.getOwnName) != null ? _c : ((fm) => {
          var _a2;
          return (_a2 = fm.name) != null ? _a2 : "";
        })
      );
      const movable = opts.movableSection;
      const fixedRoots = movable ? roots.filter((e) => !movable.isMovable(e.fm)) : roots;
      const movableRoots = movable ? roots.filter((e) => movable.isMovable(e.fm)) : [];
      this.renderHierarchicalGroup(
        tab,
        container,
        fixedRoots,
        entries,
        childrenOf,
        getCard,
        !!opts.thumbs,
        !!opts.stackBadge,
        !!opts.expandable
      );
      if (movable && movableRoots.length) {
        const header = this.createTreeHeader(container, movable.label);
        header.addClass("wb-tree-section-header");
        this.renderHierarchicalGroup(
          tab,
          container,
          movableRoots,
          entries,
          childrenOf,
          getCard,
          !!opts.thumbs,
          !!opts.stackBadge,
          !!opts.expandable
        );
        const sectionList = header.nextElementSibling;
        this.wireTreeCollapse(tab, header, [sectionList], `${tab}:section:${movable.id}`);
      }
      this.createNoResultsLine(container);
      return;
    }
    if (opts.typeGroups) {
      this.renderTypeGroups(tab, container, entries, getCard, opts);
      this.createNoResultsLine(container);
      return;
    }
    if (!opts.groupGroups) {
      const list = container.createDiv("wb-list");
      const ordered = this.orderEntries(entries, (_d = this.plugin.settings.sectionOrder[tab]) != null ? _d : []);
      for (const entry of ordered) this.renderCard(tab, list, entry, getCard, !!opts.thumbs, !!opts.stackBadge, !!opts.expandable);
      this.enableReorder(list, async (order) => {
        this.plugin.settings.sectionOrder[tab] = order;
        await this.plugin.saveSettings();
      });
      this.createNoResultsLine(container);
      return;
    }
    await this.renderCharacterSections(tab, container, entries, getCard, opts);
    this.createNoResultsLine(container);
  }
  /**
   * The Characters tab, laid out by the "Group Characters By" setting (Edit Metadata):
   *   - Group (default): one collapsible sub-section per `group`, alphabetically, "No Group" last,
   *     each header showing the group's logo (first image in its Groups note);
   *   - Ship / Home: the same by `ship` / `home` ("[[Name]]" and "Name" are the same section),
   *     with the matching Locations note's image as the logo;
   *   - Role: one sub-section per role, in the Role dropdown's order, then Unassigned;
   *   - Name / Age: a single list sorted by name, or by age (the first number in it; entries
   *     without one last), with no drag-to-reorder since the order is automatic.
   * Every sectioned grouping keeps its own drag-and-drop order and collapsed sections, so
   * switching grouping and back leaves each one exactly as it was.
   */
  async renderCharacterSections(tab, container, entries, getCard, opts) {
    var _a, _b, _c, _d, _e, _f, _g;
    const settings = this.plugin.settings;
    const grouping = settings.characterGrouping;
    const byName = (a, b) => (a.fm.name || a.file.basename).localeCompare(b.fm.name || b.file.basename, void 0, { sensitivity: "base", numeric: true });
    if (grouping === "name" || grouping === "age-asc" || grouping === "age-desc") {
      const dir = grouping === "age-desc" ? -1 : 1;
      const sorted = [...entries].sort((a, b) => {
        if (grouping === "name") return byName(a, b);
        const x = ageNumber(a.fm.age), y = ageNumber(b.fm.age);
        if (x === null || y === null) return (x === null ? 1 : 0) - (y === null ? 1 : 0) || byName(a, b);
        return (x - y) * dir || byName(a, b);
      });
      const list = container.createDiv("wb-list");
      for (const entry of sorted) this.renderCard(tab, list, entry, getCard, !!opts.thumbs, !!opts.stackBadge, !!opts.expandable);
      return;
    }
    const buckets = /* @__PURE__ */ new Map();
    const add = (key, label, entry) => {
      let bucket = buckets.get(key);
      if (!bucket) buckets.set(key, bucket = { label, items: [] });
      bucket.items.push(entry);
    };
    let sectionOrder;
    if (grouping === "role") {
      const roles = this.plugin.optionValues(metadataField("characters", "role"));
      const known = new Map(roles.map((r) => [optionKey(r), r]));
      for (const entry of entries) {
        const value = known.get(optionKey((_a = entry.fm.role) != null ? _a : ""));
        if (value) add(optionKey(value), optionLabel("role", value), entry);
        else add("", t("group.unassigned"), entry);
      }
      sectionOrder = [...roles.map(optionKey), ""];
    } else {
      for (const entry of entries) {
        if (grouping === "group") {
          const group = ((_b = entry.fm.group) != null ? _b : "").trim();
          add(group.toLowerCase(), group || t("group.none"), entry);
        } else {
          const name = parseRefName((_c = entry.fm[grouping]) != null ? _c : "");
          add(name.toLowerCase(), name || t(grouping === "ship" ? "character.noShip" : "character.noHome"), entry);
        }
      }
      sectionOrder = [...buckets.keys()].sort((a, b) => (a === "" ? 1 : 0) - (b === "" ? 1 : 0) || a.localeCompare(b));
    }
    const logos = /* @__PURE__ */ new Map();
    if (grouping !== "role") {
      const logoFolder = `${settings.worldFolder}/${SECTION_FOLDERS[grouping === "group" ? "groups" : "locations"]}`;
      for (const file of getMarkdownFilesIn(this.app, logoFolder)) {
        const content = await this.app.vault.cachedRead(file);
        const src = this.findFirstImageSrc(content, file);
        if (!src) continue;
        for (const n of [(_d = readFrontmatter(content).name) != null ? _d : "", file.basename]) {
          const k = parseRefName(n).toLowerCase();
          if (k && !logos.has(k)) logos.set(k, src);
        }
      }
    }
    const orders = grouping === "group" ? settings.characterOrder : (_f = (_e = settings.characterOrderBy)[grouping]) != null ? _f : _e[grouping] = {};
    const getCollapsed = () => {
      var _a2;
      return grouping === "group" ? settings.collapsedGroups : (_a2 = settings.collapsedCharacterSections[grouping]) != null ? _a2 : [];
    };
    const setCollapsed = (keys) => {
      if (grouping === "group") settings.collapsedGroups = keys;
      else settings.collapsedCharacterSections[grouping] = keys;
    };
    for (const key of sectionOrder) {
      const bucket = buckets.get(key);
      if (!bucket) continue;
      const header = container.createDiv("wb-group-header");
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");
      (0, import_obsidian7.setIcon)(header.createSpan({ cls: "wb-group-chevron" }), "chevron-down");
      const logoSrc = key ? logos.get(parseRefName(key).toLowerCase()) : void 0;
      if (logoSrc) {
        const logo = header.createEl("img", {
          cls: "wb-group-logo",
          attr: { src: logoSrc, alt: "", draggable: "false" }
        });
        logo.onerror = () => logo.remove();
      }
      header.createSpan({ cls: "wb-group-title", text: bucket.label });
      const list = container.createDiv("wb-list");
      const applyCollapsed = (collapsed) => {
        header.classList.toggle("is-collapsed", collapsed);
        list.classList.toggle("is-collapsed", collapsed);
        header.setAttribute("aria-expanded", String(!collapsed));
      };
      applyCollapsed(getCollapsed().includes(key));
      this.groupCollapsers.set(header, () => {
        if (!getCollapsed().includes(key)) setCollapsed([...getCollapsed(), key]);
        applyCollapsed(true);
      });
      const toggleCollapsed = async () => {
        if (normalizeForSearch(this.searchQueries[tab]).trim()) return;
        const collapse = !getCollapsed().includes(key);
        setCollapsed(collapse ? [...getCollapsed(), key] : getCollapsed().filter((k) => k !== key));
        applyCollapsed(collapse);
        await this.plugin.saveSettings();
      };
      header.onclick = () => void toggleCollapsed();
      header.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void toggleCollapsed();
        }
      };
      const items = this.orderEntries(bucket.items, (_g = orders[key]) != null ? _g : []);
      for (const entry of items) this.renderCard(tab, list, entry, getCard, !!opts.thumbs, !!opts.stackBadge, !!opts.expandable);
      this.enableReorder(list, async (order) => {
        orders[key] = order;
        await this.plugin.saveSettings();
      });
    }
  }
  /**
   * A tab's section header (fixed region): Back/Forward on the left (only when SHOW_NAV_BUTTONS is
   * on); Reload and (for the entry sections) + New on the right, the same size as the title row's
   * Bookmarks button (.wb-header-btn). The section's name isn't shown here: the highlighted tab
   * above already shows it.
   */
  renderSectionHeader(pane, onCreate, reload, tab = null) {
    const hdr = pane.head.createDiv("wb-section-header");
    const titleGroup = hdr.createDiv("wb-section-title");
    if (SHOW_NAV_BUTTONS) {
      const navGroup = titleGroup.createDiv("wb-nav-buttons");
      const backBtn = navGroup.createEl("button", {
        cls: "wb-nav-btn",
        text: "<",
        attr: { type: "button", "aria-label": t("nav.back") }
      });
      const fwdBtn = navGroup.createEl("button", {
        cls: "wb-nav-btn",
        text: ">",
        attr: { type: "button", "aria-label": t("nav.forward") }
      });
      backBtn.onclick = () => this.navigateBack();
      fwdBtn.onclick = () => this.navigateForward();
      this.navButtons.push({ back: backBtn, fwd: fwdBtn });
    }
    if (tab) {
      const metaBtn = titleGroup.createEl("button", { cls: "wb-btn-secondary wb-header-btn", attr: { type: "button" } });
      (0, import_obsidian7.setIcon)(metaBtn.createSpan({ cls: "wb-btn-icon" }), "list-plus");
      metaBtn.createSpan({ text: t("metadata.edit") });
      metaBtn.onclick = () => new MetadataModal(this.app, this.plugin, tab).open();
    }
    const actions = hdr.createDiv("wb-section-actions");
    if (reload) {
      const reloadBtn = actions.createEl("button", { cls: "wb-btn-secondary wb-header-btn" });
      (0, import_obsidian7.setIcon)(reloadBtn.createSpan({ cls: "wb-btn-icon" }), "refresh-cw");
      reloadBtn.createSpan({ text: t("reload") });
      reloadBtn.onclick = async () => {
        await this.render();
        new import_obsidian7.Notice(t("reload.done"));
      };
    }
    if (onCreate) {
      const btn = actions.createEl("button", { text: t("new"), cls: "wb-btn-secondary wb-header-btn" });
      btn.onclick = onCreate;
    }
  }
  /**
   * Groups: one collapsible sub-section per `type` property (Corporation, Government, Military, then Criminal,
   * then any custom types added in Edit Metadata, in the order they were added), with groups
   * whose type isn't one of those in an "Unassigned" section last. Headers use the
   * same chevron as the Characters group groups, without a logo. Each section is its own
   * drag-to-reorder list; its order is merged back into the tab's single saved order.
   *
   * An group whose `subsidiary-of` property names another group on this tab (matched on
   * that group's `name`, tolerant of "[[Name]]" syntax, case and accents) is not listed in its
   * own type section: it is drawn under its parent's card, inside a collapsible "Subsidiaries"
   * label, whatever its own `type` says. If the parent can't be found (unset, misspelled, not an
   * group, or part of a loop), the entry falls back to its `type` section as usual.
   */
  renderTypeGroups(tab, container, entries, getCard, opts) {
    var _a;
    const typeField = metadataField("groups", "groupType");
    const typeValues = this.plugin.optionValues(typeField);
    const known = new Set(typeValues.map(optionKey));
    const { roots, childrenOf } = buildParentTree(
      entries,
      (fm) => {
        var _a2;
        return (_a2 = fm[SUBSIDIARY_OF]) != null ? _a2 : "";
      },
      (fm) => {
        var _a2;
        return (_a2 = fm.name) != null ? _a2 : "";
      }
    );
    const groups = /* @__PURE__ */ new Map();
    for (const entry of roots) {
      const raw = optionKey((_a = entry.fm.type) != null ? _a : "");
      const key = known.has(raw) ? raw : "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(entry);
    }
    const sections = [
      ...typeValues.map((value) => ({ key: optionKey(value), label: optionLabel("groupType", value) })),
      { key: "", label: t("group.unassigned") }
    ].filter((s) => groups.has(s.key));
    for (const { key, label } of sections) {
      const header = container.createDiv("wb-group-header");
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");
      (0, import_obsidian7.setIcon)(header.createSpan({ cls: "wb-group-chevron" }), "chevron-down");
      header.createSpan({ cls: "wb-group-title", text: label });
      const list = container.createDiv("wb-list");
      const applyCollapsed = (collapsed) => {
        header.classList.toggle("is-collapsed", collapsed);
        list.classList.toggle("is-collapsed", collapsed);
        header.setAttribute("aria-expanded", String(!collapsed));
      };
      applyCollapsed(this.plugin.settings.collapsedGroupTypes.includes(key));
      this.groupCollapsers.set(header, () => {
        const settings = this.plugin.settings;
        if (!settings.collapsedGroupTypes.includes(key)) settings.collapsedGroupTypes = [...settings.collapsedGroupTypes, key];
        applyCollapsed(true);
      });
      const toggleCollapsed = async () => {
        if (normalizeForSearch(this.searchQueries[tab]).trim()) return;
        const settings = this.plugin.settings;
        const collapse = !settings.collapsedGroupTypes.includes(key);
        settings.collapsedGroupTypes = collapse ? [...settings.collapsedGroupTypes, key] : settings.collapsedGroupTypes.filter((k) => k !== key);
        applyCollapsed(collapse);
        await this.plugin.saveSettings();
      };
      header.onclick = () => void toggleCollapsed();
      header.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void toggleCollapsed();
        }
      };
      this.renderGroupList(tab, list, groups.get(key), entries, childrenOf, getCard, opts);
    }
  }
  /**
   * Draws one drag-to-reorder list of group cards (a type section, or one parent's
   * subsidiaries). Any card with subsidiaries gets a `.wb-child-group` right after it holding a
   * collapsible "Subsidiaries" label and their own nested list, drawn the same way (so a
   * subsidiary's own subsidiaries nest one level further in). The child group follows its card
   * when it is dragged, and subsidiaries can only be reordered among themselves.
   */
  renderGroupList(tab, list, groupEntries, allEntries, childrenOf, getCard, opts) {
    var _a;
    const items = this.orderEntries(groupEntries, (_a = this.plugin.settings.sectionOrder[tab]) != null ? _a : []);
    for (const entry of items) {
      this.renderCard(tab, list, entry, getCard, !!opts.thumbs, !!opts.stackBadge, !!opts.expandable);
      const kids = childrenOf.get(entry.file.path);
      if (kids && kids.length) this.renderSubsidiaries(tab, list, entry, kids, allEntries, childrenOf, getCard, opts);
    }
    this.enableReorder(list, async (order) => {
      var _a2;
      const settings = this.plugin.settings;
      const baseline = this.orderEntries(allEntries, (_a2 = settings.sectionOrder[tab]) != null ? _a2 : []).map((e) => e.file.path);
      settings.sectionOrder[tab] = mergeGroupOrder(baseline, items.map((e) => e.file.path), order);
      await this.plugin.saveSettings();
    });
  }
  /** The collapsible "Subsidiaries" label (and its nested list) drawn right under a parent group's card. */
  renderSubsidiaries(tab, list, parent, kids, allEntries, childrenOf, getCard, opts) {
    const path = parent.file.path;
    const group = list.createDiv("wb-child-group wb-subsidiary-group");
    const header = group.createDiv("wb-group-header wb-subsidiary-header");
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    (0, import_obsidian7.setIcon)(header.createSpan({ cls: "wb-group-chevron" }), "chevron-down");
    header.createSpan({ cls: "wb-group-title", text: t("group.subsidiaries") });
    header.createSpan({ cls: "wb-group-count", text: String(kids.length) });
    const subList = group.createDiv("wb-list");
    const applyCollapsed = (collapsed) => {
      header.classList.toggle("is-collapsed", collapsed);
      subList.classList.toggle("is-collapsed", collapsed);
      header.setAttribute("aria-expanded", String(!collapsed));
    };
    applyCollapsed(this.plugin.settings.collapsedSubsidiaries.includes(path));
    this.groupCollapsers.set(header, () => {
      const settings = this.plugin.settings;
      if (!settings.collapsedSubsidiaries.includes(path)) settings.collapsedSubsidiaries = [...settings.collapsedSubsidiaries, path];
      applyCollapsed(true);
    });
    const toggleCollapsed = async () => {
      if (normalizeForSearch(this.searchQueries[tab]).trim()) return;
      const settings = this.plugin.settings;
      const collapse = !settings.collapsedSubsidiaries.includes(path);
      settings.collapsedSubsidiaries = collapse ? [...settings.collapsedSubsidiaries, path] : settings.collapsedSubsidiaries.filter((p) => p !== path);
      applyCollapsed(collapse);
      await this.plugin.saveSettings();
    };
    header.onclick = () => void toggleCollapsed();
    header.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        void toggleCollapsed();
      }
    };
    this.renderGroupList(tab, subList, kids, allEntries, childrenOf, getCard, opts);
  }
  /**
   * Applies a saved manual order (a list of note paths, earliest first) to a set of entries.
   * Anything not yet present in `saved` keeps its original relative position after the ordered ones.
   */
  orderEntries(entries, saved) {
    const rank = (path) => {
      const i = saved.indexOf(path);
      return i === -1 ? saved.length : i;
    };
    return entries.map((entry, index) => ({ entry, index })).sort((a, b) => rank(a.entry.file.path) - rank(b.entry.file.path) || a.index - b.index).map(({ entry }) => entry);
  }
  /**
   * Draws one sibling group of a hierarchical (parent/child) tab - the roots, or one parent's
   * children - as its own `.wb-list`, then recurses into each entry's own children (if any)
   * as a further-indented sibling group nested right after that entry's card. Each group gets
   * its own enableReorder() call, so a card can only be dragged among its own siblings, and
   * indentation is pure left-side margin (`.wb-child-group` in styles.css) that shrinks the
   * nested group in from the left while its right edge stays flush with everything above it.
   */
  renderHierarchicalGroup(tab, host, groupEntries, allEntries, childrenOf, getCard, thumbs, stackBadge, expandable) {
    var _a;
    const list = host.createDiv("wb-list");
    const ordered = this.orderEntries(groupEntries, (_a = this.plugin.settings.sectionOrder[tab]) != null ? _a : []);
    for (const entry of ordered) {
      const kids = childrenOf.get(entry.file.path);
      const header = this.createTreeHeader(list, getCard(entry.fm).title);
      const card = this.renderCard(tab, list, entry, getCard, thumbs, stackBadge, expandable);
      const parts = [card];
      if (kids && kids.length) {
        const childHost = list.createDiv("wb-child-group");
        this.renderHierarchicalGroup(tab, childHost, kids, allEntries, childrenOf, getCard, thumbs, stackBadge, expandable);
        parts.push(childHost);
      }
      this.wireTreeCollapse(tab, header, parts, entry.file.path);
    }
    this.enableReorder(list, async (order) => {
      var _a2;
      const settings = this.plugin.settings;
      const baseline = this.orderEntries(allEntries, (_a2 = settings.sectionOrder[tab]) != null ? _a2 : []).map((e) => e.file.path);
      const groupPaths = ordered.map((e) => e.file.path);
      settings.sectionOrder[tab] = mergeGroupOrder(baseline, groupPaths, order);
      await this.plugin.saveSettings();
    });
  }
  /** A collapsible label (chevron + name) drawn above every hierarchical entry's card. */
  createTreeHeader(list, title) {
    const header = list.createDiv("wb-group-header wb-tree-header");
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    (0, import_obsidian7.setIcon)(header.createSpan({ cls: "wb-group-chevron" }), "chevron-down");
    header.createSpan({ cls: "wb-group-title", text: title });
    return header;
  }
  /**
   * Makes a hierarchical parent's label collapse (or expand) the parent's own card together with
   * its whole nested subtree - e.g. collapsing SOL hides everything in SOL, collapsing Earth hides
   * Earth, Las Luna and Colonia. Nested labels keep their own saved state, so re-opening SOL shows
   * Earth still collapsed if it was. The state is saved per note path in plugin data.
   */
  wireTreeCollapse(tab, header, parts, path) {
    for (const p of parts) p.setAttribute("data-tree-owner", path);
    const apply = (collapsed) => {
      header.classList.toggle("is-collapsed", collapsed);
      header.setAttribute("aria-expanded", String(!collapsed));
      for (const p of parts) p.classList.toggle("wb-tree-hidden", collapsed);
    };
    apply(this.plugin.settings.collapsedParents.includes(path));
    const setCollapsed = async (collapse) => {
      apply(collapse);
      const settings = this.plugin.settings;
      if (settings.collapsedParents.includes(path) === collapse) return;
      settings.collapsedParents = collapse ? [...settings.collapsedParents, path] : settings.collapsedParents.filter((p) => p !== path);
      await this.plugin.saveSettings();
    };
    this.treeExpanders.set(path, () => setCollapsed(false));
    this.groupCollapsers.set(header, () => {
      const settings = this.plugin.settings;
      if (!settings.collapsedParents.includes(path)) settings.collapsedParents = [...settings.collapsedParents, path];
      apply(true);
    });
    const toggle = () => {
      if (normalizeForSearch(this.searchQueries[tab]).trim()) return;
      void setCollapsed(!header.classList.contains("is-collapsed"));
    };
    header.onclick = toggle;
    header.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    };
  }
  /** The "No ... match" line; hidden until applySearch() finds nothing. */
  createNoResultsLine(container) {
    container.createDiv({ cls: "wb-empty wb-no-results wb-filtered-out" });
  }
  renderCard(tab, parent, entry, getCard, thumbs, stackBadge, expandable) {
    const { file, content, fm } = entry;
    const { title, meta, badge, badgeText, search, extraBadges } = getCard(fm);
    const card = parent.createDiv("wb-card");
    if (stackBadge) card.addClass("wb-card-stacked");
    card.setAttribute("data-path", file.path);
    this.searchIndex.set(card, normalizeForSearch(search != null ? search : `${title} ${documentSearchText(content, fm)}`));
    let body = card;
    if (thumbs) {
      card.addClass("wb-card-with-thumb");
      const row = card.createDiv("wb-card-row");
      const thumb = row.createDiv("wb-thumb");
      const src = this.findFirstImageSrc(content, file);
      if (src) {
        const img = thumb.createEl("img", { attr: { src, alt: "", draggable: "false" } });
        thumb.addClass("wb-thumb-has-img");
        const zoomBadge = thumb.createSpan({ cls: "wb-thumb-zoom", attr: { "aria-hidden": "true" } });
        (0, import_obsidian7.setIcon)(zoomBadge, "zoom-in");
        img.onerror = () => {
          img.remove();
          zoomBadge.remove();
          thumb.removeClass("wb-thumb-has-img");
        };
        thumb.addEventListener("click", (e) => {
          if (!card.classList.contains("wb-card-expanded") || !thumb.contains(img)) return;
          e.preventDefault();
          e.stopPropagation();
          openImageZoom(src, title);
        });
      }
      body = row.createDiv("wb-card-body");
      this.enableImageDrop(card, entry, title);
    }
    const titleEl = body.createDiv("wb-card-title");
    titleEl.createSpan({ text: title });
    if (expandable) titleEl.addClass("wb-card-title-row");
    const extras = extraBadges != null ? extraBadges : [];
    if (badge || extras.length) {
      const badgeHost = stackBadge ? body.createDiv("wb-card-badge-row") : titleEl;
      if (badge) {
        const b = badgeHost.createSpan({ cls: `wb-badge wb-badge-${badge.trim().toLowerCase().replace(/[^\p{L}\p{N}_-]+/gu, "-")}` });
        b.setText(badgeText || badge);
      }
      for (const extra of extras) badgeHost.createSpan({ cls: `wb-badge ${extra.cls}`, text: extra.text });
    }
    if (expandable) (0, import_obsidian7.setIcon)(titleEl.createSpan({ cls: "wb-card-chevron" }), "chevron-right");
    if (meta) for (const line of meta.split("\n")) body.createDiv({ cls: "wb-card-meta", text: line });
    if (expandable) {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-expanded", "false");
      card.onclick = () => this.toggleCardExpand(tab, card, entry);
      card.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleCardExpand(tab, card, entry);
        }
      };
    } else {
      card.onclick = () => this.app.workspace.getLeaf().openFile(file);
    }
    return card;
  }
  /**
   * Expands a card to show the note's text (all but the portrait image) instead of opening it in the
   * editor, so writing in the main pane isn't interrupted. The expanded card floats over the list
   * (see enterFloat), and only one card is expanded at a time: expanding another closes the open
   * one first. Modify MD opens the note the normal way; Edit edits its markdown inline, still
   * floating. Clicking the card's title row again (its X) collapses it back into the list.
   * `force` skips the "Discard changes?" question (already answered).
   */
  toggleCardExpand(tab, card, entry, force = false) {
    var _a, _b, _c, _d, _e, _f;
    const wasExpanded = card.classList.contains("wb-card-expanded");
    if (wasExpanded && !force && ((_a = this.activeEdit) == null ? void 0 : _a.card) === card && this.activeEdit.isDirty()) {
      void confirmModal(this.app, t("discard.title"), t("discard.message", { name: entry.file.basename }), t("discard.action")).then((ok) => {
        if (ok) this.toggleCardExpand(tab, card, entry, true);
      });
      return;
    }
    if (wasExpanded) {
      this.collapseCard(card, false);
      this.recordNav(tab, null);
      return;
    }
    const other = (_b = this.floating) == null ? void 0 : _b.card;
    if (other && other !== card && other.isConnected && other.classList.contains("wb-card-expanded")) {
      if (!force && ((_c = this.activeEdit) == null ? void 0 : _c.card) === other && this.activeEdit.isDirty()) {
        const name = (_f = (_e = this.entryByPath.get((_d = other.getAttribute("data-path")) != null ? _d : "")) == null ? void 0 : _e.file.basename) != null ? _f : t("card.thisEntry");
        void confirmModal(this.app, t("discard.title"), t("discard.message", { name }), t("discard.action")).then((ok) => {
          if (ok) this.toggleCardExpand(tab, card, entry, true);
        });
        return;
      }
    }
    let switching = false;
    if (other && other !== card && other.isConnected && other.classList.contains("wb-card-expanded")) {
      this.collapseCard(other, true);
      switching = true;
    }
    this.enterFloat(card, switching);
    card.addClass("wb-card-expanded");
    card.setAttribute("aria-expanded", "true");
    const expand = card.createDiv("wb-card-expand");
    expand.setAttribute("draggable", "false");
    expand.onclick = (e) => e.stopPropagation();
    expand.onkeydown = (e) => e.stopPropagation();
    const body = expand.createDiv("wb-card-expand-body");
    body.addClass("markdown-rendered");
    body.addEventListener("contextmenu", (e) => {
      var _a2;
      const selection = body.win.getSelection();
      const text = (_a2 = selection == null ? void 0 : selection.toString()) != null ? _a2 : "";
      if (!text.trim() || !(selection == null ? void 0 : selection.anchorNode) || !body.contains(selection.anchorNode)) return;
      e.preventDefault();
      e.stopPropagation();
      const menu = new import_obsidian7.Menu();
      menu.addItem(
        (item) => item.setTitle(t("card.copy")).setIcon("copy").onClick(() => {
          void navigator.clipboard.writeText(text).catch(() => new import_obsidian7.Notice(t("card.copyFailed")));
        })
      );
      menu.showAtMouseEvent(e);
    });
    const portraitMatch = this.findFirstImage(entry.content, entry.file);
    const withoutPortrait = portraitMatch ? entry.content.slice(0, portraitMatch.start) + entry.content.slice(portraitMatch.end) : entry.content;
    const bodyText = stripLeadingHeading(stripFrontmatterBlock(withoutPortrait));
    void import_obsidian7.MarkdownRenderer.render(this.app, bodyText, body, entry.file.path, this);
    body.addEventListener("click", (e) => {
      var _a2;
      const target = e.target;
      if (target.instanceOf(HTMLImageElement) && target.src) {
        e.preventDefault();
        e.stopPropagation();
        openImageZoom(target.src, target.alt || entry.file.basename);
        return;
      }
      const link = target.closest("a.internal-link");
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      const href = (_a2 = link.getAttribute("data-href")) != null ? _a2 : link.getAttribute("href");
      if (href) this.followWikiLink(href, entry.file.path);
    });
    const toolbar = createDiv("wb-card-expand-toolbar");
    body.insertAdjacentElement("beforebegin", toolbar);
    const leftGroup = toolbar.createDiv("wb-card-expand-left");
    const navBtn = (label, icon, dir) => {
      const btn = leftGroup.createEl("button", {
        cls: "wb-btn-secondary wb-icon-btn wb-card-nav-btn",
        attr: { type: "button", "aria-label": label }
      });
      (0, import_obsidian7.setIcon)(btn, icon);
      btn.onclick = () => this.navigateCard(dir);
      return btn;
    };
    const cardBack = navBtn(t("nav.back"), "chevron-left", -1);
    const cardFwd = navBtn(t("nav.forward"), "chevron-right", 1);
    this.cardNavButtons.push({ back: cardBack, fwd: cardFwd });
    this.updateNavButtonStates();
    leftGroup.createSpan({ cls: "wb-toolbar-sep", text: "|", attr: { "aria-hidden": "true" } });
    const bookmarkBtn = leftGroup.createEl("button", {
      cls: "wb-btn-secondary wb-icon-btn wb-bookmark-toggle",
      attr: { type: "button", "data-bookmark-path": entry.file.path }
    });
    (0, import_obsidian7.setIcon)(bookmarkBtn.createSpan({ cls: "wb-btn-icon" }), "bookmark");
    bookmarkBtn.createSpan({ text: t("bookmarks.button") });
    this.syncBookmarkToggle(bookmarkBtn, this.plugin.settings.bookmarks.includes(entry.file.path));
    bookmarkBtn.onclick = () => void this.toggleBookmark(entry.file.path);
    const actions = toolbar.createDiv("wb-card-expand-actions");
    const showViewActions = () => {
      actions.empty();
      const modifyBtn = actions.createEl("button", { cls: "wb-btn-secondary", attr: { type: "button" } });
      (0, import_obsidian7.setIcon)(modifyBtn.createSpan({ cls: "wb-btn-icon" }), "file-text");
      modifyBtn.createSpan({ text: t("card.modifyMd") });
      modifyBtn.onclick = () => this.app.workspace.getLeaf().openFile(entry.file);
      const editBtn = actions.createEl("button", { cls: "wb-btn-secondary", attr: { type: "button" } });
      (0, import_obsidian7.setIcon)(editBtn.createSpan({ cls: "wb-btn-icon" }), "pencil");
      editBtn.createSpan({ text: t("card.edit") });
      editBtn.onclick = () => void runExclusive(startEditing);
    };
    const showEditActions = () => {
      actions.empty();
      const cancelBtn = actions.createEl("button", { cls: "wb-btn-secondary", attr: { type: "button" } });
      (0, import_obsidian7.setIcon)(cancelBtn.createSpan({ cls: "wb-btn-icon" }), "x");
      cancelBtn.createSpan({ text: t("card.cancel") });
      cancelBtn.onclick = () => void runExclusive(discard);
      const saveBtn = actions.createEl("button", { cls: "wb-btn-secondary", attr: { type: "button" } });
      (0, import_obsidian7.setIcon)(saveBtn.createSpan({ cls: "wb-btn-icon" }), "check");
      saveBtn.createSpan({ text: t("card.save") });
      saveBtn.onclick = () => void runExclusive(finishEditing);
    };
    let editor = null;
    let portrait = null;
    const removePortraitPicker = () => {
      portrait == null ? void 0 : portrait.picker.destroy();
      portrait == null ? void 0 : portrait.holder.remove();
      portrait = null;
    };
    let original = "";
    let busy = false;
    const runExclusive = async (fn) => {
      if (busy) return;
      busy = true;
      try {
        await fn();
      } finally {
        busy = false;
      }
    };
    const isDirty = () => !!editor && (editor.isDirty() || !!(portrait == null ? void 0 : portrait.picker.hasImage));
    const stopEditing = () => {
      var _a2;
      if (((_a2 = this.activeEdit) == null ? void 0 : _a2.card) === card) this.activeEdit = null;
      editor == null ? void 0 : editor.destroy();
      editor = null;
      removePortraitPicker();
      body.show();
      expand.removeClass("is-editing");
      showViewActions();
      if (this.findEntryTab(entry.file) === "characters") this.setCardPovBadge(card, isPov(entry.fm.pov));
    };
    const startEditing = async () => {
      var _a2, _b2, _c2;
      const other2 = this.activeEdit;
      if (other2 && other2.card !== card) {
        this.pendingEditPath = entry.file.path;
        const ok = await other2.finish();
        if (!ok || !card.isConnected) {
          if (!ok) this.pendingEditPath = null;
          return;
        }
        this.pendingEditPath = null;
      }
      try {
        original = await this.app.vault.read(entry.file);
      } catch (e) {
        new import_obsidian7.Notice(t("notice.readFailed", { name: entry.file.basename }));
        return;
      }
      if (!card.isConnected || !expand.isConnected || editor) return;
      expand.addClass("is-editing");
      showEditActions();
      body.hide();
      if (!this.findFirstImage(original, entry.file)) {
        const holder = createDiv("wb-card-editor-portrait");
        body.insertAdjacentElement("beforebegin", holder);
        const picker = new PortraitPicker(this.app, this.plugin, holder, (_b2 = (_a2 = entry.file.parent) == null ? void 0 : _a2.path) != null ? _b2 : this.plugin.settings.worldFolder);
        portrait = { picker, holder };
      }
      const keys = {
        save: () => void runExclusive(finishEditing),
        cancel: () => void runExclusive(discard)
      };
      const pov = this.findEntryTab(entry.file) === "characters";
      const onPovChange = (on) => this.setCardPovBadge(card, on);
      editor = (_c2 = this.plugin.settings.inlineEditor === "live" ? createLivePreviewEditor(this.app, this, body, entry.file, original, keys, this.findFirstImage(original, entry.file), pov, onPovChange) : null) != null ? _c2 : createRawEditor(body, entry.file, original, keys, pov, onPovChange);
      this.activeEdit = {
        card,
        isDirty,
        finish: async () => {
          await finishEditing();
          return !editor || !card.isConnected;
        },
        abandon: () => {
          editor == null ? void 0 : editor.destroy();
          editor = null;
          removePortraitPicker();
        }
      };
      editor.focus();
    };
    const discard = async () => {
      if (isDirty() && !await confirmModal(this.app, t("discard.title"), t("discard.message", { name: entry.file.basename }), t("discard.action"))) {
        editor == null ? void 0 : editor.focus();
        return;
      }
      stopEditing();
    };
    const finishEditing = async () => {
      var _a2;
      if (!editor) return;
      if (!isDirty()) {
        stopEditing();
        return;
      }
      try {
        if (editor.isDirty()) {
          const current2 = await this.app.vault.read(entry.file);
          if (current2 !== original && !await confirmModal(
            this.app,
            t("overwrite.title"),
            t("overwrite.message", { name: entry.file.basename }),
            t("overwrite.action")
          )) {
            editor == null ? void 0 : editor.focus();
            return;
          }
          if (!editor) return;
          await this.app.vault.modify(entry.file, editor.getText());
        }
        await (portrait == null ? void 0 : portrait.picker.attachTo(entry.file, t("notice.savedNoPortrait", { name: entry.file.basename })));
        removePortraitPicker();
        if (((_a2 = this.activeEdit) == null ? void 0 : _a2.card) === card) this.activeEdit = null;
        editor == null ? void 0 : editor.destroy();
        editor = null;
        await this.render({ keepExpanded: true });
        new import_obsidian7.Notice(t("notice.saved", { name: entry.file.basename }));
      } catch (err) {
        console.error("Universe Builder: save failed", err);
        new import_obsidian7.Notice(t("notice.saveFailed", { name: entry.file.basename }));
      }
    };
    showViewActions();
    const footer = expand.createDiv("wb-card-expand-footer");
    const deleteBtn = footer.createEl("button", {
      cls: "wb-btn-secondary wb-btn-danger wb-card-delete-btn",
      attr: { type: "button", "aria-label": t("card.deleteLabel") }
    });
    (0, import_obsidian7.setIcon)(deleteBtn.createSpan({ cls: "wb-btn-icon" }), "trash-2");
    deleteBtn.createSpan({ text: t("card.delete") });
    deleteBtn.onclick = () => void runExclusive(() => this.deleteEntry(card, entry));
    if (this.pendingEditPath === entry.file.path) {
      this.pendingEditPath = null;
      void runExclusive(startEditing);
    }
    this.recordNav(tab, entry.file.path);
  }
  /**
   * The expanded card's DELETE button: asks "Are you sure you want to delete this <Category> entry,
   * <name>?" and, if confirmed, closes the card and moves the note to the trash (following the
   * vault's "Deleted files" setting, so it can be restored), then redraws the sidebar.
   */
  async deleteEntry(card, entry) {
    const section = this.findEntryTab(entry.file);
    const name = (entry.fm.name || entry.fm.title || entry.file.basename).trim() || entry.file.basename;
    const ok = await confirmModal(
      this.app,
      t("delete.title"),
      section ? t("delete.message", { category: t(`category.${section}`), name }) : t("delete.messagePlain", { name }),
      t("delete.action"),
      true
    );
    if (!ok) return;
    const path = entry.file.path;
    if (card.isConnected && card.classList.contains("wb-card-expanded")) this.collapseCard(card, true);
    try {
      await this.app.fileManager.trashFile(entry.file);
    } catch (err) {
      console.error("Universe Builder: delete failed", err);
      new import_obsidian7.Notice(t("notice.deleteFailed", { name }));
      return;
    }
    this.forgetNavPath(path);
    this.recordNav(this.activeTab, null);
    await this.render();
    new import_obsidian7.Notice(t("notice.deleted", { name }));
  }
  /** Drops a deleted note from the Back / Forward history, so those buttons can't step to it. */
  forgetNavPath(path) {
    const kept = [];
    let index = 0;
    this.navHistory.forEach((item, i) => {
      if (item.cardPath === path) return;
      const prev = kept[kept.length - 1];
      if (prev && prev.tab === item.tab && prev.cardPath === item.cardPath) {
        if (i <= this.navIndex) index = kept.length - 1;
        return;
      }
      kept.push(item);
      if (i <= this.navIndex) index = kept.length - 1;
    });
    if (kept.length === 0) kept.push({ tab: this.activeTab, cardPath: null });
    this.navHistory = kept;
    this.navIndex = Math.max(0, Math.min(index, kept.length - 1));
    this.updateNavButtonStates();
  }
  /**
   * Collapses an expanded card back into its list: closes its inline editor (without saving), removes
   * the expanded area, and shrinks it from floating back into its place (at once if `instant`).
   */
  collapseCard(card, instant) {
    var _a, _b, _c;
    if (((_a = this.activeEdit) == null ? void 0 : _a.card) === card) {
      this.activeEdit.abandon();
      this.activeEdit = null;
    }
    (_b = card.querySelector(":scope > .wb-card-expand")) == null ? void 0 : _b.remove();
    card.removeClass("wb-card-expanded");
    card.setAttribute("aria-expanded", "false");
    if (((_c = this.floating) == null ? void 0 : _c.card) === card) void this.exitFloat(instant);
  }
  // ─── Floating card (expanded entry over the list) ──────────────────────────────
  /**
   * Floats an expanding card over the list: it covers the list area plus the section header and
   * search bar, from just under the section tabs to the bottom of the sidebar, inset by FLOAT_GAP
   * (FLOAT_GAP_BOTTOM at the bottom), with everything behind it dimmed. It stays floating in
   * read mode and while being edited inline. The card is lifted out of the list (position:
   * absolute on the view's root) and a placeholder of its height keeps its spot, so nothing below
   * it moves and exitFloat() can shrink it straight back. Call it before adding the card's
   * expanded contents: the animation starts from the card's current (collapsed) size. `instant`
   * skips the animation (used when switching straight from another expanded entry).
   */
  enterFloat(card, instant = false) {
    void this.exitFloat(true);
    const root = this.containerEl;
    const pane = card.closest(".wb-tab-body");
    if (!pane || !card.isConnected) return;
    const start = this.rectInRoot(card);
    const placeholder = createDiv("wb-edit-placeholder");
    placeholder.style.height = `${start.height}px`;
    card.insertAdjacentElement("beforebegin", placeholder);
    const backdrop = root.createDiv("wb-edit-backdrop");
    const observer = new ResizeObserver(() => this.updateFloatBounds());
    observer.observe(root);
    const fixed = root.querySelector(".wb-fixed");
    if (fixed) observer.observe(fixed);
    const tabBar = root.querySelector(".wb-tabs");
    if (tabBar) observer.observe(tabBar);
    this.floating = { card, placeholder, pane, backdrop, observer, draggable: card.getAttribute("draggable") };
    this.updateFloatBounds();
    card.setAttribute("draggable", "false");
    this.setCardChevron(card, "x");
    root.addClass("wb-has-edit-focus");
    pane.addClass("wb-edit-focus-pane");
    card.addClass("wb-card-focus");
    const paneShown = pane.classList.contains("active");
    root.toggleClass("wb-edit-focus-hidden", !paneShown);
    if (instant || this.floatInstantly || !paneShown || this.reducedMotion()) {
      backdrop.addClass("is-visible");
      return;
    }
    this.setFocusGeometry(card, start);
    card.addClass("wb-card-focus-animating");
    void card.offsetWidth;
    backdrop.addClass("is-visible");
    this.setFocusGeometry(card, this.focusTarget());
    window.setTimeout(() => {
      var _a;
      if (((_a = this.floating) == null ? void 0 : _a.card) !== card) return;
      card.removeClass("wb-card-focus-animating");
      this.setFocusGeometry(card, null);
    }, FLOAT_MS);
  }
  /**
   * Shrinks the floating card back into its place in the list and restores the list. Resolves
   * once the animation has finished. `instant` skips the animation (the card is being collapsed
   * or redrawn); so does a card that's no longer on screen.
   */
  async exitFloat(instant = false) {
    const focus = this.floating;
    if (!focus) return;
    this.floating = null;
    focus.observer.disconnect();
    const { card, placeholder, pane, backdrop } = focus;
    const finish = () => {
      card.removeClass("wb-card-focus", "wb-card-focus-animating");
      this.setFocusGeometry(card, null);
      this.setCardChevron(card, "chevron-right");
      if (focus.draggable === null) card.removeAttribute("draggable");
      else card.setAttribute("draggable", focus.draggable);
      placeholder.remove();
      backdrop.remove();
      pane.removeClass("wb-edit-focus-pane");
      this.containerEl.removeClass("wb-has-edit-focus", "wb-edit-focus-hidden");
    };
    const visible = card.isConnected && placeholder.isConnected && card.offsetParent !== null;
    if (instant || !visible || this.reducedMotion()) {
      finish();
      return;
    }
    const target = this.rectInRoot(placeholder);
    this.setFocusGeometry(card, this.rectInRoot(card));
    card.addClass("wb-card-focus-animating");
    void card.offsetWidth;
    backdrop.removeClass("is-visible");
    this.setFocusGeometry(card, target);
    await new Promise((resolve) => window.setTimeout(resolve, FLOAT_MS));
    finish();
  }
  /** Swaps the icon in a card's title-row chevron (the collapsed arrow, or an X while the card floats). */
  setCardChevron(card, icon) {
    const chevron = card.querySelector(":scope > .wb-card-row .wb-card-chevron, :scope > .wb-card-title .wb-card-chevron");
    if (!chevron) return;
    chevron.empty();
    (0, import_obsidian7.setIcon)(chevron, icon);
  }
  /** Recomputes the edges of the area the floating card fills (CSS variables on the root). */
  updateFloatBounds() {
    const root = this.containerEl;
    const scroll = root.querySelector(".wb-scroll");
    if (!scroll) return;
    const r = root.getBoundingClientRect();
    const sc = scroll.getBoundingClientRect();
    const cs = getComputedStyle(scroll);
    const tabs = root.querySelector(".wb-tabs");
    const top = (tabs ? tabs.getBoundingClientRect().bottom : sc.top) - r.top;
    root.style.setProperty("--wb-focus-area-top", `${top}px`);
    root.style.setProperty("--wb-focus-top", `${top + FLOAT_GAP}px`);
    root.style.setProperty("--wb-focus-bottom", `${r.bottom - sc.bottom + FLOAT_GAP_BOTTOM}px`);
    root.style.setProperty("--wb-focus-left", `${sc.left - r.left + (parseFloat(cs.paddingLeft) || 0)}px`);
    root.style.setProperty("--wb-focus-right", `${r.right - sc.right + (parseFloat(cs.paddingRight) || 0)}px`);
  }
  /** Where the floating card ends up, in the root's coordinates. */
  focusTarget() {
    const root = this.containerEl;
    const r = root.getBoundingClientRect();
    const px = (name) => parseFloat(root.style.getPropertyValue(name)) || 0;
    const top = px("--wb-focus-top");
    const left = px("--wb-focus-left");
    return { top, left, width: r.width - left - px("--wb-focus-right"), height: r.height - top - px("--wb-focus-bottom") };
  }
  /** An element's box relative to the view's root (the floating card's containing block). */
  rectInRoot(el) {
    const r = this.containerEl.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    return { top: b.top - r.top, left: b.left - r.left, width: b.width, height: b.height };
  }
  /** Pins the card to an explicit box while animating; null goes back to the CSS focus bounds. */
  setFocusGeometry(card, box) {
    if (!box) {
      for (const prop of ["top", "left", "width", "height", "right", "bottom"]) card.style.removeProperty(prop);
      return;
    }
    card.setCssStyles({
      top: `${box.top}px`,
      left: `${box.left}px`,
      width: `${box.width}px`,
      height: `${box.height}px`,
      right: "auto",
      bottom: "auto"
    });
  }
  reducedMotion() {
    var _a, _b;
    return (_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _b : false;
  }
  /**
   * "Collapse all" for one section, triggered by double-clicking its (already active) tab button:
   * closes every expanded card preview and folds every collapsible group label in the section
   * (group groups on Characters, type groups and Subsidiaries on Groups, every tree label
   * and the Ships section on Locations). The folded state is saved like a manual fold. While a
   * search is active the matching entries still show (as with a manual fold); the saved state
   * takes over once the search is cleared.
   */
  async collapseAllInTab(tab) {
    var _a;
    const pane = this.tabContents[tab];
    if (!pane) return;
    let closedCard = false;
    pane.body.querySelectorAll(".wb-card.wb-card-expanded").forEach((card) => {
      var _a2;
      if (((_a2 = this.activeEdit) == null ? void 0 : _a2.card) === card && this.activeEdit.isDirty()) return;
      this.collapseCard(card, false);
      closedCard = true;
    });
    if (closedCard) this.recordNav(tab, null);
    let folded = false;
    pane.body.querySelectorAll(".wb-group-header").forEach((header) => {
      const collapse = this.groupCollapsers.get(header);
      if (!collapse) return;
      collapse();
      folded = true;
    });
    this.refreshCurrentCardHighlight();
    (_a = this.updateShadowFn) == null ? void 0 : _a.call(this);
    if (folded) await this.plugin.saveSettings();
  }
  /** The section folder a tab's notes live in, e.g. "UniverseBuilder/Characters". */
  tabFolder(tab) {
    return `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS[tab]}`;
  }
  /** Which tab (if any) a given file's own card lives on. */
  findEntryTab(file) {
    for (const tab of SECTION_TABS) {
      if (file.path.startsWith(this.tabFolder(tab) + "/")) return tab;
    }
    return null;
  }
  /**
   * Switches the active tab's DOM (fixed header half + scrolling body half) without touching
   * navigation history — callers that count as a "navigation" record it themselves via recordNav().
   */
  switchTab(id) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.activeTab = id;
    if (id !== "bookmarks") this.lastSectionTab = id;
    (_a = this.tabBarEl) == null ? void 0 : _a.querySelectorAll(".wb-tab").forEach((b) => b.removeClass("active"));
    (_c = (_b = this.tabBarEl) == null ? void 0 : _b.querySelector(`.wb-tab[data-tab="${id}"]`)) == null ? void 0 : _c.addClass("active");
    Object.values(this.tabContents).forEach((c) => {
      c == null ? void 0 : c.head.removeClass("active");
      c == null ? void 0 : c.body.removeClass("active");
    });
    (_d = this.tabContents[id]) == null ? void 0 : _d.head.addClass("active");
    (_e = this.tabContents[id]) == null ? void 0 : _e.body.addClass("active");
    this.containerEl.toggleClass("wb-edit-focus-hidden", !!this.floating && this.floating.pane !== ((_f = this.tabContents[id]) == null ? void 0 : _f.body));
    (_g = this.showTabSearchFn) == null ? void 0 : _g.call(this);
    (_h = this.updateShadowFn) == null ? void 0 : _h.call(this);
    this.updateBookmarkHeaderButtons();
  }
  // ─── Bookmarks ───────────────────────────────────────────────────────────
  /** The title row's Bookmarks button: opens the Bookmarks view, or goes back to the last section if it's already open. */
  toggleBookmarksView() {
    const target = this.activeTab === "bookmarks" ? this.lastSectionTab : "bookmarks";
    this.switchTab(target);
    this.recordNav(target, null);
  }
  updateBookmarkHeaderButtons() {
    const open = this.activeTab === "bookmarks";
    for (const btn of this.bookmarkHeaderButtons) {
      btn.classList.toggle("is-active", open);
      btn.setAttribute("aria-pressed", String(open));
      btn.setAttribute("aria-label", open ? t("bookmarks.close") : t("bookmarks"));
    }
  }
  syncBookmarkToggle(btn, on) {
    btn.classList.toggle("is-bookmarked", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? t("bookmarks.remove") : t("bookmarks.add"));
  }
  /**
   * Shows or hides the pink POV label in a character card's own header (not the expanded area),
   * in the badge row under the name, where renderCard draws it, after the role badge.
   */
  setCardPovBadge(card, on) {
    const titleEl = Array.from(card.querySelectorAll(".wb-card-title")).find((el) => !el.closest(".wb-card-expand"));
    const head = titleEl == null ? void 0 : titleEl.parentElement;
    if (!titleEl || !head) return;
    const existing = head.querySelector(":scope > .wb-card-badge-row > .wb-badge-pov, :scope > .wb-card-title > .wb-badge-pov");
    if (on === !!existing) return;
    if (existing) {
      const row = existing.parentElement;
      existing.remove();
      if ((row == null ? void 0 : row.hasClass("wb-card-badge-row")) && !row.hasChildNodes()) row.remove();
      return;
    }
    let host = head.querySelector(":scope > .wb-card-badge-row");
    if (!host) {
      host = createDiv("wb-card-badge-row");
      titleEl.insertAdjacentElement("afterend", host);
    }
    host.createSpan({ cls: "wb-badge wb-badge-pov", text: t("card.pov") });
  }
  /** Adds or removes one note from the bookmarks, updating every expanded copy of its card. */
  async toggleBookmark(path) {
    const settings = this.plugin.settings;
    const on = !settings.bookmarks.includes(path);
    settings.bookmarks = on ? [...settings.bookmarks, path] : settings.bookmarks.filter((p) => p !== path);
    this.containerEl.querySelectorAll(".wb-bookmark-toggle").forEach((btn) => {
      if (btn.getAttribute("data-bookmark-path") === path) this.syncBookmarkToggle(btn, on);
    });
    this.renderBookmarks();
    await this.plugin.saveSettings();
  }
  /**
   * Draws the Bookmarks view's list: bookmarked entries grouped under collapsible section headers
   * (Characters, Locations, ...), each card drawn exactly as on its own tab. Each group can be
   * dragged into its own order, saved back into the single bookmarks list.
   */
  renderBookmarks() {
    var _a;
    const pane = this.tabContents.bookmarks;
    if (!pane) return;
    const container = pane.body;
    const tab = "bookmarks";
    const wasExpanded = new Set(
      Array.from(container.querySelectorAll(".wb-card.wb-card-expanded")).map(
        (c) => {
          var _a2;
          return (_a2 = c.getAttribute("data-path")) != null ? _a2 : "";
        }
      )
    );
    const scrollEl = this.activeTab === tab ? container.closest(".wb-scroll") : null;
    const scrollTop = (_a = scrollEl == null ? void 0 : scrollEl.scrollTop) != null ? _a : 0;
    container.empty();
    if (this.floating && !this.floating.card.isConnected) void this.exitFloat(true);
    const entries = this.plugin.settings.bookmarks.map((path) => this.entryByPath.get(path)).filter((e) => !!e);
    if (entries.length === 0) {
      container.createDiv("wb-list").createDiv({
        cls: "wb-empty",
        text: t("bookmarks.empty")
      });
      this.applySearch(tab);
      return;
    }
    for (const section of SECTION_TABS) {
      const cfg = this.sectionConfigs[section];
      const items = entries.filter((e) => this.findEntryTab(e.file) === section);
      if (!cfg || items.length === 0) continue;
      const header = container.createDiv("wb-group-header");
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");
      (0, import_obsidian7.setIcon)(header.createSpan({ cls: "wb-group-chevron" }), "chevron-down");
      header.createSpan({ cls: "wb-group-title", text: t(`tab.${section}`) });
      const list = container.createDiv("wb-list");
      const applyCollapsed = (collapsed) => {
        header.classList.toggle("is-collapsed", collapsed);
        list.classList.toggle("is-collapsed", collapsed);
        header.setAttribute("aria-expanded", String(!collapsed));
      };
      applyCollapsed(this.plugin.settings.collapsedBookmarkGroups.includes(section));
      const toggleCollapsed = async () => {
        if (normalizeForSearch(this.searchQueries[tab]).trim()) return;
        const settings = this.plugin.settings;
        const collapse = !settings.collapsedBookmarkGroups.includes(section);
        settings.collapsedBookmarkGroups = collapse ? [...settings.collapsedBookmarkGroups, section] : settings.collapsedBookmarkGroups.filter((k) => k !== section);
        applyCollapsed(collapse);
        await this.plugin.saveSettings();
      };
      header.onclick = () => void toggleCollapsed();
      header.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void toggleCollapsed();
        }
      };
      for (const entry of items) this.renderCard(tab, list, entry, cfg.getCard, cfg.thumbs, cfg.stackBadge, true);
      this.enableReorder(list, async (order) => {
        const settings = this.plugin.settings;
        const kept = order.filter((p) => settings.bookmarks.includes(p));
        settings.bookmarks = mergeGroupOrder(settings.bookmarks, items.map((e) => e.file.path), kept);
        await this.plugin.saveSettings();
      });
    }
    this.createNoResultsLine(container);
    this.applySearch(tab);
    if (wasExpanded.size) {
      this.restoringNav = true;
      this.floatInstantly = true;
      try {
        container.querySelectorAll(".wb-card").forEach((card) => {
          var _a2;
          const path = (_a2 = card.getAttribute("data-path")) != null ? _a2 : "";
          const entry = this.entryByPath.get(path);
          if (entry && wasExpanded.has(path)) this.toggleCardExpand(tab, card, entry);
        });
      } finally {
        this.restoringNav = false;
        this.floatInstantly = false;
      }
    }
    if (scrollEl) scrollEl.scrollTop = scrollTop;
    this.refreshCurrentCardHighlight();
  }
  /**
   * Records where the sidebar is now pointed (which tab, and which card - if any - is the one the
   * user just navigated to) as a Back/Forward history entry. Ignored while a Back/Forward click is
   * itself replaying a past entry, and skipped if it's identical to the current entry.
   */
  recordNav(tab, cardPath) {
    if (this.restoringNav) return;
    const top = this.navHistory[this.navIndex];
    if (top && top.tab === tab && top.cardPath === cardPath) return;
    this.navHistory = this.navHistory.slice(0, this.navIndex + 1);
    this.navHistory.push({ tab, cardPath });
    this.navIndex = this.navHistory.length - 1;
    this.updateNavButtonStates();
  }
  updateNavButtonStates() {
    const canBack = this.navIndex > 0;
    const canForward = this.navIndex < this.navHistory.length - 1;
    for (const { back, fwd } of this.navButtons) {
      back.toggleAttribute("disabled", !canBack);
      fwd.toggleAttribute("disabled", !canForward);
    }
    this.cardNavButtons = this.cardNavButtons.filter(({ back }) => back.isConnected);
    const cardBack = this.cardNavTarget(-1) !== null;
    const cardFwd = this.cardNavTarget(1) !== null;
    for (const { back, fwd } of this.cardNavButtons) {
      back.toggleAttribute("disabled", !cardBack);
      fwd.toggleAttribute("disabled", !cardFwd);
    }
    this.refreshCurrentCardHighlight();
  }
  /**
   * The nearest history entry before (-1) or after (1) the current one that has an expanded card,
   * or null. Entries without one (a tab switch, or a card being closed) are skipped: the card
   * toolbar's Back / Forward step from one expanded entry to the next.
   */
  cardNavTarget(dir) {
    for (let i = this.navIndex + dir; i >= 0 && i < this.navHistory.length; i += dir) {
      if (this.navHistory[i].cardPath) return i;
    }
    return null;
  }
  /** Back / Forward from an expanded card's toolbar: expands the previous / next expanded entry in the history. */
  navigateCard(dir) {
    const target = this.cardNavTarget(dir);
    if (target === null) return;
    this.navIndex = target;
    this.applyNavEntry(this.navHistory[target]);
  }
  /**
   * Marks the card at the current point in the nav history (if any) as the "current" one, with an
   * accent-colored border, and makes sure it's the only card so marked. Derived fresh from
   * navHistory every time rather than tracked separately, so there's never more than one: expanding
   * or jumping to a different card, collapsing the current one, or stepping Back/Forward all just
   * change which entry (if any) is at navIndex, and this re-reads that.
   */
  refreshCurrentCardHighlight() {
    this.containerEl.querySelectorAll(".wb-card-current").forEach((el) => el.removeClass("wb-card-current"));
    const current2 = this.navHistory[this.navIndex];
    if (!(current2 == null ? void 0 : current2.cardPath)) return;
    const pane = this.tabContents[current2.tab];
    const card = pane == null ? void 0 : pane.body.querySelector(`.wb-card[data-path="${CSS.escape(current2.cardPath)}"]`);
    card == null ? void 0 : card.addClass("wb-card-current");
  }
  navigateBack() {
    if (this.navIndex <= 0) return;
    this.navIndex--;
    this.applyNavEntry(this.navHistory[this.navIndex]);
  }
  navigateForward() {
    if (this.navIndex >= this.navHistory.length - 1) return;
    this.navIndex++;
    this.applyNavEntry(this.navHistory[this.navIndex]);
  }
  applyNavEntry(entry) {
    var _a, _b;
    this.restoringNav = true;
    try {
      this.switchTab(entry.tab);
      if (entry.cardPath) {
        this.revealCard(entry.tab, entry.cardPath);
      } else {
        const float = this.floating;
        const onTab = !!float && float.pane === ((_a = this.tabContents[entry.tab]) == null ? void 0 : _a.body);
        if (float && onTab && !(((_b = this.activeEdit) == null ? void 0 : _b.card) === float.card && this.activeEdit.isDirty())) {
          this.collapseCard(float.card, false);
        }
      }
    } finally {
      this.restoringNav = false;
    }
    this.updateNavButtonStates();
  }
  /**
   * Follows a wiki-link clicked inside an expanded card's preview: if the target note has its own
   * card somewhere in the sidebar, switches to that tab, expands its card and scrolls it into view
   * instead of opening the note in the main editor. Anything outside the tracked sections (or an
   * unresolved link) falls back to Obsidian's normal "open the note" behavior.
   */
  followWikiLink(linktext, sourcePath) {
    const linkPath = linktext.split("#")[0];
    const dest = this.app.metadataCache.getFirstLinkpathDest(linkPath, sourcePath);
    if (!dest) {
      new import_obsidian7.Notice(t("notice.linkNotFound", { name: linktext }));
      return;
    }
    const tab = this.findEntryTab(dest);
    if (!tab) {
      void this.app.workspace.getLeaf().openFile(dest);
      return;
    }
    if (tab !== this.activeTab) this.switchTab(tab);
    this.revealCard(tab, dest.path);
  }
  /**
   * Shows a note's card from outside the sidebar (the novel editor's scene labels): switches to its
   * tab and expands it, the same as following a wiki-link inside an expanded card. Returns false if
   * the note has no card here.
   */
  async revealEntry(file) {
    var _a, _b;
    const tab = this.findEntryTab(file);
    if (!tab) return false;
    const selector = `.wb-card[data-path="${CSS.escape(file.path)}"]`;
    if (!((_a = this.tabContents[tab]) == null ? void 0 : _a.body.querySelector(selector))) await this.render();
    if (!((_b = this.tabContents[tab]) == null ? void 0 : _b.body.querySelector(selector))) return false;
    if (tab !== this.activeTab) this.switchTab(tab);
    this.revealCard(tab, file.path);
    return true;
  }
  /**
   * Brings one tab's card into view: un-collapses its group group if needed, clears an active
   * search filter that would otherwise hide it, expands it (recording that as a nav entry, same as
   * a direct click would), and scrolls it into view.
   */
  revealCard(tab, path) {
    var _a, _b, _c, _d;
    const pane = this.tabContents[tab];
    if (!pane) return;
    const card = pane.body.querySelector(`.wb-card[data-path="${CSS.escape(path)}"]`);
    if (!card) return;
    for (let list = card.closest(".wb-list"); list && list !== pane.body; list = (_b = (_a = list.parentElement) == null ? void 0 : _a.closest(".wb-list")) != null ? _b : null) {
      if (!list.classList.contains("is-collapsed")) continue;
      list.removeClass("is-collapsed");
      const header = list.previousElementSibling;
      if (header instanceof HTMLElement && header.classList.contains("wb-group-header")) {
        header.removeClass("is-collapsed");
        header.setAttribute("aria-expanded", "true");
      }
    }
    for (let el = card; el && el !== pane.body; el = el.parentElement) {
      if (!el.classList.contains("wb-tree-hidden")) continue;
      const owner = el.getAttribute("data-tree-owner");
      if (owner) void ((_c = this.treeExpanders.get(owner)) == null ? void 0 : _c());
    }
    if (card.classList.contains("wb-filtered-out") && this.searchQueries[tab]) {
      this.searchQueries[tab] = "";
      this.applySearch(tab);
      if (tab === this.activeTab) (_d = this.showTabSearchFn) == null ? void 0 : _d.call(this);
    }
    if (!card.classList.contains("wb-card-expanded")) {
      card.scrollIntoView({ block: "center" });
      const entry = this.entryByPath.get(path);
      if (entry) this.toggleCardExpand(tab, card, entry);
    }
  }
  /**
   * Lets an image file be dropped onto a portrait card (collapsed or expanded) to set its
   * portrait, from outside Obsidian (e.g. File Explorer) or from Obsidian's own file list. The
   * card is outlined while an image is over it. Drops meant for an open inline editor are left
   * to the editor, and card reorder drags (which carry application/x-wb-card) are ignored.
   */
  enableImageDrop(card, entry, title) {
    const isImage = (e) => isImageDrag(this.app, e);
    const overEditor = (e) => {
      var _a, _b;
      return ((_a = this.activeEdit) == null ? void 0 : _a.card) === card && e.target instanceof Node && !!((_b = card.querySelector(":scope > .wb-card-expand")) == null ? void 0 : _b.contains(e.target));
    };
    const clear = () => card.removeClass("wb-card-image-drop");
    card.addEventListener("dragenter", (e) => {
      if (!isImage(e) || overEditor(e)) return;
      e.preventDefault();
      card.addClass("wb-card-image-drop");
    });
    card.addEventListener("dragover", (e) => {
      if (!isImage(e)) return;
      if (overEditor(e)) {
        clear();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
      card.addClass("wb-card-image-drop");
    });
    card.addEventListener("dragleave", (e) => {
      if (!card.contains(e.relatedTarget)) clear();
    });
    card.addEventListener("drop", (e) => {
      clear();
      if (!isImage(e) || overEditor(e)) return;
      e.preventDefault();
      e.stopPropagation();
      const image = droppedImageFrom(this.app, e.dataTransfer);
      if (!image) return;
      if (this.activeEdit) {
        new import_obsidian7.Notice(t("notice.finishEditing"));
        return;
      }
      void this.setPortrait(entry.file, title, image);
    });
  }
  /**
   * Sets a note's portrait to a dropped image. If the note already embeds a portrait image, asks
   * before replacing it (declining changes nothing, and nothing is copied into the vault), then
   * swaps that embed for the new one in place, keeping any size spec. Otherwise the embed is
   * added at the very top of the note's body (right after the frontmatter, which has to stay first).
   * An image from outside the vault is copied into `<Universe folder>/Images/<Section>` (see
   * importImage), so the note never points at a file outside the vault.
   */
  async setPortrait(note, title, image) {
    var _a;
    try {
      const existing = this.findFirstImage(await this.app.vault.read(note), note);
      if (existing) {
        if (image.kind === "vault" && ((_a = existing.file) == null ? void 0 : _a.path) === image.file.path) {
          new import_obsidian7.Notice(t("portrait.alreadySet", { image: image.file.name, name: title }));
          return;
        }
        const ok = await confirmModal(
          this.app,
          t("portrait.replaceTitle"),
          t("portrait.replaceMessage", { name: title, old: existing.name, image: image.file.name }),
          t("portrait.replaceAction")
        );
        if (!ok) return;
      }
      let imageFile;
      if (image.kind === "vault") {
        imageFile = image.file;
      } else {
        imageFile = await importImage(this.app, this.plugin.settings.worldFolder, image.file, note.path);
      }
      await this.app.vault.process(note, (data) => {
        const current2 = this.findFirstImage(data, note);
        if (current2) return data.slice(0, current2.start) + portraitEmbed(this.app, imageFile, note.path, current2.size) + data.slice(current2.end);
        return insertAtBodyTop(data, portraitEmbed(this.app, imageFile, note.path));
      });
      await this.render({ keepExpanded: true });
      new import_obsidian7.Notice(t(existing ? "portrait.replaced" : "portrait.added", { name: title }));
    } catch (err) {
      console.error("Universe Builder: setting portrait failed", err);
      new import_obsidian7.Notice(t("portrait.failed", { name: title }));
    }
  }
  /**
   * Makes the cards in one list drag-sortable (an group's character group, a hierarchical
   * tab's parent or child group, or a whole flat tab like Lore). Each list only accepts cards
   * that were picked up from that same list, so entries can't be dragged between groups,
   * between a parent's children and its siblings, or between tabs. Every DOM query here is
   * scoped to this list's own direct children (`:scope > .wb-card`) so a hierarchical tab's
   * nested child-group lists - which live inside this list's DOM subtree - are never touched by
   * an ancestor list's bookkeeping, and every listener stops propagation so a drag started in a
   * nested list isn't also seen by the (ancestor) lists it's nested inside. The new order is
   * handed to `onReorder` to persist to plugin data; notes themselves are never modified.
   * On hierarchical tabs the collapsible label above each card is a drag handle for that card too,
   * so a collapsed entry (label only, card and subtree hidden) can still be dragged and dropped on.
   */
  enableReorder(list, onReorder) {
    let dragged = null;
    let dropTarget = null;
    let dropAfter = false;
    const cardAt = (t2) => {
      if (!(t2 instanceof HTMLElement)) return null;
      const el = t2.closest(".wb-card, .wb-tree-header");
      if (!el || !el.classList.contains("wb-tree-header")) return el;
      const next = el.nextElementSibling;
      return next instanceof HTMLElement && next.classList.contains("wb-card") ? next : null;
    };
    const isShown = (el) => el.getClientRects().length > 0;
    const unitOf = (card) => {
      const parts = [];
      const prev = card.previousElementSibling;
      if (prev instanceof HTMLElement && prev.classList.contains("wb-tree-header")) parts.push(prev);
      parts.push(card);
      const next = card.nextElementSibling;
      if (next instanceof HTMLElement && next.classList.contains("wb-child-group")) parts.push(next);
      return parts;
    };
    const clearMarks = () => {
      list.querySelectorAll(":scope > .wb-drop-before, :scope > .wb-drop-after").forEach(
        (el) => el.classList.remove("wb-drop-before", "wb-drop-after")
      );
      dropTarget = null;
    };
    list.querySelectorAll(":scope > .wb-card, :scope > .wb-tree-header").forEach(
      (el) => el.setAttribute("draggable", "true")
    );
    list.addEventListener("dragstart", (e) => {
      var _a;
      const card = cardAt(e.target);
      if (!card || card.parentElement !== list || !e.dataTransfer) return;
      e.stopPropagation();
      dragged = card;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("application/x-wb-card", (_a = card.getAttribute("data-path")) != null ? _a : "");
      const parts = unitOf(card);
      window.setTimeout(() => parts.forEach((p) => p.classList.add("wb-dragging")), 0);
    });
    list.addEventListener("dragend", () => {
      if (dragged) unitOf(dragged).forEach((p) => p.classList.remove("wb-dragging"));
      dragged = null;
      clearMarks();
    });
    list.addEventListener("dragover", (e) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
      const target = cardAt(e.target);
      if (!target || target.parentElement !== list) return;
      clearMarks();
      if (target === dragged) return;
      const unit = unitOf(target).filter(isShown);
      if (!unit.length) return;
      const head = unit.filter((p) => !p.classList.contains("wb-child-group"));
      const top = head[0].getBoundingClientRect().top;
      const bottom = head[head.length - 1].getBoundingClientRect().bottom;
      dropTarget = target;
      dropAfter = e.clientY >= (top + bottom) / 2;
      (dropAfter ? unit[unit.length - 1] : unit[0]).classList.add(dropAfter ? "wb-drop-after" : "wb-drop-before");
    });
    list.addEventListener("dragleave", (e) => {
      if (!list.contains(e.relatedTarget)) clearMarks();
    });
    const handleDrop = async (e) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      const moving = dragged;
      if (dropTarget && dropTarget !== moving) {
        const movingParts = unitOf(moving);
        const targetParts = unitOf(dropTarget);
        const ref = dropAfter ? targetParts[targetParts.length - 1].nextSibling : targetParts[0];
        if (!movingParts.includes(ref)) {
          for (const part of movingParts) list.insertBefore(part, ref);
        }
        const order = Array.from(list.querySelectorAll(":scope > .wb-card")).map(
          (c) => {
            var _a;
            return (_a = c.getAttribute("data-path")) != null ? _a : "";
          }
        );
        await onReorder(order);
      }
      clearMarks();
    };
    list.addEventListener("drop", (e) => void handleDrop(e));
  }
};
function splitFrontmatter(text) {
  const m = text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*(?:\r?\n|$))/);
  if (!m) return null;
  return { open: m[1], yaml: m[2], close: m[3], body: text.slice(m[0].length) };
}
function createAutoTextarea(parent, cls, value, label, keys) {
  const ta = parent.createEl("textarea", { cls, attr: { spellcheck: "true", "aria-label": label } });
  ta.value = value;
  const autosize = () => {
    ta.setCssStyles({ height: "auto" });
    ta.setCssStyles({ height: `${ta.scrollHeight + 2}px` });
  };
  ta.addEventListener("input", autosize);
  ta.addEventListener("keydown", (e) => {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && (e.key === "s" || e.key === "Enter")) {
      e.preventDefault();
      keys.save();
    } else if (e.key === "Escape") {
      e.preventDefault();
      keys.cancel();
    } else if (e.key === "Tab" && !mod && !e.altKey) {
      e.preventDefault();
      ta.setRangeText("	", ta.selectionStart, ta.selectionEnd, "end");
      autosize();
    }
  });
  window.requestAnimationFrame(autosize);
  return ta;
}
function createRawEditor(anchor, file, text, keys, pov = false, onPovChange) {
  const wrap = createDiv("wb-card-editor-wrap");
  anchor.insertAdjacentElement("afterend", wrap);
  const povRow = pov ? wrap.createDiv("wb-card-editor-props-row") : null;
  const ta = createAutoTextarea(wrap, "wb-card-editor", text, t("card.editLabel", { name: file.basename }), keys);
  if (povRow) {
    createPovToggle(
      povRow,
      () => {
        var _a, _b;
        return (_b = (_a = splitFrontmatter(ta.value)) == null ? void 0 : _a.yaml) != null ? _b : "";
      },
      (yaml) => {
        const fm = splitFrontmatter(ta.value);
        ta.value = fm ? fm.open + yaml + fm.close + fm.body : `---
${yaml}
---
${ta.value}`;
      },
      ta,
      onPovChange
    );
  }
  return {
    getText: () => ta.value,
    isDirty: () => ta.value !== text,
    focus: () => {
      ta.focus();
      ta.setSelectionRange(0, 0);
      ta.scrollTop = 0;
    },
    destroy: () => wrap.remove()
  };
}
var LIVE_PREVIEW_TEXT_SCALE = 0.75;
var livePreviewEditorClass;
function resolveLivePreviewEditorClass(app) {
  var _a, _b;
  if (livePreviewEditorClass !== void 0) return livePreviewEditorClass;
  livePreviewEditorClass = null;
  try {
    const registry = app.embedRegistry;
    const embed = (_b = (_a = registry == null ? void 0 : registry.embedByExtension) == null ? void 0 : _a.md) == null ? void 0 : _b.call(_a, { app, containerEl: createDiv(), state: {} }, null, "");
    if (embed) {
      embed.load();
      embed.editable = true;
      embed.showEditor();
      let ctor = null;
      if (embed.editMode) {
        const proto = Object.getPrototypeOf(Object.getPrototypeOf(embed.editMode));
        ctor = proto == null ? void 0 : proto.constructor;
      }
      embed.unload();
      if (typeof ctor === "function") livePreviewEditorClass = ctor;
    }
  } catch (err) {
    console.warn("Universe Builder: Live Preview editor unavailable (Obsidian internals changed?); using the raw markdown editor.", err);
  }
  return livePreviewEditorClass;
}
function createLivePreviewEditor(app, parent, anchor, file, text, keys, portrait = null, pov = false, onPovChange) {
  const Base = resolveLivePreviewEditorClass(app);
  if (!Base) return null;
  const wrap = createDiv("wb-card-editor-wrap wb-card-editor-live");
  anchor.insertAdjacentElement("afterend", wrap);
  const fm = splitFrontmatter(text);
  let props = null;
  if (fm) {
    const row = wrap.createDiv("wb-card-editor-props-row");
    const toggle = row.createEl("button", {
      cls: "wb-card-editor-label wb-card-editor-props-toggle",
      attr: { type: "button", "aria-expanded": "false" }
    });
    (0, import_obsidian7.setIcon)(toggle.createSpan({ cls: "wb-card-editor-props-chevron" }), "chevron-right");
    toggle.createSpan({ text: t("card.properties") });
    const count = fm.yaml.split(/\r?\n/).filter((line) => /^[^\s#-][^:]*:/.test(line)).length;
    if (count) toggle.createSpan({ cls: "wb-card-editor-props-count", text: `(${count})` });
    const box = createAutoTextarea(wrap, "wb-card-editor wb-card-editor-props", fm.yaml, t("card.propertiesOf", { name: file.basename }), keys);
    box.hide();
    props = box;
    if (pov) createPovToggle(row, () => box.value, (yaml) => box.value = yaml, box, onPovChange);
    toggle.onclick = () => {
      const open = !box.isShown();
      box.toggle(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.toggleClass("is-open", open);
      if (open) box.dispatchEvent(new Event("input"));
    };
  }
  const host = wrap.createDiv("wb-card-editor-body");
  const baseSize = parseFloat(getComputedStyle(host).getPropertyValue("--font-text-size")) || 16;
  host.style.setProperty("--font-text-size", `${baseSize * LIVE_PREVIEW_TEXT_SCALE}px`);
  let cmp = null;
  const owner = {
    app,
    hoverPopover: null,
    showSearch: () => {
    },
    toggleMode: () => {
    },
    onMarkdownScroll: () => {
    },
    getMode: () => "source",
    scroll: 0,
    editMode: null,
    get editor() {
      return cmp == null ? void 0 : cmp.editor;
    },
    get file() {
      return file;
    },
    get path() {
      return file.path;
    }
  };
  const vaultProxy = new Proxy(app.vault, {
    get(target, prop, receiver) {
      var _a;
      if (prop === "config") {
        const config = (_a = target.config) != null ? _a : {};
        return new Proxy(config, {
          get(cfg, key, r) {
            if (key === "showLineNumber" || key === "foldHeading" || key === "foldIndent") return false;
            return Reflect.get(cfg, key, r);
          }
        });
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  const appProxy = new Proxy(app, {
    get(target, prop, receiver) {
      return prop === "vault" ? vaultProxy : Reflect.get(target, prop, receiver);
    }
  });
  const fullBody = fm ? fm.body : text;
  let lead = "";
  const bodyOffset = text.length - fullBody.length;
  if (portrait && portrait.start >= bodyOffset) {
    const start = portrait.start - bodyOffset;
    const end = portrait.end - bodyOffset;
    const lineEnd = fullBody.slice(end).match(/^[ \t]*(?:\r?\n|$)(?:[ \t]*\r?\n)*/);
    if (!fullBody.slice(0, start).trim() && lineEnd) lead = fullBody.slice(0, end + lineEnd[0].length);
  }
  const heading = fullBody.slice(lead.length).match(/^(?:[ \t]*\r?\n)*# [^\r\n]*(?:\r?\n|$)(?:[ \t]*\r?\n)*/);
  if (heading) lead += heading[0];
  const bodyText = fullBody.slice(lead.length);
  let initialBody = bodyText;
  try {
    class SidebarMarkdownEditor extends Base {
      // The stock editor pads the bottom so the last line can scroll to mid-screen; not wanted in a card.
      updateBottomPadding() {
      }
    }
    const editor = new SidebarMarkdownEditor(appProxy, host, owner);
    cmp = editor;
    parent.addChild(editor);
    owner.editMode = editor;
    editor.set(bodyText);
    initialBody = getBodyValue();
  } catch (err) {
    console.warn("Universe Builder: couldn't create the Live Preview editor; using the raw markdown editor.", err);
    try {
      if (cmp) parent.removeChild(cmp);
    } catch (e) {
    }
    wrap.remove();
    return null;
  }
  function getBodyValue() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (_h = (_g = (_b = (_a = cmp == null ? void 0 : cmp.editor) == null ? void 0 : _a.getValue) == null ? void 0 : _b.call(_a)) != null ? _g : (_f = (_e = (_d = (_c = cmp == null ? void 0 : cmp.cm) == null ? void 0 : _c.state) == null ? void 0 : _d.doc) == null ? void 0 : _e.toString) == null ? void 0 : _f.call(_e)) != null ? _h : bodyText;
  }
  const scope = new import_obsidian7.Scope(app.scope);
  scope.register(["Mod"], "s", () => {
    keys.save();
    return false;
  });
  scope.register(["Mod"], "Enter", () => {
    keys.save();
    return false;
  });
  scope.register([], "Escape", () => {
    keys.cancel();
    return false;
  });
  let scopePushed = false;
  const popScope = () => {
    if (scopePushed) app.keymap.popScope(scope);
    scopePushed = false;
  };
  host.addEventListener("focusin", () => {
    if (!scopePushed) {
      app.keymap.pushScope(scope);
      scopePushed = true;
    }
    app.workspace.activeEditor = owner;
  });
  host.addEventListener("focusout", (e) => {
    if (!host.contains(e.relatedTarget)) popScope();
  });
  const bodyChanged = () => getBodyValue() !== initialBody;
  const propsChanged = () => !!fm && !!props && props.value !== fm.yaml;
  let destroyed = false;
  return {
    getText: () => {
      if (!bodyChanged() && !propsChanged()) return text;
      const newBody = lead + (bodyChanged() ? getBodyValue() : bodyText);
      if (!fm || !props) return newBody;
      if (!props.value.trim()) return newBody;
      return fm.open + props.value + fm.close + newBody;
    },
    isDirty: () => bodyChanged() || propsChanged(),
    focus: () => {
      var _a, _b;
      try {
        (_b = (_a = cmp == null ? void 0 : cmp.editor) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
      } catch (e) {
      }
      host.scrollTop = 0;
    },
    destroy: () => {
      if (destroyed) return;
      destroyed = true;
      popScope();
      if (app.workspace.activeEditor === owner) app.workspace.activeEditor = null;
      try {
        if (cmp) parent.removeChild(cmp);
      } catch (e) {
      }
      wrap.remove();
    }
  };
}
function confirmModal(app, title, message, actionLabel, danger = false) {
  return new Promise((resolve) => {
    let result = false;
    const modal = new import_obsidian7.Modal(app);
    modal.titleEl.setText(title);
    modal.contentEl.createEl("p", { text: message });
    const buttons = modal.contentEl.createDiv("wb-confirm-buttons");
    const cancelBtn = buttons.createEl("button", { text: t("confirm.cancel"), cls: "wb-btn-secondary", attr: { type: "button" } });
    cancelBtn.onclick = () => modal.close();
    const okBtn = buttons.createEl("button", { text: actionLabel, cls: danger ? "wb-btn-primary wb-btn-danger" : "wb-btn-primary", attr: { type: "button" } });
    okBtn.onclick = () => {
      result = true;
      modal.close();
    };
    modal.onClose = () => resolve(result);
    modal.open();
    cancelBtn.focus();
  });
}
var PortraitPicker = class {
  /**
   * `sectionFolder` is the folder the note is (or will be) in, e.g. "UniverseBuilder/Lore"; it only
   * sets which Images subfolder the hint names. `dropGuard` (a modal) also swallows files let go
   * anywhere else inside it.
   */
  constructor(app, plugin, parent, sectionFolder, dropGuard) {
    this.app = app;
    this.plugin = plugin;
    this.image = null;
    this.objectUrl = null;
    const folder = portraitFolderFor(plugin.settings.worldFolder, `${sectionFolder}/_.md`);
    this.zone = parent.createDiv({
      cls: "wb-portrait-drop",
      attr: { role: "button", tabindex: "0", "aria-label": t("portrait.dropLabel") }
    });
    const preview = this.zone.createDiv("wb-portrait-drop-preview");
    this.previewImg = preview.createEl("img", { attr: { alt: "", draggable: "false" } });
    (0, import_obsidian7.setIcon)(preview.createDiv("wb-portrait-drop-icon"), "image-plus");
    const text = this.zone.createDiv("wb-portrait-drop-text");
    text.createDiv({ cls: "wb-portrait-drop-title", text: t("portrait.dropTitle") });
    this.nameEl = text.createDiv({ cls: "wb-portrait-drop-name" });
    text.createDiv({ cls: "wb-portrait-drop-hint", text: t("portrait.dropHint", { folder }) });
    const removeBtn = this.zone.createEl("button", {
      cls: "wb-portrait-drop-remove clickable-icon",
      attr: { type: "button", "aria-label": t("portrait.remove") }
    });
    (0, import_obsidian7.setIcon)(removeBtn, "x");
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      this.set(null);
    };
    const input = parent.createEl("input", {
      cls: "wb-portrait-drop-input",
      attr: { type: "file", accept: "image/*,.png,.jpg,.jpeg,.gif,.webp,.svg,.bmp,.avif", tabindex: "-1" }
    });
    input.onchange = () => {
      var _a;
      const picked = imageFromFiles(this.app, Array.from((_a = input.files) != null ? _a : []));
      if (picked) this.set(picked);
      input.value = "";
    };
    this.zone.onclick = () => input.click();
    this.zone.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        input.click();
      }
    };
    const clear = () => this.zone.removeClass("is-dragover");
    this.zone.addEventListener("dragenter", (e) => {
      if (!isImageDrag(this.app, e)) return;
      e.preventDefault();
      this.zone.addClass("is-dragover");
    });
    this.zone.addEventListener("dragover", (e) => {
      if (!isImageDrag(this.app, e)) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
      this.zone.addClass("is-dragover");
    });
    this.zone.addEventListener("dragleave", (e) => {
      if (!this.zone.contains(e.relatedTarget)) clear();
    });
    this.zone.addEventListener("drop", (e) => {
      clear();
      if (!isImageDrag(this.app, e)) return;
      e.preventDefault();
      e.stopPropagation();
      const image = droppedImageFrom(this.app, e.dataTransfer);
      if (image) this.set(image);
    });
    dropGuard == null ? void 0 : dropGuard.addEventListener("dragover", (e) => {
      var _a;
      if (!((_a = e.dataTransfer) == null ? void 0 : _a.types.includes("Files")) || this.zone.contains(e.target)) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "none";
    });
    dropGuard == null ? void 0 : dropGuard.addEventListener("drop", (e) => {
      var _a;
      if (((_a = e.dataTransfer) == null ? void 0 : _a.types.includes("Files")) && !this.zone.contains(e.target)) e.preventDefault();
    });
  }
  /** True once an image has been chosen (and not removed). */
  get hasImage() {
    return this.image !== null;
  }
  set(image) {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
    this.image = image;
    if (!image) {
      this.previewImg.removeAttribute("src");
    } else if (image.kind === "vault") {
      this.previewImg.src = this.app.vault.getResourcePath(image.file);
    } else {
      this.objectUrl = URL.createObjectURL(image.file);
      this.previewImg.src = this.objectUrl;
    }
    this.nameEl.setText(image ? image.kind === "vault" ? t("portrait.inVault", { name: image.file.name }) : image.file.name : "");
    this.zone.toggleClass("has-image", !!image);
  }
  /**
   * Called once the note exists (or its edits are saved): imports the chosen image (if it came
   * from outside the vault) and embeds it at the top of the note. A failure here doesn't undo the
   * note itself; `failNotice` says so. Returns true if a portrait was added.
   */
  async attachTo(note, failNotice) {
    const image = this.image;
    if (!image) return false;
    try {
      const imageFile = image.kind === "vault" ? image.file : await importImage(this.app, this.plugin.settings.worldFolder, image.file, note.path);
      await this.app.vault.process(note, (data) => insertAtBodyTop(data, portraitEmbed(this.app, imageFile, note.path)));
      return true;
    } catch (err) {
      console.error("Universe Builder: importing portrait failed", err);
      new import_obsidian7.Notice(failNotice);
      return false;
    }
  }
  /** Removes the drop area from the page and releases the preview's temporary URL. */
  remove() {
    this.destroy();
    this.zone.remove();
  }
  /** Releases the preview's temporary URL (call from the modal's onClose). */
  destroy() {
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
    this.objectUrl = null;
  }
};
async function readSectionFrontmatter(app, plugin, tab) {
  var _a;
  const out = [];
  for (const file of getMarkdownFilesIn(app, `${plugin.settings.worldFolder}/${SECTION_FOLDERS[tab]}`)) {
    const fm = readFrontmatter(await app.vault.cachedRead(file));
    out.push({ ...fm, name: ((_a = fm.name) != null ? _a : "").trim() || file.basename });
  }
  return out;
}
function uniqueNames(values) {
  const byKey = /* @__PURE__ */ new Map();
  for (const v of values) {
    const name = parseRefName(v != null ? v : "");
    if (name && !byKey.has(name.toLowerCase())) byKey.set(name.toLowerCase(), name);
  }
  return [...byKey.values()].sort((a, b) => a.localeCompare(b, void 0, { sensitivity: "base", numeric: true }));
}
var ADD_NEW_OPTION = "\0add-new";
function addPickerDropdown(app, container, label, placeholder, values, onChange) {
  let current2 = "";
  new import_obsidian7.Setting(container).setName(label).addDropdown((d) => {
    const select = d.selectEl;
    d.addOption(ADD_NEW_OPTION, t("form.addNew", { field: label }));
    d.addOption("", t("form.noneOption"));
    d.setValue("");
    const optionFor = (value) => Array.from(select.options).find((o) => o.value !== ADD_NEW_OPTION && o.value.toLowerCase() === value.toLowerCase());
    void values.then((list) => {
      for (const v of list) if (!optionFor(v)) d.addOption(v, v);
      select.value = current2;
    });
    d.onChange((v) => {
      if (v !== ADD_NEW_OPTION) {
        current2 = v;
        onChange(v);
        return;
      }
      select.value = current2;
      void promptForValue(app, t("form.addNewTitle", { field: label }), placeholder).then((added) => {
        var _a;
        if (!added) return;
        const existing = optionFor(added);
        if (!existing) {
          const opt = createEl("option", { text: added, attr: { value: added } });
          select.insertBefore(opt, (_a = select.options[2]) != null ? _a : null);
        }
        current2 = existing ? existing.value : added;
        select.value = current2;
        onChange(current2);
      });
    });
  });
}
function promptForValue(app, title, placeholder) {
  return new Promise((resolve) => {
    let result = null;
    const modal = new import_obsidian7.Modal(app);
    modal.modalEl.addClass("wb-prompt-modal");
    modal.titleEl.setText(title);
    const input = modal.contentEl.createEl("input", { cls: "wb-prompt-input", attr: { type: "text", placeholder, maxlength: "120" } });
    const buttons = modal.contentEl.createDiv("wb-confirm-buttons");
    const cancelBtn = buttons.createEl("button", { text: t("confirm.cancel"), cls: "wb-btn-secondary", attr: { type: "button" } });
    const saveBtn = buttons.createEl("button", { text: t("card.save"), cls: "wb-btn-primary", attr: { type: "button" } });
    const save = () => {
      const value = input.value.replace(/\s+/g, " ").trim();
      if (!value) {
        input.focus();
        return;
      }
      result = value;
      modal.close();
    };
    cancelBtn.onclick = () => modal.close();
    saveBtn.onclick = save;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        save();
      }
    });
    modal.onClose = () => resolve(result);
    modal.open();
    input.focus();
  });
}
var CharacterModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, onDone) {
    super(app);
    this.portrait = null;
    this.data = {
      name: "",
      role: "protagonist",
      pov: false,
      age: "",
      group: "",
      ship: "",
      home: "",
      physicalDesc: "",
      personality: "",
      goals: ""
    };
    this.plugin = plugin;
    this.onDone = onDone;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("wb-modal");
    contentEl.createEl("h2", { text: t("character.new") });
    const form = contentEl.createDiv("wb-modal-form");
    this.portrait = new PortraitPicker(this.app, this.plugin, form, `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.characters}`, this.modalEl);
    new import_obsidian7.Setting(form).setName(t("form.name")).addText((text) => {
      text.setPlaceholder(t("character.namePlaceholder")).onChange((v) => this.data.name = v);
    });
    addEditableDropdown(this, this.plugin, "characters", form, metadataField("characters", "role"), this.data.role, (v) => this.data.role = v);
    new import_obsidian7.Setting(form).setName(t("character.pov")).addDropdown((d) => {
      d.addOption("no", t("form.no"));
      d.addOption("yes", t("form.yes"));
      d.setValue("no");
      d.onChange((v) => this.data.pov = v === "yes");
    });
    new import_obsidian7.Setting(form).setName(t("character.age")).addText((text) => {
      text.setPlaceholder(t("character.agePlaceholder")).onChange((v) => this.data.age = v);
    });
    const known = this.knownValues();
    addPickerDropdown(this.app, form, t("character.group"), t("character.groupPlaceholder"), known.then((k) => k.group), (v) => this.data.group = v);
    addPickerDropdown(this.app, form, t("character.ship"), t("character.shipPlaceholder"), known.then((k) => k.ship), (v) => this.data.ship = v);
    addPickerDropdown(this.app, form, t("character.home"), t("character.homePlaceholder"), known.then((k) => k.home), (v) => this.data.home = v);
    new import_obsidian7.Setting(form).setName(t("character.physicalDesc")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.physicalDesc = v);
    });
    new import_obsidian7.Setting(form).setName(t("character.personality")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.personality = v);
    });
    new import_obsidian7.Setting(form).setName(t("form.goals")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.goals = v);
    });
    new import_obsidian7.Setting(form).addButton(
      (b) => b.setButtonText(t("form.create")).setCta().onClick(() => void this.submit())
    );
  }
  /**
   * The values the Group / Ship / Home dropdowns offer, each alphabetical and without repeats
   * (case-insensitive, "[[Name]]" read as "Name"):
   *   - Group: the names of the notes on the Groups tab, plus every `group` characters already have;
   *   - Ship: the ship-type notes on the Locations tab, plus every character `ship`;
   *   - Home: every note on the Locations tab, plus every character `home`.
   * A note's name is its `name` property, else its file name.
   */
  async knownValues() {
    const read = (tab) => readSectionFrontmatter(this.app, this.plugin, tab);
    const [characters, groups, locations] = await Promise.all([read("characters"), read("groups"), read("locations")]);
    const collect = uniqueNames;
    return {
      group: collect([...groups.map((g) => g.name), ...characters.map((c) => c.group)]),
      ship: collect([...locations.filter(isShip).map((l) => l.name), ...characters.map((c) => c.ship)]),
      home: collect([...locations.map((l) => l.name), ...characters.map((c) => c.home)])
    };
  }
  async submit() {
    var _a;
    if (!this.data.name.trim()) {
      new import_obsidian7.Notice(t("form.nameRequired"));
      return;
    }
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.characters}`;
    const sections = [
      [t("note.origin"), ""],
      [t("note.physicalDesc"), this.data.physicalDesc],
      [t("note.occupation"), ""],
      [t("note.resume"), ""],
      [t("note.roleInStory"), ""],
      [t("note.goals"), this.data.goals],
      [t("note.personality"), this.data.personality],
      [t("note.habits"), ""],
      [t("note.earlierLife"), ""],
      [t("note.internalConflicts"), ""],
      [t("note.externalConflicts"), ""]
    ];
    const sectionLines = [];
    for (const [heading, text] of sections) {
      sectionLines.push(`## ${heading}`);
      if (text) sectionLines.push(text);
      sectionLines.push("");
    }
    const content = [
      "---",
      `name: "${this.data.name}"`,
      `role: ${yamlScalar(this.data.role)}`,
      `pov: ${this.data.pov ? "yes" : "no"}`,
      `age: "${this.data.age}"`,
      `group: ${JSON.stringify(this.data.group)}`,
      `ship: ${JSON.stringify(this.data.ship)}`,
      `home: ${JSON.stringify(this.data.home)}`,
      `type: character`,
      "---",
      "",
      `# ${this.data.name}`,
      "",
      ...sectionLines
    ].join("\n");
    const file = await createNote(this.app, folder, this.data.name, content);
    await ((_a = this.portrait) == null ? void 0 : _a.attachTo(file, t("form.createdNoPortrait", { name: file.basename })));
    new import_obsidian7.Notice(t("character.created", { name: this.data.name }));
    this.close();
    this.onDone();
    await this.app.workspace.getLeaf().openFile(file);
  }
  onClose() {
    var _a;
    (_a = this.portrait) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
  }
};
var LocationModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, onDone) {
    super(app);
    this.portrait = null;
    this.data = {
      name: "",
      type: "planet",
      parent: "",
      description: "",
      inhabitants: "",
      secrets: ""
    };
    this.plugin = plugin;
    this.onDone = onDone;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("wb-modal");
    contentEl.createEl("h2", { text: t("location.new") });
    const form = contentEl.createDiv("wb-modal-form");
    this.portrait = new PortraitPicker(this.app, this.plugin, form, `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.locations}`, this.modalEl);
    new import_obsidian7.Setting(form).setName(t("form.name")).addText((text) => {
      text.setPlaceholder(t("location.namePlaceholder")).onChange((v) => this.data.name = v);
    });
    addEditableDropdown(this, this.plugin, "locations", form, metadataField("locations", "locationType"), this.data.type, (v) => this.data.type = v);
    const parents = readSectionFrontmatter(this.app, this.plugin, "locations").then(
      (locations) => uniqueNames([...locations.map((l) => l.name), ...locations.map((l) => l.parent)])
    );
    addPickerDropdown(this.app, form, t("location.parent"), t("location.parentPlaceholder"), parents, (v) => this.data.parent = v);
    new import_obsidian7.Setting(form).setName(t("form.description")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.description = v);
    });
    new import_obsidian7.Setting(form).setName(t("location.inhabitants")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.inhabitants = v);
    });
    new import_obsidian7.Setting(form).setName(t("location.secrets")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.secrets = v);
    });
    new import_obsidian7.Setting(form).addButton(
      (b) => b.setButtonText(t("form.create")).setCta().onClick(() => void this.submit())
    );
  }
  async submit() {
    var _a;
    if (!this.data.name.trim()) {
      new import_obsidian7.Notice(t("form.nameRequired"));
      return;
    }
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.locations}`;
    const parentLink = this.data.parent ? `[[${this.data.parent}]]` : "";
    const content = [
      "---",
      `name: "${this.data.name}"`,
      `type: ${yamlScalar(this.data.type)}`,
      `parent: ${JSON.stringify(this.data.parent)}`,
      `entry_type: location`,
      "---",
      "",
      `# ${this.data.name}`,
      "",
      ...parentLink ? [`**${t("note.partOf")}:** ${parentLink}`, ""] : [],
      `## ${t("note.description")}`,
      this.data.description || t("note.noneProvided"),
      "",
      `## ${t("note.inhabitants")}`,
      this.data.inhabitants || t("note.noneProvided"),
      "",
      `## ${t("note.secrets")}`,
      this.data.secrets || t("note.noneProvided")
    ].join("\n");
    const file = await createNote(this.app, folder, this.data.name, content);
    await ((_a = this.portrait) == null ? void 0 : _a.attachTo(file, t("form.createdNoPortrait", { name: file.basename })));
    new import_obsidian7.Notice(t("location.created", { name: this.data.name }));
    this.close();
    this.onDone();
    await this.app.workspace.getLeaf().openFile(file);
  }
  onClose() {
    var _a;
    (_a = this.portrait) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
  }
};
var GroupModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, onDone) {
    super(app);
    this.portrait = null;
    this.data = {
      name: "",
      type: "corporation",
      subsidiaryOf: "",
      alignment: "neutral",
      goals: "",
      enemies: "",
      allies: "",
      description: ""
    };
    this.plugin = plugin;
    this.onDone = onDone;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("wb-modal");
    contentEl.createEl("h2", { text: t("group.new") });
    const form = contentEl.createDiv("wb-modal-form");
    this.portrait = new PortraitPicker(this.app, this.plugin, form, `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.groups}`, this.modalEl);
    new import_obsidian7.Setting(form).setName(t("form.name")).addText((text) => {
      text.setPlaceholder(t("group.namePlaceholder")).onChange((v) => this.data.name = v);
    });
    addEditableDropdown(this, this.plugin, "groups", form, metadataField("groups", "groupType"), this.data.type, (v) => this.data.type = v);
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.groups}`;
    const existing = Array.from(new Set(
      getMarkdownFilesIn(this.app, folder).map((f) => {
        var _a, _b;
        const name = (_b = (_a = this.app.metadataCache.getFileCache(f)) == null ? void 0 : _a.frontmatter) == null ? void 0 : _b.name;
        return typeof name === "string" && name.trim() ? name.trim() : f.basename;
      })
    )).sort((a, b) => a.localeCompare(b));
    new import_obsidian7.Setting(form).setName(t("group.subsidiaryOf")).setDesc(t("group.subsidiaryOfDesc")).addDropdown((d) => {
      d.addOption("", t("group.subsidiaryNone"));
      existing.forEach((n) => {
        d.addOption(n, n);
      });
      d.setValue(this.data.subsidiaryOf);
      d.onChange((v) => this.data.subsidiaryOf = v);
    });
    addEditableDropdown(this, this.plugin, "groups", form, metadataField("groups", "alignment"), this.data.alignment, (v) => this.data.alignment = v);
    new import_obsidian7.Setting(form).setName(t("form.goals")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.goals = v);
    });
    new import_obsidian7.Setting(form).setName(t("group.enemies")).addText((text) => {
      text.setPlaceholder(t("form.commaSeparated")).onChange((v) => this.data.enemies = v);
    });
    new import_obsidian7.Setting(form).setName(t("group.allies")).addText((text) => {
      text.setPlaceholder(t("form.commaSeparated")).onChange((v) => this.data.allies = v);
    });
    new import_obsidian7.Setting(form).setName(t("form.description")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.description = v);
    });
    new import_obsidian7.Setting(form).addButton(
      (b) => b.setButtonText(t("form.create")).setCta().onClick(() => void this.submit())
    );
  }
  async submit() {
    var _a;
    if (!this.data.name.trim()) {
      new import_obsidian7.Notice(t("form.nameRequired"));
      return;
    }
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.groups}`;
    const enemyLinks = this.data.enemies.split(",").filter(Boolean).map((e) => `[[${e.trim()}]]`).join(", ");
    const allyLinks = this.data.allies.split(",").filter(Boolean).map((a) => `[[${a.trim()}]]`).join(", ");
    const lines = [
      "---",
      `name: "${this.data.name}"`,
      `type: ${yamlScalar(this.data.type)}`,
      `${SUBSIDIARY_OF}: "${this.data.subsidiaryOf.replace(/"/g, "'")}"`,
      `alignment: ${yamlScalar(this.data.alignment)}`,
      `goals: "${this.data.goals.replace(/"/g, "'")}"`,
      `entry_type: group`,
      "---",
      "",
      `# ${this.data.name}`,
      "",
      `**${t("note.type")}:** ${optionLabel("groupType", this.data.type)}`,
      ...this.data.subsidiaryOf ? [`**${t("note.subsidiaryOf")}:** [[${this.data.subsidiaryOf}]]`] : [],
      `**${t("note.alignment")}:** ${displayValue("alignment", this.data.alignment)}`
    ];
    if (enemyLinks) lines.push(`**${t("note.enemies")}:** ${enemyLinks}`);
    if (allyLinks) lines.push(`**${t("note.allies")}:** ${allyLinks}`);
    lines.push(
      "",
      `## ${t("note.goals")}`,
      this.data.goals || t("note.noneProvided"),
      "",
      `## ${t("note.description")}`,
      this.data.description || t("note.noneProvided")
    );
    const file = await createNote(this.app, folder, this.data.name, lines.join("\n"));
    await ((_a = this.portrait) == null ? void 0 : _a.attachTo(file, t("form.createdNoPortrait", { name: file.basename })));
    new import_obsidian7.Notice(t("group.created", { name: this.data.name }));
    this.close();
    this.onDone();
    await this.app.workspace.getLeaf().openFile(file);
  }
  onClose() {
    var _a;
    (_a = this.portrait) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
  }
};
var MetadataEditor = class {
  constructor(app, plugin, tab, fields, container, onAdd) {
    this.app = app;
    this.plugin = plugin;
    this.tab = tab;
    this.fields = fields;
    this.container = container;
    this.onAdd = onAdd;
    /** Per field: stored value (lower-cased) -> number of the section's notes using it. */
    this.usage = null;
  }
  /**
   * Draws the controls, then fills in the usage counts once the section's notes are read (only
   * the counts are updated, so a value being typed in meanwhile isn't lost).
   */
  start(focusField) {
    this.draw(focusField);
    void this.countUsage().then(() => this.updateCounts());
  }
  updateCounts() {
    for (const field of this.fields) {
      this.container.querySelectorAll(`.wb-metadata-item[data-field="${field.id}"]`).forEach((row) => {
        var _a;
        const count = this.usageOf(field, (_a = row.dataset.value) != null ? _a : "");
        const el = row.querySelector(".wb-metadata-count");
        if (el && count !== null) el.textContent = tn("metadata.uses", count);
      });
    }
  }
  /** Counts, for every field shown, how many of the section's notes use each value. */
  async countUsage() {
    var _a;
    const usage = new Map(this.fields.map((f) => [f.id, /* @__PURE__ */ new Map()]));
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS[this.tab]}`;
    for (const file of getMarkdownFilesIn(this.app, folder)) {
      const fm = readFrontmatter(await this.app.vault.cachedRead(file));
      for (const field of this.fields) {
        const value = fm[field.key];
        if (!value) continue;
        const counts = usage.get(field.id);
        counts.set(optionKey(value), ((_a = counts.get(optionKey(value))) != null ? _a : 0) + 1);
      }
    }
    this.usage = usage;
  }
  usageOf(field, value) {
    var _a, _b;
    return this.usage ? (_b = (_a = this.usage.get(field.id)) == null ? void 0 : _a.get(optionKey(value))) != null ? _b : 0 : null;
  }
  draw(focusField) {
    var _a;
    const { container } = this;
    container.empty();
    for (const field of this.fields) {
      const block = container.createDiv("wb-metadata-field");
      block.createEl("h3", { text: t(field.label) });
      block.createDiv({ cls: "wb-metadata-caption", text: t("metadata.builtIn") });
      const chips = block.createDiv("wb-metadata-chips");
      for (const value of field.builtIn) chips.createSpan({ cls: "wb-metadata-chip", text: optionLabel(field.id, value) });
      const addRow = block.createDiv("wb-metadata-add");
      const input = addRow.createEl("input", { attr: { type: "text", placeholder: t("metadata.addPlaceholder"), maxlength: "60" } });
      const addBtn = addRow.createEl("button", { text: "+", cls: "wb-btn-primary", attr: { type: "button", "aria-label": t("metadata.add") } });
      const add = () => void this.addValue(field, input.value);
      addBtn.onclick = add;
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          add();
        }
      });
      if (focusField === field.id) input.focus();
      block.createDiv({ cls: "wb-metadata-caption", text: t("metadata.custom") });
      const custom = (_a = this.plugin.settings.customOptions[field.id]) != null ? _a : [];
      const list = block.createDiv("wb-metadata-list");
      if (custom.length === 0) list.createDiv({ cls: "wb-metadata-none", text: t("metadata.none") });
      for (const value of custom) {
        const row = list.createDiv({ cls: "wb-metadata-item", attr: { "data-field": field.id, "data-value": value } });
        row.createSpan({ cls: "wb-metadata-value", text: value });
        const count = this.usageOf(field, value);
        row.createSpan({ cls: "wb-metadata-count", text: count === null ? "\u2026" : tn("metadata.uses", count) });
        const del = row.createEl("button", { cls: "wb-metadata-remove clickable-icon", attr: { type: "button", "aria-label": t("metadata.remove", { value }) } });
        (0, import_obsidian7.setIcon)(del, "x");
        del.onclick = () => void this.removeValue(field, value);
      }
    }
  }
  async addValue(field, raw) {
    var _a, _b;
    const value = raw.replace(/\s+/g, " ").trim();
    if (!value) return;
    const taken = this.plugin.optionValues(field).some(
      (v) => optionKey(v) === optionKey(value) || optionKey(optionLabel(field.id, v)) === optionKey(value)
    );
    if (taken) {
      new import_obsidian7.Notice(t("metadata.exists", { value }));
      return;
    }
    const custom = this.plugin.settings.customOptions;
    custom[field.id] = [...(_a = custom[field.id]) != null ? _a : [], value];
    await this.plugin.saveSettings();
    if (field.shapesSidebar) this.plugin.refreshSidebar();
    (_b = this.onAdd) == null ? void 0 : _b.call(this, field, value);
    this.draw(field.id);
  }
  async removeValue(field, value) {
    var _a, _b;
    const count = (_a = this.usageOf(field, value)) != null ? _a : 0;
    if (count > 0) {
      const ok = await confirmModal(
        this.app,
        t("metadata.removeTitle"),
        [t("metadata.removeInUse", { value, count }), field.removeNote ? t(field.removeNote, { tab: t(`tab.${this.tab}`), unassigned: t("group.unassigned") }) : ""].filter(Boolean).join(" "),
        t("metadata.removeAction"),
        true
      );
      if (!ok) return;
    }
    const custom = this.plugin.settings.customOptions;
    const rest = ((_b = custom[field.id]) != null ? _b : []).filter((v) => v !== value);
    if (rest.length) custom[field.id] = rest;
    else delete custom[field.id];
    await this.plugin.saveSettings();
    if (field.shapesSidebar) this.plugin.refreshSidebar();
    this.draw();
  }
};
var MetadataModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, tab) {
    super(app);
    this.plugin = plugin;
    this.tab = tab;
  }
  onOpen() {
    this.modalEl.addClass("wb-metadata-modal");
    this.contentEl.addClass("wb-modal");
    this.setTitle(t("metadata.title", { section: t(`tab.${this.tab}`) }));
    if (this.tab === "characters") {
      new import_obsidian7.Setting(this.contentEl).setName(t("metadata.groupCharactersBy")).setDesc(t("metadata.groupCharactersByDesc")).setClass("wb-metadata-grouping").addDropdown((d) => {
        for (const g of CHARACTER_GROUPINGS) d.addOption(g, groupingLabel(g));
        d.setValue(this.plugin.settings.characterGrouping);
        d.onChange(async (v) => {
          this.plugin.settings.characterGrouping = v;
          await this.plugin.saveSettings();
          this.plugin.refreshSidebar();
        });
      });
    }
    const fields = SECTION_METADATA[this.tab];
    if (fields.length === 0) {
      this.contentEl.createEl("p", { cls: "wb-metadata-empty", text: t("metadata.nothing") });
      return;
    }
    new MetadataEditor(this.app, this.plugin, this.tab, fields, this.contentEl.createDiv()).start();
  }
  onClose() {
    this.contentEl.empty();
  }
};
function addEditableDropdown(modal, plugin, tab, formEl, field, initial, onChange) {
  let current2 = initial;
  let select = null;
  const fill = () => {
    if (!select) return;
    select.empty();
    const values = plugin.optionValues(field);
    for (const value of values) select.createEl("option", { text: optionLabel(field.id, value), attr: { value } });
    if (!values.includes(current2) && values.length) {
      current2 = values[0];
      onChange(current2);
    }
    select.value = current2;
  };
  const setting = new import_obsidian7.Setting(formEl).setName(t(field.label)).addDropdown((d) => {
    select = d.selectEl;
    fill();
    d.onChange((v) => {
      current2 = v;
      onChange(v);
    });
  });
  const link = setting.descEl.createEl("a", {
    cls: "wb-metadata-link",
    text: t("metadata.modifyOptions", { field: t(field.label) }),
    attr: { href: "#", role: "button" }
  });
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formEl.hide();
    const panel = modal.contentEl.createDiv("wb-metadata-inline");
    const back = panel.createEl("button", { cls: "wb-metadata-back", attr: { type: "button" } });
    (0, import_obsidian7.setIcon)(back.createSpan({ cls: "wb-btn-icon" }), "chevron-left");
    back.createSpan({ text: t("nav.back") });
    let added = null;
    new MetadataEditor(modal.app, plugin, tab, [field], panel.createDiv(), (_f, value) => added = value).start(field.id);
    back.onclick = () => {
      panel.remove();
      if (added && plugin.optionValues(field).includes(added) && added !== current2) {
        current2 = added;
        onChange(current2);
      }
      fill();
      formEl.show();
    };
  });
}
var LoreModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, onDone) {
    super(app);
    this.portrait = null;
    this.data = { title: "", category: "history", content: "" };
    this.plugin = plugin;
    this.onDone = onDone;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("wb-modal");
    contentEl.createEl("h2", { text: t("lore.new") });
    const form = contentEl.createDiv("wb-modal-form");
    this.portrait = new PortraitPicker(this.app, this.plugin, form, `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.lore}`, this.modalEl);
    new import_obsidian7.Setting(form).setName(t("form.title")).addText((text) => {
      text.setPlaceholder(t("lore.titlePlaceholder")).onChange((v) => this.data.title = v);
    });
    addEditableDropdown(this, this.plugin, "lore", form, metadataField("lore", "loreCategory"), this.data.category, (v) => this.data.category = v);
    new import_obsidian7.Setting(form).setName(t("lore.content")).addTextArea((text) => {
      text.inputEl.addClasses(["wb-textarea", "wb-textarea-tall"]);
      text.onChange((v) => this.data.content = v);
    });
    new import_obsidian7.Setting(form).addButton(
      (b) => b.setButtonText(t("form.create")).setCta().onClick(() => void this.submit())
    );
  }
  async submit() {
    var _a;
    if (!this.data.title.trim()) {
      new import_obsidian7.Notice(t("form.titleRequired"));
      return;
    }
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.lore}`;
    const content = [
      "---",
      `title: "${this.data.title}"`,
      `category: ${yamlScalar(this.data.category)}`,
      `entry_type: lore`,
      "---",
      "",
      `# ${this.data.title}`,
      "",
      `*${t("note.category")}: ${displayValue("loreCategory", this.data.category)}*`,
      "",
      this.data.content || t("note.noContent")
    ].join("\n");
    const file = await createNote(this.app, folder, this.data.title, content);
    await ((_a = this.portrait) == null ? void 0 : _a.attachTo(file, t("form.createdNoPortrait", { name: file.basename })));
    new import_obsidian7.Notice(t("lore.created", { name: this.data.title }));
    this.close();
    this.onDone();
    await this.app.workspace.getLeaf().openFile(file);
  }
  onClose() {
    var _a;
    (_a = this.portrait) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
  }
};
var TimelineModal = class extends import_obsidian7.Modal {
  constructor(app, plugin, onDone) {
    super(app);
    this.portrait = null;
    this.data = { date: "", title: "", description: "", characters: "", locations: "" };
    this.plugin = plugin;
    this.onDone = onDone;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("wb-modal");
    contentEl.createEl("h2", { text: t("timeline.new") });
    this.portrait = new PortraitPicker(this.app, this.plugin, contentEl, `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.timeline}`, this.modalEl);
    new import_obsidian7.Setting(contentEl).setName(t("timeline.date")).addText((text) => {
      text.setPlaceholder(t("timeline.datePlaceholder")).onChange((v) => this.data.date = v);
    });
    new import_obsidian7.Setting(contentEl).setName(t("form.title")).addText((text) => {
      text.setPlaceholder(t("timeline.titlePlaceholder")).onChange((v) => this.data.title = v);
    });
    new import_obsidian7.Setting(contentEl).setName(t("form.description")).addTextArea((text) => {
      text.inputEl.addClass("wb-textarea");
      text.onChange((v) => this.data.description = v);
    });
    new import_obsidian7.Setting(contentEl).setName(t("timeline.characters")).addText((text) => {
      text.setPlaceholder(t("form.commaSeparatedNames")).onChange((v) => this.data.characters = v);
    });
    new import_obsidian7.Setting(contentEl).setName(t("timeline.locations")).addText((text) => {
      text.setPlaceholder(t("form.commaSeparatedNames")).onChange((v) => this.data.locations = v);
    });
    new import_obsidian7.Setting(contentEl).addButton(
      (b) => b.setButtonText(t("form.create")).setCta().onClick(() => void this.submit())
    );
  }
  async submit() {
    var _a;
    if (!this.data.title.trim()) {
      new import_obsidian7.Notice(t("form.titleRequired"));
      return;
    }
    const folder = `${this.plugin.settings.worldFolder}/${SECTION_FOLDERS.timeline}`;
    const charLinks = this.data.characters.split(",").filter(Boolean).map((c) => `[[${c.trim()}]]`).join(", ");
    const locLinks = this.data.locations.split(",").filter(Boolean).map((l) => `[[${l.trim()}]]`).join(", ");
    const filename = this.data.date ? `${this.data.date} - ${this.data.title}` : this.data.title;
    const lines = [
      "---",
      `title: "${this.data.title}"`,
      `date: "${this.data.date}"`,
      `entry_type: timeline`,
      "---",
      "",
      `# ${this.data.title}`,
      "",
      `**${t("note.dateEra")}:** ${this.data.date || t("note.unknown")}`
    ];
    if (charLinks) lines.push(`**${t("note.characters")}:** ${charLinks}`);
    if (locLinks) lines.push(`**${t("note.locations")}:** ${locLinks}`);
    lines.push("", `## ${t("note.description")}`, this.data.description || t("note.noneProvided"));
    const file = await createNote(this.app, folder, filename, lines.join("\n"));
    await ((_a = this.portrait) == null ? void 0 : _a.attachTo(file, t("form.createdNoPortrait", { name: file.basename })));
    new import_obsidian7.Notice(t("timeline.created", { name: this.data.title }));
    this.close();
    this.onDone();
    await this.app.workspace.getLeaf().openFile(file);
  }
  onClose() {
    var _a;
    (_a = this.portrait) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
  }
};
var FolderMigrationModal = class extends import_obsidian7.Modal {
  constructor(app, info, onChoose) {
    super(app);
    this.info = info;
    this.onChoose = onChoose;
    this.choice = "ask-later";
  }
  onOpen() {
    const { contentEl } = this;
    const { source, sections, worldBuilder } = this.info;
    contentEl.addClass("wb-modal", "wb-migrate-modal");
    this.setTitle(t("migrate.title"));
    const total = sections.reduce((n, s) => n + s.count, 0);
    const found = sections.map((s) => `${s.label} (${s.count})`).join(", ");
    contentEl.createEl("p", { text: t("migrate.intro", { source, target: DEFAULT_FOLDER }) });
    contentEl.createEl("p", { text: tn("migrate.scope", total, { images: IMAGES_SUBFOLDER, source, found, total }) });
    if (worldBuilder) {
      contentEl.createEl("p", {
        cls: "wb-migrate-warning",
        text: t(worldBuilder === "enabled" ? "migrate.worldBuilder.enabled" : "migrate.worldBuilder.disabled")
      });
    }
    contentEl.createEl("p", { cls: "wb-migrate-note", text: t("migrate.note", { source }) });
    const buttons = contentEl.createDiv({ cls: "wb-migrate-buttons" });
    const add = (text, choice, cta = false) => {
      const btn = buttons.createEl("button", { text });
      if (cta) btn.addClass("mod-cta");
      btn.addEventListener("click", () => {
        this.choice = choice;
        this.close();
      });
    };
    add(t("migrate.move", { target: DEFAULT_FOLDER }), "move", true);
    add(t("migrate.askLater", { source }), "ask-later");
    add(t("migrate.decline", { source }), "decline");
  }
  onClose() {
    this.contentEl.empty();
    this.onChoose(this.choice);
  }
};
var LegacyCleanupModal = class extends import_obsidian7.Modal {
  constructor(app, folder, emptyFolders, onChoose) {
    super(app);
    this.folder = folder;
    this.emptyFolders = emptyFolders;
    this.onChoose = onChoose;
    this.choice = null;
  }
  onOpen() {
    const { contentEl, folder, emptyFolders } = this;
    contentEl.addClass("wb-modal", "wb-migrate-modal");
    this.setTitle(t("cleanup.title", { folder }));
    contentEl.createEl("p", {
      text: emptyFolders.length ? t("cleanup.messageEmptyFolders", { target: DEFAULT_FOLDER, folder, folders: emptyFolders.join(", ") }) : t("cleanup.message", { target: DEFAULT_FOLDER, folder })
    });
    contentEl.createEl("p", { cls: "wb-migrate-note", text: t("cleanup.note") });
    const buttons = contentEl.createDiv({ cls: "wb-migrate-buttons" });
    const add = (text, choice, cta = false) => {
      const btn = buttons.createEl("button", { text });
      if (cta) btn.addClass("mod-cta");
      btn.addEventListener("click", () => {
        this.choice = choice;
        this.close();
      });
    };
    add(t("cleanup.delete", { folder }), "delete", true);
    add(t("cleanup.keep", { folder }), "keep");
  }
  onClose() {
    this.contentEl.empty();
    this.onChoose(this.choice);
  }
};
function normalizeLanguage(value) {
  return typeof value === "string" && LOCALES.includes(value) ? value : "auto";
}
var UniverseBuilderSettingTab = class extends import_obsidian7.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  /**
   * Declarative settings (Obsidian 1.13.0+). Obsidian renders these, indexes them for settings
   * search, and reads/writes values through getControlValue/setControlValue below. Keep this
   * cheap: it runs on every update() and once when the tab is registered.
   */
  getSettingDefinitions() {
    const languageOptions = {
      auto: t("settings.languageAuto", { language: LANGUAGE_NAMES[detectLocale()] })
    };
    for (const locale of LOCALES) languageOptions[locale] = LANGUAGE_NAMES[locale];
    return [
      {
        name: t("settings.language"),
        desc: t("settings.languageDesc"),
        // Search words in every supported language find it, whatever language is showing.
        aliases: ["language", "translation", "locale", "idioma", "l\xEDngua", "langue", "sprache", "\u044F\u0437\u044B\u043A", "\u043C\u043E\u0432\u0430", "\u8BED\u8A00", "\u8A00\u8A9E", "traducci\xF3n", "tradu\xE7\xE3o", "traduction", "\xFCbersetzung", "\u043F\u0435\u0440\u0435\u0432\u043E\u0434", "\u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434", "\u7FFB\u8BD1", "\u7FFB\u8A33"],
        control: {
          type: "dropdown",
          key: "language",
          options: languageOptions,
          defaultValue: DEFAULT_SETTINGS.language
        }
      },
      {
        name: t("settings.folder"),
        desc: t("settings.folderDesc"),
        aliases: ["world folder", "root", "directory", "path", "carpeta", "ra\xEDz"],
        control: {
          type: "text",
          key: "worldFolder",
          placeholder: DEFAULT_SETTINGS.worldFolder,
          defaultValue: DEFAULT_SETTINGS.worldFolder
        }
      },
      {
        name: t("settings.editor"),
        desc: t("settings.editorDesc"),
        aliases: ["live preview", "raw markdown", "edit", "editor", "vista previa en vivo", "markdown sin formato", "editar"],
        control: {
          type: "dropdown",
          key: "inlineEditor",
          options: { live: t("settings.editorLive"), raw: t("settings.editorRaw") },
          defaultValue: DEFAULT_SETTINGS.inlineEditor
        }
      },
      {
        type: "group",
        heading: t("settings.novelHeading"),
        items: [
          {
            name: t("settings.novel"),
            desc: t("settings.novelDesc"),
            aliases: ["novel", "scene", "novelr", "toolbar", "formatting", "word count", "properties"],
            control: { type: "toggle", key: "novelEditor", defaultValue: DEFAULT_SETTINGS.novelEditor }
          },
          {
            name: t("settings.novelProps"),
            desc: t("settings.novelPropsDesc"),
            aliases: ["novelr-type", "novelr-status", "frontmatter"],
            visible: () => this.plugin.settings.novelEditor,
            control: {
              type: "text",
              key: "novelEditorProperties",
              placeholder: DEFAULT_SETTINGS.novelEditorProperties,
              defaultValue: DEFAULT_SETTINGS.novelEditorProperties
            }
          },
          {
            name: t("settings.novelLivePreview"),
            desc: t("settings.novelLivePreviewDesc"),
            visible: () => this.plugin.settings.novelEditor,
            control: { type: "toggle", key: "novelEditorLivePreview", defaultValue: DEFAULT_SETTINGS.novelEditorLivePreview }
          },
          {
            name: t("settings.novelPropsButton"),
            desc: t("settings.novelPropsButtonDesc"),
            visible: () => this.plugin.settings.novelEditor,
            control: { type: "toggle", key: "novelEditorPropertiesButton", defaultValue: DEFAULT_SETTINGS.novelEditorPropertiesButton }
          },
          {
            name: t("settings.novelHideProps"),
            desc: t("settings.novelHidePropsDesc"),
            visible: () => this.plugin.settings.novelEditor,
            control: { type: "toggle", key: "novelEditorHideProperties", defaultValue: DEFAULT_SETTINGS.novelEditorHideProperties }
          },
          {
            name: t("settings.novelWordCount"),
            desc: t("settings.novelWordCountDesc"),
            visible: () => this.plugin.settings.novelEditor,
            control: { type: "toggle", key: "novelEditorWordCount", defaultValue: DEFAULT_SETTINGS.novelEditorWordCount }
          }
        ]
      }
    ];
  }
  /**
   * Normalises values before they are stored, preserving the rules the old imperative tab
   * applied in its onChange handlers: an empty folder falls back to the default, and the
   * editor choice is always "live" or "raw". A new language takes effect straight away.
   */
  async setControlValue(key, value) {
    const settings = this.plugin.settings;
    switch (key) {
      case "worldFolder":
        settings.worldFolder = typeof value === "string" && value || DEFAULT_SETTINGS.worldFolder;
        break;
      case "inlineEditor":
        settings.inlineEditor = value === "raw" ? "raw" : "live";
        break;
      case "novelEditor":
        settings.novelEditor = value === true;
        await this.plugin.saveSettings();
        this.plugin.novelEditor.refresh();
        this.update();
        return;
      case "novelEditorProperties":
        settings.novelEditorProperties = typeof value === "string" && parseProperties(value).length ? value : DEFAULT_SETTINGS.novelEditorProperties;
        await this.plugin.saveSettings();
        this.plugin.novelEditor.refresh();
        return;
      case "novelEditorLivePreview":
      case "novelEditorHideProperties":
      case "novelEditorWordCount":
      case "novelEditorPropertiesButton":
        settings[key] = value === true;
        await this.plugin.saveSettings();
        this.plugin.novelEditor.refresh();
        return;
      case "language":
        settings.language = normalizeLanguage(value);
        await this.plugin.saveSettings();
        this.plugin.applyLanguage();
        this.update();
        return;
      default:
        return;
    }
    await this.plugin.saveSettings();
  }
};
var UniverseBuilderPlugin = class extends import_obsidian7.Plugin {
  constructor() {
    super(...arguments);
    /** Command ids and their names' translation keys, in Command palette order. */
    this.commandNames = [
      ["open-sidebar", "command.openSidebar", () => void this.activateSidebar()],
      ["new-character", "command.newCharacter", () => new CharacterModal(this.app, this, () => this.refreshSidebar()).open()],
      ["new-location", "command.newLocation", () => new LocationModal(this.app, this, () => this.refreshSidebar()).open()],
      ["new-group", "command.newGroup", () => new GroupModal(this.app, this, () => this.refreshSidebar()).open()],
      ["new-lore", "command.newLore", () => new LoreModal(this.app, this, () => this.refreshSidebar()).open()],
      ["new-timeline-event", "command.newTimelineEvent", () => new TimelineModal(this.app, this, () => this.refreshSidebar()).open()],
      ["move-world-folder", "command.moveWorldFolder", () => void this.checkFolderMigration(true)]
    ];
    // ─── Folder migration (World/ -> UniverseBuilder/) ───────────────────────────
    /** Set while the prompt is open or a move is running, so the check never runs twice at once. */
    this.migrationBusy = false;
    /** Portrait URL per note path, with the note's mtime it was read at (see universePortrait). */
    this.portraitCache = /* @__PURE__ */ new Map();
    this.portraitLoading = /* @__PURE__ */ new Set();
  }
  async onload() {
    await this.loadSettings();
    setLanguage(this.settings.language);
    this.registerView(VIEW_TYPE, (leaf) => new UniverseBuilderView(leaf, this));
    this.addRibbonIcon("orbit", "Universe Builder", () => void this.activateSidebar());
    this.novelEditor = this.addChild(new NovelEditor(this));
    this.registerCommands();
    this.registerEvent(
      this.app.vault.on("rename", async (file, oldPath) => {
        let changed = false;
        const characterOrders = [this.settings.characterOrder, ...Object.values(this.settings.characterOrderBy)];
        for (const orders of characterOrders) {
          for (const order of Object.values(orders != null ? orders : {})) {
            const i = order.indexOf(oldPath);
            if (i !== -1) {
              order[i] = file.path;
              changed = true;
            }
          }
        }
        for (const order of Object.values(this.settings.sectionOrder)) {
          if (!order) continue;
          const i = order.indexOf(oldPath);
          if (i !== -1) {
            order[i] = file.path;
            changed = true;
          }
        }
        const parent = this.settings.collapsedParents.indexOf(oldPath);
        if (parent !== -1) {
          this.settings.collapsedParents[parent] = file.path;
          changed = true;
        }
        const sub = this.settings.collapsedSubsidiaries.indexOf(oldPath);
        if (sub !== -1) {
          this.settings.collapsedSubsidiaries[sub] = file.path;
          changed = true;
        }
        const b = this.settings.bookmarks.indexOf(oldPath);
        if (b !== -1) {
          this.settings.bookmarks[b] = file.path;
          changed = true;
        }
        if (changed) await this.saveSettings();
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", async (file) => {
        if (!this.settings.bookmarks.includes(file.path)) return;
        this.settings.bookmarks = this.settings.bookmarks.filter((p) => p !== file.path);
        await this.saveSettings();
      })
    );
    this.addSettingTab(new UniverseBuilderSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => void this.checkFolderMigration());
  }
  /** Adds the commands, named in the current language. Called again (replacing them) when the language changes. */
  registerCommands() {
    for (const [id, key, callback] of this.commandNames) {
      this.addCommand({ id, name: t(key), callback });
    }
    this.novelEditor.registerCommands();
  }
  /**
   * Switches everything shown to the Language setting's language: the sidebar is redrawn and the
   * commands are re-added under their new names. Forms and dialogs pick it up the next time they open.
   */
  applyLanguage() {
    setLanguage(this.settings.language);
    for (const [id] of this.commandNames) this.removeCommand(id);
    for (const id of this.novelEditor.commandIds()) this.removeCommand(id);
    this.registerCommands();
    this.refreshSidebar();
    this.novelEditor.refresh();
  }
  /**
   * Offers to move the section folders out of the legacy World folder. Runs once per plugin
   * update until settled (moved, declined, or nothing to move). `manual` (the command) ignores
   * the recorded state and always re-checks.
   */
  async checkFolderMigration(manual = false) {
    if (this.migrationBusy) return;
    const state = this.settings.folderMigration;
    const cleanupPending = !manual && state.status === "moved" && !state.legacyCleanup;
    if (!manual && !cleanupPending && (state.status || state.askedInVersion === this.manifest.version)) return;
    this.migrationBusy = true;
    try {
      if (cleanupPending) {
        await this.offerLegacyCleanup();
        return;
      }
      const current2 = this.settings.worldFolder.toLowerCase();
      if (current2 !== LEGACY_FOLDER.toLowerCase() && current2 !== DEFAULT_FOLDER.toLowerCase()) {
        if (manual) {
          new import_obsidian7.Notice(t("migrate.customFolder", { folder: this.settings.worldFolder }));
        } else {
          state.status = "not-needed";
          await this.saveSettings();
        }
        return;
      }
      const legacy = this.findLegacyFolder();
      const sections = legacy ? this.legacySections(legacy) : [];
      if (!legacy || !sections.some((sec) => sec.label !== IMAGES_SUBFOLDER)) {
        if (manual && state.status === "moved" && legacy && !this.hasFiles(legacy)) {
          await this.offerLegacyCleanup();
          return;
        }
        if (manual) new import_obsidian7.Notice(t("migrate.nothingToMove", { folder: LEGACY_FOLDER }));
        if (current2 === LEGACY_FOLDER.toLowerCase()) this.settings.worldFolder = DEFAULT_FOLDER;
        if (!state.status) state.status = "not-needed";
        await this.saveSettings();
        this.refreshSidebar();
        return;
      }
      const info = {
        source: legacy.path,
        sections: sections.map((s) => ({ label: s.label, count: s.files.length })),
        worldBuilder: await this.detectWorldBuilder()
      };
      const choice = await new Promise((resolve) => {
        new FolderMigrationModal(this.app, info, resolve).open();
      });
      if (choice === "move") {
        await this.moveLegacyFolder();
      } else {
        this.settings.worldFolder = legacy.path;
        if (choice === "decline") {
          state.status = "declined";
        } else {
          delete state.status;
          state.askedInVersion = this.manifest.version;
        }
        await this.saveSettings();
        this.refreshSidebar();
      }
    } catch (e) {
      console.error("Universe Builder: folder migration check failed", e);
    } finally {
      this.migrationBusy = false;
    }
  }
  /** The top-level legacy folder, matched case-insensitively (e.g. "World" or "world"). */
  findLegacyFolder() {
    for (const child of this.app.vault.getRoot().children) {
      if (child instanceof import_obsidian7.TFolder && child.name.toLowerCase() === LEGACY_FOLDER.toLowerCase()) return child;
    }
    return null;
  }
  /**
   * The folders the migration moves (see migratedFolderNames) that exist inside `root` and hold
   * at least one file (any type), with those files.
   */
  legacySections(root) {
    const out = [];
    for (const label of migratedFolderNames()) {
      const folder = root.children.find(
        (c) => c instanceof import_obsidian7.TFolder && c.name.toLowerCase() === label.toLowerCase()
      );
      if (!folder) continue;
      const files = [];
      import_obsidian7.Vault.recurseChildren(folder, (f) => {
        if (f instanceof import_obsidian7.TFile) files.push(f);
      });
      if (files.length) out.push({ label, folder, files });
    }
    return out;
  }
  /**
   * Whether the original World Builder plugin is installed, using only public API: its manifest
   * in the plugins folder means installed, its id in community-plugins.json means enabled.
   * Returns null when it isn't installed or the check fails (the prompt then just omits the warning).
   */
  async detectWorldBuilder() {
    try {
      const { adapter, configDir } = this.app.vault;
      if (!await adapter.exists(`${configDir}/plugins/${WORLD_BUILDER_ID}/manifest.json`)) return null;
      let enabled = [];
      try {
        enabled = JSON.parse(await adapter.read(`${configDir}/community-plugins.json`));
      } catch (e) {
      }
      return Array.isArray(enabled) && enabled.includes(WORLD_BUILDER_ID) ? "enabled" : "disabled";
    } catch (e) {
      return null;
    }
  }
  /**
   * Moves each migrated folder (sections and Images) from the legacy folder into DEFAULT_FOLDER. One whose
   * destination doesn't exist yet is moved as one folder; otherwise (or if that fails) it's moved
   * file by file, skipping any file that already exists at the destination. Nothing is ever
   * overwritten or deleted, apart from folders left empty by the move. Obsidian's file manager
   * does the moving, so links to the moved notes and portrait images are updated per the user's settings.
   */
  async moveLegacyFolder() {
    const state = this.settings.folderMigration;
    const legacy = this.findLegacyFolder();
    const sections = legacy ? this.legacySections(legacy) : [];
    const moved = /* @__PURE__ */ new Map();
    const skipped = [];
    const failed = [];
    const { vault, fileManager } = this.app;
    try {
      await ensureFolder(this.app, DEFAULT_FOLDER);
    } catch (e) {
      console.error(`Universe Builder: couldn't create "${DEFAULT_FOLDER}"`, e);
      new import_obsidian7.Notice(t("migrate.createFailed", { folder: DEFAULT_FOLDER }));
      return;
    }
    for (const { label, folder, files } of sections) {
      const dest = `${DEFAULT_FOLDER}/${label}`;
      const srcPrefix = folder.path;
      const targetOf = (f) => dest + f.path.slice(srcPrefix.length);
      if (!vault.getAbstractFileByPath(dest)) {
        const plan = files.map((f) => [f.path, targetOf(f)]);
        try {
          await fileManager.renameFile(folder, dest);
          for (const [from, to] of plan) moved.set(from, to);
          continue;
        } catch (e) {
          console.warn(`Universe Builder: moving "${srcPrefix}" as a folder failed, moving file by file`, e);
        }
      }
      for (const file of files) {
        const target = targetOf(file);
        if (vault.getAbstractFileByPath(target)) {
          skipped.push(file.path);
          continue;
        }
        const from = file.path;
        try {
          await ensureFolder(this.app, target.slice(0, target.lastIndexOf("/")));
          await fileManager.renameFile(file, target);
          moved.set(from, target);
        } catch (e) {
          console.error(`Universe Builder: couldn't move "${from}"`, e);
          failed.push(from);
        }
      }
      await this.removeEmptyFolders(folder);
    }
    const leftovers = legacy && this.hasFiles(legacy) ? legacy.children.map((c) => c.name) : [];
    this.remapPaths(moved);
    if (moved.size || !failed.length) this.settings.worldFolder = DEFAULT_FOLDER;
    if (failed.length) {
      delete state.status;
      delete state.askedInVersion;
    } else {
      state.status = "moved";
      delete state.askedInVersion;
    }
    await this.saveSettings();
    this.refreshSidebar();
    const lines = [tn("migrate.moved", moved.size, { folder: DEFAULT_FOLDER })];
    if (skipped.length) lines.push(t("migrate.skipped", { count: skipped.length, files: skipped.join(", ") }));
    if (failed.length) lines.push(t("migrate.failed", { count: failed.length, files: failed.join(", ") }));
    if (leftovers.length && legacy) lines.push(t("migrate.leftovers", { folder: legacy.path, items: leftovers.join(", ") }));
    new import_obsidian7.Notice(lines.join("\n"), skipped.length || failed.length ? 0 : 8e3);
    if (!failed.length) await this.offerLegacyCleanup();
  }
  /** True when `folder` or any folder inside it holds at least one file. */
  hasFiles(folder) {
    let found = false;
    import_obsidian7.Vault.recurseChildren(folder, (f) => {
      if (f instanceof import_obsidian7.TFile) found = true;
    });
    return found;
  }
  /**
   * After a move, offers to delete the legacy World folder when it holds no files (empty
   * subfolders don't count), since nothing uses it any more. A vault shared with the original
   * World Builder keeps its World/Factions notes, so it never qualifies. "Delete" sends the
   * folder to the trash per Obsidian's "Deleted files" setting. The answer is recorded;
   * closing the dialog leaves it unanswered, so it's offered again on the next launch.
   */
  async offerLegacyCleanup() {
    const legacy = this.findLegacyFolder();
    if (!legacy || this.hasFiles(legacy)) return;
    const emptyFolders = [];
    import_obsidian7.Vault.recurseChildren(legacy, (f) => {
      if (f instanceof import_obsidian7.TFolder && f !== legacy) emptyFolders.push(f.path.slice(legacy.path.length + 1));
    });
    const choice = await new Promise((resolve) => {
      new LegacyCleanupModal(this.app, legacy.path, emptyFolders, resolve).open();
    });
    if (!choice) return;
    const state = this.settings.folderMigration;
    if (choice === "keep") {
      state.legacyCleanup = "kept";
    } else {
      const current2 = this.findLegacyFolder();
      if (current2 && this.hasFiles(current2)) {
        new import_obsidian7.Notice(t("cleanup.hasFiles", { folder: current2.path }));
        return;
      }
      try {
        if (current2) await this.app.fileManager.trashFile(current2);
        state.legacyCleanup = "deleted";
        new import_obsidian7.Notice(t("cleanup.deleted", { folder: legacy.path }));
      } catch (e) {
        console.error(`Universe Builder: couldn't delete "${legacy.path}"`, e);
        new import_obsidian7.Notice(t("cleanup.failed", { folder: legacy.path }));
        return;
      }
    }
    await this.saveSettings();
  }
  /** Deletes `folder` and any subfolders that hold no files, deepest first. */
  async removeEmptyFolders(folder) {
    for (const child of [...folder.children]) {
      if (child instanceof import_obsidian7.TFolder) await this.removeEmptyFolders(child);
    }
    if (folder.children.length === 0) {
      try {
        await this.app.fileManager.trashFile(folder);
      } catch (e) {
        console.warn(`Universe Builder: couldn't remove the empty "${folder.path}" folder`, e);
      }
    }
  }
  /** Points every note path stored in settings at its new location after a move. */
  remapPaths(moved) {
    if (!moved.size) return;
    const remap = (paths) => paths.map((p) => {
      var _a;
      return (_a = moved.get(p)) != null ? _a : p;
    });
    const s = this.settings;
    for (const orders of [s.characterOrder, ...Object.values(s.characterOrderBy)]) {
      if (!orders) continue;
      for (const key of Object.keys(orders)) orders[key] = remap(orders[key]);
    }
    for (const tab of Object.keys(s.sectionOrder)) {
      const order = s.sectionOrder[tab];
      if (order) s.sectionOrder[tab] = remap(order);
    }
    s.collapsedParents = remap(s.collapsedParents);
    s.collapsedSubsidiaries = remap(s.collapsedSubsidiaries);
    s.bookmarks = remap(s.bookmarks);
  }
  async activateSidebar() {
    var _a;
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = (_a = workspace.getRightLeaf(false)) != null ? _a : workspace.getLeaf(true);
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    await workspace.revealLeaf(leaf);
  }
  /** A sidebar section's entries for the novel editor's Characters / Locations / Groups / Lore / Timeline menus. */
  universeEntries(kind) {
    const files = getMarkdownFilesIn(this.app, `${this.settings.worldFolder}/${SECTION_FOLDERS[kind]}`);
    const text = (v) => typeof v === "string" || typeof v === "number" ? String(v).trim() : "";
    return files.map((file) => {
      var _a;
      const fm = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      const entry = { file, name: text(fm == null ? void 0 : fm.name) || text(fm == null ? void 0 : fm.title) || file.basename };
      if (kind === "timeline") entry.detail = text(fm == null ? void 0 : fm.date);
      return entry;
    }).sort(
      (a, b) => {
        var _a, _b;
        return (kind === "timeline" ? compareTimelineDates((_a = a.detail) != null ? _a : "", (_b = b.detail) != null ? _b : "") : 0) || a.name.localeCompare(b.name, void 0, { sensitivity: "base", numeric: true });
      }
    );
  }
  /**
   * An entry's portrait (the same image its sidebar card shows) for the novel editor. Answered from
   * a cache so the toolbar can draw synchronously: undefined = not read yet. A missing or outdated
   * value is (re)read in the background, and the novel editor is told to redraw if it changed.
   */
  universePortrait(file) {
    const cached = this.portraitCache.get(file.path);
    if (cached && cached.mtime === file.stat.mtime) return cached.src;
    if (!this.portraitLoading.has(file.path)) {
      this.portraitLoading.add(file.path);
      const mtime = file.stat.mtime;
      void this.app.vault.cachedRead(file).then((content) => {
        var _a, _b;
        const src = (_b = (_a = findFirstImage(this.app, content, file)) == null ? void 0 : _a.src) != null ? _b : null;
        this.portraitCache.set(file.path, { mtime, src });
        if ((cached == null ? void 0 : cached.src) !== src || !cached) this.novelEditor.portraitsChanged();
      }).catch(() => {
      }).finally(() => this.portraitLoading.delete(file.path));
    }
    return cached == null ? void 0 : cached.src;
  }
  /** Opens the sidebar with this entry's card expanded (a novel editor scene label was clicked). */
  async revealUniverseEntry(file) {
    await this.activateSidebar();
    const leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) return;
    await leaf.loadIfDeferred();
    const view = leaf.view;
    if (!(view instanceof UniverseBuilderView) || !await view.revealEntry(file)) {
      new import_obsidian7.Notice(t("novel.entryNotFound", { name: file.basename }));
    }
  }
  refreshSidebar() {
    const leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if ((leaf == null ? void 0 : leaf.view) instanceof UniverseBuilderView) {
      void leaf.view.render();
    }
  }
  async loadSettings() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const data = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
    this.settings.characterOrder = (_a = data == null ? void 0 : data.characterOrder) != null ? _a : {};
    this.settings.collapsedGroups = (_b = data == null ? void 0 : data.collapsedGroups) != null ? _b : [];
    this.settings.characterGrouping = CHARACTER_GROUPINGS.includes(data == null ? void 0 : data.characterGrouping) ? data.characterGrouping : "group";
    this.settings.characterOrderBy = { ...(_c = data == null ? void 0 : data.characterOrderBy) != null ? _c : {} };
    this.settings.collapsedCharacterSections = { ...(_d = data == null ? void 0 : data.collapsedCharacterSections) != null ? _d : {} };
    this.settings.collapsedGroupTypes = (_e = data == null ? void 0 : data.collapsedGroupTypes) != null ? _e : [];
    this.settings.collapsedParents = (_f = data == null ? void 0 : data.collapsedParents) != null ? _f : [];
    this.settings.collapsedSubsidiaries = (_g = data == null ? void 0 : data.collapsedSubsidiaries) != null ? _g : [];
    this.settings.sectionOrder = (_h = data == null ? void 0 : data.sectionOrder) != null ? _h : {};
    this.settings.bookmarks = (_i = data == null ? void 0 : data.bookmarks) != null ? _i : [];
    this.settings.collapsedBookmarkGroups = (_j = data == null ? void 0 : data.collapsedBookmarkGroups) != null ? _j : [];
    this.settings.folderMigration = { ...(_k = data == null ? void 0 : data.folderMigration) != null ? _k : {} };
    this.migrateLegacySettings(data);
    this.settings.inlineEditor = (data == null ? void 0 : data.inlineEditor) === "raw" ? "raw" : "live";
    this.settings.language = normalizeLanguage(data == null ? void 0 : data.language);
    this.settings.customOptions = normalizeCustomOptions(data == null ? void 0 : data.customOptions);
    Object.assign(this.settings, normalizeNovelEditorSettings(data));
  }
  /** Every value a field's dropdown offers: the built-in ones, then the user's own. */
  optionValues(field) {
    var _a;
    return [...field.builtIn, ...(_a = this.settings.customOptions[field.id]) != null ? _a : []];
  }
  /**
   * Carries over plugin data saved before the "Employers" tab was renamed to "Groups", so
   * collapsed sections and custom ordering survive the rename. The old keys are dropped on the
   * next save.
   */
  migrateLegacySettings(data) {
    if (!data) return;
    const legacy = this.settings;
    if (!data.collapsedGroups && data.collapsedEmployers) this.settings.collapsedGroups = data.collapsedEmployers;
    if (!data.collapsedGroupTypes && data.collapsedEmployerTypes) this.settings.collapsedGroupTypes = data.collapsedEmployerTypes;
    delete legacy.collapsedEmployers;
    delete legacy.collapsedEmployerTypes;
    const order = this.settings.sectionOrder;
    if (order.employers && !order.groups) order.groups = order.employers;
    delete order.employers;
    this.settings.collapsedBookmarkGroups = this.settings.collapsedBookmarkGroups.map((k) => k === "employers" ? "groups" : k);
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
function normalizeCustomOptions(stored) {
  const out = {};
  if (!stored || typeof stored !== "object") return out;
  for (const field of METADATA_FIELDS) {
    const list = stored[field.id];
    if (!Array.isArray(list)) continue;
    const seen = new Set(field.builtIn.map(optionKey));
    const values = [];
    for (const v of list) {
      if (typeof v !== "string") continue;
      const value = v.trim();
      if (!value || seen.has(optionKey(value))) continue;
      seen.add(optionKey(value));
      values.push(value);
    }
    if (values.length) out[field.id] = values;
  }
  return out;
}
