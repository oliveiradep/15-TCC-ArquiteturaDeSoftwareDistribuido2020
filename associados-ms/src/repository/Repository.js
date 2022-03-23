const logger = require('../logger');

const repository = require('../models/Models');

exports.save = async function (body) {
    try {
        return await repository.create(body);
    } catch (error) {
        logger.info('Erro: ', error);
    }
};