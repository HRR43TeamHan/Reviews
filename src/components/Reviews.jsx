import axios from 'axios';
import React from 'react';
import { css, Global } from '@emotion/core';
import { getLanguages } from '../helpers/parsers.js';
import ReviewsContainer from './ReviewsContainer.jsx';
import Tabs from './Tabs.jsx';
import { AdContainer } from '../css/reviewsCSS.js';

const global = css`
body {
  font-family: Arial,Tahoma,Bitstream Vera Sans,sans-serif;
  color: #4A4A4A;
  background-color: rgb(242, 242, 242);
}

input[type="checkbox"] {
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

input[type="radio"] {
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsAmt: 0,
      view: 1,
      overall: {
        excellent: {
          amt: 0,
          percent: 0,
        },
        veryGood: {
          amt: 0,
          percent: 0,
        },
        average: {
          amt: 0,
          percent: 0,
        },
        poor: {
          amt: 0,
          percent: 0,
        },
        terrible: {
          amt: 0,
          percent: 0,
        },
      },
    };

    this.handleTabClick = this.handleTabClick.bind(this);

    this.numberWithCommas = (xx) => {
      const output = xx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return output;
    };
  }

  componentDidMount() {
    const ID = window.location.pathname.replace(/\//g, '');
    axios.get(`/../api/reviews/${ID}`)
      .then((response) => {
        // TODO - handle the success
        // console.log(response.data);
        this.setState({
          reviews: response.data,
          reviewsAmt: response.data.length,
        });

        return response.data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      })
      .then((reviewsArray) => {
        // this is always executed
        // console.log(reviewsArray);
        this.countRatings(reviewsArray);
        this.countLanguages(reviewsArray);
      });
  }

  countLanguages(reviews) {
    getLanguages()
      .then((languages) => {
        this.setState({
          languages,
        });
        // console.log(languages);
      }).then(() => {
        const { languages } = this.state;
        const total = reviews.length;
        const languageCount = {};
        languageCount[0] = { title: 'All languages', value: total };
        languages.forEach((language) => {
          languageCount[language.ID] = {};
          languageCount[language.ID].title = language.title;
          languageCount[language.ID].value = 0;
        });
        reviews.forEach((review) => {
          languageCount[review.language_ID].value += 1 || 1;
        });
        // console.log(languageCount);
        this.setState({
          languageCount,
        });
      });
  }

  countRatings(reviews) {
    const total = reviews.length;
    const overall = {
      excellent: { amt: 0, percent: 0 },
      veryGood: { amt: 0, percent: 0 },
      average: { amt: 0, percent: 0 },
      poor: { amt: 0, percent: 0 },
      terrible: { amt: 0, percent: 0 },
    };
    // console.log(Object.keys(overall));
    reviews.forEach((review) => {
      if (review.rating_overall === 1) {
        overall.terrible.amt += 1;
      } else if (review.rating_overall === 2) {
        overall.poor.amt += 1;
      } else if (review.rating_overall === 3) {
        overall.average.amt += 1;
      } else if (review.rating_overall === 4) {
        overall.veryGood.amt += 1;
      } else if (review.rating_overall === 5) {
        overall.excellent.amt += 1;
      }
    });
    overall.excellent.percent = `${((overall.excellent.amt / total) * 100).toFixed(4)}%`;
    overall.veryGood.percent = `${((overall.veryGood.amt / total) * 100).toFixed(4)}%`;
    overall.average.percent = `${((overall.average.amt / total) * 100).toFixed(4)}%`;
    overall.poor.percent = `${((overall.poor.amt / total) * 100).toFixed(4)}%`;
    overall.terrible.percent = `${((overall.terrible.amt / total) * 100).toFixed(4)}%`;
    overall.terrible.amt = this.numberWithCommas(overall.terrible.amt);
    overall.poor.amt = this.numberWithCommas(overall.poor.amt);
    overall.average.amt = this.numberWithCommas(overall.average.amt);
    overall.veryGood.amt = this.numberWithCommas(overall.veryGood.amt);
    overall.excellent.amt = this.numberWithCommas(overall.excellent.amt);
    this.setState({
      overall,
    });
    // console.log('Rating:', overall);
  }


  handleTabClick(event) {
    const { target } = event;
    const { id } = target;
    const numValue = parseInt(id, 10);
    this.setState({
      view: numValue,
    });
  }

  render() {
    const {
      view,
      overall,
      reviews,
      reviewsAmt,
      languageCount,
    } = this.state;
    const { handleTabClick } = this;
    let componentContainer;
    if (view === 1) {
      componentContainer = (
        <ReviewsContainer
          reviews={reviews}
          reviewsAmt={reviewsAmt}
          overall={overall}
          languageCount={languageCount}
        />
      );
    } else if (view === 2) {
      componentContainer = (
        <div style={{ width: '860px' }}>TODO - View 2(QA container) goes here!</div>

      );
    } else if (view === 3) {
      componentContainer = (
        <div style={{ width: '100%', height: 'fit-content' }}>
          Jordan Never Gonna
          <video controls="" autoPlay="true" name="media">
            <track src="https://heskett-assets.s3.us-east-2.amazonaws.com/videos/NeverGonna.vtt" kind="captions" srcLang="en" label="english_captions" />
            <source src="https://heskett-assets.s3.us-east-2.amazonaws.com/videos/JordanNeverGonna.mp4" type="video/mp4" />
          </video>
        </div>
      );
    }
    //------------------------------------------------------------
    // Begin the rendering of what is below here
    //------------------------------------------------------------
    return (

      <div style={{ display: 'flex' }}>
        <Global styles={global} />
        <div>
          <Tabs
            reviewsAmt={(reviewsAmt)}
            handleTabClick={handleTabClick}
            view={view}
          />
          {componentContainer}
        </div>
        <AdContainer>
          <div style={{ width: '200px' }}>Ads go here</div>
        </AdContainer>
      </div>

    );
  }
}

export default Reviews;
