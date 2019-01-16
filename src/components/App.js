import React, { Component } from "react";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import { robots } from "../data/robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange = event => this.setState({ searchField: event.target.value });

  render() {
    const robotsArray = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <>
        <Header searchChange={this.onSearchChange} />
        <main>
          <CardList robots={robotsArray} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
