import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK, 
    REMOVE_NOTEBOOK
} from "../../actions/notebook_actions";
import { merge } from 'lodash';

let newState = { };
const notebookReducer = (oldState = { }, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_NOTEBOOKS:
            action.notebooks.map( notebook => (
                newState[notebook.id] = notebook
            ) );
            return newState;

        case RECEIVE_NOTEBOOK:
            newState = merge({}, oldState, { [action.notebook.id]: action.notebook });
            return newState;

        case REMOVE_NOTEBOOK:
            newState = merge({}, oldState);
            delete newState[action.notebookId];
            return newState;

        default:
            return oldState;
    }
};

export default notebookReducer;