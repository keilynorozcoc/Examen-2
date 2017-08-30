(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('registroController', registroController);
    registroController.$inject = ['$http','jugadorService','Upload','filepickerService','ImageService'];
    function registroController($http,jugadorService,Upload,filepickerService,ImageService){

      var vm = this;
        vm.jugador = {};
        vm.nuevoJugador = false;
        vm.cloudObj = ImageService.getConfiguration();
        
      function init(){
        jugadorService.getJugadores().then(function (response) {
         vm.jugadores = response.data;

        });
        vm.jugador = {}
      }

      init();

      vm.pickFile = function(){
        filepickerService.pick(
          {extension: ['.pdf','.txt'],
            language: 'es',
            container: 'modal',
            services: ['COMPUTER']
          },
          onSuccess
        );
      };

      function onSuccess(Blob){
        vm.jugador.archivo = Blob.url;
        vm.fileName = Blob.filename;
      };      

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

        // }
        vm.loading = false; 
      }

      vm.save = function(){
        console.log('save')
        jugadorService.setJugador(vm.jugador);
        init();
      }

      vm.update = function(){
        console.log('update')
        jugadorService.updateJugador(vm.jugador);

        init();
      }

      vm.getInfo = function(pJugador){
        console.log('getInfo')
        vm.jugador = pJugador;
      }

    }
    })();