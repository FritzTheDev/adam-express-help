const mongoose = require('mongoose');

const ChampionSchema = new mongoose.Schema({
  name: String,
  required: true,
  },
  title: {
    type: String
  }
  image: {
    type: String,
    required: true
  }
  price: PriceSchema,
  abilites: [AbilitesSchema],
  quote: {
    type: String,
    required: true,
  }
});

const PriceSchema = new mongoose.Schema({
  ip: {
    type: Number,
    required: true
  }
  rp: {
    type: Number,
    required: true
  }
});

const AbilitesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  type: {
    type: String,
    enum: {
    ['active', 'passive']
    }
  },
  cooldown: {
    type: Number,
    require: true,
    default: 0
  }
});

const Champion = module.exports = mongoose.model('Champion', ChampionSchema);
