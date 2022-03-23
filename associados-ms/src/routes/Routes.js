const express = require ('express');
const router = express.Router();

const controller = require('../controller/Controller');

router.post('/associados', controller.execute);

module.exports = router;