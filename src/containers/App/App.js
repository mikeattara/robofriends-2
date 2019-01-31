import React, { Component } from "react";
import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(robots => this.setState({ robots }));
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
