const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historico = new Schema({
    descricao: {
        type: String
    },
    data_registro: {
        type: String
    }
}, { _id: false });

const telefone = new Schema({
    ddi: {
        type: Number,
    },
    ddd: {
        type: Number,
    },
    numero: {
        type: Number,
    }
}, { _id: false });

const endereco = new Schema({
    cep: {
        type: Number,
    },
    logradouro: {
        type: String,
    },
    numero: {
        type: Number,
    },
    complemento: {
        type: String,
    },
    bairro: {
        type: String,
    },
    cidade: {
        type: String,
    },
    estado: {
        type: String,
    },
    pais: {
        type: String,
    }
}, { _id: false });

const schema = new Schema({
    associado_id: {
        type: String,
        index: true,
        unique: true
    },
    nome: {
        type: String,
    },
    dataNascimento: {
        type: String,
    },
    profissao: {
        type: String,
    },
    escolaridade: {
        type: String,
    },
    cpf: {
        type: Number,
    },
    email: {
        type: String,
    },
    telefone: {
        type: telefone
    },
    endereco: {
        type: endereco
    },
    historicoSaude: {
        type: [historico]
    },
    plano: {
        type: String,
    },
    tipoPlano: {
        type: String,
    },
    situacao: {
        type: String,
    }
});

const Models = mongoose.model('associados', schema);

module.exports = Models;