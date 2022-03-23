const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    senha: {
        type: String,
    },
    escopo: {
        type: String,
    }
});

const Models = mongoose.model('controle-acesso', schema);

module.exports = Models;