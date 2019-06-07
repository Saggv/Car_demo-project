const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        name: {
             type: String,
             required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        speed: {
            type: String
        },
        capacity: {
            type: String
        },
        maxspeed: {
            type: String
        },
        mass: {
            type: String
        },
        manufacture: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
});

const ProductModel = mongoose.model('ProductModel', productSchema, 'Product');

module.exports = ProductModel;