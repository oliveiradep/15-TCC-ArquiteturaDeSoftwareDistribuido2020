const express = require ('express');
const router = express.Router();

const controller = require('../controller/Controller');

router.post('/cadastro', controller.cadastro);
router.post('/login', controller.login);
router.post('/verificacao', controller.verificar);

module.exports = router;