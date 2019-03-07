import React from 'react';
import { connect } from 'react-redux';
import {
    notebooksIndex
} from '../../actions/notebook_actions';
import {
    createNote
} from '../../actions/note_actions';
import Quill from './quill';

const mapStateToProps = (storeState, ownProps) => {
    const notebooks = storeState.entities.notebooks;
    return ({
        notebooks
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebooks: () => dispatch(notebooksIndex()),
    createNote: (note) => dispatch(createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quill);