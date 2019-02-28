import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from "../../actions/session_actions";
import { merge } from 'lodash';

let newState = [];
const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = oldState.concat(action.errors.responseJSON);
            return newState;

        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;

        case CLEAR_SESSION_ERRORS:
            newState = [];
            return newState;
            
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;