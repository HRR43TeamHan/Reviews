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
              id="Mar-May"
              onChange={handleToggleFilter}
              name="timeOfYear"
              value="mar_may"
            />
            <CheckboxLabel htmlFor="Mar-May">Mar-May</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="Jun-Aug"
              onChange={handleToggleFilter}
              name="timeOfYear"
              value="jun_aug"
            />
            <CheckboxLabel htmlFor="Jun-Aug">Jun-Aug</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="Sep-Nov"
              onChange={handleToggleFilter}
              name="timeOfYear"
              value="sep-nov"
            />
            <CheckboxLabel htmlFor="Sep-Nov">Sep-Nov</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox
              id="Dec-Feb"
              onChange={handleToggleFilter}
              name="timeOfYear"
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
