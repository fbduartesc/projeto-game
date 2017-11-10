(function() {
  'use strict';

angular.module('Jogador')
       .controller('JogadorCadController', JogadorCadController);

JogadorCadController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModalInstance'];


function JogadorCadController($scope, $rootScope, UsuarioService, $uibModalInstance) {
    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
	}
	
	function inicializaMetodos(){
		vm.cadastrar = cadastrar;
		vm.salvar = salvar;
		vm.cancelar = cancelar;
	}
	
	function inicializaPropriedades(){
		vm.cadastro = {};
	}
	
	function cadastrar(){
		var modalInstance = $uibModal.open({			
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'jogador-cad.html',
			controller: 'JogadorCadController',
			controllerAs: 'vm'
		});
	}
	
	function salvar(){
		$uibModalInstance.close();
	}
	
	function cancelar(){
		$uibModalInstance.dismiss('cancel');
	}
}
})();