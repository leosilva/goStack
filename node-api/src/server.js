const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// iniciando o app
const app = express();

// permitindo o acesso à aplicação por qualquer ip, e não só localhost
app.use(cors());

// permitindo troca de dados em formato json
app.use(express.json());

//  usando as rotas
app.use(routes);

// iniciando a aplicacao na porta 3001
app.listen(3001);