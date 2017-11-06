(function() {
  'use strict';

angular.module('Usuario')
       .controller('UsuarioCadController', UsuarioCadController);

UsuarioCadController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModalInstance'];


function UsuarioCadController($scope, $rootScope, UsuarioService, $uibModalInstance) {
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
			templateUrl: 'usuario-cad.html',
			controller: 'UsuarioCadController',
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