(function() {
  'use strict';

angular.module('Torneio')
       .controller('TorneioCadController', TorneioCadController);

	   TorneioCadController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModalInstance'];


function TorneioCadController($scope, $rootScope, UsuarioService, $uibModalInstance) {
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
			templateUrl: 'torneio-cad.html',
			controller: 'TorneioCadController',
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