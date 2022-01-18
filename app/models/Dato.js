const mongoose =require('mongoose');
//esquema a convertir a modelo
const esquemaDato =new mongoose.Schema({


nombre:{
    type: String,
    unique:false,
    required:true
},

});
//modelo del esquema
const myinfo = mongoose.model('myinfo',esquemaDato);

module.exports =myinfo;