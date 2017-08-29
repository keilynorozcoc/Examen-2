(function(){
  'use strict'
  angular
  .module('myApp')
  .service('jugadoresService', jugadoresService);

function jugadoresService() {

	var jugadores = [
  {
    codigo: 1,
    nombre:'Goku',
    alias: 'Kokkun',
    cantDinero: 1500,
    foto:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    codigo: 2,
    nombre:'Piccolo',
    alias: 'PikOREO',
    cantDinero: 1500,
  foto:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    codigo: 3,
    nombre:'Logan',
    alias: 'Lovezno',
    cantDinero: 1500,
    foto:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    codigo: 4,
    nombre:'Bomberman',
    alias: 'Don Pepe y los Globos',
    cantDinero: 1500,
    foto:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }
];
      
	var publicAPI = {
		setJugador : _setJugador,
		getJugadores : _getJugadores,
		updateJugador : _updateJugador
	};

	return publicAPI;

	function _setJugador(pJugador){
	    var jugadoresLista = _getJugadores();
	    jugadoresLista.push(pJugador);
	    localStorage.setItem('lsjugadoresLista', JSON.stringify(jugadoresLista));
    }

    function _getJugadores(){
	    var jugadoresLista = JSON.parse(localStorage.getItem('lsjugadoresLista'));
	    if(jugadoresLista == null){
      localStorage.setItem('lsjugadoresLista', JSON.stringify(jugadores));
      jugadoresLista = jugadores;
      }
      return jugadoresLista;
    }

  function _updateJugador(pJugadorMod){

      var jugadoresLista = _getJugadores();

      for(var i = 0; i < jugadoresLista.length; i++){

         if(jugadoresLista[i].codigo === pJugadorMod.codigo){
          jugadoresLista[i] = pJugadorMod;
        }
      }
      
      localStorage.setItem('lsjugadoresLista', JSON.stringify(jugadoresLista));
    }

}

  
})();
