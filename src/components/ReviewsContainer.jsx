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
      filterRating: [],
      filterTime: [],
      filterTravelerType: [],
      filterLanguage: [],
    };

  }

  componentDidMount() {
  }

  setFilter(event) {
    console.log(event.target);
  }

  render() {
    const {
      reviewsAmt,
      reviews,
      overall,
    } = this.props;
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

          <AllFilters overall={overall} reviewsAmt={reviewsAmt} />
          <ReviewsList/>

        </div>
      </div>

    );
  }
}

export default ReviewsContainer;
