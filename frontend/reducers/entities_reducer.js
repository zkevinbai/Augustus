import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import notebooksReducer from './entities/notebooks_reducer';
import notesReducer from './entities/notes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    notebooks: notebooksReducer,
    notes: notesReducer
}); 

export default entitiesReducer;