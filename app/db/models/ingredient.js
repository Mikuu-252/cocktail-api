const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Pole name jest wymagane'],
  },
  description: {
    type: String,
    required: [true, 'Pole description jest wymagane'],
  },
  isAlcohol: {
    type: Boolean,
    required: [true, 'Pole isAlcohol jest wymagane'],
  },
  image: {
    type: String,
    required: [true, 'Pole image jest wymagane'],
  },
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;