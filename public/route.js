(function() {
    'use strict';
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            // Estado del registro PAge
            .state('landing', {
                url: '/landing',
                templateUrl: './components/landing/landing.view.html',
                css: './css/style.landing.css',
                // resolve: {
                //     load: ['$ocLazyLoad', function($ocLazyLoad) {
                //         return $ocLazyLoad.load('./components/landing/landing.controller.js')
                //     }]
                // },
                // controller: 'landingController',
                // controllerAs: 'vm'
            })
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
