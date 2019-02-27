import React from 'react';
import { connect } from 'react-redux';
import {
    signup
} from '../actions/session_actions';
import SignupForm from './signup_form';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    let errors = Object.values(storeState.errors.session);
    return ({
        errors
    });
};

const mapDispatchToProps = (dispatch) => ({
    formAction: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);