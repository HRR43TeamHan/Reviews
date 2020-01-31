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
    const { handleToggleFilter } = this.props;
    return (
      <FiltersCard>
        <FilterTitle>
          Traveler type
        </FilterTitle>

        <FilterTable>

          <FilterTableRow>
            <Checkbox
              id="1"
              name="travel_type"
              value="families"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Families">Families</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="2"
              name="travel_type"
              value="couples"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Couples">Couples</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="3"
              name="travel_type"
              value="solo"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Solo">Solo</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="4"
              name="travel_type"
              value="business"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Business">Business</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="5"
              name="travel_type"
              value="friends"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Friends">Friends</CheckboxLabel>
          </FilterTableRow>

        </FilterTable>
      </FiltersCard>
    )
  }
}

export default FilterTravelerType;
