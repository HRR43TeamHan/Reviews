import React from 'react';
import {
  PhotoContainer,
  PhotoCard,
  Overlay,
} from '../css/photosCSS.js'


class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photos } = this.props;
    if (!photos) return null;
    const photosArray = photos.split(',');
    const displayArray = photosArray.slice(0, 3);
    const width = (100 / displayArray.length) + '%';
    return (
      <PhotoContainer>
        {/* Map out the photos into a photo card */}
        {/* TODO - handle more than 3 photos with an overlay of how many extra */}
        {displayArray.map((photoUrl, i) => <PhotoCard key={i} style={{width, backgroundImage: `url(${photoUrl})`}} /> )}
      </PhotoContainer>
    )
  }
}

export default Photos;
