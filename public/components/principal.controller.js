(function () {
    'use strict';
    angular
    .module('myApp')
    .controller('principalController', principalController);

    principalController.$inject = [];

    function principalController(){

      var vm = this;
      // vm.user = {};
      /*Valida que los datos sean correctos*/
      // vm.login = function(credentials){
      //   var resp = AuthService.logIn(credentials);
      //   var resp2 = AuthServiceStudent.logIn(credentials);
      //   var resp3 = AuthServiceTeacher.logIn(credentials);
      //
      //   if (resp === true){
      //     $location.path('/administrator');
      //   }else {
      //     if (resp2 === true) {
      //       $location.path('/profileStud');
      //     }else {
      //       if (resp3 === true) {
      //         $location.path('/profileInst')
      //       }
      //     }
      //   }
      //
      // }
    }

})();
