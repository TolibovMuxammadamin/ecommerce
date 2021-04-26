const server = require('./server');
const middlewares = require('./middlewares');
const db = require('./database');
const path = require('path');
const express = require('express');

middlewares();

db
  .sync({ force: true, logging: false })
  .then(() => {
    console.log('Server running on http://localhost:5000');

    middlewares();

    server.listen(5000);
  })
  .catch(err => {
    console.log(err);
  })