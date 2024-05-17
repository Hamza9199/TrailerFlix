const mongoose = require('mongoose');

const ListaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
    },
    genre: {
        type: String,
    },
    content: {
        type: Array,
    }

}, {timestamps: true});


module.exports = mongoose.model('Lista', ListaSchema);