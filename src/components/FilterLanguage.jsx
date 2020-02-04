import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  LanguageCard,
  FilterTable,
  FilterTableRow,
  FilterTitle,
  RadioButton,
  RadioButtonLabel,
  LanguagePopButton,
} from '../css/filtersCSS.js';

const FilterLanguage = (props) => {
  // TODO - iterate through all languages
  // TODO - and make modal
  const { handleToggleFilter, languageCount } = props;
  if (!languageCount) return null;

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
            onChange={handleToggleFilter}
          />
          <RadioButtonLabel forHtml="all">
            All languages
             (
            {languageCount[0].value}
            )
          </RadioButtonLabel>

        </FilterTableRow>
        <FilterTableRow>
          <RadioButton
            id="1"
            name="language_ID"
            value="1"
            onChange={handleToggleFilter}
          />
          <RadioButtonLabel forHtml="all">
            {languageCount[1].title}
            (
            {languageCount[1].value}
            )
          </RadioButtonLabel>
        </FilterTableRow>
        <FilterTableRow>
          <RadioButton
            id="2"
            name="language_ID"
            value="2"
            onChange={handleToggleFilter}
          />
          <RadioButtonLabel forHtml="all">
            {languageCount[2].title}
            (
            {languageCount[2].value}
            )
          </RadioButtonLabel>
        </FilterTableRow>
        <FilterTableRow>
          <RadioButton
            id="3"
            name="language_ID"
            value="3"
            onChange={handleToggleFilter}
          />
          <RadioButtonLabel forHtml="all">
            {languageCount[3].title}
            (
            {languageCount[3].value}
            )
          </RadioButtonLabel>
        </FilterTableRow>
        <FilterTableRow>
          <LanguagePopButton>More</LanguagePopButton>
        </FilterTableRow>

      </FilterTable>
    </LanguageCard>
  );
};


FilterLanguage.defaultProps = {
  languageCount: undefined,
};

FilterLanguage.propTypes = {
  languageCount: PropTypes.shape(
    { 0: PropTypes.shape({ title: PropTypes.string, value: PropTypes.number }) },
  ),
  handleToggleFilter: PropTypes.func.isRequired,
};

export default FilterLanguage;
