import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  FullCircles,
  EmptyCircles,
  AdditionalRatingInner,
  AdditionalRatingLabel,
} from '../css/reviewsCSS.js';

const RatingCircles = (props) => {
  const { rating, label } = props;
  if (rating === 0) return null;
  let circlesfull = '';
  let circlesempty = '';
  const max = 5;
  let total = 0;
  while (total < max) {
    if (circlesfull.length < rating) {
      circlesfull += '◉';
      total += 1;
    } else {
      circlesempty += '○';
      total += 1;
    }
  }
  if (label) {
    return (
      <AdditionalRatingInner>
        <span styles={{ display: 'inline-flex' }}>
          <FullCircles>{circlesfull}</FullCircles>
          <EmptyCircles>{circlesempty}</EmptyCircles>
        </span>
        <AdditionalRatingLabel>{` ${label}`}</AdditionalRatingLabel>
      </AdditionalRatingInner>
    );
  }
  return (
    <span styles={{ display: 'inline-flex' }}>
      <FullCircles>{circlesfull}</FullCircles>
      <EmptyCircles>{circlesempty}</EmptyCircles>
    </span>
  );
};

RatingCircles.defaultProps = {
  label: '',
};

RatingCircles.propTypes = {
  rating: PropTypes.number.isRequired,
  label: PropTypes.string,
};

export default RatingCircles;
