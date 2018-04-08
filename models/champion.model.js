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

//get champions
module.exports.getChampions = (callback, limit) => {
  Champion.find(callback).limit(limit);
};

//get champion by ID
module.exports.getChampionById = (id, callback) => {
  Champion.findById(id, callback);
};
//add champion
module.exports.addChampion = (champion, callback) => {
  Champion.create(champion, callback);
};
//update champions
module.exports.updateChampion = (id, champion, options, callback) => {
  let query = {_id: id};
  let update = champion
  Champion.findOneAndUpdate(query, update, options, callback);
};

// delete champion
module.exports.deleteChampion = (id, callback) => {
  let query = {_id: id};
  Champion.remove(query, callback);
};
