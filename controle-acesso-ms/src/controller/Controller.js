const service = require('../service/Service');

exports.cadastro = function (req, res) {
    service.create(req.body).then(function (acesso) {
        res.status(204).send();
    }).catch(function () {
        res.status(422).send('Email já cadastrado');
    });
};

exports.login = function (req, res) {
    service.generate(req.body).then(function (token) {
        res.status(201).send(token);
    }).catch(function () {
        res.status(404).send('Email ou senha inválido');
    });
};

exports.verificar = function (req, res) {
    service.validate(req.body).then(function () {
        res.status(204).send();
    }).catch(function (err) {
        if (err.message === '403') res.status(403).send('Sem permissão');
        res.status(401).send('Token inválido');
    });
};