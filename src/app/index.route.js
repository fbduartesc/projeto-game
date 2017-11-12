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
      })
	  .state('jogador', {
        url: '/jogador',
        templateUrl: 'app/jogador/jogador.html',
        controller: 'JogadorController',
        controllerAs: 'vm'
      })
      .state('torneio', {
        url: '/torneio',
        templateUrl: 'app/torneio/torneio.html',
        controller: 'TorneioController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();