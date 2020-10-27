import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from './reducers/authentication';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  authentication,
});

const configureStore = initState => {
  return createStore(
    reducer,
    initState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;