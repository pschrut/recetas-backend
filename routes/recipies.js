const express = require('express');
const Recipies = require('../models/recipe');
const app = express();

app.get('/', (req, res) => {
    Recipies.find({}, (err, recipies) => {
        res.json(recipies);
    });
});

module.exports = app;