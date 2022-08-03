import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";

function NotesBody({ notes, onDelete, onArchive, addNote}) {
    let activeNotes = null;
    let archivedNotes = null;
    activeNotes = notes.filter((note) => note.archived === false);
    archivedNotes = notes.filter((note) => note.archived === true);
    return(
        <div className="note-app__body">
        <NoteInput addNote={addNote} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? <NotesList notes={activeNotes} addNote={addNote} onDelete={onDelete} onArchive={onArchive} /> : <p className="notes-list__empty-message">Tidak ada catatan</p> }
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? <NotesList notes={activeNotes} addNote={addNote} onDelete={onDelete} onArchive={onArchive} /> : <p className="notes-list__empty-message">Tidak ada catatan</p> }
        </div>
    )
}

export default(NotesBody);
