const express = require('express');
const routes = require('./routes');

// iniciando o app
const app = express();
app.use(express.json());
app.use(routes);



app.listen(3001);