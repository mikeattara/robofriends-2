import React from "react";
import Card from "../Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    <ul>
      {robots.map(robot => (
        <li key={robot.id}>
          <Card
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
