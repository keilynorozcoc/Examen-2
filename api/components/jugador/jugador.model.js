//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de patrocinador
var JugadorSchema = new mongoose.Schema({
  codigo : {type: String, required: false},
  nombre : {type: String, required: false},
  alias : {type: String, required: false},
  cantDinero : {type: String, required: false},
  foto : {type: String, required: false},
  archivo: String
});

module.exports = mongoose.model('jugadores', JugadorSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
