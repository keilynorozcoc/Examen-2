var Jugador = require('./jugador.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoJugador = new Jugador({
    codigo : req.body.codigo,
    nombre : req.body.nombre,
    alias : req.body.alias,
    cantDinero : req.body.cantDinero,
    foto : req.body.foto
  });

  nuevoJugador.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el jugador' + err});
    }else{
      res.json({success:true, msg:'Se registró el jugador correctamente'});
    }
  });
}

