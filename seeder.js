const faker = require('faker');
const db = require('./database');
//faker.seed(12);
faker.locale = 'en';
// Because the seeder runs outside of the app we need to first connect to the db
db.connection.connect(function (err) {
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
// Following is format for S3 bucket access
// https://hrr43fecheskett.s3.us-east-2.amazonaws.com/users/01.jpg
// https://hrr43fecheskett.s3.us-east-2.amazonaws.com/location/01.jpg
var seedReviews = (amount) => {
  // TODO - add a query to check length of users and use dynamic variable vs static in user_ID

  let seedIt = () => {
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


    let paraNum = faker.random.number(30);
    let travelDate = faker.date.past();
    let reviewDate = new Date(travelDate.setMonth(travelDate.getMonth() + faker.random.number(3)));
    reviewDate.setDate(reviewDate.getDate() + faker.random.number(10));
    let t = {
      description: faker.lorem.paragraph(paraNum),
      title: faker.random.words(2),
      languageID: faker.random.number(16) + 1,
      locationID: faker.random.number(99) + 1,
      userLocationID: faker.random.number(99) + 1,
      userID: faker.random.number(99) + 1,
      travelDate: travelDate,
      reviewDate: reviewDate,
      travelType: faker.random.number(4) + 1,
      ratingOverall: overall,
      ratingExpenses: faker.random.number(5),
      ratingLocation: faker.random.number(5),
      ratingRooms: faker.random.number(5),
      ratingService: faker.random.number(5),
      ratingClean: faker.random.number(5),
      ratingSleep: faker.random.number(5),
      userThoughts: faker.lorem.sentence(),
      userTips: faker.lorem.paragraph(),
      //  photos VARCHAR(255) NULL,
    };
    let params = [t.description, t.title, t.languageID, t.locationID, t.userLocationID, t.userID, t.travelDate, t.reviewDate, t.travelType, t.ratingOverall, t.ratingExpenses, t.ratingLocation, t.ratingRooms, t.ratingService, t.ratingClean, t.ratingSleep, t.userThoughts, t.userTips];
    //TODO - add the photo urls
    db.connection.query('INSERT INTO Reviews (description, title, language_ID, location_ID, user_location_ID, user_ID, travel_date, review_date, travel_type, rating_overall, rating_expenses, rating_location, rating_rooms, rating_service, rating_clean, rating_sleep, user_thoughts, user_tips) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, data) => {
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
          seedLocationPhotos();
        }
      }
    });
  };
  seedIt();
};

var seedUsers = (amount) => {
  console.clear();
  let seedIt = () => {
    let randomIndex = faker.random.number(24) + 1;
    if (randomIndex < 10) randomIndex = '0' + randomIndex;
    const photoUrl = `https://hrr43fecheskett.s3.us-east-2.amazonaws.com/users/${randomIndex}.jpg`;
    let t = {
      username: faker.name.firstName() + ' ' + faker.name.lastName(),
      contributions: faker.random.number(250),
      votes: faker.random.number(150),
      photoUrl: photoUrl,
    };
    params = [t.username, t.contributions, t.votes, t.photoUrl];
    db.connection.query('INSERT INTO Users (username, contributions, votes, photoUrl) VALUES (?, ?, ?, ?)', params, (err, data) => {
      if (err) {
        console.error(err);
        console.log('error seeding Users TABLE');
        db.connection.end();
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

var seedLocationPhotos = () => {
  // TODO - get amount of reviews to work with
  // seed location photos based on reviews
  var photoSeedCount = 0;
  var totalReviews = 0;
  var seedPhotos = () => {

      let photocount = 0;
      if (faker.random.number(100) > 60) photocount = faker.random.number(6)

      let photos = [];
      while (photos.length < photocount) {
        let id = faker.random.number(45);
        if (id === 0) id = 1;
        if (id < 10) id = '0' + id;
        let currentPhoto = `https://hrr43fecheskett.s3.us-east-2.amazonaws.com/locations/${id}.jpg`
        photos.push(currentPhoto);
      }

      photoSeedCount += 1;
      if (photos.length) {
        // `INSERT INTO test (id) VALUES ("${myArray.join('"),("')}")`   values (1,2),(1,2),(1,2)
        let photosa = photos.join(`",${photoSeedCount}),("`);
        var queryString =
          `INSERT INTO LocationPhotos (url, review_id) VALUES ("${photosa}", ${photoSeedCount})`;
        db.connection.query(queryString, photos, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(' Review #', photoSeedCount,' ', photos.length,'X INSERT INTO LocationPhotos... working\033[3;0H');
            if (photoSeedCount < totalReviews - 10) {
              seedPhotos();
            } else {
              db.connection.end();
            }
          }
        });

    } else {
      seedPhotos();
    }

  };
    db.connection.query('SELECT COUNT(*) as total FROM Reviews', (err, result) => {
      if (err) {
        db.connection.end();
      } else {
        // console.log('Seeding ', result[0].total, 'reviews...');
        totalReviews = result[0].total;
        seedPhotos();
      }
    });
}

seedUsers(100);
