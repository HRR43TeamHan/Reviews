import React from 'react';
import {
  Checkbox,
  CheckboxLabel,
  FiltersCard,
  FilterTitle,
  FilterTable,
  FilterTableRow,
} from '../css/filtersCSS.js';

class FilterTravelerType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
    return (
      <FiltersCard>
        <FilterTitle>
          Traveler type
        </FilterTitle>

        <FilterTable>

          <FilterTableRow>
            <Checkbox id="Families" />
            <CheckboxLabel htmlFor="Families">Families</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Couples" />
            <CheckboxLabel htmlFor="Couples">Couples</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Solo" />
            <CheckboxLabel htmlFor="Solo">Solo</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Business" />
            <CheckboxLabel htmlFor="Business">Business</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Friends" />
            <CheckboxLabel htmlFor="Friends">Friends</CheckboxLabel>
          </FilterTableRow>

        </FilterTable>
      </FiltersCard>
    )
  }
}

export default FilterTravelerType;
