const express = require('express');
const router = express.Router();

//impor the model and mongoose
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/',(req,res,next)=>{
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/',(req,res,next)=>{
    //create new product
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        stock: req.body.stock,
        likes: req.body.likes
    });
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
            message: 'Added new Product',
            createdProduct: product
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/sort/:sort',(req,res,next)=>{
    //req.params.sort;
    res.status(200).json({
        message: 'Obtain all the products sorted'
    });
});

router.get('/:productName',(req,res,next)=>{
    const name = req.params.productName;
    Product.find({name: name})
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:productId/delete',(req,res,next)=>{
    const id = req.params.productId;
    Product.deleteOne({_id: id})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(200).json({
            message: 'Deleted'
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:productId/priceUpdate',(req,res,next)=>{
    res.status(200).json({
        message: 'Update price'
    });
});

router.post('/:productId/buy',(req,res,next)=>{
    res.status(200).json({
        message: 'Buy a product and modify the stock'
    });
});

router.post('/:productId/like',(req,res,next)=>{
    res.status(200).json({
        message: 'Like a product and modify the likes'
    });
});
router.post('/:productId/delLike',(req,res,next)=>{
    res.status(200).json({
        message: 'Delete the like of a product'
    });
});

module.exports = router;