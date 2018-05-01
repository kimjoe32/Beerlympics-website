const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes/api_routes')(app);

const PORT = 3002;
app.listen(PORT);