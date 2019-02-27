import { createStore, applyMiddleware } from 'redux';
// import rootReducer
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preLoadedState = {}) => (
    createStore(
        rootReducer,
        preLoadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;