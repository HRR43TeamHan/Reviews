import styled from '@emotion/styled';


export const PhotoContainer = styled.div({
  display: 'flex',
  height: '124px',
  marginTop: '-12px',
});

export const PhotoCard = styled.div({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

export const Overlay = styled.div({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 166, 128, .4)',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  fontSize: '2em',
  color: '#fff',
});
