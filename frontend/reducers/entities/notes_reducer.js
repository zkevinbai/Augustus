import {
    RECEIVE_NOTES,
    RECEIVE_NOTE,
    REMOVE_NOTE
} from "../../actions/note_actions";
import { merge } from 'lodash';

const notesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};

    switch (action.type) {
        case RECEIVE_NOTES:
            let values = Object.values(action.notes);

            values.map(note => (
                newState[note.id] = note
            ));

            // action.notes.map( note => (
            //     newState[note.id] = note
            // ) );
            return newState;

        case RECEIVE_NOTE:
            newState = merge({}, oldState, { [action.note.id]: action.note });
            return newState;

        case REMOVE_NOTE:
            newState = merge({}, oldState);
            delete newState[action.noteId];
            return newState;

        default:
            return oldState;
    }
};

export default notesReducer;