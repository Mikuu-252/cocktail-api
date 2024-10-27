const Ingredient = require("../db/models/ingredient");
const fs = require('fs');

class IngredientController {
  async create(req, res) {
    let imageName;

    if(req.file) {
      imageName = req.file.filename;
    } else {
      imageName = undefined;
    }

    const ingredient = new Ingredient({
      name: req.body.name,
      description: req.body.description,
      isAlcohol: req.body.isAlcohol,
      image: imageName,
    });

    try {
      await ingredient.save();
      res.status(201).json(ingredient);
    } catch (e) {
      res.status(422).json({ errors: e.errors});
    }
  }
  
  async getAll(req, res) {
    const ingredient = await Ingredient.find();

    res.status(200).json(ingredient);
  }
  
  async get(req, res) {
    const { id } = req.params;
  
    try {
      const ingredient = await Ingredient.findOne({ _id: id });
      if (!ingredient) {
        return res.status(404).json({ message: 'Składnik nie został znaleziony' });
      }

      res.status(200).json(ingredient);
    } catch (e) {
      res.status(422).json({ errors: e.errors});
    }
  }
  
  async update(req, res) {
    const { id } = req.params;
  
    try {
      let ingredient = await Ingredient.findOne({ _id: id });
      if (!ingredient) {
        return res.status(404).json({ message: 'Składnik nie został znaleziony' });
      }

      if(req.body.name) ingredient.name = req.body.name
      if(req.body.description) ingredient.description = req.body.description
      if(req.body.isAlcohol) ingredient.isAlcohol = req.body.isAlcohol

      if(req.file) {
        if(req.file.filename != ingredient.image) {
          fs.unlinkSync('public/uploads/' + ingredient.image);
        }
        ingredient.image = req.file.filename
      }
      
      await ingredient.save();
      res.status(200).json(ingredient);
    } catch (e) {
      res.status(422).json({ errors: e.errors});
    }
  }
  
  async delete(req, res) {
    const { id } = req.params;
    
    try {
      const ingredient = await Ingredient.findOne({ _id: id });

      if (!ingredient) {
        return res.status(404).json({ message: 'Składnik nie został znaleziony' });
      }

      const imageName = ingredient.image;

      await Ingredient.deleteOne({_id: id});
      fs.unlinkSync('public/uploads/' + imageName);
      res.status(204).send();
    } catch (e) {
      console.log(e)
      res.status(422).json({ errors: e.errors})
    }
  }
}

module.exports = new IngredientController();