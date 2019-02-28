import {
    RECEIVE_CURRENT_USER,
    DELETE_CURRENT_USER
} from "../../actions/session_actions";
import { merge } from 'lodash';

let newState = {};
const usersReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, oldState, { [action.user.id]: action.user });
            newState.id = action.user.id;
            return newState;

        case DELETE_CURRENT_USER:
            newState = merge({}, oldState);
            delete newState[action.user.id];
            return newState;
            
        default:
            return oldState;
    }
};

export default usersReducer;