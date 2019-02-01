import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { Scroll } from "../../components/Scroll";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import "./App.css";

import { setSearchField } from "../../actions";

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(robots => this.setState({ robots }));
  }

  render() {
    const { robots } = this.state;
    const { searchField } = this.props;
    const robotsArray = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <Header searchChange={this.props.onSearchChange} />
        <main>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={robotsArray} />
            </ErrorBoundary>
          </Scroll>
        </main>
        <Footer />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
