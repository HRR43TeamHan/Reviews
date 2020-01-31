import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  RatingContainer,
  ReviewsItemCard,
  UserHeader,
  UserInfoContainer,
  UserInfoBottom,
  UserInfoTop,
  UserName,
  UserPhotoContainer,
  UserPhoto,
  ReviewTitle,
} from '../css/reviewsCSS.js';
import RatingCircles from './RatingCircles.jsx';

class ReviewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const { review } = this.props;
    const { expanded } = this.state;
    // Set month date accordingly
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const travelDate = new Date(review.travel_date);
    const date = `${monthNames[travelDate.getMonth()]} ${travelDate.getFullYear()}`;
    const contributions = Math.round((Math.random() * 400));
    const helpful = Math.round(Math.random() * 100);
    return (
      <ReviewsItemCard>
        <UserHeader>
          <UserPhotoContainer>PH</UserPhotoContainer>
          <UserInfoContainer>

            <UserInfoTop>
              <UserName>{review.username}</UserName>
              {' wrote a review '}
              {date}
            </UserInfoTop>
            <UserInfoBottom>
              <i className="fas fa-map-marker-alt" />
              {' '}
              {review.location}
              {' • '}
              {contributions}
              {' contributions • '}
              {helpful}
              {' helpful votes'}
            </UserInfoBottom>
          </UserInfoContainer>
        </UserHeader>
        <RatingContainer>
          <RatingCircles rating={review.rating_overall} />
        </RatingContainer>

        <ReviewTitle>
          {review.title}
        </ReviewTitle>
        <div>
          Description=
          {' '}
          {review.description}
        </div>
        <div>
          rating_expenses=
          {' '}
          {review.rating_expenses}
        </div>
        <div>
          rating_location=
          {' '}
          {review.rating_location}
        </div>
        <div>
          rating_rooms=
          {' '}
          {review.rating_rooms}
        </div>
        <div>
          Date of stay:
          {' '}
          {date}
        </div>
      </ReviewsItemCard>

    );
  }
}

ReviewsItem.propTypes = {
  review: PropTypes.shape(
    {
      ID: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      user_thoughts: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      language_ID: PropTypes.number.isRequired,
      travel_date: PropTypes.string.isRequired,
      travel_type: PropTypes.number.isRequired,
      rating_overall: PropTypes.number.isRequired,
      rating_expenses: PropTypes.number.isRequired,
      rating_location: PropTypes.number.isRequired,
      rating_rooms: PropTypes.number.isRequired,
      rating_service: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      photos: null,
    },
  ).isRequired,
};

export default ReviewsItem;
