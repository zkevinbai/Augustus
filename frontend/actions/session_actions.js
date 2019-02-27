import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// Action Creators

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const deleteCurrentUser = (user) => ({
    type: DELETE_CURRENT_USER,
    user
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

// Thunk Action Creators

export const signup = (user) => (dispatch) => {
    return SessionApiUtil.signup(user)
        .then( 
            resUser => dispatch(receiveCurrentUser(resUser)),
            resErrors => dispatch(receiveErrors(resErrors))
        );
};

export const login = (user) => (dispatch) => {
    return SessionApiUtil.login(user)
        .then( 
            resUser => dispatch(receiveCurrentUser(resUser)),
            resErrors => dispatch(receiveErrors(resErrors))
        );
};

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout()
        .then(
            resUser => dispatch(logoutCurrentUser(resUser)),
            resErrors => dispatch(receiveErrors(resErrors))
        );
};

export const deleteAccount = (user) => (dispatch) => {
    return SessionApiUtil.deleteAccount(user)
        .then( 
            resUser => dispatch(deleteCurrentUser(resUser)),
            resErrors => dispatch(receiveErrors(resErrors))
        );
};