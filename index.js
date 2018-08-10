const express = require('express');

//Set up express app
const app = express();

//Listen for request
app.listen(process.env.PORT || 4000, function () {
    console.log('Now listening for requests');
});