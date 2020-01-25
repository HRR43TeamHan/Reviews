var config;
try {
  config = require('./config.js')
}
catch(error) {
  console.error(error);
  console.error('config.js Not Found, Reverting to process.env!')
}
var mysql = require('mysql');

var db = mysql.createConnection({
  tinyInt1isBit: false,
  host     : process.env.RDS_HOSTNAME || config.HOSTNAME,
  user     : process.env.RDS_USERNAME || config.USERNAME,
  database : process.env.RDS_DATABASE || config.DATABASE,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

db.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

//db.end();
module.exports = db;