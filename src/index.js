import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import "tachyons";
import App from "./containers/App";
import { searchRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
serviceWorker.unregister();
