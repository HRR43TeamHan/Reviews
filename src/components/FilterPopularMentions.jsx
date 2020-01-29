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
          Popular Mentions go here! TODO - FilterPopularMentions.jsx
      </FilterTitle>
      </PopularMentionsCard>
    )
  }
}

export default FilterLanguage;