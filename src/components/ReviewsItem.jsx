import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Photos from './Photos.jsx';
import RatingCircles from './RatingCircles.jsx';
import {
  RatingContainer,
  ReviewsItemCard,
  UserHeader,
  UserInfoContainer,
  UserInfoPopUpButton,
  UserInfoPopUp,
  UserInfoBottom,
  UserInfoTop,
  UserName,
  UserPhotoContainer,
  UserPhoto,
  ReviewTitle,
  ReviewContainer,
  Description,
  AdditionalRatings,
  AdditionalRatingInner,
  AdditionalRatingLabel,
  DisclaimerFoot,
  SocialBar,
} from '../css/reviewsCSS.js';

class ReviewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      userInfoPop: false,
    };
    this.handlePopUp = this.handlePopUp.bind(this);
  }

  handlePopUp() {
    const { userInfoPop } = this.state;
    const toggled = !userInfoPop;
    this.setState({
      userInfoPop: toggled,
    });
  }

  render() {
    const { review } = this.props;
    const { expanded, userInfoPop } = this.state;
    const { handlePopUp } = this;
    // Set month date accordingly
    const monthNamesLong = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let travelDate = new Date(review.travel_date);
    travelDate = `${monthNamesLong[travelDate.getMonth()]} ${travelDate.getFullYear()}`;
    let reviewDate = new Date(review.review_date);
    reviewDate = `${monthNamesShort[reviewDate.getMonth()]} ${reviewDate.getDate()}`;
    let userInfoPopUp;
    if (userInfoPop) {
      userInfoPopUp = (
        <UserInfoPopUp>
          <li>Report</li>
          <li>Follow</li>
        </UserInfoPopUp>
      );
    } else {
      userInfoPopUp = null;
    }
    let description;
    if (expanded) {
      description = <Description>TODO - make expanded version</Description>;
    } else {
      description = (
        <Description>
          <span>{review.description}</span>
        </Description>
      );
    }
    return (
      <ReviewsItemCard>
        <UserHeader>
          <UserPhotoContainer>
            <UserPhoto style={{ backgroundImage: `url(${review.photoUrl})` }} />
          </UserPhotoContainer>
          <UserInfoContainer>
            <UserInfoPopUpButton onClick={handlePopUp}>
              <i className="fas fa-ellipsis-h" />
              {userInfoPopUp}
            </UserInfoPopUpButton>
            <UserInfoTop>
              <UserName>{review.username}</UserName>
              {' wrote a review '}
              {reviewDate}
            </UserInfoTop>
            <UserInfoBottom>
              <i className="fas fa-map-marker-alt" />
              {' '}
              {review.location}
              {' • '}
              {review.contributions}
              {' contributions • '}
              {review.votes}
              {' helpful votes'}
            </UserInfoBottom>

          </UserInfoContainer>
        </UserHeader>
        <Photos photos={review.photos} />
        <RatingContainer>
          <RatingCircles rating={review.rating_overall} />
        </RatingContainer>
        <ReviewContainer>
          <ReviewTitle>
            {review.title}
          </ReviewTitle>

          {description}

          <div>
            Date of stay:
            {` ${travelDate}`}
          </div>
          <AdditionalRatings>

            <RatingCircles rating={review.rating_expenses} label="Value" />

            <RatingCircles rating={review.rating_location} label="Location" />

            <RatingCircles rating={review.rating_rooms} label="Room" />

            <RatingCircles rating={review.rating_service} label="Service" />

            <RatingCircles rating={review.rating_sleep} label="Sleep" />

            <RatingCircles rating={review.rating_clean} label="Cleanliness" />

          </AdditionalRatings>
          <DisclaimerFoot>
            Disclaimer that nobody reads and the views expressed above
             are the representation of a seeder algorithm.
          </DisclaimerFoot>
        </ReviewContainer>
        <SocialBar>
          SocalBar Here
        </SocialBar>
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
      rating_sleep: PropTypes.number.isRequired,
      rating_clean: PropTypes.number.isRequired,
      contributions: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      photos: null,
    },
  ).isRequired,
};

export default ReviewsItem;
