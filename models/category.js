const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    tech_name: String
});

module.exports = mongoose.model('Categories', schema);