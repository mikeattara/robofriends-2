import React from "react";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ searchChange }) => (
  <header className="tc">
    <h1>Robofriends</h1>
    <SearchBox searchChange={searchChange} />
  </header>
);

export default Header;
