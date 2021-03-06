import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Photos from './Photos.jsx';
import RatingCircles from './RatingCircles.jsx';
import SocialButton from './SocialButton.jsx';

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
  ExpandButton,
  ExpandText,
  ExpandedDesc,
  CompressedDesc,
  AdditionalRatings,
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
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  handlePopUp() {
    const { userInfoPop } = this.state;
    const toggled = !userInfoPop;
    this.setState({
      userInfoPop: toggled,
    });
  }

  toggleExpanded() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  render() {
    const { review } = this.props;
    const { expanded, userInfoPop } = this.state;
    const { handlePopUp, toggleExpanded } = this;
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
          <div style={{ height: '12px' }}>        </div>
          <div style={{ width: '100px' }}> Report </div>
          <div style={{ height: '12px' }}>        </div>
          <div style={{ width: '100px' }}> Follow </div>
          <div style={{ height: '12px' }}>        </div>
        </UserInfoPopUp>
      );
    } else {
      userInfoPopUp = null;
    }
    let description; let additionalRatings; let expandText;
    if (expanded) {
      description = (
        <Description>
          <ExpandedDesc>{review.description}</ExpandedDesc>
        </Description>
      );
      additionalRatings = (
        <AdditionalRatings>
          <RatingCircles rating={review.rating_expenses} label="Value" />
          <RatingCircles rating={review.rating_location} label="Location" />
          <RatingCircles rating={review.rating_rooms} label="Room" />
          <RatingCircles rating={review.rating_service} label="Service" />
          <RatingCircles rating={review.rating_sleep} label="Sleep" />
          <RatingCircles rating={review.rating_clean} label="Cleanliness" />
        </AdditionalRatings>
      );
      expandText = <ExpandText>Read Less</ExpandText>;
    } else {
      description = (
        <Description>
          <CompressedDesc>{review.description}</CompressedDesc>
        </Description>
      );
      expandText = <ExpandText>Read More</ExpandText>;
      additionalRatings = null;
    }
    return (
      <ReviewsItemCard>
        <UserHeader>
          <UserPhotoContainer>
            <UserPhoto style={{ backgroundImage: `url(${review.photoUrl})` }} />
          </UserPhotoContainer>
          <UserInfoContainer>
            <UserInfoPopUpButton onClick={handlePopUp}>
              <i className="icon-ellipsis-h" />
              {userInfoPopUp}
            </UserInfoPopUpButton>
            <UserInfoTop>
              <UserName>{review.username}</UserName>
              {' wrote a review '}
              {reviewDate}
            </UserInfoTop>
            <UserInfoBottom>
              <i className="icon-marker" />
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
          <ExpandButton onClick={toggleExpanded}>{expandText}</ExpandButton>
          <div>
            Date of stay:
            {` ${travelDate}`}
          </div>
          {additionalRatings}
          <DisclaimerFoot>
            Disclaimer that nobody reads and the views expressed above
             are the representation of a seeder algorithm.
          </DisclaimerFoot>
        </ReviewContainer>
        <SocialBar>
          <SocialButton label="Helpful" />
          <SocialButton label="Share" />
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
      review_date: PropTypes.string.isRequired,
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
      photoUrl: PropTypes.string,
      photos: null,
    },
  ).isRequired,
};

export default ReviewsItem;
