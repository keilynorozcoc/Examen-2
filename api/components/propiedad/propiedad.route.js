var express = require('express');
var router = express.Router();
var propiedadController = require('./propiedad.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_propiedad')
  .post(function(req,res){
    propiedadController.save(req,res);
  });

router.route('/get_all_propiedad')
  .get(function(req,res){
    propiedadController.findAll(req,res);
  });

router.route('/get')
  .put(function(req,res){
    propiedadController.findOne(req,res);
  });

module.exports = router;
