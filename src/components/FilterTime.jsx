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
    const { handleClick } = this.props;
    return (
      <FiltersCard>
        <FilterTitle>
          Time of year
        </FilterTitle>
        <FilterTable>

          <FilterTableRow>
            <Checkbox id="Mar-May" />
            <CheckboxLabel htmlFor="Mar-May">Mar-May</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Jun-Aug" />
            <CheckboxLabel htmlFor="Jun-Aug">Jun-Aug</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Sep-Nov" />
            <CheckboxLabel htmlFor="Sep-Nov">Sep-Nov</CheckboxLabel>
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="Dec-Feb" />
            <CheckboxLabel htmlFor="Dec-Feb">Dec-Feb</CheckboxLabel>
          </FilterTableRow>

        </FilterTable>
      </FiltersCard>

    );
  }
}

export default FilterTime;
