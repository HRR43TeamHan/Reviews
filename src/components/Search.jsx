import React from 'react';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from '../css/filtersCSS.js';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchContainer>
        <SearchIcon className="fas fa-search"></SearchIcon>
        <SearchInput />
      </SearchContainer>
    )
  }
}

export default Search;
