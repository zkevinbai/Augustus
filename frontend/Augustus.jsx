import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');


    // Window AJAX -------------------------------------------------------------
    // window.signup = SessionApiUtil.signup;
    // window.deleteAccount = SessionApiUtil.deleteAccount;
    // window.login = SessionApiUtil.login;
    // window.logout = SessionApiUtil.logout;

    // Window Actions -------------------------------------------------------------
    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;
    window.deleteAccount = SessionActions.deleteAccount;
    
    // Window Store ------------------------------------------------------------
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<h1 id="img">Root Placeholder</h1>, rootEl);
});