const express = require('express');
const Category = require('../models/category');
const app = express();
const mongoose = require('mongoose');

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


    for (let i = 0; i < body.length; i++) {
        body[i].tech_name = body[i].name.toLowerCase().replace(/ /g, '');

        categories.push({
            name: body[i].name,
            tech_name: body[i].tech_name
        });
    }

    Category.collection.insertMany(categories, (err, data) => {
        return res.json(data);
    })
});

app.put('/:id', (req, res) => {
    const id = req.params.id;
    const category = {
        name: req.body.name,
        tech_name: req.body.tech_name = req.body.name.toLowerCase().replace(/ /g, '')
    };

    Category.updateOne({ _id: id }, category, { new: true }, (err, data) => {
        res.json({
            data
        });
    });
});

app.post('/delete', (req, res) => {
    const idsToDelete = req.body.ids;

    Category.deleteMany({ _id: { $in: idsToDelete } }, (err, data) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }

        return res.json({
            data
        });
    });
});

module.exports = app;