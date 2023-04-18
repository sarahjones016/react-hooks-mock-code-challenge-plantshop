import React from "react";

function Search({onSearch, search}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        //makes the form controlled!
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
