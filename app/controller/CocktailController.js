const Cocktail = require("../db/models/cocktail");
const fs = require('fs');
const Ingredient = require("../db/models/ingredient");

class CocktailController {
  async create(req, res) {
  let ingredients = [];
  if(req.body.ingredients){
    ingredients = await Promise.all(
      req.body.ingredients.map(async (element) => {
        let ingredient = await Ingredient.findOne({ name: element.ingredient });
        if (!ingredient) {
          throw new Error(`Składnik ${element.ingredient} nie został znaleziony`);
        }
        return { ingredient: ingredient._id.toString(), quantity: element.quantity };
      })
    );
  }
    
    const cocktail = new Cocktail({
      name: req.body.name,
      category: req.body.category,
      recipe: req.body.recipe,
      ingredients: ingredients,
    });

    try {
      await cocktail.save();
      res.status(201).json(cocktail);
    } catch (e) {
      res.status(422).json({ errors: e.errors});
    }
  }
  
  async getAll(req, res) {
    const cocktail = await Cocktail.find();

    res.status(200).json(cocktail);
  }
  
  async get(req, res) {
    const { id } = req.params;
  
    try {
      const cocktail = await Cocktail.findOne({ _id: id });
      if (!cocktail) {
        return res.status(404).json({ message: 'Koktajl nie został znaleziony' });
      }

      res.status(200).json(cocktail);
    } catch (e) {
      res.status(422).json({ errors: e.errors});
    }
  }
  
  async update(req, res) {
    const { id } = req.params;
  
      let cocktail = await Cocktail.findOne({ _id: id });
      if (!cocktail) {
        return res.status(404).json({ message: 'Koktajl nie został znaleziony' });
      }

      if(req.body.name) cocktail.name = req.body.name
      if(req.body.category) cocktail.category = req.body.category
      if(req.body.recipe) cocktail.recipe = req.body.recipe
      
      if(req.body.ingredients) {
        let ingredients = await Promise.all(
          req.body.ingredients.map(async (element) => {
            let ingredient = await Ingredient.findOne({ name: element.ingredient });
            if (!ingredient) {
              throw new Error(`Składnik ${element.ingredient} nie został znaleziony`);
            }
            return { ingredient: ingredient._id.toString(), quantity: element.quantity };
          })
        );

        cocktail.ingredients = ingredients;
      }

      try {
        await cocktail.save();
        res.status(201).json(cocktail);
      } catch (e) {
        res.status(422).json({ errors: e.errors});
      }
  }
  
  async delete(req, res) {
    const { id } = req.params;
    
    try {
      const cocktail = await Cocktail.findOne({ _id: id });

      if (!cocktail) {
        return res.status(404).json({ message: 'Koktail nie został znaleziony' });
      }

      await Cocktail.deleteOne({_id: id});
      res.status(204).send();
    } catch (e) {
      console.log(e)
      res.status(422).json({ errors: e.errors})
    }
  }
}

module.exports = new CocktailController();