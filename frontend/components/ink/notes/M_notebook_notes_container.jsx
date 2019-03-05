import React from 'react';
import { connect } from 'react-redux';
import MUserNotes from './M_user_notes';
import {
    notesIndex
} from '../../../actions/note_actions';

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

    // let notebook_title = storeState.notebooks(notebook_id);
    // debugger
    return {
        notes
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: () => dispatch(notesIndex())
});

const MNotebookNotesContainer = connect(mapStateToProps, mapDispatchToProps)(MUserNotes);

export default MNotebookNotesContainer;