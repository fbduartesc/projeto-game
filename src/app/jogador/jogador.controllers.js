(function() {
  'use strict';

angular.module('Jogador')
       .controller('JogadorController', JogadorController);

JogadorController.$injector = ['$scope', '$rootScope', 'JogadorService', '$uibModal'];


function JogadorController($scope, $rootScope, JogadorService, $uibModal) {
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
		var modalInstance = $uibModal.open({			
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'app/jogador/jogador-cad.html',
			controller: 'JogadorCadController',
			controllerAs: 'vm'
		});
	}
}
})();