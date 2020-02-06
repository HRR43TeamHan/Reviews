-- DROP DATABASE IF EXISTS HRR43_FEC;

CREATE DATABASE IF NOT EXISTS HRR43_FEC;

USE HRR43_FEC;

DROP TABLE IF EXISTS HRR43_FEC.Languages;

CREATE TABLE Languages (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(16) NOT NULL,
  UNIQUE (title),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS HRR43_FEC.Users;

CREATE TABLE Users (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  photoUrl VARCHAR(100),
  username VARCHAR(24),
  contributions INTEGER NOT NULL DEFAULT 0,
  votes INTEGER NOT NULL DEFAULT 0,
  `password` VARCHAR(255),
  `created-at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (username),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS HRR43_FEC.Locations;

CREATE TABLE Locations (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  location VARCHAR(48),
  UNIQUE (location),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS HRR43_FEC.Reviews;

CREATE TABLE Reviews (
  ID int NOT NULL AUTO_INCREMENT,
  description TEXT NOT NULL,
  title VARCHAR(121) NOT NULL,
  language_ID INTEGER NOT NULL,
  location_ID INTEGER NOT NULL,
  user_location_ID INTEGER NOT NULL,
  user_ID INTEGER NOT NULL,
  travel_date DATE NOT NULL,
  review_date DATE NOT NULL,
  travel_type TINYINT(1) NOT NULL,
  rating_overall TINYINT(1) DEFAULT 0,
  rating_expenses TINYINT(1) DEFAULT 0,
  rating_location TINYINT(1) DEFAULT 0,
  rating_rooms TINYINT(1) DEFAULT 0,
  rating_service TINYINT(1) DEFAULT 0,
  rating_clean TINYINT(1) DEFAULT 0,
  rating_sleep TINYINT(1) DEFAULT 0,
  user_thoughts TEXT NULL,
  user_tips TEXT NULL,
  photos VARCHAR(255) NULL,
  `created-at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (location_ID) REFERENCES Locations(ID),
  FOREIGN KEY (user_ID) REFERENCES Users(ID),
  FOREIGN KEY (language_ID) REFERENCES Languages(ID),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS HRR43_FEC.LocationPhotos;

CREATE TABLE LocationPhotos (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  review_ID INTEGER NOT NULL,
  url VARCHAR(200) NOT NULL,
  FOREIGN KEY (review_ID) REFERENCES Reviews(ID),
  PRIMARY KEY (ID)
);

INSERT INTO Locations (location) VALUES
 ("Tatooine"), ("Mytus VII"), ("J't'p'tan"), ("Yavin 4"), ("Kuat"), ("Almania"), ("Nim Drovis"), ("Antar Four"), ("Bothawui"), ("Sullust"), ("Chandrila"), ("Borleias"), ("Pzob"), ("Taanab"), ("Ambria"), ("Umgul"), ("Thyferra"), ("Khomm"), ("Munto Codru"), ("Yavin 8"), ("Ryloth"), ("Firrerre"), ("Alderaan"), ("Agamar"), ("Bimmisaari"), ("Aridus"), ("Ylesia"), ("Balmorra"), ("Abregado-rae"), ("Mrlsst"), ("Kessel"), ("Kothlis"), ("Bespin"), ("Galantos"), ("Pydyr"), ("Ord Mantell"), ("Teyr"), ("Nam Chorios"), ("Atzerri"), ("Dagobah"), ("Nkllon"), ("Hapes"), ("Kashyyyk"), ("Vergesso Asteroids"), ("Coruscant"), ("Zhar"), ("Mon Calamari"), ("Tynna"), ("Corellia"), ("Onderon"), ("Byss"), ("Bestine IV"), ("Alzoc III"), ("Sacorria"), ("Nal Hutta and Nar Shaddaa"), ("Carida"), ("Barab I"), ("Mimban"), ("Dathomir"), ("N'zoth"), ("Myrkr"), ("Selonia"), ("Eriadu"), ("Roon"), ("Dellalt"), ("Belsavis"), ("Ralltiir"), ("Ammuud"), ("Bakura"), ("Ithor"), ("Da Soocha V"), ("Rafa V"), ("Ossus"), ("Bilbringi"), ("Ando"), ("Garos IV"), ("Talus), (Tralus), (and Centerpoint Station"), ("Dantooine"), ("Duro"), ("Rodia"), ("Etti IV"), ("Drall"), ("Yavin 13"), ("Vortex"), ("Fondor"), ("Aquaris"), ("Telti"), ("Korriban"), ("Arkania"), ("Lwhekk"), ("Hoth"), ("Endor"), ("M'haeli"), ("Anoth"), ("Honoghr"), ("Gamorr"), ("Wayland"), ("Carratos"), ("Talasea"), ("Kalarba");

INSERT INTO Languages (title) VALUES
 ("ENGLISH"), ("HINDI"), ("ARABIC"), ("PORTUGUESE"), ("BENGALI"), ("RUSSIAN"), ("JAPANESE"), ("LAHNDA"), ("JAVANESE"), ("GERMAN"), ("KOREAN"), ("FRENCH"), ("TELUGU"), ("TURKISH"), ("TAMIL"), ("VIETNAMESE"), ("URDU");