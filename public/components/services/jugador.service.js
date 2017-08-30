(function(){
  'use strict'
  angular
  .module('myApp')
  .service('jugadorService', jugadorService);
  jugadorService.$inject = ['$http'];

function jugadorService($http) {
	var publicAPI = {
		setJugador : _setJugador,
		getJugadores : _getJugadores,
		updateJugador : _updateJugador
	};

	return publicAPI;

	function _setJugador(pJugador){
    return $http.post('http://localhost:3000/api/save_jugador',pJugador);
    }

  function _getJugadores(){
     return $http.get('http://localhost:3000/api/get_all_jugador');
  }

  function _getJugador(uniqueId){
     return $http.get('http://localhost:3000/api/get_jugador',uniqueId);
  }
  
  function _updateJugador(pJugadorMod){
      return $http.put('http://localhost:3000/api/event',pJugadorModified);
    }

}

})();