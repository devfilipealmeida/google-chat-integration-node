const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const routes = require('./routes/routes')

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server running on port 3000!');
})