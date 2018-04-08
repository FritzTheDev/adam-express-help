const express = require('express');
const Champion = require('../models/champion.model');

class ChampionController {
  constructor(router) {
    router.route('/champions/:_id')
      .get(this.getOne)
      .put(this.updateOne)
  }
}
