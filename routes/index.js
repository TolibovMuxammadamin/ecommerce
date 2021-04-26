const router = require('express').Router();
const { getProducts } = require('../controllers');

router.use('/user', require('./UserRoute'));

router.get('/products', getProducts);

module.exports = router;