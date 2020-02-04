import React from 'react';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from '../css/filtersCSS.js';


function Search(props) {
  return (
    <SearchContainer>
      <SearchIcon className="fas fa-search" />
      <SearchInput />
    </SearchContainer>
  );
}

export default Search;
