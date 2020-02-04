import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  FiltersContainer,
} from '../css/filtersCSS.js';
import FilterRatings from './FilterRatings.jsx';
import FilterTime from './FilterTime.jsx';
import FilterTravelerType from './FilterTravelerType.jsx';
import FilterLanguage from './FilterLanguage.jsx';
import FilterPopularMentions from './FilterPopularMentions.jsx';
import Search from './Search.jsx';

function AllFilters(props) {
  const { overall, handleToggleFilter, languageCount } = props;


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
          languageCount={languageCount}
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
};

AllFilters.defaultProps = {
  languageCount: undefined,
};

AllFilters.propTypes = {
  overall: PropTypes.shape(
    {
      firstFormat: PropTypes.shape({ amt: PropTypes.string, percent: PropTypes.string }),
      secondFormat: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.number }),
    },
  ).isRequired,
  languageCount: PropTypes.shape(
    { 0: PropTypes.shape({ title: PropTypes.string, value: PropTypes.number }) },
  ),
  handleToggleFilter: PropTypes.func.isRequired,
};


export default AllFilters;
