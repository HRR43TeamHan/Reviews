import React from 'react';
import {
  FiltersContainer,
} from '../css/filtersCSS.js';
import FilterRatings from './FilterRatings.jsx';
import FilterTime from './FilterTime.jsx';
import FilterTravelerType from './FilterTravelerType.jsx';
import FilterLanguage from './FilterLanguage.jsx';

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

        <div>TODO - Popular Mentions here!</div>
        <div>TODO - Custom Search here!</div>
      </div>
    )
  }

}

export default AllFilters;
