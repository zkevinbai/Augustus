import * as NoteApiUtil from "../util/note_api_util";

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";
export const CLEAR_NOTE_ERRORS = "CLEAR_NOTE_ERRORS";

// Action Creators

export const receiveNotes = (notes) => ({
    type: RECEIVE_NOTES,
    notes
});

export const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
});

export const removeNote = (noteId) => ({
    type: REMOVE_NOTE,
    noteId
});

export const receiveNoteErrors = (errors) => ({
    type: RECEIVE_NOTE_ERRORS,
    errors
});

export const clearNoteErrors = () => ({
    type: CLEAR_NOTE_ERRORS
});

// Thunk Action Creators

export const notesIndex = () => (dispatch) => {
    return NoteApiUtil.notesIndex()
        .then(
            notes => dispatch(receiveNotes(notes)),
            resErrors => dispatch(receiveNoteErrors(resErrors))
        );
};

export const noteShow = (noteId) => (dispatch) => {
    return NoteApiUtil.noteShow(noteId)
        .then(
            note => dispatch(receiveNote(note)),
            resErrors => dispatch(receiveNoteErrors(resErrors))
        );
};

export const createNote = (note) => (dispatch) => {
    return NoteApiUtil.createNote(note)
        .then(
            note => dispatch(receiveNote(note)),
            resErrors => dispatch(receiveNoteErrors(resErrors))
        );
};

export const updateNote = (note) => (dispatch) => {
    return NoteApiUtil.updateNote(note)
        .then(
            note => dispatch(receiveNote(note)),
            resErrors => dispatch(receiveNoteErrors(resErrors))
        );
};

export const deleteNote = (noteId) => (dispatch) => {
    return NoteApiUtil.deleteNote(noteId)
        .then(
            () => dispatch(removeNote(noteId)),
            resErrors => dispatch(receiveNoteErrors(resErrors))
        );
};