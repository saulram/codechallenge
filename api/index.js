'use strict'

var mongoose = require('mongoose');
var app  = require('./app');
var port = process.env.PORT || 3977
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/codechallenge',(err,res)=>{
    if(err){
        throw err;
    }else{
        app.listen(port,function(){
            console.log('servidor api rest corriendo en puerto '+port)

        });
        console.log("La conexion a base de datos esta corriendo correctamente");
   
    }
});
 