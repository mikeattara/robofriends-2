import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "tachyons";
import App from "./containers/App";
import { searchRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = createStore(searchRobots);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
serviceWorker.unregister();
