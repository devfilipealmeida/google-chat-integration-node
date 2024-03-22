const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const routes = require('./routes/routes')

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('Server running on port 9000!');
})