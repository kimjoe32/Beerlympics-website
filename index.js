const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./mongo_models/Team');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require('./routes/api_routes')(app);

const PORT = 3002;
app.listen(PORT);