const { db_PG, client } = require('./db_PG');

const getPricesByDay = (req, res) => {
  const { day } = req.params;
  const sql = `SELECT * FROM pricing WHERE id=${Number(day) + 1};`;

  db_PG.query(sql, (err, results) => {
    if (err) {
      res.status(404).json('Cannot process request');
    } else {
      client.set(day, JSON.stringify(results), 'EX', 3600);
      res.status(200).json(results);
    }
  });
};

const checkRedisCache = (req, res, next) => {
  const { day } = req.params;

  client.get(`${day}`, (err, results) => {
    if (err) {
      console.log('Redis query error...');
    } else if (results !== null) {
      res.status(200).json(JSON.parse(results));
    } else {
      next();
    }
  });
};

module.exports = {
  getPricesByDay,
  checkRedisCache,
};
