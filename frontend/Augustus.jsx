import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');


    // Window AJAX -------------------------------------------------------------
    window.signup = SessionApiUtil.signup;
    window.deleteAccount = SessionApiUtil.deleteAccount;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;

    ReactDOM.render(<h1 id="img">Root Placeholder</h1>, rootEl);
});