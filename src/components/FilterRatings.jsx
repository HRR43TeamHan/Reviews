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

class FilterRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        Excellent: false,
        VeryGood: false,
        Average: false,
        Poor: false,
        Terrible: false,
      },
    };
  }

  // padding-left: 5px;
  // box-sizing: content-box;
  // display: inline-block;
  // vertical-align: middle;

  // TODO - Need to add the ability to click the bar to set the checkbox checked.
  render() {
    const { handleClick, overall } = this.props;
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
            <Checkbox id="excellent" />
            <CheckboxLabel htmlFor="excellent">Excellent</CheckboxLabel>
            <ReviewFilterBarCell htmlFor="excellent">
              <ReviewFilterBar>
                <ReviewFilterFill style={excellentWidth} />
              </ReviewFilterBar>
            </ReviewFilterBarCell>
            {overall.excellent.amt}
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="veryGood" />
            <CheckboxLabel htmlFor="veryGood">Very Good</CheckboxLabel>
            <ReviewFilterBarCell>
              <ReviewFilterBar>
                <ReviewFilterFill style={veryGoodWidth} />
              </ReviewFilterBar>
            </ReviewFilterBarCell>
            {overall.veryGood.amt}
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="average" />
            <CheckboxLabel htmlFor="average">Average</CheckboxLabel>
            <ReviewFilterBarCell>
              <ReviewFilterBar>
                <ReviewFilterFill style={averageWidth} />
              </ReviewFilterBar>
            </ReviewFilterBarCell>
            {overall.average.amt}
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="poor" />
            <CheckboxLabel htmlFor="poor">Poor</CheckboxLabel>
            <ReviewFilterBarCell>
              <ReviewFilterBar>
                <ReviewFilterFill style={poorWidth} />
              </ReviewFilterBar>
            </ReviewFilterBarCell>
            {overall.poor.amt}
          </FilterTableRow>

          <FilterTableRow>
            <Checkbox id="terrible" />
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
  }
}

export default FilterRatings;
