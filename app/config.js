require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASEURL ||'mongodb://localhost:27017/cocktail-api',
}