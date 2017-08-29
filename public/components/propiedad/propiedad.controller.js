(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('propiedadController', propiedadController);
    propiedadController.$inject = ['$http','$stateParams','propiedadService','Upload','ImageService'];
    function propiedadController(propiedadesService){

    var vm = this;
      vm.propiedades = {};
      vm.cloudObj = ImageService.getConfiguration();

     

    function init(){
      vm.propiedades = propiedadesService.getPropiedades();
      vm.propiedad = {}
    }
     init();

    // vm.presave= function(update) {
    //   console.log('presave')

    //   vm.loading = true;

    //   vm.cloudObj.data.file =document.getElementById("photo").files[0];

    //   Upload.upload(vm.cloudObj)

    //     .success(function(data){

    //       vm.sponsor.photo = data.url;

    //       if (!update) {
    //          vm.save();
    //       }

    //     })
    //     .error(function (data) {
    //        console.log('errorPhoto');
    //     }
    //      );

    //   vm.loading = false;
    // }
   vm.save = function(){
    console.log('save')
    propiedadesService.setPropiedad(vm.propiedad);
    init();
    }

    vm.update = function(){
        console.log('update')
        propiedadesService.updatePropiedad(vm.propiedad);

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