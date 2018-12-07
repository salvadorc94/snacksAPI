const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conection to mongoose atlas
mongoose.connect('mongodb://admin:KwKmV2SythtKusyV@snackapi-cluster-shard-00-00-a7ywm.mongodb.net:27017,snackapi-cluster-shard-00-01-a7ywm.mongodb.net:27017,snackapi-cluster-shard-00-02-a7ywm.mongodb.net:27017/test?ssl=true&replicaSet=snackAPI-cluster-shard-0&authSource=admin&retryWrites=true',
{
    //useMongoClient: true
    useNewUrlParser: true
}
);

//HANDLE CORS errors just in case
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

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