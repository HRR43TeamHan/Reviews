
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
// import { css } from '@emotion/core';

export const FiltersCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '16.66%',
});

export const RatingsCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '44.16%',
});

export const LanguageCard = styled.div({
  display: 'block',
  padding: '12px',
  width: '25%',
});

export const FiltersContainer = styled.div({
  backgroundColor: 'white',
  paddingLeft: '24px',
  paddingRight: '24px',
  display: 'flex',
});

export const FilterTable = styled.ul({
  margin: '0',
  padding: '0',
  width: '100%',
  borderSpacing: '0 5px',
  fontSize: '14px',
  listStyle: 'none',
  display: 'inline-table',
});
export const FilterTableRow = styled.li({
  display: 'table-row',
});

export const FilterTitle = styled.div({
  paddingTop: '6px',
  marginBottom: '5px',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '20px',
});

export const ReviewFilterBarCell = styled.span({
  display: 'table-cell',
  width: '100%',
  paddingLeft: '12px',
  paddingRight: '8px',
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

export const PopularMentionsCard = styled.div({
  display: 'block',
  width: '100%',
});

export const CheckboxLabel = styled.label({
  paddingLeft: '5px',
  boxSizing: 'content-box',
  display: 'table-cell',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
});

export const Checkbox = withProps({ type: 'checkbox' })(styled.input`
top: 0;
left: 0;
width: 1em;
height: 1em;
background-color: #fff;
border: 1px solid #767676;
border-radius: 2px;
box-shadow: inset 0 0 2px rgba(0,0,0,.1);
font: normal 700 normal 1em/1 TripAdvisor_Regular;
color: #fff;
-webkit-font-smoothing: antialiased;
/* Adjusts the position of the checkboxes on the text baseline */
vertical-align: center;
/* Set here so that Windows' High-Contrast Mode can override */
color: white;
}
::before {
  content: "✔";
  visibility: hidden;
}
:checked::before {
  display: inline-block;
  visibility: visible;
  vertical-align: middle;
}
:checked {
  background: #078171;

  visibility: visible;
transition: all 0.5s ease;
}
`);
