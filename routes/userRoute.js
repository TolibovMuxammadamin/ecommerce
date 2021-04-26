const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.getUsers);

router.post('/create', UserController.createUser);

router.put('/update', UserController.updateUser);

router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;