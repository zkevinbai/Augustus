import React from 'react';
import { connect } from 'react-redux';
import {
    login
} from '../actions/session_actions';
import LoginForm from './login_form';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    const errors = Object.values(storeState.errors.session);
    return ({
        errors
    });
};

const mapDispatchToProps = (dispatch) => ({
    formAction: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);