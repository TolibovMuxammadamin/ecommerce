const multer = require('multer');
const uniqid = require('uniqid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    let type = '.png';
    if (file.mimetype && file.mimetype.includes('svg')) { type = '.svg' }
    cb(null, uniqid(file.filename + new Date().getTime()) + type);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/svg+xml' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter })