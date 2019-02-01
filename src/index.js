import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import "tachyons";
import App from "./containers/App";
import { requestRobots, searchRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const logger = createLogger();
const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare, logger)
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
serviceWorker.unregister();
