import React from 'react';
import PropTypes from 'prop-types'; // ES6
import ReviewsItem from './ReviewsItem.jsx';

//  import ReviewsItem from './reviewsItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {
    const { paginatedReviews } = this.props;

    console.log('page: ', paginatedReviews);
    return (
      <div>
        {paginatedReviews.map((review) => <ReviewsItem key={review.ID} review={review} />)}
      </div>
    );
  }
}

ReviewsList.propTypes = {
  paginatedReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
};

export default ReviewsList;
