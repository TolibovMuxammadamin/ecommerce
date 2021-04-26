const server = require('./server');
const middlewares = require('./middlewares');
const db = require('./database');

middlewares();

db
  .sync({ force: false, logging: false })
  .then(() => {
    console.log('Server running on http://localhost:5000');

    middlewares();

    server.listen(5000);
  })
  .catch(err => {
    console.log(err);
  })