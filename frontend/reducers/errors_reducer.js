import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import notebook_errors_reducer from './errors/notebook_errors_reducer';
import note_errors_reducer from './errors/note_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    notebooks: notebook_errors_reducer,
    notes: note_errors_reducer,
});

export default errorsReducer;