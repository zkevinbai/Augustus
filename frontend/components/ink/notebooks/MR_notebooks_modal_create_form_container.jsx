import React from 'react';
import { connect } from 'react-redux';
import MRNotebooksModalForm from './MR_notebooks_modal_form';
import {
    createNotebook
} from '../../../actions/notebook_actions';

const mapStateToProps = (storeState, ownProps) => {
    let notebook = {
        notebook_title: "",
        user_id: storeState.session.id
    };
    let errors = storeState.errors.notebooks;
    return {
        notebook,
        errors
    };
};

const mapDispatchToProps = (dispatch) => ({
    formAction: (notebook) => dispatch(createNotebook(notebook))
});

const MRNotebooksCreateModalContainer = connect(mapStateToProps, mapDispatchToProps)(MRNotebooksModalForm);

export default MRNotebooksCreateModalContainer;