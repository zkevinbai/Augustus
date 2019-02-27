// import React from 'react';
// import { connect } from 'react-redux';
// import {
//     login,
//     clearSessionErrors
// } from '../actions/session_actions';
// import LoginForm from './login_form';

// const mapStateToProps = (storeState, ownProps) => {
//     let errors = [];
//     if (storeState.errors.session) {
//         errors = Object.values(storeState.errors.session);
//     }

//     return ({
//         errors
//     });
// };

// const mapDispatchToProps = (dispatch) => ({
//     clearErrors: () => dispatch(clearSessionErrors()),
//     formAction: (user) => dispatch(login(user))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import React from 'react';
import { connect } from 'react-redux';
import {
    login,
    clearSessionErrors
} from '../actions/session_actions';
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
    let formType = "Login Form";

    return ({
        user,
        errors,
        formType
    });
};

const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearSessionErrors()),
    formAction: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);