'use strict'

var express = require('express');
var path =require('path');

var bodyParser = require('body-parser');
var app = express();

//aqui van las rutas
var invoice_routes = require('./routes/invoices.routes');


//configuracion de bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
    
});
//rutas base
app.use('/api',invoice_routes);
app.get('*',function(req,res,next){
    res.sendFile(path.resolve('client/index.html'));

});


module.exports = app;