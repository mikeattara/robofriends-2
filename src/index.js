import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import CardList from "./components/CardList/CardList";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./data/robots";

ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
serviceWorker.unregister();
