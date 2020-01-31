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
              onChange={handleToggleFilter}
              name="travel_date"
              value="mar_may"
            />
            <CheckboxLabel htmlFor="Mar-May">Mar-May</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="2"
              onChange={handleToggleFilter}
              name="travel_date"
              value="jun_aug"
            />
            <CheckboxLabel htmlFor="Jun-Aug">Jun-Aug</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="3"
              onChange={handleToggleFilter}
              name="travel_date"
              value="sep_nov"
            />
            <CheckboxLabel htmlFor="Sep-Nov">Sep-Nov</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="4"
              onChange={handleToggleFilter}
              name="travel_date"
              value="dec_feb"
            />
            <CheckboxLabel htmlFor="Dec-Feb">Dec-Feb</CheckboxLabel>
          </FilterTableRow>

        </FilterTable>
      </FiltersCard>

    );
  }
}

export default FilterTime;
