import React from 'react';
import {
  SocialText,
  SocialSpan,
} from '../css/reviewsCSS.js';

function SocialButton(props) {
  const { label } = props;
  let button;
  if (label === 'Helpful') {
    button = (
      <SocialSpan>
        <i className="icon-thumbs-up" />
        <SocialText>
          {label}
        </SocialText>
      </SocialSpan>
    );
  } else if (label === 'Share') {
    button = (
      <SocialSpan>
        <i className="icon-share" />
        <SocialText>
          {label}
        </SocialText>
      </SocialSpan>
    );
  } else {
    button = <span>Must set label prop of SocialButton</span>;
  }

  return button;
}

export default SocialButton;
