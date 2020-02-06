import React from 'react';
import PropTypes from 'prop-types'; // ES6
import ReviewsItem from './ReviewsItem.jsx';
import {
  NoResults,
  NoResultsLink,
} from '../css/reviewsCSS.js';

function ReviewsList(props) {
  const { paginatedReviews, handleToggleFilter } = props;
  if (!paginatedReviews.length) {
    return (
      <NoResults name="clear" onClick={handleToggleFilter}>
        {'No results found. '}
        <span style={{ fontWeight: 'bold' }}>Try</span>
        {' removing a filter, changing your search, or '}
        <NoResultsLink>
          clear
        </NoResultsLink>
        {' all to read reviews.'}
      </NoResults>
    );
  }

  return (
    <div>
      {paginatedReviews.map((review, i) => <ReviewsItem id={i} key={review.ID} review={review} />)}
    </div>
  );
}


ReviewsList.propTypes = {
  paginatedReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleFilter: PropTypes.func.isRequired,
};

export default ReviewsList;
