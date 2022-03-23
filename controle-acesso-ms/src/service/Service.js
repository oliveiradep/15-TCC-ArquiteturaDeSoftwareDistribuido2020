const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

const repository = require('../repository/Repository');

exports.create = function (body) {
    Object.assign(body, {
        senha: uuidv4()
    });

    const acesso = repository.save(body);

    return acesso;
};

exports.generate = async function (body) {
    const operador = await repository.get(body.email);

    if (operador) {
        if (operador.email === body.email && operador.senha === body.senha) {
            const token = jwt.sign({ escopo: operador.escopo }, 'qwerty', {
                expiresIn: 30 // expira em 30 segundos
            });
            return {
                token: token
            };
        }
    }

    throw new Error();
};

exports.validate = async function (body) {
    const token = body.token.split('.');
    const buff = Buffer.from(token[1], 'base64')
    const str = buff.toString('utf-8');
    const obj = JSON.parse(str);

    if (body.escopo !== obj.escopo) throw new Error(403);

    jwt.verify(body.token, 'qwerty', function (err, decoded) {
        if (err) throw new Error();
        return;
    });
};