import styled from '@emotion/styled';
import { css } from '@emotion/core';
import withProps from 'recompose/withProps';

export const styles = {
  global: css`
  body {
    font-family: Arial,Tahoma,Bitstream Vera Sans,sans-serif;
    color: #4A4A4A;
    background-color: rgb(242, 242, 242);
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
  }
`,


  h2: styled.h2({
    borderBottom: '1px solid rgb(229, 229, 229)',
    color: 'black',
    padding: '20px 0',
    margin: '0',
    verticalAlign: 'middle',
    textAlign: 'center',
  }),

  textSpan: styled.span({
    textAlign: 'center',
    marginTop: '4px',
    display: 'block',
    fontSize: '18px',
    fontWeight: '700',
  }),

  iconSpan: styled.span({
    // marginLeft: '10px',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'block',
  }),

  // #e5e5e5
  // TODO - switch black for correct color
  tabSpan: styled.span({
    border: '1px solid #e5e5e5',
    color: '#078171',
    padding: '16px 12px',
    width: '33%',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '18px',
  }),

  headerTabSpan: styled.span({

  }),

  headerText: styled.div({
    flex: '1',
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0%',
    color: 'black',
    fontSize: '28px',
    fontWeight: '666',
    display: 'block',
  }),

  headerOuterDiv: styled.div({
    backgroundColor: 'white',
    padding: '16px 16px 0',
    display: 'block',
  }),

  headerInnerDiv: styled.div({
    padding: '0 0 18px',
    display: 'flex',
    alignItems: 'center',
    borderWidth: '0 0 1px',
    borderStyle: 'solid',
    borderColor: '#e5e5e5',
  }),

  buttonsDiv: styled.div({
    cursor: 'pointer',
    display: 'flex',
    alignSelf: 'end',
  }),


  optionBtnDiv: styled.div({
    padding: '8px 13px',
    border: '1px solid transparent',
    backgroundClip: 'padding-box',
    borderRadius: '3px',
    backgroundColor: '#078171',
    color: '#fff',
  }),

  center: styled.span({
    textAlign: 'center',
    marginTop: '4px',
    display: 'block',
    fontSize: '18px',
    fontWeight: '700',
  }),

  selected: styled.span({
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    height: '3px',
    width: 'calc(33% + 2px)',
    backgroundColor: '#078171',
    overflow: 'visible',
  }),
};
styles.writeReviewBtnDiv = styled.div({
  position: 'relative',
  display: 'inline-block',
  padding: '8px 16px',
  fontWeight: '700',
  fontFamily: 'inherit',
  border: '1px solid transparent',
  backgroundClip: 'padding-box',
  boxSizing: 'border-box',
  fontSize: '14px',
  lineHeight: '18px',
  textAlign: 'center',
  borderRadius: '3px',
  backgroundColor: '#078171',
  color: '#fff',
  ':hover': {
    backgroundColor: '#06695c',
  },
});

styles.tabSelectedSpan = styled.span({
  borderTop: '4px solid #078171',
  backgroundColor: 'white',
  padding: '16px 12px',
  width: '33%',
  cursor: 'pointer',
  fontSize: '14px',
  lineHeight: '18px',
  ':hover': {
    color: '#078171',
  },
});

styles.containerDiv = styled.div({
  backgroundColor: 'transparent',
  padding: '0',
  display: 'flex',
  flex: 'none',
  verticalAlign: 'middle',
  color: 'black',
});

styles.filtersContainer = styled.div({
  backgroundColor: 'white',
  paddingLeft: '24px',
  paddingRight: '24px',
  display: 'flex',
});

styles.ratingsCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '44.16%',
});

styles.filtersCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '16.66%',
});

styles.filterTitle = styled.div({
  paddingTop: '6px',
  marginBottom: '5px',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '20px',
});

styles.languageCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '25%',
});


export const Checkbox = withProps({ type: 'checkbox' })(styled.input`
  position: relative;
  top: 0;
  left: 0;
  vertical-align: bottom;
  *overflow: hidden;
  width: 1em;
  height: 1em;
  background-color: #fff;
  border: 1px solid #767676;
  border-radius: 2px;
  box-shadow: inset 0 0 2px rgba(0,0,0,.1);
  font: normal 700 normal 1em/1 Arial;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  }
  ::before {
    content: "✔";
    visibility: hidden;
  }
  :checked::before {
    display: inline-block;
    visibility: visible;
    vertical-align: center;
  }
  :checked {
    background: #078171;
    visibility: visible;
    transition: all 0.5s ease;
  }
`);

export const ReviewFilterTable = styled.ul({
  margin: '0',
  padding: '0',
  width: '100%',
  borderSpacing: '0 12px',
  fontSize: '14px',
  listStyle: 'none',
  display: 'table',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  paddingInlineStart: '0px',
});

export const ReviewFilterTableRow = styled.li({
  width: '100%',
  display: 'inline-flex',
  verticalAlign: 'middle',
  textAlign: '-webkit-match-parent',
});

export const ReviewFilterBarCell = styled.span({
  display: 'table-cell',
  width: '100%',
  paddingLeft: '12px',
});

export const ReviewFilterBar = styled.span({
  background: '#e5e5e5 none repeat scroll 0 0',
  display: 'inline-block',
  height: '12px',
  position: 'relative',
  width: '100%',
  borderRadius: '2px',
  marginTop: '-1px',
  cursor: 'pointer',
  top: '3px',
});

export const ReviewFilterFill = styled.span({
  background: '#078171 none repeat scroll 0 0',
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'text-top',
  borderRadius: '2px',
});

export const RedPasswordInput = withProps({ type: 'password' })(styled('input')`
  background-color: red;
`);

export default styles;
