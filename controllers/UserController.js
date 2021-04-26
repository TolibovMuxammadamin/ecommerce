const User = require('../models/UserModel');

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll({
    attributes: {
      exclude: 'password'
    }
  });

  res.json(users);
}

exports.createUser = async (req, res, next) => {
  try {
    console.log(req.files);

    if (req.files && req.files.length > 0) {
      const avatar = req.files.find(file => file.fieldname === 'avatar');

      console.log(avatar);
      if (avatar) { req.body.avatar = avatar.path.split('\\').join('/') }
    }
    console.log(req.body);
    const createdUser = await User.create(req.body);

    res.json(createdUser);
  } catch (error) {
    res.json(error);
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    let user = await User.findByPk(req.body.id);

    for (const key in req.body)
      user[key] = req.body[key];

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    console.log(req.params);
    const user = await User.findByPk(req.params.id);

    await user.destroy();

    res.status(200).json({ 'message': 'User deleted' });
  } catch (error) {

  }
}