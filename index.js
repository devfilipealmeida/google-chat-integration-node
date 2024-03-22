const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./app/routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('Server running on port 9000!');
})