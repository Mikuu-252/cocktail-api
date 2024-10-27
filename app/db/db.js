const mongoose = require('mongoose');
const { databaseUrl } = require('../config');

mongoose.connect(databaseUrl, {});