const server = require('../server');
const routes = require('../routes');
const bodyParser = require('body-parser');

module.exports = () => {
  server.use(bodyParser.json());

  server.use('/', routes);
}