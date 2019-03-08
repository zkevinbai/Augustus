import React from 'react';
import { connect } from 'react-redux';
import {
    logout,
    deleteAccount
} from '../../actions/session_actions';
import {
    notebooksIndex
} from '../../actions/notebook_actions';
import Ink from './ink';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    const user = storeState.entities.users[storeState.session.id];
    let firstNotebookId;
    if (Object.values(storeState.entities.notebooks).length !== 0){
        firstNotebookId = Object.values(storeState.entities.notebooks)[0].id;
    }
    return ({
        user,
        firstNotebookId
    });
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    deleteAccount: (user) => dispatch(deleteAccount(user)),
    fetchNotebooks: () => dispatch(notebooksIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(Ink);