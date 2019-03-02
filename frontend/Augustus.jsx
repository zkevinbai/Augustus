import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import * as NotebooksApiUtil from './util/notebook_api_util';

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
            //* Session AJAX ----------------------------------------------------
        // window.signup = SessionApiUtil.signup;
        // window.deleteAccount = SessionApiUtil.deleteAccount;
        // window.login = SessionApiUtil.login;
        // window.logout = SessionApiUtil.logout;
            //* Notebook AJAX ---------------------------------------------------
        window.notebooksIndex = NotebooksApiUtil.notebooksIndex;
        window.notebookShow = NotebooksApiUtil.notebookShow;
        window.createNotebook = NotebooksApiUtil.createNotebook;
        window.updateNotebook = NotebooksApiUtil.updateNotebook;
        window.deleteNotebook = NotebooksApiUtil.deleteNotebook;
    // Window Actions ----------------------------------------------------------
            //* Session Actions -------------------------------------------------
        // window.signup = SessionActions.signup;
        // window.login = SessionActions.login;
        // window.logout = SessionActions.logout;
        // window.deleteAccount = SessionActions.deleteAccount;
            //* Notebook Actions ------------------------------------------------

    
    // Window Store ------------------------------------------------------------
        window.getState = store.getState;
        window.dispatch = store.dispatch;

        // --------------------------TESTING END--------------------------------
    // #########################################################################

    ReactDOM.render(< Root store={store} />, rootEl);
});