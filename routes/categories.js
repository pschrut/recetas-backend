const express = require('express');
const Category = require('../models/category');
const app = express();

app.get('/', (req, res) => {
    Category.find({}, (err, categories) => {
        res.json(categories);
    });
});

app.get('/:category', (req, res) => {
    const category = req.params.category;

    Category.find({ tech_name: category }, (err, category) => {
        res.json(category);
    });
});

app.post('/', (req, res) => {
    const body = req.body;
    let categories = [];

    console.log(body);

    for (let i = 0; i < body.length; i++) {
        body[i].tech_name = body[i].name.toLowerCase().replace(' ', '');
        body[i].name = body[i].name;

        categories.push(body[i]);
    }

    const category = new Category();

    category.collection.insertMany(categories, (err, data) => {
        return res.json(data);
    })
});

module.exports = app;