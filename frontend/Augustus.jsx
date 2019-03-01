import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let preLoadedState;
    if (window.currentUser) {
        preLoadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            },
            errors: {
                session: {
                    
                }
            }
        };
    } else {
        preLoadedState = {};
    }
    const store = configureStore(preLoadedState);

    // #########################################################################
        // ---------------------------TESTING START-----------------------------

    // Window AJAX -------------------------------------------------------------
        // window.signup = SessionApiUtil.signup;
        // window.deleteAccount = SessionApiUtil.deleteAccount;
        // window.login = SessionApiUtil.login;
        // window.logout = SessionApiUtil.logout;

    // Window Actions ----------------------------------------------------------
        window.signup = SessionActions.signup;
        window.login = SessionActions.login;
        window.logout = SessionActions.logout;
        window.deleteAccount = SessionActions.deleteAccount;
    
    // Window Store ------------------------------------------------------------
        window.getState = store.getState;
        window.dispatch = store.dispatch;

        // --------------------------TESTING END--------------------------------
    // #########################################################################

    ReactDOM.render(< Root store={store} />, rootEl);
});