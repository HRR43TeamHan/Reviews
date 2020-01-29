import React from 'react';
import {
  LanguageCard,
  FilterTitle,
} from '../css/filtersCSS.js';

class FilterLanguage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
    return (
      <LanguageCard>
        <FilterTitle>
          Language
      </FilterTitle>
      </LanguageCard>
    )
  }
}

export default FilterLanguage;
