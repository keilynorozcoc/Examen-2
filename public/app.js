(function() {
  angular
    .module('myApp', ['appRoutes', 'ngMaterial', 'LocalStorageModule', 'ngFileUpload','ngMap'])
    .config(function($mdThemingProvider) {
      // $mdThemingProvider.theme('default')
      //   .primaryPalette('indigo')
      //   .accentPalette('blue-grey');
      // $mdThemingProvider.theme('default').foregroundPalette[3] = "rgb(255, 255, 255)";

    })

    .run(function($rootScope, $location, $state, AuthService) {

      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        var isLogin = AuthService.getAuthUser();
        var publicRoutes = ['/landing', '/rank', '/login', '/principal','/eventsCards'];
        var authRequired = true;
        var path = $location.path();

        angular.forEach(publicRoutes, function(publicRoute, key) {
          if (publicRoute === path) {
            authRequired = false;
          };
        });

        if (authRequired && !isLogin) {
          e.preventDefault();
          // window.history.forward(1);
          $location.path('/login');
        };
        //
        // // now, redirect only not authenticated
        //
        // var userInfo = authenticationSvc.getUserInfo();
        //
        // if(userInfo.authenticated === false) {
        //     e.preventDefault(); // stop current execution
        //     $state.go('login'); // go to login
        // }
      });
    });
})();
