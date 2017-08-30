(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('propiedadController', propiedadController);
    propiedadController.$inject = ['$http','propiedadService','Upload','ImageService'];
    function propiedadController($http,propiedadService,Upload,ImageService){

    var vm = this;
      vm.propiedades = {};
      vm.cloudObj = ImageService.getConfiguration();

    function init(){
      propiedadService.getPropiedades().then(function (response) {
        vm.propiedades = response.data;

      });
     vm.propiedad = {};
   }

    init();

    vm.save = function(){
      propiedadService.setPropiedad(vm.propiedad);
      init();
    }

    vm.update = function(){
      console.log('update')
      propiedadService.updatePropiedad(vm.propiedad);
      init();
    }
    vm.getInfo = function(pPropiedad){
      console.log('getInfo')
      vm.propiedad = pPropiedad;
    }


       //Limpiar form
        function clear(){
          vm.propiedad = {};
        }

   }
})();