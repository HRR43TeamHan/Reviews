import React from 'react';
import {
  PopularMentionsCard,
  FilterTitle,
} from '../css/filtersCSS.js';

class FilterPopularMentions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
    return (
      <PopularMentionsCard>
        <FilterTitle>
          Popular Mentions
      </FilterTitle>
        TODO - FilterPopularMentions.jsx
              Tons of fake buttons here
      </PopularMentionsCard>
    )
  }
}

export default FilterPopularMentions;
