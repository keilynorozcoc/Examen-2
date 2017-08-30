var Jugador = require('./jugador.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoJugador = new Jugador({
    codigo : req.body.codigo,
    nombre : req.body.nombre,
    alias : req.body.alias,
    cantDinero : req.body.cantDinero,
    foto : req.body.foto,
    archivo: req.body.archivo
  });

  nuevoJugador.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el jugador' + err});
    }else{
      res.json({success:true, msg:'Se registró el jugador correctamente'});
    }
  });
}
module.exports.findAll = function(req,res){
  Jugador.find().then(function(jugadores){
    res.send(jugadores);
  })
};

module.exports.findOne = function(req,res){
  Jugador.find().then(function(jugadores){
    res.send(jugadores);
  })
};
