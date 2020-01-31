import React from 'react';
import ReviewsItem from './ReviewsItem.jsx';

//  import ReviewsItem from './reviewsItem.jsx';

class ReviewsList extends React.Component {
  render() {
    const { filteredReviews } = this.props;
    console.log(filteredReviews);
    return (
      <div>
        {filteredReviews.map((review) => <ReviewsItem review={review} />)}
        <div>TODO Reviews item goes here</div>
        <div>TODO Reviews item goes here</div>
        <div>TODO Reviews item goes here</div>
        <div>TODO Reviews item goes here</div>
        <div>TODO Reviews item goes here</div>
      </div>
    );
  }
}

export default ReviewsList;
