import React from 'react';
import { connect } from 'react-redux';
import MRNotebooksIndex from './MR_notebooks.index';
import {
    notebooksIndex,
    deleteNotebook
} from '../../../actions/notebook_actions';

const mapStateToProps = (storeState, ownProps) => {
    let notebooks = [];
    if (storeState.entities.notebooks) {
        notebooks = Object.values(storeState.entities.notebooks);
    }
    return {
        notebooks
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebooks: () => dispatch(notebooksIndex()),
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
});

const MRNotebooksIndexContainer = connect(mapStateToProps, mapDispatchToProps)(MRNotebooksIndex);

export default MRNotebooksIndexContainer;