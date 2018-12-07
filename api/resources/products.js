const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Obtain all the products'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Add new product'
    });
});

router.get('/sort/:sort',(req,res,next)=>{
    //req.params.sort;
    res.status(200).json({
        message: 'Obtain all the products sorted'
    });
});

router.get('/:productName',(req,res,next)=>{
    res.status(200).json({
        message: 'Obtain a product by its name'
    });
});

router.delete('/:productId/delete',(req,res,next)=>{
    res.status(200).json({
        message: 'Delete a product'
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