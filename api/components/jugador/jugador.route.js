var express = require('express');
var router = express.Router();
var jugadorController = require('./jugador.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_jugador')
  .post(function(req,res){
    jugadorController.save(req,res);
  });

router.route('/get_all_jugador')
  .get(function(req,res){
    jugadorController.findAll(req,res);
  });

router.route('/get')
  .put(function(req,res){
    jugadorController.findOne(req,res);
  });

module.exports = router;
