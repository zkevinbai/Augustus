import React from 'react';
import { connect } from 'react-redux';
import {
    login,
    clearSessionErrors
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (storeState, ownProps) => {
    let errors = [];
    if (storeState.errors.session) {
        errors = Object.values(storeState.errors.session);
    }
    let user = {
        credential: "",
        password: ""
    };
    let formType = "demo";
    let otto = ["Octavian".split(""), "password".split("")];

    return ({
        user,
        errors,
        formType,
        otto
    });
};

const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearSessionErrors()),
    formAction: (user) => dispatch(login(user))
});

const loginDemoFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default loginDemoFormContainer;