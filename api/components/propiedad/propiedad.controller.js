var Propiedad = require('./propiedad.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoPropiedad = new Propiedad({
    name : req.body.name,
    id : req.body.id,
    posistion : req.body.posistion,
    price : req.body.price,
    rent : req.body.rent,
    multpliedrent: req.body.multpliedrent,
    housecost : req.body.housecost,
    group : req.body.group,
    ownedby : req.body.ownedby,
    buildings : req.body.buildings,
    mortgaged : req.body.mortgaged,
    probability : req.body.probability,
    rel : req.body.rel,
    ohousecost : req.body.ohousecost,
    oprice :req.body.oprice,
    averageProbability :req.body.averageProbability
  });

  nuevoPropiedad.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la propiedad' + err});
    }else{
      res.json({success:true, msg:'Se registró la propiedad correctamente'});
    }
  });
}
module.exports.findAll = function(req,res){
  Propiedad.find().then(function(propiedades){
    res.send(propiedades);
  })
};

module.exports.findOne = function(req,res){
  Propiedad.find().then(function(propiedades){
    res.send(propiedades);
  })
};


