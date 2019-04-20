Schema:

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

GET Route (to be refactored in Cloud Firestore or PostgreSQL):

  const getPricesByDay = (req, res) => {
    const { day } = req.params;
    const sql = `SELECT * FROM pricing WHERE id=${day + 1};`;

    pool.query(sql, (err, results) => {
      if (err) {
        res.status(404).json('Connot process request');
      } else {
        res.status(200).json(results);
      }
    });
  };

  app.get('/prices/:day', db.getPricesByDay);
