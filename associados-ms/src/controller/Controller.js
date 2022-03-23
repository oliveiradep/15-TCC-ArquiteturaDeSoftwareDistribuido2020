const service = require('../service/Service');
const serializer = require('../serializer/Serializer');

exports.execute = function (req, res) {
    

    service.create(req.body).then(function (associado) {
        res.status(201).send(serializer.serialize(associado));
    });
};