import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import * as SessionApiUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';

import * as NotebookApiUtil from './util/notebook_api_util';
import * as NotebookActions from './actions/notebook_actions';

import * as NoteApiUtil from './util/note_api_util';
import * as NoteActions from './actions/note_actions';

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
            //* Session AJAX ---------------------------------------------------
        // window.signup = SessionApiUtil.signup;
        // window.deleteAccount = SessionApiUtil.deleteAccount;
        // window.login = SessionApiUtil.login;
        // window.logout = SessionApiUtil.logout;
            //* Notebook AJAX --------------------------------------------------
        // window.notebooksIndex = NotebookApiUtil.notebooksIndex;
        // window.notebookShow = NotebookApiUtil.notebookShow;
        // window.createNotebook = NotebookApiUtil.createNotebook;
        // window.updateNotebook = NotebookApiUtil.updateNotebook;
        // window.deleteNotebook = NotebookApiUtil.deleteNotebook;
            //* Note AJAX ------------------------------------------------------
        // window.notesIndex = NoteApiUtil.notesIndex;
        // window.noteShow = NoteApiUtil.noteShow;
        // window.createNote = NoteApiUtil.createNote;
        // window.updateNote = NoteApiUtil.updateNote;
        // window.deleteNote = NoteApiUtil.deleteNote;

    // Window Actions ----------------------------------------------------------
            //* Session Actions ------------------------------------------------
        // window.signup = SessionActions.signup;
        // window.login = SessionActions.login;
        // window.logout = SessionActions.logout;
        // window.deleteAccount = SessionActions.deleteAccount;
            //* Notebook Actions -----------------------------------------------
        // window.notebooksIndex = NotebookActions.notebooksIndex;
        // window.notebookShow = NotebookActions.notebookShow;
        window.createNotebook = NotebookActions.createNotebook;
        // window.updateNotebook = NotebookActions.updateNotebook;
        // window.deleteNotebook = NotebookActions.deleteNotebook;
            //* Note Actions -----------------------------------------------
        window.notesIndex = NoteActions.notesIndex;
        window.noteShow = NoteActions.noteShow;
        window.createNote = NoteActions.createNote;
        window.updateNote = NoteActions.updateNote;
        window.deleteNote = NoteActions.deleteNote;
    
    // Window Store ------------------------------------------------------------
        window.getState = store.getState;
        window.dispatch = store.dispatch;

        // --------------------------TESTING END--------------------------------
    // #########################################################################

    ReactDOM.render(< Root store={store} />, rootEl);
});