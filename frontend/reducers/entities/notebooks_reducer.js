import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK, 
    REMOVE_NOTEBOOK
} from "../../actions/notebook_actions";
import { merge } from 'lodash';

const notebookReducer = (oldState = { }, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case RECEIVE_NOTEBOOKS:
            let values = Object.values(action.notebooks);

            values.map( notebook => (
                newState[notebook.id] = notebook
            ) );

            // action.notebooks.map( notebook => (
            //     newState[notebook.id] = notebook
            // ) );
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