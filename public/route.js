(function() {
    'use strict';
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('registro', {
                url: '/registro',
                templateUrl: './components/registro/registro.view.html',
                css: './css/style.registro.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/registro/registro.controller.js')
                    }]
                },
                controller: 'registroController',
                controllerAs: 'vm'
            })
            .state('propiedad', {
                url: '/propiedad',
                templateUrl: './components/propiedad/propiedad.view.html',
                // css: './css/style.propiedad.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/propiedad/propiedad.controller.js')
                    }]
                },
                controller: 'propiedadController',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/registro');
    } //Cierre de la function configuration

})();
