import React from 'react';
import { connect } from 'react-redux';
import MUserNotes from './M_user_notes';
import {
    notesIndex, 
    deleteNote
} from '../../../actions/note_actions';
import {
    notebookShow
} from '../../../actions/notebook_actions';

const mapStateToProps = (storeState, ownProps) => {
    let allnotes = [];
    if (storeState.entities.notes) {
        allnotes = Object.values(storeState.entities.notes);
    }

    let notebook_id = parseInt(ownProps.match.params.id);

    let notes=[];
    if (allnotes.length !== 0){
        notes = allnotes.filter(note => note.notebook_id === notebook_id);
    }

    let notebookTitle;
    if (Object.values(storeState.entities.notebooks).length !== 0){
        notebookTitle = storeState.entities.notebooks[notebook_id].notebook_title;
    }

    return {
        notes,
        notebookTitle
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: () => dispatch(notesIndex()),
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

const MNotebookNotesContainer = connect(mapStateToProps, mapDispatchToProps)(MUserNotes);

export default MNotebookNotesContainer;