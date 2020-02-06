/* eslint-disable no-console */
const express = require('express');
const db = require('../database');

const app = express();


const PORT = process.env.REVIEWS_PORT || 50000;


// Create database connection
db.connection.connect((err) => {
  if (err) {
    console.error(`Database connection failed: ${err.stack}`);
    return;
  }
  console.log('Connected to database.');
});
// Serve the bundle file for proxy server access
app.use('/bundle.js', express.static(__dirname + '/../public/bundle.js'));
// Serve the public folder for client
app.use('/:location_id', express.static('public'));
// Use JSON for data parsing
app.use(express.json());


// Router for the API per https://expressjs.com/en/guide/routing.html
app.get('/api/reviews/languages/', (req, res) => {
  db.getLanguages((error, data) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'something blew up' });
    } else {
      res.status(200).send(data);
    }
  });
  console.log(req.body);
});

app.get(`/api/reviews/:location_id/`, (req, res) => {
  // TODO - place the db function for GET reviews here
  db.getReviews(req.params.location_id, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'something blew up' });
    } else {
      console.log(req.params);
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌐  Listening on port ${PORT}!  🌐`);
});
