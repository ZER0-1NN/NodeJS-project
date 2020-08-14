const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');


// Iniciando o APP
const app = express();

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