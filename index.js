const express = require('express');
const mongoose = require('mongoose');
const categoriesRoute = require('./routes/categories');
const recipiesRoute = require('./routes/recipies');
const bodyParser = require('body-parser');
require('./config/config');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');

    next();
});

mongoose.connection.openUri(process.env.URL_DB, { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(process.env.NODE_ENV);
    console.log('DB online');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/categories', categoriesRoute);
app.use('/recipies', recipiesRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server online'));