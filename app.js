const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//MIDDLEWARE
const productRoutes = require('./api/resources/products');
const loginRoutes = require('./api/resources/login');
//Routes handlng the requests
app.use('/products',productRoutes);
app.use('/login',loginRoutes);

//Handle errors related with resources.
app.use((req,res,next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
});
//Other errors.
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

/*You could simply add the listen here to the app 
but making it modular helps scalate quickly*/
module.exports = app;