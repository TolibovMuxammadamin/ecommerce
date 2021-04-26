const router = require('express').Router();
const { getProducts } = require('../controllers');

router.use('/user', require('./userRoute'));

router.get('/products', getProducts);

module.exports = router;