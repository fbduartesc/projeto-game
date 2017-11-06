(function() {
  'use strict';

angular.module('Usuario')
       .controller('UsuarioController', UsuarioController);

UsuarioController.$injector = ['$scope', '$rootScope', 'UsuarioService'];


function UsuarioController($scope, $rootScope, UsuarioService) {
    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
	}
	
	function inicializaMetodos(){
		vm.cadastrar = cadastrar;
	}
	
	function inicializaPropriedades(){
		vm.cadastro = {};
	}
	
	function cadastrar(){
	}
}
})();