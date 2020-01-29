import axios from 'axios';
import React from 'react';
import { Global, css, jsx } from '@emotion/core';
import styles from '../css/tabsCSS';
import ReviewsList from './reviewsList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsAmt: 0,
      view: 1,
    };
    this.countRatings = this.countRatings.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  componentDidMount() {
    const ID = window.location.pathname.replace(/\//g, '');
    axios.get(`/../api/reviews/${ID}`)
      .then((response) => {
        // TODO - handle the success
        console.log(response.data);
        this.setState({
          reviews: response.data,
          reviewsAmt: response.data.length,
        });
        return response.data;
      })
      .catch((error) => {
        console.log(error);

      })
      .then((reviewsArray) => {
        // this is always executed
        console.log(reviewsArray);
        this.countRatings(reviewsArray);
      });
  }

  countRatings(reviews) {
    const total = reviews.length;
    const overall = {
      Excellent: {
        amt: 0,
        percent: 0,
      },
      'Very Good': {
        amt: 0,
        percent: 0,
      },
      Average: {
        amt: 0,
        percent: 0,
      },
      Poor: {
        amt: 0,
        percent: 0,
      },
      Terrible: {
        amt: 0,
        percent: 0,
      },
    };
    //  console.log(overall.keys());
    reviews.forEach((review) => {
      if (review.rating_overall === 1) {
        overall.Terrible.amt += 1;
      } else if (review.rating_overall === 2) {
        overall.Poor.amt += 1;
      } else if (review.rating_overall === 3) {
        overall.Average.amt += 1;
      } else if (review.rating_overall === 4) {
        overall['Very Good'].amt += 1;
      } else if (review.rating_overall === 5) {
        overall.Excellent.amt += 1;
      } else {
        console.log('ERROR with ratings Counter');
      };
    });

    overall.Excellent.percent = ((overall.Excellent.amt / total) * 100).toFixed(4);
    overall['Very Good'].percent = ((overall['Very Good'].amt / total) * 100).toFixed(4);
    overall.Average.percent = ((overall.Average.amt / total) * 100).toFixed(4);
    overall.Poor.percent = ((overall.Poor.amt / total) * 100).toFixed(4);
    overall.Terrible.percent = ((overall.Terrible.amt / total) * 100).toFixed(4);

    this.setState({
      overall,
    });
    console.log('Rating:', overall);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // TODO - need to add the Top buttons and also
  // TODO - add the count of reviews
  render() {
    const { reviewsAmt } = this.state;
    return (
      <div>
        <Global styles={styles.global} />

        <styles.containerDiv>

          <styles.tabSelectedSpan>
            <styles.iconSpan style={{ marginLeft: '10px' }}>
              <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" />
            </styles.iconSpan>
            <styles.textSpan>{this.numberWithCommas(reviewsAmt)}</styles.textSpan>
            <styles.textSpan>Reviews</styles.textSpan>
          </styles.tabSelectedSpan>

          <styles.tabSpan>
            <styles.iconSpan>
              <i className="fas fa-comment-alt fa-2x" />
            </styles.iconSpan>
            <styles.textSpan>713</styles.textSpan>
            <styles.textSpan>Q&A</styles.textSpan>
          </styles.tabSpan>

          <styles.tabSpan>
            <styles.iconSpan>
              <i className="fas fa-lightbulb fa-2x" />
            </styles.iconSpan>
            <styles.textSpan>666</styles.textSpan>
            <styles.textSpan>Room Tips</styles.textSpan>
          </styles.tabSpan>

        </styles.containerDiv>
        {/* TODO - Replace with Components vs being here */}
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
          <styles.filtersContainer>

            <styles.ratingsCard>
              <styles.filterTitle>
                Traveler rating
              </styles.filterTitle>
              <i className="fas fa-check" />
            </styles.ratingsCard>

            <styles.filtersCard>
              <styles.filterTitle>
                Time of year
              </styles.filterTitle>

            </styles.filtersCard>

            <styles.filtersCard>
              <styles.filterTitle>
                Traveler type
              </styles.filterTitle>

            </styles.filtersCard>

            <styles.languageCard>
              <styles.filterTitle>
                Language
              </styles.filterTitle>

            </styles.languageCard>

          </styles.filtersContainer>

        </div>
      </div>
    );
  }
}

export default Reviews;
