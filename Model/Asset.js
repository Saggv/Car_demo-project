const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
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

const AssetModel = mongoose.model('AssetModel', assetSchema, 'asset');

module.exports = AssetModel;