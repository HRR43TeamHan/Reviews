const express = require('express');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3000;
// TODO - implement solution for backend

// Create GET API endpoint
// TODO - Create all database connections
// TODO -

// Serve the public folder for client
app.use(express.static(__dirname + '/../public'));

// Router for the API per https://expressjs.com/en/guide/routing.html
app.get('/api/reviews/:location_id/', (req, res) => {
  console.log(req.params);
  res.send(req.params);


  // TODO - place the db function for GET reviews here
})
app.listen(PORT, () => {
  console.log(`🌐  Listening on port ${PORT}!  🌐`);
});