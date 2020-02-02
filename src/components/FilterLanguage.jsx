import React from 'react';
import {
  LanguageCard,
  FilterTable,
  FilterTableRow,
  FilterTitle,
  RadioButton,
  RadioButtonLabel,
} from '../css/filtersCSS.js';

const FilterLanguage = (props) => {
  // TODO - iterate through all languages
  // TODO - render the first 4 languages
  // TODO - and make modal

  const { handleToggleFilter, languageCount } = props;
  const language = languageCount || { 0: { title: '', value: 0 }, 1: { title: '', value: 0 }, 2: { title: '', value: 0 } };

  return (
    <LanguageCard>
      <FilterTitle>
        Language
      </FilterTitle>
      <FilterTable>
        <FilterTableRow>
          <RadioButton
            id="0"
            name="language_ID"
            value="0"
          />
          <RadioButtonLabel forHtml="all">
            All languages (
            {language[0].value}
            )
          </RadioButtonLabel>

        </FilterTableRow>
        <FilterTableRow>
          <RadioButton
            id="1"
            name="language_ID"
            value="1"
          />
          <RadioButtonLabel forHtml="all">{language[1].title}</RadioButtonLabel>
          <span>
            (
            {language[1].value}
            )
          </span>
        </FilterTableRow>
        <FilterTableRow>
          TODO MORE Modal
        </FilterTableRow>

      </FilterTable>
    </LanguageCard>
  );
};

export default FilterLanguage;
