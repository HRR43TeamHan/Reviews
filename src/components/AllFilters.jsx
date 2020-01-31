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
    const { handleClick, overall, handleToggleFilter } = this.props;


    return (
      <div>
        <FiltersContainer>
          <FilterRatings
            overall={overall}
            handleToggleFilter={handleToggleFilter}
          />
          <FilterTime
            handleToggleFilter={handleToggleFilter}
          />
          <FilterTravelerType
            handleToggleFilter={handleToggleFilter}
          />
          <FilterLanguage
            handleToggleFilter={handleToggleFilter}
          />
        </FiltersContainer>
        <FiltersContainer>
          <FilterPopularMentions
            handleToggleFilter={handleToggleFilter}
          />
        </FiltersContainer>
        <Search />
      </div>
    );
  }
}

export default AllFilters;
