import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import ReviewsList from './reviewsList.jsx';
import axios from 'axios';

const ReviewButton = styled.div`
  gridColumn: 2,
  borderTop: ${props =>
    props.selected ? '5px solid darkcyan' : 'none'};
`;

const Container = styled.div(props => ({
  display: 'grid',
  grid: 'auto-flow / auto 1fr',
  gridTemplateColumns: '400px',
  gridAutoColumns: '400px',
  gridTemplateRows: '100px',
  gridAutoRows: '40px',
}));


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    var ID = window.location.pathname.replace(/\//g, '');
    console.log(ID);
    axios.get('/../api/reviews/' + ID)
      .then(response => {
        //TODO - handle the success
        console.log(response.data);
        this.setState({
          reviews: response.data,
          reviewsAmt: response.data.length
        });
      })
      .catch(error => {
        console.log(error);

      })
      .then(() => {
        // this is always executed
      });

  }
  // TODO - need to add the Top buttons and also
  // TODO - add the count of reviews
  // TODO - add a fake Q&A count and icon
  // TODO - add a fake Room tips and icon
  render() {
    return (
      <Container column>
        <ReviewButton>This is a regular button.</ReviewButton>
        <ReviewButton selected>This is a primary button.</ReviewButton>
      </Container>
    );
  }
}

export default Reviews;