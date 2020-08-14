const mongoose = require('mongoose'),
      express = require('express'),
      cors = require('cors'),
      requireDir = require('require-dir');

// Iniciando o APP
const app = express();

app.use(cors())
app.use(express.json());

// Criando conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);
requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routes'));

app.listen(8080);