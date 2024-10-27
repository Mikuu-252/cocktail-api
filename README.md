
# Cocktail API

## Overview
This project is a REST API for managing cocktails and their ingredients. It allows users to perform CRUD operations on cocktails and ingredients.

## Features
- Create, Read, Update, Delete (CRUD) operations for cocktails and ingredients.
- Supports image uploads for ingredients.

## Endpoints
Refer to the [documentation](doc.md) for detailed information on API endpoints.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Mikuu-252/cocktail-api.git
   cd cocktail-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory of the project and add the following environment variables:
   ```bash
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/cocktail-api 
   ```
4. Start the server:
   ```bash
   npm run run
   ```

## Example Data
Here are some examples of cocktail and ingredient data that can be used for testing:

### Ingredient (form-data)
```json
{
  "ingredient": {
    "name": "Milk",
    "description": "A nutritious liquid produced by cows.",
    "isAlcohol": false,
    "image": any graphic File
  }
}

{
  "ingredient": {
    "name": "Strawberry",
    "description": "A sweet and juicy red fruit.",
    "isAlcohol": false,
    "image": any graphic File
  }
}
```

### Cocktail
```json
{
  "cocktail": {
    "name": "Strawberry Cocktail",
    "category": "Owocowy",
    "recipe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    "ingredients": [
      {
        "ingredient": "Milk" ,
        "quantity": "100ml"
      },
      {
        "ingredient": "Strawberry",
        "quantity": "500g"
      }
    ]
  }
}
```

## License
This project is licensed under the MIT License.
