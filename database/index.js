/* eslint-disable no-console */
const mysql = require('mysql');

let config;
try {
  // eslint-disable-next-line global-require
  config = require('./config.js');
} catch (error) {
  console.error(error);
  console.error('config.js Not Found, Reverting to process.env!');
}

const connection = mysql.createConnection({
  tinyInt1isBit: false,
  host: process.env.RDS_HOSTNAME || config.HOSTNAME,
  user: process.env.RDS_USERNAME || config.USERNAME,
  database: process.env.RDS_DATABASE || config.DATABASE,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

const getLanguages = (callback) => {
  // Here we return the list of Languages in the database
  connection.query('SELECT * FROM Languages', (error, results) => {
    if (error) { callback(error, null); }
    // convert into JSON object for O(1) complexity
    // const data = {};
    // for (let i = 0; i < results.length; i += 1) {
    //   data[results[i].ID] = results[i].title;
    // }

    // console.log(data);
    // callback(null, data);
    callback(null, results);
  });
};

const getReviews = (locationID, callback) => {
  // Here we return the list of Reviews based on the current Location
  connection.query(`SELECT
  Reviews.ID,
  Reviews.title,
  Users.username,
  Users.contributions,
  Users.votes,
  Users.photoUrl,
  Reviews.user_thoughts,
  Reviews.user_tips,
  Reviews.description,
  Reviews.language_ID,
  Reviews.travel_date,
  Reviews.review_date,
  Reviews.travel_type,
  Reviews.rating_overall,
  Reviews.rating_expenses,
  Reviews.rating_location,
  Reviews.rating_rooms,
  Reviews.rating_service,
  Reviews.rating_clean,
  Reviews.rating_sleep,
  Locations.location,
  GROUP_CONCAT(LocationPhotos.url) AS photos
  FROM (((Reviews
  LEFT JOIN LocationPhotos ON Reviews.ID = LocationPhotos.review_ID)
  INNER JOIN Locations ON Reviews.user_location_ID = Locations.ID)
  INNER JOIN Users ON Reviews.user_ID = Users.ID)
  WHERE Reviews.location_ID=${locationID} group by Reviews.ID ORDER BY Reviews.review_date DESC`, (error, results) => {
    if (error) { callback(error, null); }
    callback(null, results);
  });
};
// db.end();
module.exports = {
  connection,
  getLanguages,
  getReviews,
};
