import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import Card from "./components/Card/Card";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";

ReactDOM.render(
  <div>
    <Card
      id={robots[0].id}
      name={robots[0].name}
      username={robots[0].username}
      email={robots[0].email}
    />
    <Card
      id={robots[1].id}
      name={robots[1].name}
      username={robots[1].username}
      email={robots[1].email}
    />
    <Card
      id={robots[2].id}
      name={robots[2].name}
      username={robots[2].username}
      email={robots[2].email}
    />
    <Card
      id={robots[3].id}
      name={robots[3].name}
      username={robots[3].username}
      email={robots[3].email}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
