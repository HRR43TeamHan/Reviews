import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  Checkbox,
  CheckboxLabel,
  FiltersCard,
  FilterTable,
  FilterTitle,
  FilterTableRow,
} from '../css/filtersCSS.js';

function FilterTime(props) {
  const { handleToggleFilter } = props;
  return (
    <FiltersCard>
      <FilterTitle>
        Time of year
      </FilterTitle>
      <FilterTable>

        <FilterTableRow>
          <CheckboxLabel htmlFor="Mar-May">
            <Checkbox
              id="1"
              name="travel_date"
              value="mar-may"
              onChange={handleToggleFilter}
            />
            Mar-May
          </CheckboxLabel>
        </FilterTableRow>

        <FilterTableRow>
          <CheckboxLabel htmlFor="Jun-Aug">
            <Checkbox
              id="2"
              name="travel_date"
              value="jun-aug"
              onChange={handleToggleFilter}
            />
            Jun-Aug
          </CheckboxLabel>
        </FilterTableRow>

        <FilterTableRow>
          <CheckboxLabel htmlFor="Sep-Nov">
            <Checkbox
              id="3"
              name="travel_date"
              value="sep-nov"
              onChange={handleToggleFilter}
            />
            Sep-Nov
          </CheckboxLabel>
        </FilterTableRow>

        <FilterTableRow>
          <CheckboxLabel htmlFor="Dec-Feb">
            <Checkbox
              id="4"
              name="travel_date"
              value="dec-feb"
              onChange={handleToggleFilter}
            />
            Dec-Feb
          </CheckboxLabel>
        </FilterTableRow>

      </FilterTable>
    </FiltersCard>

  );
}

FilterTime.propTypes = {
  handleToggleFilter: PropTypes.func.isRequired,
};

export default FilterTime;
