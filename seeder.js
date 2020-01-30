const faker = require('faker');
const db = require('./database');
//faker.seed(12);
faker.locale = 'en';
// Because the seeder runs outside of the app we need to first connect to the db
db.connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});
const cursorZero = '\033[;0H';
//created a spinner for the fun of it used more than necessary
var spinner = '-\\|/-\\|/';
var usersCount = 0;
var reviewsCount = 0;

var seedReviews = (amount) => {
  // TODO - add a query to check length of users and use dynamic variable vs static in user_ID

  let seedIt = () =>{
    let overall = faker.random.number(160);
    // this might need some tweaking for proper results
    // we are implementing the following for more realistic looking ratings following a bell curve
    if (overall > 80) {
      // return an excellent rating
      overall = 5;
    } else if (overall > 40) {
      // return a verGood rating
      overall = 4;
    } else if (overall > 20) {
      // return a average rating
      overall = 3;
    } else if (overall > 5) {
      // return a poor rating
      overall = 2;
    } else if (overall <= 5) {
      // return a terrible rating
      overall = 1;
    }
    let t = {
      description: faker.lorem.paragraph(),
      title: faker.random.words(2),
      languageID: faker.random.number(16) + 1,
      locationID: faker.random.number(99) + 1,
      userLocationID: faker.random.number(99) + 1,
      userID: faker.random.number(99) + 1,
      travelDate: faker.date.past(),
      travelType: faker.random.number(4) + 1,
      ratingOverall: overall,
      ratingExpenses: faker.random.number(4) + 1,
      ratingLocation: faker.random.number(4) + 1,
      ratingRooms: faker.random.number(4) + 1,
      ratingService: faker.random.number(4) + 1,
      userThoughts: faker.lorem.sentence(),
      userTips: faker.lorem.paragraph(),
      //  photos VARCHAR(255) NULL,
    };
    let params = [t.description, t.title, t.languageID, t.locationID, t.userLocationID, t.userID, t.travelDate, t.travelType, t.ratingOverall, t.ratingExpenses, t.ratingLocation, t.ratingRooms, t.ratingService, t.userThoughts, t.userTips];
    //TODO - add the photo urls
    db.connection.query('INSERT INTO Reviews (description, title, language_ID, location_ID, user_location_ID, user_ID, travel_date, travel_type, rating_overall, rating_expenses, rating_location, rating_rooms, rating_service, user_thoughts, user_tips) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, data) => {
      if (err) {
        console.log('error seeding Reviews TABLE', err);
        db.end();
      } else {
        reviewsCount++;
        let random = Math.round(Math.random() * 7);
        let spun = spinner[random];
        console.log(' [', spun, '] Entry #', reviewsCount, ' INSERT INTO Reviews... working\033[2;0H');
        if (reviewsCount < amount) {
          seedIt();
        } else {
          console.log('Entry #', reviewsCount, ' INSERT INTO Reviews... Completed 👍      ');
          db.connection.end();
        }
      }
    });
  };
  seedIt();
};

var seedUsers = (amount) => {
  console.clear();
  let seedIt = () => {
    let t = {
      username: faker.name.firstName() + ' ' + faker.name.lastName()
    };
    params = [t.username];
    db.connection.query('INSERT INTO Users (username) VALUES (?)', params, (err, data) => {
      if (err) {
        console.error(err);
        console.log('error seeding Users TABLE');
        db.end();
        return;
      } else {
        usersCount++;
        console.log('Entry# ', usersCount, ' INSERT INTO Users... working\033[;0H');
        if (usersCount < amount) {
          seedIt();
        } else {
          console.log('Entry# ', usersCount, ' INSERT INTO Users... Completed 👍');
          seedReviews(amount * 10000);
        }
      }
    });
  };
  seedIt();
};



seedUsers(100);
