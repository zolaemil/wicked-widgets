const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Widged API!'));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => console.log(`API listening on ${port}`));
