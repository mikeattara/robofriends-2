import React from "react";

export const SearchBox = ({ searchField, searchChange }) => (
  <div className="pa2">
    <input
      className="pa1 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search robots"
      onChange={searchChange}
    />
  </div>
);
