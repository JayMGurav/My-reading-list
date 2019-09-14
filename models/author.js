const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
});

const Authors = mongoose.model('Author', authorSchema);
module.exports = Authors;