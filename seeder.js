const faker = require('faker');
const db = require('./database')
//faker.seed(12);


// Because the seeder runs outside of the app we need to first connect to the db
db.connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});


//insert 200-300 reviews per location
var usersCount = 0;
var reviewsCount = 0;
var seedUsers = (amount) => {
  let seedIt = () => {
    let t = {
      username: faker.name.firstName() + ' ' + faker.name.lastName()
    }
    params = [t.username]
    db.connection.query('INSERT INTO Users (username) VALUES (?)', params, (err, data) => {
      if (err) {
        console.error(err);
        console.log('error seeding Users TABLE');
        db.end();
        return;
      } else {
        usersCount++;
        console.log('Entry# ', usersCount, ' INSERT INTO Users... Complete')
        if (usersCount < amount) {
          seedIt();
        } else {
          seedReviews(amount * 100)
        }
      }
    });
  }
  seedIt();
}

var seedReviews = (amount) => {
  // TODO - add a query to check length of users and use dynamic variable vs static in user_ID
  let seedIt = () =>{
    let t = {
      description: faker.lorem.paragraph(),
      title: faker.lorem.words(3),
      language_ID: faker.random.number(16) + 1,
      location_ID: faker.random.number(99) + 1,
      user_location_ID: faker.random.number(99) + 1,
      user_ID: faker.random.number(99) + 1,
      travel_date: faker.date.past(),
      travel_type: faker.random.number(4) + 1,
      rating_overall: faker.random.number(4) + 1,
      rating_expenses: faker.random.number(4) + 1,
      rating_location: faker.random.number(4) + 1,
      rating_rooms: faker.random.number(4) + 1,
      rating_service: faker.random.number(4) + 1,
      user_thoughts: faker.lorem.sentence(),
      user_tips: faker.lorem.paragraph(),
      //  photos VARCHAR(255) NULL,
    }
    let params = [t.description, t.title, t.language_ID, t.location_ID, t.user_location_ID, t.user_ID, t.travel_date, t.travel_type, t.rating_overall, t.rating_expenses, t.rating_location, t.rating_rooms, t.rating_service, t.user_thoughts, t.user_tips];
    //TODO - add the photo urls
    db.connection.query('INSERT INTO Reviews (description, title, language_ID, location_ID, user_location_ID, user_ID, travel_date, travel_type, rating_overall, rating_expenses, rating_location, rating_rooms, rating_service, user_thoughts, user_tips) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, data) => {
      if (err) {
        console.log('error seeding Reviews TABLE', err);
        db.end();
      } else {
        reviewsCount++;
        console.log('Entry #', reviewsCount, ' INSERT INTO Reviews... Complete');
        if (reviewsCount < amount) {
          seedIt();
        } else {
          db.connection.end();
        }
      }
    });
  }
  seedIt();
}

seedUsers(100);
