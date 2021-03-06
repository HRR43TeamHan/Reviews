import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  RatingsCard,
  FilterTitle,
  ReviewFilterBar,
  FilterTable,
  FilterTableRow,
  ReviewFilterBarCell,
  ReviewFilterFill,
  Checkbox,
  CheckboxLabel,
} from '../css/filtersCSS.js';
import { numberWithCommas } from '../helpers/counters.js';

function FilterRatings(props) {
  const { overall, handleToggleFilter } = props;
  if (!overall) return null;
  const excellentWidth = {
    width: `${overall.excellent.percent}%`,
  };
  const veryGoodWidth = {
    width: `${overall.veryGood.percent}%`,
  };
  const averageWidth = {
    width: `${overall.average.percent}%`,
  };
  const poorWidth = {
    width: `${overall.poor.percent}%`,
  };
  const terribleWidth = {
    width: `${overall.terrible.percent}%`,
  };
  return (
    <RatingsCard>
      <FilterTitle>
        Traveler rating
      </FilterTitle>
      <FilterTable>

        <FilterTableRow>
          <Checkbox
            id="5"
            name="rating_overall"
            value="excellent"
            onChange={handleToggleFilter}
          />
          <CheckboxLabel htmlFor="excellent">Excellent</CheckboxLabel>
          <ReviewFilterBarCell htmlFor="excellent">
            <ReviewFilterBar>
              <ReviewFilterFill style={excellentWidth} />
            </ReviewFilterBar>
          </ReviewFilterBarCell>
          {numberWithCommas(overall.excellent.amt)}
        </FilterTableRow>

        <FilterTableRow>
          <Checkbox
            id="4"
            onChange={handleToggleFilter}
            name="rating_overall"
            value="veryGood"
          />
          <CheckboxLabel htmlFor="veryGood">Very Good</CheckboxLabel>
          <ReviewFilterBarCell>
            <ReviewFilterBar>
              <ReviewFilterFill style={veryGoodWidth} />
            </ReviewFilterBar>
          </ReviewFilterBarCell>
          {numberWithCommas(overall.veryGood.amt)}
        </FilterTableRow>

        <FilterTableRow>
          <Checkbox
            id="3"
            name="rating_overall"
            value="average"
            onChange={handleToggleFilter}
          />
          <CheckboxLabel htmlFor="average">Average</CheckboxLabel>
          <ReviewFilterBarCell>
            <ReviewFilterBar>
              <ReviewFilterFill style={averageWidth} />
            </ReviewFilterBar>
          </ReviewFilterBarCell>
          {numberWithCommas(overall.average.amt)}
        </FilterTableRow>

        <FilterTableRow>
          <Checkbox
            id="2"
            name="rating_overall"
            value="poor"
            onChange={handleToggleFilter}
          />
          <CheckboxLabel htmlFor="poor">Poor</CheckboxLabel>
          <ReviewFilterBarCell>
            <ReviewFilterBar>
              <ReviewFilterFill style={poorWidth} />
            </ReviewFilterBar>
          </ReviewFilterBarCell>
          {numberWithCommas(overall.poor.amt)}
        </FilterTableRow>

        <FilterTableRow>
          <Checkbox
            id="1"
            name="rating_overall"
            value="terrible"
            onChange={handleToggleFilter}
          />
          <CheckboxLabel htmlFor="terrible">Terrible</CheckboxLabel>
          <ReviewFilterBarCell>
            <ReviewFilterBar>
              <ReviewFilterFill style={terribleWidth} />
            </ReviewFilterBar>
          </ReviewFilterBarCell>
          {numberWithCommas(overall.terrible.amt)}
        </FilterTableRow>

      </FilterTable>
    </RatingsCard>
  );
}

FilterRatings.propTypes = {
  overall: PropTypes.shape(
    {
      excellent: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.string }),
      veryGood: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.string }),
      average: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.string }),
      poor: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.string }),
      terrible: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.string }),
    },
  ).isRequired,
  handleToggleFilter: PropTypes.func.isRequired,
};

export default FilterRatings;
