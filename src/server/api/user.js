const express = require('express');
const r = require('../utils/r');
const routerUtils = require('../utils/routerUtils');
const commonUtils = require('../utils/commonUtils');
const apiProps = require('./userApiProps');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond user api');
});

routerUtils.parseRouter(router, apiProps);

module.exports = router;
