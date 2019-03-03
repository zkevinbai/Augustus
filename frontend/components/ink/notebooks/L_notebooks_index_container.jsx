import React from 'react';
import { connect } from 'react-redux';
import LNotebooksIndex from './L_notebooks_index';
import {
    notebooksIndex
} from '../../../actions/notebook_actions';

const mapStateToProps = (storeState, ownProps) => {
    // debugger
    let notebooks = [];
    if (storeState.entities.notebooks){
        notebooks = Object.values(storeState.entities.notebooks);
    }
    return {
        notebooks
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotebooks: () => dispatch(notebooksIndex())
});

const LNotebooksIndexContainer = connect(mapStateToProps, mapDispatchToProps)(LNotebooksIndex);

export default LNotebooksIndexContainer;