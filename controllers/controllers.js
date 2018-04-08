const ChampionController = require('./champion.controller');
const express = require('express');
const router = express.Router();

const championController = new ChampionController(router);

module.exports = router;
