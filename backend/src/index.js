const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://enya:zonevir@cluster0-8iza7.mongodb.net/week10?retryWrites=true&w=majority', {
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