const router = require('express').Router();
const UserController = require('../controllers/UserController');
const imageHandler = require('../utilities/imageHandler');

router.get('/', UserController.getUsers);

router.post('/create', imageHandler.any(), UserController.createUser);

router.put('/update', imageHandler.any(), UserController.updateUser);

router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;