import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import createRootReducer from "./reducer";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware
    );
  } else {
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware,
      logger
    );
  }
};
export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(getMiddleware())
);
