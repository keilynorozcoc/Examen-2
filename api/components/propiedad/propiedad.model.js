//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de patrocinador
var PropiedadSchema = new mongoose.Schema({
  name : {type: String, required: false},
  id : {type: String, required: false},
  posistion : {type: String, required: false},
  price : {type: String, required: false},
  rent :{type: String, required: false},
  multpliedrent :{type: String, required: false},
  housecost :{type: String, required: false},
  group :{type: String, required: false},
  ownedby :{type: String, required: false},
  buildings :{type: String, required: false},
  mortgaged :{type: String, required: false},
  probability :{type: String, required: false},
  rel : {
  	Square :{type: String, required: false},
  	"Probability % (Jail Short)" :{type: String, required: false},
  	Rank :{type: String, required: false},
  	"Probability % (Jail Long)" :{type: String, required: false},
  },
  ohousecost :{type: String, required: false},
  oprice :{type: String, required: false},
  averageProbability :{type: String, required: false}

});

module.exports = mongoose.model('propiedades', PropiedadSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
