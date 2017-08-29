(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('registroController', registroController);
    registroController.$inject = ['$http','jugadoresService','Upload','ImageService'];
    function registroController(jugadoresService,Upload,ImageService){

      var vm = this;
        vm.jugador = {};
        vm.cloudObj = ImageService.getConfiguration();

      function init(){
        vm.jugadores = jugadoresService.getJugadores();
        vm.jugador = {}
      }
        init();

        vm.presave= function(update) {
        console.log('presave')

        vm.cloudObj.data.file =document.getElementById("foto").files[0];

        Upload.upload(vm.cloudObj)

          .success(function(data){

            vm.jugador.foto = data.url;

            if (!update) {
               vm.save();
            }
          
          })
          .error(function (data) {
             console.log('errorFoto');
          }
           );


          ; 

        // }
        vm.loading = false;       
      }

        vm.save = function(){
            console.log('save')
            jugadoresService.setJugador(vm.jugador);
            init();
        }

        vm.update = function(){
            console.log('update')
            jugadoresService.updateJugador(vm.jugador);

        init();
      }
      vm.getInfo = function(pJugador){
        console.log('getInfo')
        vm.jugador = pJugador;
      }

      function clean(){
        vm.jugadores = {}
      }

    }
    })();