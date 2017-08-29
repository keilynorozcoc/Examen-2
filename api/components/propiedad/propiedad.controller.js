var Propiedad = require('./propiedad.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoPropiedad = new Propiedad({
    name : req.body.name,
    id : req.body.id,
    posistion : req.body.posistion,
    price : req.body.price,
    rent : req.body.price,
    multpliedrent: req.body.price,
    housecost : req.body.price,
    group : req.body.price,
    ownedby : req.body.price,
    buildings : req.body.price,
    mortgaged : req.body.price,
    probability : req.body.price,
    rel : req.body.price,
    ohousecost : req.body.price,
    oprice :req.body.price,
    averageProbability :req.body.price
  });

  nuevoPropiedad.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la propiedad' + err});
    }else{
      res.json({success:true, msg:'Se registró la propiedad correctamente'});
    }
  });
}

