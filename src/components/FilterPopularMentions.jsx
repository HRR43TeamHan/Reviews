import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  PopularMentionsCard,
  FilterTitle,
  PopularMentionsButton,
} from '../css/filtersCSS.js';

const FilterPopularMentions = (props) => {
  const { handleToggleFilter } = props;
  return (
    <PopularMentionsCard>
      <FilterTitle>
        Popular Mentions
      </FilterTitle>
      TODO - FilterPopularMentions.jsx
            Tons of fake buttons here
      <PopularMentionsButton onClick={handleToggleFilter} name="popular">
        All of them!
      </PopularMentionsButton>
    </PopularMentionsCard>
  );
};

FilterPopularMentions.propTypes = {
  handleToggleFilter: PropTypes.func.isRequired,
};

export default FilterPopularMentions;
