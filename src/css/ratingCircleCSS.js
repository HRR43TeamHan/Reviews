import styled from '@emotion/styled';

const styles = {
  circleContainer: styled.div({
    display: 'flex',
  }),

  outerCircle: styled.div({
    display: 'inline-block',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '2px solid #078171',
  }),

  innerCircleContainer: styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }),

  innerCircle: styled.div({
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#078171',
  }),

  halfCircle: styled.div({
    display: 'inline-block',
    transform: 'translate(-50%, 0)',
    width: '5px',
    height: '10px',
    borderRadius: '20px 0 0 20px',
    backgroundColor: '#078171',
  }),

  reviews: styled.span({
    display: 'inline-block',
    marginLeft: '5px',
    color: '#4A4A4A',
    fontSize: '14px',
    fontWeight: 'normal',
    textDecoration: 'underline rgb(100, 100, 100) dotted',
  }),

  ratingCategory: styled.span({
    display: 'inline-block',
    marginLeft: '15px',
    fontSize: '14px',
  }),
};

export default styles;
