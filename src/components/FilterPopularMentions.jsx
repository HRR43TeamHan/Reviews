import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  PopularMentionsCard,
  FilterTitle,
  PopularMentionsButton,
} from '../css/filtersCSS.js';

function FilterPopularMentions(props) {
  const { handleToggleFilter } = props;
  return (
    <PopularMentionsCard>
      <FilterTitle>
        Popular Mentions
      </FilterTitle>
      <PopularMentionsButton onClick={handleToggleFilter} name="popular">
        All
      </PopularMentionsButton>
    </PopularMentionsCard>
  );
}

FilterPopularMentions.propTypes = {
  handleToggleFilter: PropTypes.func.isRequired,
};

export default FilterPopularMentions;
