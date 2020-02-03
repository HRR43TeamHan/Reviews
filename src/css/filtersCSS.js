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
  cursor: 'pointer',
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
font: normal 700 normal 1em/1 Arial;
color: #fff;
-webkit-font-smoothing: antialiased;
/* Adjusts the position of the checkboxes on the text baseline */
vertical-align: middle;
/* Set here so that Windows' High-Contrast Mode can override */
}
::before {
  padding-bottom: 3px;
  content: "✔";
  visibility: hidden;
  cursor: 'pointer',
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

export const RadioButton = withProps({ type: 'radio' })(styled.input`
width: 1.02em;
height: 1em;
color: #fff;
background-color: #fff;
font: normal 700 normal 1.1em/0.65 Arial;
border: 1px solid #767676;
border-radius: 100%;
text-align: center;
outline: none;
 ::before {
   cursor: pointer
   text-align: center;
   padding: 0px 0px;
   font-size: 1.2em!important;
   content: "●";
   visibility: hidden;
   outline: none;
 }
 :checked::before {
   display: inline-block;
   visibility: visible;
   vertical-align: middle;
   outline: none;
 }
 :checked {
   visibility: visible;
   background-color: #078171;
   outline: none;
  }

`);

export const RadioButtonLabel = styled.label({
  paddingLeft: '5px',
  boxSizing: 'content-box',
  display: 'table-cell',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
});

export const LanguageAmt = styled.label({

});

export const LanguagePopButton = styled.div({
  color: '#078171',
  fontWeight: '700',
  cursor: 'pointer',
});

export const PopularMentionCard = styled.label({
  padding: '12px',

});

export const SearchContainer = styled.div({
  position: 'relative',
  margin: '8px 0',
  pointerEvents: 'auto',
  backgroundColor: 'white',
});

export const SearchInput = withProps({ type: 'text' })(styled.input`
padding: 12px;
padding-left: 40px;
width: -webkit-fill-available;
border: 1px solid #e5e5e5;
`);

export const SearchIcon = styled.i({
  color: '#078171',
  position: 'absolute',
  fontSize: '1em',
  left: '12px',
  bottom: '0.85em',
});

export const PopularMentionsButton = styled.div({
  borderRadius: '3px',
  backgroundColor: '#fff',
  padding: '6px 10px',
  fontSize: '12px',
  lineHeight: '16px',
});
