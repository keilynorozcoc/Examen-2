(function() {
  'use strict'
  angular
  .module('myApp')
  .service('propiedadService', propiedadService);
  propiedadService.$inject = ['$http'];

  function propiedadService($http) {
    var publicAPI = {
      getPropiedad: _getPropiedad,
      setPropiedad: _setPropiedad,
      getPropiedades: _getPropiedades,
      updatePropiedad: _updatePropiedad
    };

    return publicAPI;

    function _setPropiedad(pPropiedad) {
      return $http.post('http://localhost:3000/api/save_propiedad',pPropiedad);
    }

    function _getPropiedades() {
      return $http.get('http://localhost:3000/api/get_all_propiedad');
    }

    function _getPropiedad() {
      return $http.get('http://localhost:3000/api/get_propiedad');
    }

    function _updatePropiedad(pPropiedadModified) {
      return $http.put('http://localhost:3000/api/edit_propiedad',pPropiedadModified);
    }

  }
})();
