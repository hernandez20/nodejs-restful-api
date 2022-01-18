const express =require('express');
//const bodyParser= require('body-parser');
const App=express();
const Datos= require('./routes/dato')



App.use(express.json());
App.use(express.urlencoded({exteded: true}));
App.use('/api',Datos);




module.exports = App;