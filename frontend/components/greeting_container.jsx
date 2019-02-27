import React from 'react';
import { connect } from 'react-redux';
import {
    logout,
    deleteAccount
} from '../actions/session_actions';
import Greeting from './greeting';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    const user = storeState.entities.users[storeState.session.id];
    return ({
        user
    });
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    deleteAccount: (user) => dispatch(deleteAccount(user))
});

export default connect( mapStateToProps, mapDispatchToProps )( Greeting );