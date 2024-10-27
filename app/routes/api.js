const express = require('express');
const IngredientController = require('../controller/IngredientController');
const CocktailController = require('../controller/CocktailController');
const router = new express.Router();
const uploader = require('../services/uploader')

router.get('/ingredients', IngredientController.getAll);
router.post('/ingredients', uploader.single('image'), IngredientController.create);
router.get('/ingredients/:id', IngredientController.get);
router.put('/ingredients/:id', uploader.single('image'), IngredientController.update);
router.delete('/ingredients/:id', IngredientController.delete);

router.get('/cocktail', CocktailController.getAll);
router.post('/cocktail', CocktailController.create);
router.get('/cocktail/:id', CocktailController.get);
router.put('/cocktail/:id', CocktailController.update);
router.delete('/cocktail/:id', CocktailController.delete);

module.exports = router;
