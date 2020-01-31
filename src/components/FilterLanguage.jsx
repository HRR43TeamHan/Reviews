import React from 'react';
import {
  LanguageCard,
  FilterTable,
  FilterTableRow,
  FilterTitle,
  RadioButton,
  RadioButtonLabel,
} from '../css/filtersCSS.js';

class FilterLanguage extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO - iterate through all languages
  // TODO - render the first 4 languages
  // TODO - and make modal

  render() {
    const { handleToggleFilter } = this.props;
    return (
      <LanguageCard>
        <FilterTitle>
          Language
      </FilterTitle>
        <FilterTable>
          <FilterTableRow>
            <RadioButton
              id="all"
              name="language"
              value="allLanguages"
            />
            <RadioButtonLabel forHtml="all" >All languages</RadioButtonLabel>
            <label>(Amount)</label>
          </FilterTableRow>
          <RadioButton name="language" id="next" />
          <RadioButtonLabel forHtml="next" >TODO iterate the rest</RadioButtonLabel>
        </FilterTable>
      </LanguageCard>
    );
  }
}

export default FilterLanguage;
