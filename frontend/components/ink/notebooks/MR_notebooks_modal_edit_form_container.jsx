import React from 'react';
import { connect } from 'react-redux';
import MRNotebooksModalForm from './MR_notebooks_modal_form';
import {
    updateNotebook,
    notebookShow
} from '../../../actions/notebook_actions';

const mapStateToProps = (storeState, ownProps) => {
    let notebook = {};
    if (storeState.entities.notebooks){
        notebook = storeState.entities.notebooks[ownProps.match.params.id];
    }
    let errors = storeState.errors.notebooks;
    return {
        notebook,
        errors
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebook: (id) => dispatch(notebookShow(id)),
    formAction: (notebook) => dispatch(updateNotebook(notebook))
});

const MRNotebooksEditModalContainer = connect(mapStateToProps, mapDispatchToProps)(MRNotebooksModalForm);

export default MRNotebooksEditModalContainer;