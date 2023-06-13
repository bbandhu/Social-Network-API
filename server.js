const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

// Importing routes
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using routes
app.use(routes);


mongoose.connect('mongodb://localhost:27017/social-network-api')
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));