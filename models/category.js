const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: String,
    name: String,
    tech_name: String
});

module.exports = mongoose.model('Categories', schema);