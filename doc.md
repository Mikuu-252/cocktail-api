# API Endpoints

This document describes the endpoints for the REST API that manages ingredients and cocktails.

## Ingredients Endpoints

### Get All Ingredients
- **Method**: `GET`
- **Endpoint**: `/api/ingredients`
- **Description**: Retrieves a list of all ingredients.

### Create a New Ingredient
- **Method**: `POST`
- **Endpoint**: `/api/ingredients`
- **Description**: Creates a new ingredient.
- **Request Body**: 
  - `name`: (string, required) The name of the ingredient.
  - `description`: (string, required) A description of the ingredient.
  - `isAlcohol`: (boolean, required) A boolean indicating if the ingredient is alcoholic.
  - `image`: (file, required) The image file for the ingredient.

### Get an Ingredient by ID
- **Method**: `GET`
- **Endpoint**: `/api/ingredients/:id`
- **Description**: Retrieves a specific ingredient by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the ingredient.

### Update an Ingredient
- **Method**: `PUT`
- **Endpoint**: `/api/ingredients/:id`
- **Description**: Updates an existing ingredient by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the ingredient.
- **Request Body**:
  - `name`: (string, optional) The name of the ingredient.
  - `description`: (string, optional) A description of the ingredient.
  - `isAlcohol`: (boolean, optional) A boolean indicating if the ingredient is alcoholic.
  - `image`: (file, optional) The image file for the ingredient.

### Delete an Ingredient
- **Method**: `DELETE`
- **Endpoint**: `/api/ingredients/:id`
- **Description**: Deletes a specific ingredient by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the ingredient.

---

## Cocktails Endpoints

### Get All Cocktails
- **Method**: `GET`
- **Endpoint**: `/api/cocktails`
- **Description**: Retrieves a list of all cocktails.

### Create a New Cocktail
- **Method**: `POST`
- **Endpoint**: `/api/cocktails`
- **Description**: Creates a new cocktail.
- **Request Body**: 
  - `name`: (string, required) The name of the cocktail.
- `category`: (string, required) The category of the cocktail.
    - Possible Values: 
      - `Owocowy` (Fruit)
      - `Alkoholowy` (Alcoholic)
      - `Bezalkoholowy` (Non-alcoholic)
      - `Mleczny` (Dairy)
  - `recipe`: (string, required) Instructions for making the cocktail.
  - `ingredients`: (array of objects, required) An array of ingredient objects with their quantities, each object containing:
    - `ingredient`: (string) The name of the ingredient.
    - `quantity`: (string) The quantity needed.


### Get a Cocktail by ID
- **Method**: `GET`
- **Endpoint**: `/api/cocktails/:id`
- **Description**: Retrieves a specific cocktail by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the cocktail.

### Update a Cocktail
- **Method**: `PUT`
- **Endpoint**: `/api/cocktails/:id`
- **Description**: Updates an existing cocktail by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the cocktail.
- **Request Body**: 
  - `name`: (string, optional) The name of the cocktail.
  - `category`: (string, optional) The category of the cocktail.
  - `recipe`: (string, optional) Instructions for making the cocktail.
  - `ingredients`: (array of objects, optional) An array of ingredient objects with their quantities, each object containing:
    - `ingredient`: (string) The name of the ingredient.
    - `quantity`: (string) The quantity needed.

### Delete a Cocktail
- **Method**: `DELETE`
- **Endpoint**: `/api/cocktails/:id`
- **Description**: Deletes a specific cocktail by its ID.
- **Path Parameter**: 
  - `id`: (string, required, ObjectId) The unique identifier of the cocktail.
