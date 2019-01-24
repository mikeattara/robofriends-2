import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";

export const Header = ({ searchChange }) => (
  <header className="tc">
    <h1 className="f2">Robofriends</h1>
    <SearchBox searchChange={searchChange} />
  </header>
);
