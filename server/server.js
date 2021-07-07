require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


// ***** Connection to PostgreSQL database *****

const { getPricesByDay, checkRedisCache } = require('./queries_PG');

app.get('/prices/:day', checkRedisCache, getPricesByDay);


// ***** Connection to Google Cloud Firestore database *****

// const db_FB = require('./queries_FB');

// app.get('/prices/:day', db_FB.getPricesByDay);


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
