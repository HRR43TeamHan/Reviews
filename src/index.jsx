import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';


/* <link href="https://hrr43fecheskett.s3.us-east-2.amazonaws.com/styles/styles.css" rel="stylesheet" /> */

// if (!document.getElementById('reviewsicons')) {
//   let link = document.createElement('link');
//   link.id = 'reviewsicons';
//   link.href = 'https://hrr43fecheskett.s3.us-east-2.amazonaws.com/styles/styles.css';
//   link.rel = 'stylesheet';
//   document.head.appendChild(link);
// }


ReactDOM.render(
  <Reviews />, document.getElementById('reviews'),
);
