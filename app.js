const app = require('./server');
const bodyParser = require('body-parser');
const routes = require('./routes');;
// const cors = require('cors')

app.use(bodyParser.json());
// app.use(cors());

app.use(routes);

try {
  console.log('App running on http://localhost:5000');
  app.listen(5000);
} catch (e) {
  console.log(e);
}