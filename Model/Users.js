const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
       name: {
            type: String,
            required: true
       },
       email: {
            type: String,
            required: true
       },
       password: {
            type: String,
            required: true
       },
       register_date: {
            type: Date,
            default: Date.now
       }
});

const UserModel = mongoose.model('UserModel', userSchema, 'users');

module.exports = UserModel;