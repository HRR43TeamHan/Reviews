import React from 'react';
import {
  styles,
} from '../css/tabsCSS.js';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { reviewsAmt } = this.props;
    return (
      <styles.containerDiv>

        <styles.tabSelectedSpan>
          <styles.iconSpan style={{ marginLeft: '10px' }}>
            <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" />
          </styles.iconSpan>
          <styles.textSpan>{reviewsAmt}</styles.textSpan>
          <styles.textSpan>Reviews</styles.textSpan>
        </styles.tabSelectedSpan>

        <styles.tabSpan>
          <styles.iconSpan>
            <i className="fas fa-comment-alt fa-2x" />
          </styles.iconSpan>
          <styles.textSpan>713</styles.textSpan>
          <styles.textSpan>Q&A</styles.textSpan>
        </styles.tabSpan>

        <styles.tabSpan>
          <styles.iconSpan>
            <i className="fas fa-lightbulb fa-2x" />
          </styles.iconSpan>
          <styles.textSpan>666</styles.textSpan>
          <styles.textSpan>Room Tips</styles.textSpan>
        </styles.tabSpan>

      </styles.containerDiv>
    );
  }

}

export default Tabs;
