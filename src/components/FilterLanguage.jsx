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

  render() {
    const { handleClick } = this.props;
    return (
      <LanguageCard>
        <FilterTitle>
          Language
      </FilterTitle>
      <FilterTable>
        <FilterTableRow>
      <RadioButton name="language" id="all" value="all"/>
      <RadioButtonLabel forHtml="all" >All languages</RadioButtonLabel>
      <label>(Amount)</label>
      </FilterTableRow>
      <RadioButton name="language" id="next" />
      <RadioButtonLabel forHtml="next" >TODO iterate the rest</RadioButtonLabel>
      </FilterTable>
      </LanguageCard>
    )
  }
}

export default FilterLanguage;
