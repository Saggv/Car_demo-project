const express = require('express');
const ProductModel = require('../Model/ProductModel');
const router = express.Router();
const auth = require("../Middleware/Auth");

router.post('/product', auth, (req, res)=>{
      const newProduct = new ProductModel({
        name:req.body.name,
        price:req.body.price,
        description: parseInt(req.body.description),
        image:req.body.image,
        speed: req.body.speed,
        capacity: req.body.capacity,
        maxspeed: req.body.maxspeed,
        mass: req.body.mass,
        manufacture: req.body.manufacture
      });
       newProduct.save().then( item => res.json(item));
});

router.get('/product', (req, res) =>{
       ProductModel.find().then( item => res.json(item))
})

router.delete('/delete/:id', auth, (req, res) =>{
        // ProductModel.findById(req.params.id).then( item => item.remove().then( id => res.json(id)));
        ProductModel.findByIdAndRemove(req.params.id).then( item => res.json(item));
})

module.exports = router;