/* eslint-disable arrow-body-style */
import axios from 'axios';

export const getLanguages = () => {
  return axios.get('/../api/reviews/languages')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getReviews = (ID) => {
  return axios.get(`/../api/reviews/${ID}`)
    .then((response) => {
      // TODO - handle the success
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getQA = (ID) => {
  return axios.get(`/../api/reviews/QA/${ID}`)
    .then((response) => {
      // TODO - handle the success
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getRoomTips = (ID) => {
  return axios.get(`/../api/reviews/RoomTips/${ID}`)
    .then((response) => {
      // TODO - handle the success
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
