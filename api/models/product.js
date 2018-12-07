const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    brand: String,
    price: Number,
    stock: Number,
    likes: Number
});

module.exports = mongoose.model('Product',productSchema);