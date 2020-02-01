import React from 'react';
import PropTypes from 'prop-types'; // ES6

import {
  PaginationContainer,
  PreviousButton,
  NextButton,
  PageNumContainer,
  SelectedPageNum,
  PageNum,
} from '../css/paginatorCSS.js';

const Paginator = (props) => {
  const { reviewsAmt, page, setPage } = props;
  const totalPages = Math.round(reviewsAmt / 10);
  let paginator = null;
  if (page === 1) {
    return (
      <PaginationContainer>
        <div style={{ display: 'inline-block' }}>
          Current page
      {page}
          <div>if (page == 1) = 1 2 3 4 5 6 ...{totalPages}</div>
        </div>
      </PaginationContainer>
    );
  }

  if (page > 4 && page < totalPages - 5) {
    return (
      <div>if (page >= 5) = 1... N-2 N-1 N N+1 N+2 ...####</div>
    );
  }

  if (page < totalPages) {
    return (
      <div>if (page >= 5) = 1... N-2 N-1 N N+1 N+2 ####</div>
    );
  }
  if (page === totalPages) {
    return (
      <div>if (page === last) = 1... N-5 N-4 N-3 N-2 N-1 ####</div>
    );
  }
  return ({ paginator });
};

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paginator;
