import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { Scroll } from "../../components/Scroll";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import "./App.css";

import { setSearchField, requestRobots } from "../../actions";

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      robots,
      onSearchChange,
      isPending,
      error
    } = this.props;
    const robotsArray = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !isPending ? (
      <>
        <Header searchChange={onSearchChange} />
        <main>
          <Scroll>
            <ErrorBoundary>
              {!error ? (
                <CardList robots={robotsArray} />
              ) : (
                <h1 className="tc">Error loading robots</h1>
              )}
            </ErrorBoundary>
          </Scroll>
        </main>
        <Footer />
      </>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
