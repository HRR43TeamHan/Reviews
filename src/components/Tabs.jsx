import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  styles,
} from '../css/tabsCSS.js';
import { numberWithCommas } from '../helpers/counters.js';

function Tabs(props) {
  const { reviewsAmt, handleTabClick, view } = props;
  let tab1; let tab2; let tab3;

  if (view === 1) {
    tab1 = (
      <styles.tabSelectedSpan onClick={handleTabClick} name="view" id="1">
        <styles.iconSpan style={{ marginLeft: '10px' }} name="view" id="1">
          <i className="icon-pencil-square-o x2" name="view" id="1" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="1">{numberWithCommas(reviewsAmt)}</styles.textSpan>
        <styles.textSpan name="view" id="1">Reviews</styles.textSpan>
      </styles.tabSelectedSpan>
    );
  } else {
    tab1 = (
      <styles.tabSpan onClick={handleTabClick} name="view" id="1">
        <styles.iconSpan style={{ marginLeft: '10px' }} name="view" id="1">
          <i className="icon-pencil-square-o x2" name="view" id="1" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="1">{numberWithCommas(reviewsAmt)}</styles.textSpan>
        <styles.textSpan name="view" id="1">Reviews</styles.textSpan>
      </styles.tabSpan>
    );
  }

  if (view === 2) {
    tab2 = (
      <styles.tabSelectedSpan onClick={handleTabClick} name="view" id="2">
        <styles.iconSpan name="view" id="2">
          <i className="icon-comment x2" name="view" id="2" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="2">712</styles.textSpan>
        <styles.textSpan name="view" id="2">Q&A</styles.textSpan>
      </styles.tabSelectedSpan>
    );
  } else {
    tab2 = (
      <styles.tabSpan onClick={handleTabClick} name="view" id="2">
        <styles.iconSpan name="view" id="2">
          <i className="icon-comment x2" name="view" id="2" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="2">712</styles.textSpan>
        <styles.textSpan name="view" id="2">Q&A</styles.textSpan>
      </styles.tabSpan>
    );
  }

  if (view === 3) {
    tab3 = (
      <styles.tabSelectedSpan onClick={handleTabClick} name="view" id="3">
        <styles.iconSpan name="view" id="3">
          <i className="icon-lightbulb-o x2" name="view" id="3" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="3">606</styles.textSpan>
        <styles.textSpan name="view" id="3">Room Tips</styles.textSpan>
      </styles.tabSelectedSpan>
    );
  } else {
    tab3 = (
      <styles.tabSpan onClick={handleTabClick} name="view" id="3">
        <styles.iconSpan name="view" id="3">
          <i className="icon-lightbulb-o x2" name="view" id="3" />
        </styles.iconSpan>
        <styles.textSpan name="view" id="3">606</styles.textSpan>
        <styles.textSpan name="view" id="3">Room Tips</styles.textSpan>
      </styles.tabSpan>
    );
  }

  return (
    <styles.containerDiv>

      {tab1}

      {tab2}

      {tab3}

    </styles.containerDiv>
  );
}

Tabs.defaultProps = {
};

Tabs.propTypes = {
  reviewsAmt: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default Tabs;
