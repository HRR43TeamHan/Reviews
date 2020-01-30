import React from 'react';
import {
  FiltersContainer,
} from '../css/filtersCSS.js';
import FilterRatings from './FilterRatings.jsx';
import FilterTime from './FilterTime.jsx';
import FilterTravelerType from './FilterTravelerType.jsx';
import FilterLanguage from './FilterLanguage.jsx';
import FilterPopularMentions from './FilterPopularMentions.jsx';
import Search from './Search.jsx';

class AllFilters extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { handleClick, overall } = this.props;


    return (
      <div>
        <FiltersContainer>
          <FilterRatings overall={overall} />
          <FilterTime />
          <FilterTravelerType />
          <FilterLanguage />
        </FiltersContainer>
        <FiltersContainer>
        <FilterPopularMentions />
        </FiltersContainer>
        <Search />
      </div>
    )
  }

}

export default AllFilters;
