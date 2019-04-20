DROP DATABASE IF EXISTS hotel_pricing;

CREATE DATABASE hotel_pricing;

\c hotel_pricing;

CREATE TABLE pricing (
  id SERIAL,
  day INT,
  roomAvail BOOLEAN,
  Priceline VARCHAR(20),
  Booking VARCHAR(20),
  Hotels VARCHAR(20),
  OfficialHotelSite VARCHAR(20),
  Expedia VARCHAR(20),
  TripAdvisor VARCHAR(20),
  Orbitz VARCHAR(20),
  Hotwire VARCHAR(20),
  Agoda VARCHAR(20),
  CheapTickets VARCHAR(20),
  PRIMARY KEY (id)
);

/* CSV import command */

-- COPY pricing (day, roomAvail, Priceline, Booking, Hotels, OfficialHotelSite, Expedia, TripAdvisor, Orbitz, Hotwire, Agoda, CheapTickets)
-- FROM '/Users/danslaptop/ghrden01-Repos/SDC/RickMorrisonService/data.csv' DELIMITER ',' CSV HEADER;

-- INSERT INTO pricing VALUES (0,0,true,163,167,174,146,190,178,183,179,190,183);

/* psql -f postgres.sql in terminal to run file */




/* Alternate Schema, potential future refactor */

-- CREATE TABLE hotels (
--   id SERIAL,
--   name varchar(50) NOT NULL,
--   rooms int(11),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE dates (
--   id SERIAL,
--   day varchar(30)
-- );

-- CREATE TABLE pricing (
--   id SERIAL,
--   hotel_id REFERENCES hotels(id),
--   dates_id REFERENCES dates(id),
--   roomAvail BOOLEAN,
--   Priceline int(11) DEFAULT NULL,
--   Booking int(11) DEFAULT NULL,
--   Hotels int(11) DEFAULT NULL,
--   OfficialHotelSite int(11) DEFAULT NULL,
--   Expedia int(11) DEFAULT NULL,
--   TripAdvisor int(11) DEFAULT NULL,
--   Orbitz int(11) DEFAULT NULL,
--   Hotwire int(11) DEFAULT NULL,
--   Agoda int(11) DEFAULT NULL,
--   CheapTickets int(11) DEFAULT NULL,
--   PRIMARY KEY (id)
-- );