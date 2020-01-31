import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  FullCircles,
  EmptyCircles,
} from '../css/reviewsCSS.js';
// perhaps use svg here....

// const Foo = function(props, context) {
//   const {
//     location
//   } = context.router;

//   return <div>{props.foo}</div>;
// };◉

const RatingCircles = (props) => {
  const { rating } = props;
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
  return (
    <div styles={{ display: 'inline-flex' }}>
      <FullCircles>{circlesfull}</FullCircles>
      <EmptyCircles>{circlesempty}</EmptyCircles>
    </div>
  );
};

RatingCircles.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingCircles;
