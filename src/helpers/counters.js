export const countRatings = (reviews) => {
  const total = reviews.length;
  const overall = {
    Excellent: {
      amt: 0,
      percent: 0,
    },
    'Very Good': {
      amt: 0,
      percent: 0,
    },
    Average: {
      amt: 0,
      percent: 0,
    },
    Poor: {
      amt: 0,
      percent: 0,
    },
    Terrible: {
      amt: 0,
      percent: 0,
    },
  };
  // console.log(Object.keys(overall));
  reviews.forEach((review) => {
    if (review.rating_overall === 1) {
      overall.Terrible.amt += 1;
    } else if (review.rating_overall === 2) {
      overall.Poor.amt += 1;
    } else if (review.rating_overall === 3) {
      overall.Average.amt += 1;
    } else if (review.rating_overall === 4) {
      overall['Very Good'].amt += 1;
    } else if (review.rating_overall === 5) {
      overall.Excellent.amt += 1;
    }
  });
  overall.Excellent.percent = ((overall.Excellent.amt / total) * 100).toFixed(4);
  overall['Very Good'].percent = ((overall['Very Good'].amt / total) * 100).toFixed(4);
  overall.Average.percent = ((overall.Average.amt / total) * 100).toFixed(4);
  overall.Poor.percent = ((overall.Poor.amt / total) * 100).toFixed(4);
  overall.Terrible.percent = ((overall.Terrible.amt / total) * 100).toFixed(4);
  return { overall, total };
};

export const numberWithCommas = (xx) => {
  const output = xx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return output;
};
