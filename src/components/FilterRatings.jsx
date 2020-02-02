/* eslint-disable react/prop-types */
import React from 'react';
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

const FilterRatings = (props) => {
  const { overall, handleToggleFilter } = props;
  if (!overall) return null;
  const excellentWidth = {
    width: overall.excellent.percent,
  };
  const veryGoodWidth = {
    width: overall.veryGood.percent,
  };
  const averageWidth = {
    width: overall.average.percent,
  };
  const poorWidth = {
    width: overall.poor.percent,
  };
  const terribleWidth = {
    width: overall.terrible.percent,
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
          {overall.excellent.amt}
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
          {overall.veryGood.amt}
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
          {overall.average.amt}
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
          {overall.poor.amt}
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
          {overall.terrible.amt}
        </FilterTableRow>

      </FilterTable>
    </RatingsCard>
  );
};

export default FilterRatings;
