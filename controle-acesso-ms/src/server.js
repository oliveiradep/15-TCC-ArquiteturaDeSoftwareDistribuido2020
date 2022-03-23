const logger = require('./logger');

const express = require('express');
const app = express();

const port = 3001;

app.listen(port, () =>{
    logger.info('Servidor em execução na porta: '+ port);
});

//

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//

const routes = require('./routes/Routes');

app.use('/', routes);

//

const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27018/controle-acesso');

mongoose.connection.on('connected', function () {
    logger.info('Conectado a base de dados');
});

mongoose.connection.on('error', (err) => {
    logger.info('Erro ao tentar conectar com a base de dados ' + err);
});