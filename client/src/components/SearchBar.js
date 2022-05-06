import React from 'react';
import '../App.css';

function SearchBar() {
  return (
    <>
        <form className="searchBar" action="index.html" method="GET">
            <input type="text" name=""placeholder="Search"/>
            <input type="submit" formaction="/search" name="" value="Go"/>
        </form>
    </>
  );
}

export default SearchBar;