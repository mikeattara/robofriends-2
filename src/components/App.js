import React, { Component } from "react";
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import { robots } from "../data/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: ""
    };
  }

  onInputChange = (event) => this.setState({searchField: {event.target.value}});

  render() {
    return (
      <>
        <Header />
        <main>
          <CardList robots={this.state.robots} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
