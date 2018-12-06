const express = require('express');
const app = express();

//MIDDLEWARE
const productRoutes = require('./api/resources/products');
const loginRoutes = require('./api/resources/login');
app.use('/products',productRoutes);
app.use('/login',loginRoutes);

/*You could simply add the listen here to the app 
but making it modular helps scalate quickly*/
module.exports = app;