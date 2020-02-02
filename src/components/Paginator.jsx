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
  const totalPages = Math.floor(reviewsAmt / 10);
  if (page === 1 || page <= 4) {
    return (
      <PaginationContainer>
        <PageNumContainer>
          <PageNum onClick={setPage} id={1} name="page">1</PageNum>
          <PageNum onClick={setPage} id={2} name="page">2</PageNum>
          <PageNum onClick={setPage} id={3} name="page">3</PageNum>
          <PageNum onClick={setPage} id={4} name="page">4</PageNum>
          <PageNum onClick={setPage} id={5} name="page">5</PageNum>
          <PageNum onClick={setPage} id={6} name="page">6</PageNum>
          <span> ... </span>
          <PageNum onClick={setPage} id={totalPages} name="page">{totalPages}</PageNum>
        </PageNumContainer>
      </PaginationContainer>
    );
  }

  if (page > 4 && page < totalPages - 4) {
    return (
      <PaginationContainer>
        <PageNumContainer>
          <PageNum onClick={setPage} id={1} name="page">1</PageNum>
          <span> ... </span>
          <PageNum onClick={setPage} id={page - 2} name="page">{page - 2}</PageNum>
          <PageNum onClick={setPage} id={page - 1} name="page">{page - 1}</PageNum>
          <PageNum id={page} name="page">{page}</PageNum>
          <PageNum onClick={setPage} id={page + 1} name="page">{page + 1}</PageNum>
          <PageNum onClick={setPage} id={page + 2} name="page">{page + 2}</PageNum>
          <span> ... </span>
          <PageNum onClick={setPage} id={totalPages} name="page">{totalPages}</PageNum>
        </PageNumContainer>
      </PaginationContainer>
    );
  }

  if (page <= totalPages) {
    return (
      <PaginationContainer>
        <PageNumContainer>
          <PageNum onClick={setPage} id={1} name="page">1</PageNum>
          <span> ... </span>
          <PageNum onClick={setPage} id={totalPages - 5} name="page">{totalPages - 5}</PageNum>
          <PageNum onClick={setPage} id={totalPages - 4} name="page">{totalPages - 4}</PageNum>
          <PageNum onClick={setPage} id={totalPages - 3} name="page">{totalPages - 3}</PageNum>
          <PageNum onClick={setPage} id={totalPages - 2} name="page">{totalPages - 2}</PageNum>
          <PageNum onClick={setPage} id={totalPages - 1} name="page">{totalPages - 1}</PageNum>
          <PageNum onClick={setPage} id={totalPages} name="page">{totalPages}</PageNum>
        </PageNumContainer>
      </PaginationContainer>
    );
  }
  if (page === totalPages) {
    return (
      <div>if (page === last) = 1... N-5 N-4 N-3 N-2 N-1 ####</div>
    );
  }
  return (null);
};

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paginator;
