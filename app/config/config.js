

   // require('dotenv').config();
const DB = process.env.DB|| 'mongodb://localhost:27017/Datos';
const PORT= process.env.PORT|| '3000';

const USER=''
const PASS=''
const AUTH='admin'
module.exports ={//datos de configuracion
   DB: DB,
   PORT: PORT,
   USER:USER,
   PASS:PASS,
   AUTH:AUTH
}