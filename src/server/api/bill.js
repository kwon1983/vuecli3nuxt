const express = require('express');
const r = require('../utils/r');
const routerUtils = require('../utils/routerUtils');
const apiProps = require('./billApiProps');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond bill api');
});

module.exports = router;
