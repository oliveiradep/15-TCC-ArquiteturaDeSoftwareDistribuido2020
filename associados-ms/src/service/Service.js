const { v4: uuidv4 } = require('uuid');

const repository = require('../repository/Repository');

exports.create = function (body, token) {


    Object.assign(body, {
        associado_id: uuidv4()
    });

    const associado = repository.save(body);

    return associado;
};
