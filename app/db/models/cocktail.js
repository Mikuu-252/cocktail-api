const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coctailSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Pole name jest wymagane'],
  },
  category: {
    type: String,
    required: [true, 'Pole category jest wymagane'],
    enum: ['Owocowy', 'Alkoholowy', 'Bezalkoholowy', 'Mleczny'],
  },
  recipe: {
    type: String,
    required: [true, 'Pole recipe jest wymagane'],
  },
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true,
      },
      quantity: {
        type: String,
        required: [true, 'Pole quantity jest wymagane'],
      },
    },
  ],
});

coctailSchema.path('ingredients').validate({
  validator: function (value) {
    return value && value.length > 0;
  },
  message: 'Koktajl musi mieć przynajmniej jeden składnik',
});

const Coctail = mongoose.model('Coctail', coctailSchema);

module.exports = Coctail;
