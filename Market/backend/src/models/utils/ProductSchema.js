const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    photos: [String],
    for_sale: Boolean,
    price: Number,
    transaction_location: {
        type: PointSchema,
        index: '2dsphere'
    }

})

module.exports = mongoose.model('Product', ProductSchema);