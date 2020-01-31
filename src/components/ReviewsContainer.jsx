import React from 'react';
import { Global } from '@emotion/core';
import {
  styles,
} from '../css/tabsCSS.js';
import AllFilters from './AllFilters.jsx';
import ReviewsList from './ReviewsList.jsx';

class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        rating_overall: {
          excellent: { id: 5, value: false },
          veryGood: { id: 4, value: false },
          average: { id: 3, value: false },
          poor: { id: 2, value: false },
          terrible: { id: 1, value: false },
        },
        travel_date: {},
        travel_type: {},
        language_ID: {},
      },
    };
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }

  componentDidMount() {
    const { reviews } = this.props;
    this.setState({
      filteredReviews: reviews,
    });
  }

  filterReviews(filtersObj) {
    const { reviews } = this.props;
    var filteredReviews = reviews;
    // foreach the keys and apply the filter
    const filters = {};
    Object.keys(filtersObj).forEach((key) => {

      filters[key] = [];
      Object.keys(filtersObj[key]).forEach((title) => {
        if (filtersObj[key][title].value === true) {
          filters[key].push(filtersObj[key][title].id);
        }
      });
    });
    filteredReviews = filteredReviews.filter((review) => {
      const filterType = filters.travel_type.includes(review.travel_type) || filters.travel_type.length === 0;

      const filterRating = filters.rating_overall.includes(review.rating_overall) || filters.rating_overall.length === 0;
      if (filterRating && filterType) {
        return true;
      }
      return false;

    });
    console.log('filters: ', filters);
    console.log(filteredReviews);
    // Set the filteredReviews state
    this.setState({
      filteredReviews,
    });
  }

  handleToggleFilter(event) {
    const { target } = event;
    console.log(target);
    const { name, value, id } = target;
    console.log(name, value, id);
    const { filters } = this.state;
    const currentFilters = { ...filters };
    // id for DOM element is in string so we make it a number for easing filtering function
    currentFilters[name][value] = currentFilters[name][value] || {};
    currentFilters[name][value].id = Number(id);
    currentFilters[name][value].value = !currentFilters[name][value].value;
    console.log(currentFilters);
    this.setState({
      filters: currentFilters,
    });
    // after we toggle the filter we need to filter the results
    // using the currentState variable will speed up the function reducing the
    // requirement for the state to be set first
    this.filterReviews(currentFilters);
  }

  render() {
    const {
      languageCount,
      reviewsAmt,
      reviews,
      overall,

    } = this.props;
    const { handleToggleFilter } = this;
    const { filteredReviews } = this.state;

    return (

      <div>

        <Global styles={styles.global} />

        <div>
          <styles.headerOuterDiv>
            <styles.headerInnerDiv>
              <styles.headerText>Reviews</styles.headerText>
              <div />
              <styles.buttonsDiv>
                <styles.writeReviewBtnDiv>
                  Write a Review
                </styles.writeReviewBtnDiv>
                <styles.optionBtnDiv>
                  <i className="fas fa-sort-down" />
                </styles.optionBtnDiv>
              </styles.buttonsDiv>
            </styles.headerInnerDiv>
          </styles.headerOuterDiv>
        </div>
        {/* TODO - Replace Filters with Compnent vs being here */}
        <div>

          <AllFilters
            overall={overall}
            reviewsAmt={reviewsAmt}
            languageCount={languageCount}
            handleToggleFilter={handleToggleFilter}
          />
          <ReviewsList filteredReviews={filteredReviews} />

        </div>
      </div>

    );
  }
}

export default ReviewsContainer;
