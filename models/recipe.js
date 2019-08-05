const mongoose = require('mongoose');

const recipies = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Recipies', recipies);