var mysql = require('mysql');
var config;
try {
  config = require('./config.js')
}
catch (error) {
  console.error(error);
  console.error('config.js Not Found, Reverting to process.env!')
}

const connection = mysql.createConnection({
  tinyInt1isBit: false,
  host: process.env.RDS_HOSTNAME || config.HOSTNAME,
  user: process.env.RDS_USERNAME || config.USERNAME,
  database: process.env.RDS_DATABASE || config.DATABASE,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});

const getLanguages = (callback) => {
  // Here we return the list of Languages in the database
  connection.query('SELECT * FROM Languages', (error, results, fields) => {
    if (error) callback(error, null);
    console.log('fields: ', fields);
    // convert into JSON object for O(1) complexity
    var data = {};
    for (var i = 0; i < results.length; i++) {
      data[results[i].ID] = results[i].title;
    }

    console.log(data);
    callback(null, data);
  });
}

const getReviews = (location_ID, callback) => {
  // Here we return the list of Reviews based on the current Location
  connection.query(`SELECT * FROM Reviews WHERE location_ID=${location_ID}`, (error, results, fields) => {
    if (error) callback(error, null);
    callback(null,results);
  })
}
//db.end();
module.exports = {
  connection,
  getLanguages,
  getReviews
};