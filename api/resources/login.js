const express = require('express');
const router = express.Router();

router.post('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Login'
    });
});

module.exports = router;