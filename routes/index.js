const router = require('express').Router();
const { getProducts, getUsers } = require('../controllers');

router.get('/users/:id', getUsers);

router.get('/products', getProducts);

module.exports = router;