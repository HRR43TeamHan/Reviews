import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  PhotoContainer,
  PhotoCard,
  Overlay,
} from '../css/photosCSS.js';


const Photos = (props) => {
  const { photos } = props;
  if (!photos) return null;
  let overlay = null;
  const photosArray = photos.split(',');
  if (photosArray.length > 3) {
    const extraAmt = photosArray.length - 3;
    overlay = (
      <Overlay>
        <span style={{ width: '100%', height: '100%', lineHeight: '120px' }}>{`+${extraAmt}`}</span>
      </Overlay>
    );
  }
  const displayArray = photosArray.slice(0, 3);
  const width = `${100 / displayArray.length}%`;
  return (
    <PhotoContainer>
      {/* Map out the photos into a photo card */}
      {displayArray.map((photoUrl, i) => {
        if (i !== 2) { return <PhotoCard key={photoUrl} style={{ width, backgroundImage: `url(${photoUrl})` }} />; }
        return (
          <PhotoCard key={`${photoUrl}`} style={{ width, backgroundImage: `url(${photoUrl})` }}>
            {overlay}
          </PhotoCard>
        );
      })}
    </PhotoContainer>
  );
};


Photos.defaultProps = {
  photos: null,
};

Photos.propTypes = {
  photos: PropTypes.string,
};

export default Photos;
