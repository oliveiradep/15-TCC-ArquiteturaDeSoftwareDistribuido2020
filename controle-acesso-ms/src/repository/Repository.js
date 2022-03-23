const logger = require('../logger');

const repository = require('../models/Models');

exports.save = async function (body) {
    try {
        return await repository.create(body);
    } catch (error) {
        logger.info('Erro: ', error);
        throw new Error();
    }
};

exports.get = async function (email) {
    try {
        return await repository.findOne({ email: email });
    } catch (err) {
        logger.info('Erro: ', error);
    }
};