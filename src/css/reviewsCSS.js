import styled from '@emotion/styled';

export const ReviewsListContainer = styled.div({
  // This is likely unecessary
});

export const ReviewsItemCard = styled.div({
  border: '1px solid #e5e5e5',
  marginBottom: '8px',
  borderRadius: '2px',
  backgroundColor: '#f9f9f9',
  boxSizing: 'border-box',
  padding: '0px 0px 0px',
});

export const UserHeader = styled.div({
  marginBottom: '12px',
  paddingLeft: '16px',
  paddingTop: '16px',
  paddingBottom: '16px',
  backgroundColor: 'white',
});

export const UserPhotoContainer = styled.div({
  width: '48px',
  height: '48px',
  borderRadius: '100%',
  margin: '-3px 8px 0 -3px',
  float: 'left',
});

export const UserPhoto = styled.div({
  display: 'block',
  width: '42px',
  height: '42px',
  margin: '3px',
  borderRadius: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

export const UserInfoContainer = styled.div({

});

export const UserInfoPopUpButton = styled.span({
  float: 'right',
  marginRight: '12px',
  cursor: 'pointer',
});

export const UserInfoPopUp = styled.div({
  position: 'absolute',
  backgroundColor: 'white',
  borderColor: 'black',
  borderStyle: 'solid',
  // left: '-25px',
  overflow: 'hidden',
  border: '1px solid #e5e5e5',
  right: '18px',
});

export const UserInfoTop = styled.div({
  height: '100%',
  overflow: 'hidden',
  paddingBottom: '2px',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#4a4a4a',
});

export const UserInfoBottom = styled.div({

});

export const UserName = styled.a({
  fontWeight: '666',
  color: 'black',
});

export const RatingContainer = styled.div({
  padding: '0px 0px 0px 24px',
  backgroundColor: '#f9f9f9',
});

export const FullCircles = styled.span({
  color: '#00a680',
  display: 'inline-block',
  fontSize: '19px',
});

export const EmptyCircles = styled.span({
  color: '#00a680',
  /* display: inline-block; */
  fontSize: '30px',
  position: 'relative',
  top: '4px',
});

export const ReviewTitle = styled.div({
  marginTop: '2px',
  marginBottom: '8px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '22px',
  color: 'black',
  wordWrap: 'break-word',
});

export const ReviewContainer = styled.div({
  padding: '0 24px',
  marginBottom: '12px',
});

export const Description = styled.span({

});

export const AdditionalRatings = styled.div({
  marginTop: '12px',
  webkitFlexWrap: 'wrap',
  msFlexWrap: 'wrap',
  flexWrap: 'wrap',
  webkitFlexDirection: 'row',
  msFlexDirection: 'row',
  flexDirection: 'row',
  display: 'flex',
});

export const AdditionalRatingInner = styled.div({
  flexBasis: '50%',
  display: 'flex',
  lineHeight: '18px',
});

export const AdditionalRatingLabel = styled.label({
  bottom: '-5px',
  position: 'relative',
});

export const AttributionDisclaimer = styled.div({

});

export const DisclaimerFoot = styled.div({
  color: '#767676',
  fontSize: '12px',
  marginTop: '12px',
  marginBottom: '12px',
  fontStyle: 'italic',
  borderTop: '1px solid #e5e5e5',
  paddingTop: '6px',
});

export const SocialBar = styled.div({
  background: '#fff',
  padding: '0 24px 12px',
});
