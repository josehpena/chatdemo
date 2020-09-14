const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const Product = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: String,
  product: Product,
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('User', UserSchema);