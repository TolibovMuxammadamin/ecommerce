const server = require('../server');
const routes = require('../routes');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = () => {
  server.use(bodyParser.json());
  server.use('/images', express.static(path.join(process.cwd(), 'images')));

  server.use('/', routes);
}