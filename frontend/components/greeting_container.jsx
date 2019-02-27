import React from 'react';
import { connect } from 'react-redux';
import {
    logout,
    deleteAccount,
    login
} from '../actions/session_actions';
import Greeting from './greeting';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    const user = storeState.entities.users[storeState.session.id];
    return ({
        user
    });
};

const demoUser = {
    credential: "Octavian",
    password: "password"
};

const mapDispatchToProps = (dispatch) => ({
    demoLogin: () => dispatch(login(demoUser)),
    logout: () => dispatch(logout()),
    deleteAccount: (user) => dispatch(deleteAccount(user))
});

export default connect( mapStateToProps, mapDispatchToProps )( Greeting );