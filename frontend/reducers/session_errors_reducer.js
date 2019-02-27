import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";
import { merge } from 'lodash';

let newState = {};
const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = merge({}, oldState, {errors: action.errors.responseJSON});
            return newState;

        case RECEIVE_CURRENT_USER:
            newState = {};
            return newState;
            
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;