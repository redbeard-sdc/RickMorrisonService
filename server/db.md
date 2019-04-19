Schema:

  DROP DATABASE IF EXISTS hotelPricing;

  CREATE DATABASE hotelPricing;

  \c hotelPricing;

  CREATE TABLE pricing (
    id SERIAL,
    day int(11) DEFAULT NULL,
    roomAvail BOOLEAN,
    Priceline int(11) DEFAULT NULL,
    Booking int(11) DEFAULT NULL,
    Hotels int(11) DEFAULT NULL,
    OfficialHotelSite int(11) DEFAULT NULL,
    Expedia int(11) DEFAULT NULL,
    TripAdvisor int(11) DEFAULT NULL,
    Orbitz int(11) DEFAULT NULL,
    Hotwire int(11) DEFAULT NULL,
    Agoda int(11) DEFAULT NULL,
    CheapTickets int(11) DEFAULT NULL,
    PRIMARY KEY (id)
  );

GET Route (to be refactored in Cloud Firestore or PostgreSQL):

  app.get('/prices/:date', (req, res) => {
    const { date } = req.params;
    const query = `SELECT * FROM hotelpricing WHERE hotelpricing.bookDate_old = "${date}"`;
    connection.query(query, (err, results) => {
      err ? res.status(404).json(err) : res.status(200).json(results);
    });
  });
