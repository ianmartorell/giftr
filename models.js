const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Gift = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String,
  link: String,
  description: String,
  buyerId: String
});

var Person = new Schema({
  id: String,
  name: String,
  wishlist: [ String ],
  state: String,
  currentGiftId: String,
  currentSearchedPersonId: String
});

mongoose.model('Gift', Gift);
mongoose.model('Person', Person);
