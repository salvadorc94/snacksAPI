const express = require('express');
const app = express();

//ALL THE ENDPOINTS
app.get("/", (req,res) => {
    res.status(200).json({
        message: 'Server up and running'
    });
});

module.exports = app;