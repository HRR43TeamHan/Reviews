import React from 'react';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from '../css/filtersCSS.js';


function Search(props) {
  return (
    <SearchContainer>
      <SearchIcon className="icon-search" />
      <SearchInput />
    </SearchContainer>
  );
}

export default Search;
