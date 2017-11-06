(function() {
  'use strict';

  angular
    .module('projeto')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
	  .state('usuario', {
        url: '/usuario',
        templateUrl: 'app/usuario/usuario.html',
        controller: 'UsuarioController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();