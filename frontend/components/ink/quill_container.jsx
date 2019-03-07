import React from 'react';
import { connect } from 'react-redux';
import {
    notebooksIndex
} from '../../actions/notebook_actions';
import {
    createNote,
    updateNote,
    noteShow,
    notesIndex
} from '../../actions/note_actions';
import Quill from './quill';

const mapStateToProps = (storeState, ownProps) => {
    const notebooks = storeState.entities.notebooks;

    let note = {
        note_title: '',
        note_body: '',
        notebook_id: parseInt(ownProps.match.params.id)
    };

    note = storeState.entities.notes[ownProps.match.params.noteId];

    let notes = storeState.notes;
    return ({
        notebooks,
        note,
        notes
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebooks: () => dispatch(notebooksIndex()),
    fetchNotes: () => dispatch(notesIndex()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quill);