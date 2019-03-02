import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK,
    RECEIVE_NOTEBOOK_ERRORS
} from '../../actions/notebook_actions';
import { merge } from 'lodash';

let newState = [];
const notebookErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_NOTEBOOK_ERRORS:
            newState = oldState.concat(action.errors.responseJSON);
            return newState;

        case RECEIVE_NOTEBOOKS:
            newState = [];
            return newState;

        case RECEIVE_NOTEBOOK:
            newState = [];
            return newState;

        default:
            return oldState;
    }
};

export default notebookErrorsReducer;