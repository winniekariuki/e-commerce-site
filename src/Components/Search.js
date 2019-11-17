import React from "react";
import "./Search.scss";
const Search = () => {
  return (
    <div className="Search">
      <form class="form-inline active-cyan-4">
        <input
          class="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <i class="fas fa-search" aria-hidden="true"></i>
      </form>
    </div>
  );
};

export default Search;
