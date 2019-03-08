import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const configureStore = (preLoadedState = {}) => (
//     createStore(
//         rootReducer,
//         preLoadedState,
//         applyMiddleware(thunk, logger)
//     )
// );

// export default configureStore;

const configureStore = (preloadedState = {}) => {
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger];
    }
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    );
};
export default configureStore;
