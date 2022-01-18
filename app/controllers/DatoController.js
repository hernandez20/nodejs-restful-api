const Dato = require('../models/Dato')


function index(req,res){
Dato.find({})
.then(datos =>{
    if(datos.length) return res.status(200).send({datos});
    return res.status(404).send({message: 'NO CONTENT'});
}).catch(error => res.status(500).send({error}));
}


function show(req,res){
if (req.body.error)return res.status(500).send({error});
if(!req.body.datos)return res.status(404).send({message:'NOT FOUND'});
let datos =req.body.datos;
return res.status(200).send({datos});
}


function create(req,res){
let dato = new Dato(req.body);
dato.save().then(dato => res.status(200).send({dato})).catch(error => res.status(500).send({error}));
}


function update(req,res){
if(req.body.error)return res.status(500).send({error});
if(!req.body.datos) return res.status(404).send({message:'NOT FOUND'});
let dato =req.body.datos[0];
dato = Object.assign(dato, req.body);
dato.save().then(dato => res.status(200).send({message: "updated",dato})).catch(error => res.status(500).send({error}));
}


function remove(req,res){
if(req.body.error) return res.status(500).send({error});
if(!req.body.datos)return res.status(404).send({message:"NOT DOUND"})

req.body.datos[0].remove().then(dato => res.status(200).send({message:'removed', dato})).catch(error => res.status(500).send({error}));
}


function find(req,res,next){
    let query ={};
    query[req.params.key]=req.params.value;
    Dato.find(query).then(datos => {
    if(!datos.length)return next();
    req.body.datos =datos;
    return next();
}).catch(error =>{
    req.body.error = error;
    next();
})



}


module.exports ={
    index,
    show,
    create,
    update,
    remove,
    find,
   
 
}
