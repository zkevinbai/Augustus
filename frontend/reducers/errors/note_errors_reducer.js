import {
    RECEIVE_NOTES,
    RECEIVE_NOTE,
    RECEIVE_NOTE_ERRORS,
    CLEAR_NOTE_ERRORS
} from '../../actions/note_actions';
import { merge } from 'lodash';

let newState = [];
const noteErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_NOTE_ERRORS:
            newState = oldState.concat(action.errors.responseJSON);
            return newState;

        case RECEIVE_NOTES:
            newState = [];
            return newState;

        case RECEIVE_NOTE:
            newState = [];
            return newState;

        case CLEAR_NOTE_ERRORS:
            newState = [];
            return newState;

        default:
            return oldState;
    }
};

export default noteErrorsReducer;