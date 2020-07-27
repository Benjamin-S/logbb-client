import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';

const reducer = combineReducers({
  auth,
  common,
  home,
});

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
  } else {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware, logger);
  }
};
const store = createStore(reducer, composeWithDevTools(getMiddleware()));

export default store;
