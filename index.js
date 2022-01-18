//server.js
require('dotenv').config();

const Database =require ('./app/config/database');
const CONFIG =require ('./app/config/config');
const App =require('./app/app');


Database.connect();
// no puede encontrar variables fuera de la clase
App.listen(3000,function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}`);
});