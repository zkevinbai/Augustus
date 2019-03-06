import React from 'react';
import { connect } from 'react-redux';
import MUserNotes from './M_user_notes';
import {
    notesIndex
} from '../../../actions/note_actions';

const mapStateToProps = (storeState, ownProps) => {
    let notes = [];
    if (storeState.entities.notes) {
        notes = Object.values(storeState.entities.notes);
    }
    return {
        notes,
        notebookTitle:"All Notes"
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: () => dispatch(notesIndex())
});

const MUserNotesContainer = connect(mapStateToProps, mapDispatchToProps)(MUserNotes);

export default MUserNotesContainer;