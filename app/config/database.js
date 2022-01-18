const mongoose = require('mongoose');
const config = require('./config.js');
const express = require('express');
require('dotenv').config();

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        //no acepta variables para establecer conexión
       
        return mongoose.connect(config.DB, { useNewUrlParser: true }).then(connection => {
            this.connection = connection;
            console.log('Conexion a Base de Datos Exitosa');
        }).catch(error => console.log(error));
    }
}
    
  