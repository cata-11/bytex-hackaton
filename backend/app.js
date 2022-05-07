const express = require('express');

const bodyParser = require('body-parser');

const db = require('./util/database');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const usersRoutes = require('./routes/users');

app.use(usersRoutes);

app.use((err, req, res, next) => {
  let message;
  let statusCode;

  if (!err.message) {
    message = 'Internal server error';
  } else {
    message = err.message;
  }
  if (!err.statusCode) {
    statusCode = 500;
  } else {
    statusCode = err.statusCode;
  }

  res.status(statusCode).json({ message: message, statusCode: statusCode });
});

db.authenticate()
  .then(() => {
    console.log('Connected to the db...');
    app.listen(5000);
  })
  .catch((err) => console.log('Error: ' + err));
