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
        rating: {
          excellent: false,
          veryGood: false,
          average: false,
          poor: false,
          terrible: false,
        },
        timeOfYear: {},
        travelerType: {},
        language: {},
      },
      filteredReviews: [],
    };
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
  }

  componentDidMount() {
    const { reviews } = this.props;
    this.setState({
      filteredReviews: reviews,
    });
  }

  filterReviews() {
    const { filteredReviews } = this.state;
    const { reviews } = this.props;
    filteredReviews = reviews;
    console.log(event.target);
  }

  handleToggleFilter(event) {
    const { target } = event;
    console.log(target);
    const { name, value } = target;
    console.log(name, value);
    const { filters } = this.state;
    const currentState = { ...filters };
    currentState[name][value] = !currentState[name][value];
    console.log(currentState);
    this.setState({
      filters: currentState,
    });
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
