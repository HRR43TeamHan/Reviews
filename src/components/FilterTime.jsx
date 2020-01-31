import React from 'react';
import {
  Checkbox,
  CheckboxLabel,
  FiltersCard,
  FilterTable,
  FilterTitle,
  FilterTableRow,
} from '../css/filtersCSS.js';

class FilterTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { handleToggleFilter } = this.props;
    return (
      <FiltersCard>
        <FilterTitle>
          Time of year
        </FilterTitle>
        <FilterTable>

          <FilterTableRow>
            <Checkbox
              id="1"
              name="travel_date"
              value="mar-may"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Mar-May">Mar-May</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="2"
              name="travel_date"
              value="jun-aug"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Jun-Aug">Jun-Aug</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="3"
              name="travel_date"
              value="sep-nov"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Sep-Nov">Sep-Nov</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="4"
              name="travel_date"
              value="dec-feb"
              onChange={handleToggleFilter}
            />
            <CheckboxLabel htmlFor="Dec-Feb">Dec-Feb</CheckboxLabel>
          </FilterTableRow>

        </FilterTable>
      </FiltersCard>

    );
  }
}

export default FilterTime;
