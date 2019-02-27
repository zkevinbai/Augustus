import React from 'react';
import { connect } from 'react-redux';
import {
    login
} from '../actions/session_actions';
import SessionForm from './session_form';

// my preferred pattern is to include ownProps and use explicit return
const mapStateToProps = (storeState, ownProps) => {
    const errors = storeState.errors.session;
    return ({
        errors
    });
};

const mapDispatchToProps = (dispatch) => ({
    formAction: () => dispatch(login)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);