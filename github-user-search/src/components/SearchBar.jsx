import React from "react";

const SearchBar = ({ username, setUsername, onSearch }) => (
  <form onSubmit={onSearch}>
    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
