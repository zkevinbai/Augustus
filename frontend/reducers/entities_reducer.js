import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import notebooksReducer from './entities/notebooks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    notebooks: notebooksReducer
}); 

export default entitiesReducer;