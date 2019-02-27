// import React from 'react';
// import { connect } from 'react-redux';
// import {
//     signup,
//     clearSessionErrors
// } from '../actions/session_actions';
// import SignupForm from './signup_form';

// // my preferred pattern is to include ownProps and use explicit return
// const mapStateToProps = (storeState, ownProps) => {
//     let errors = [];
//     if (storeState.errors.session){
//         errors = Object.values(storeState.errors.session);
//     }
    
//     return ({
//         errors
//     });
// };

// const mapDispatchToProps = (dispatch) => ({
//     clearErrors: () => dispatch(clearSessionErrors()),
//     formAction: (user) => dispatch(signup(user))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

import React from 'react';
import { connect } from 'react-redux';
import {
    signup,
    clearSessionErrors
} from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (storeState, ownProps) => {
    let errors = [];
    if (storeState.errors.session) {
        errors = Object.values(storeState.errors.session);
    }
    let user = {
        username: "",
        email: "",
        password: ""
    };
    let formType = "Signup Form";

    return ({
        user,
        errors,
        formType
    });
};

const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearSessionErrors()),
    formAction: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);