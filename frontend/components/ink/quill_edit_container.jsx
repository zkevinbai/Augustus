import React from 'react';
import { connect } from 'react-redux';
import {
    notebooksIndex
} from '../../actions/notebook_actions';
import {
    createNote,
    updateNote,
    noteShow
} from '../../actions/note_actions';
import QuillEdit from './quill_edit';

const mapStateToProps = (storeState, ownProps) => {
    const notebooks = storeState.entities.notebooks;
    const note = storeState.entities.notes[ownProps.match.params.noteId];
    return ({
        notebooks,
        note
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebooks: () => dispatch(notebooksIndex()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    noteShow: (note) => dispatch(noteShow(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuillEdit);