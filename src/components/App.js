import React, { useState } from "react";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import { robots } from "../data/robots";

export default () => {
  // const [robots, setRobots] = useState(robots);
  // const [searchField, setSearchField] = useState("");

  return (
    <>
      <Header />
      <main>
        <CardList robots={robots} />
      </main>
      <Footer />
    </>
  );
};
