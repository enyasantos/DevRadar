const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const routes = require('./routes');
require('dotenv').config();
const app = express();

mongoose.connect( process.env.URL_MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

//  Tipos de parâmetros
//  Query Params: parâmetro enviando da url - request.query (Filtros, ordenação, paginação, ... )
//  Route Params: request.params (identificara um recurso na alteração ou remoção)
//  Body: request.body (Dados para criação ou alteração de um registro)

//  MongoDB (Não-relacional)


app.listen(3001);