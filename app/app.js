const express = require('express');
const app = express();

// Database init
require('./db/db');

// Public Folder
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));


module.exports = app;