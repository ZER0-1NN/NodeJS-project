const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();


// Criando conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { 
        useNewUrlParser: true, useUnifiedTopology: true 
    }
);

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'NodeJS',
        description: 'Build native apps with Node',
        url: 'http://github.com/facebook/node-js'
    });

    return res.send('Hello guys!');
});

app.listen(8080);