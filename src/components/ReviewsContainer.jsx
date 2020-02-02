import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Global } from '@emotion/core';
import {
  styles,
} from '../css/tabsCSS.js';
import AllFilters from './AllFilters.jsx';
import ReviewsList from './ReviewsList.jsx';
import Paginator from './Paginator.jsx';

class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        rating_overall: {
          excellent: { id: 5, value: false },
          veryGood: { id: 4, value: false },
          average: { id: 3, value: false },
          poor: { id: 2, value: false },
          terrible: { id: 1, value: false },
        },
        travel_date: {},
        travel_type: {},
        language_ID: {},
      },
      filteredOnce: false,
      filteredReviews: [],
      page: 1,
    };
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
  }

  setPage(event) {
    const { target } = event;
    const { id } = target;
    console.log('setting to page:', id);
    this.setState({
      page: Number.parseInt(id, 10),
    });
  }

  filterReviews(filtersObj) {
    const { reviews } = this.props;
    let filteredReviews = reviews;
    // foreach the keys and apply the filter
    const filters = {};
    Object.keys(filtersObj).forEach((key) => {
      filters[key] = [];
      Object.keys(filtersObj[key]).forEach((title) => {
        if (
          key === 'rating_overall'
          || key === 'travel_type'
        ) {
          if (filtersObj[key][title].value === true) {
            filters[key].push(filtersObj[key][title].id);
          }
        } else if (key === 'language_ID') {
          filters[key][0] = filtersObj[key][title].id;
        } else if (key === 'travel_date' && filtersObj[key][title].value === true) {
          if (filtersObj[key][title].id === 1) {
            // Mar - May
            filters[key].push(2); // March
            filters[key].push(3); // April
            filters[key].push(4); // May
          } else if (filtersObj[key][title].id === 2) {
            // Jun - Aug
            filters[key].push(5); // June
            filters[key].push(6); // July
            filters[key].push(7); // August
          } else if (filtersObj[key][title].id === 3) {
            // Sep - Nov
            filters[key].push(8); // September
            filters[key].push(9); // October
            filters[key].push(10); // November
          } else if (filtersObj[key][title].id === 4) {
            // Dec - Feb
            filters[key].push(11); // December
            filters[key].push(0); // January
            filters[key].push(1); // February
          }
        }
      });
    });
    filteredReviews = filteredReviews.filter((review) => {
      // TODO fix the months filter
      const filterRating = filters.rating_overall.includes(review.rating_overall)
        || filters.rating_overall.length === 0;
      const reviewDate = new Date(review.travel_date).getMonth();

      const filterDate = filters.travel_date.includes(reviewDate)
        || filters.travel_date.length === 0;

      const filterType = filters.travel_type.includes(review.travel_type)
        || filters.travel_type.length === 0;

      // const filterLanguage = filters.language_ID === review.language_ID
      // || filters.language_ID === 0;
      const filterLanguage = true;

      if (filterRating && filterType && filterLanguage && filterDate) {
        return true;
      }
      return false;
    });
    // Set the filteredReviews state
    this.setState({
      filteredReviews,
      filteredOnce: true,
    });
  }

  handleToggleFilter(event) {
    const { target } = event;
    const { name, value, id } = target;
    const { filters } = this.state;
    const currentFilters = { ...filters };
    // id for DOM element is in string so we make it a number for easing filtering function
    currentFilters[name][value] = currentFilters[name][value] || {};
    currentFilters[name][value].id = Number(id);
    currentFilters[name][value].value = !currentFilters[name][value].value;
    console.log('filters:', currentFilters);
    this.setState({
      filters: currentFilters,
      page: 1,
    });
    // after we toggle the filter we need to filter the results
    // using the currentState variable will speed up the function reducing the
    // requirement for the state to be set first
    this.filterReviews(currentFilters);
  }

  render() {
    const {
      languageCount,
      reviewsAmt,
      reviews,
      overall,
    } = this.props;
    const { handleToggleFilter, setPage } = this;
    const { page, filteredReviews, filteredOnce } = this.state;
    let currentReviews;
    if (!filteredOnce) {
      currentReviews = reviews;
    } else {
      currentReviews = filteredReviews;
    }
    // TODO - consider using splice vs filter for pagination...perhaps less complexity
    const filteredReviewsAmt = currentReviews.length;
    const start = (page === 1) ? 0 : (page * 10) - 1;
    const end = (page === 1) ? 10 : ((page + 1) * 10) - 1;
    const paginatedReviews = currentReviews.slice(start, end);
    console.log('paginatedReviews:', paginatedReviews);
    // console.log('paginate: ', paginatedReviews);
    // console.log('page: ', page);
    // console.log('paginated: ', paginatedReviews);
    return (
      <div>

        <Global styles={styles.global} />

        <div>
          <styles.headerOuterDiv>
            <styles.headerInnerDiv>
              <styles.headerText>Reviews</styles.headerText>
              <div />
              <styles.buttonsDiv>
                <styles.writeReviewBtnDiv>
                  Write a Review
                </styles.writeReviewBtnDiv>
                <styles.optionBtnDiv>
                  <i className="fas fa-sort-down" />
                </styles.optionBtnDiv>
              </styles.buttonsDiv>
            </styles.headerInnerDiv>
          </styles.headerOuterDiv>
        </div>
        {/* TODO - Replace Filters with Compnent vs being here */}
        <div>

          <AllFilters
            overall={overall}
            reviewsAmt={reviewsAmt}
            languageCount={languageCount}
            handleToggleFilter={handleToggleFilter}
          />
          <ReviewsList paginatedReviews={paginatedReviews} />
          <Paginator page={page} reviewsAmt={filteredReviewsAmt} setPage={setPage} />
        </div>
      </div>

    );
  }
}

ReviewsContainer.defaultProps = {
  languageCount: undefined,
};

ReviewsContainer.propTypes = {
  languageCount: PropTypes.shape(
    { 0: PropTypes.shape({ title: PropTypes.string, value: PropTypes.number }) },
  ),
  reviewsAmt: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  overall: PropTypes.shape(
    {
      firstFormat: PropTypes.shape({ amt: PropTypes.string, percent: PropTypes.string }),
      secondFormat: PropTypes.shape({ amt: PropTypes.number, percent: PropTypes.number }),
    },
  ).isRequired,
};

export default ReviewsContainer;
