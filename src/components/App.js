import React from "react";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import { robots } from "../data/robots";

export default () => (
  <>
    <Header />
    <main>
      <CardList robots={robots} />
    </main>
    <Footer />
  </>
);
