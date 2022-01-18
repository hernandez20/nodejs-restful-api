const express = require('express');
const DatoCtrl = require('../controllers/DatoController')

const Router = express.Router();

Router.get('/',DatoCtrl.index)
      .post('/',DatoCtrl.create)//create
      .get('/:key/:value',DatoCtrl.find,DatoCtrl.show)
      .put('/:key/:value',DatoCtrl.find,DatoCtrl.update)
      .delete('/:key/:value',DatoCtrl.find,DatoCtrl.remove)
      
module.exports = Router;