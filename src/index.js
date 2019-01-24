import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
serviceWorker.unregister();
