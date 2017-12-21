(function() {
  'use strict';

angular.module('Usuario')
       .controller('UsuarioCadController', UsuarioCadController);

UsuarioCadController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModalInstance', 'item'];


function UsuarioCadController($scope, $rootScope, UsuarioService, $uibModalInstance, item) {
    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
		incializaCadastro();
	}

	function incializaCadastro(){
		vm.cadastro = item;
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
		var promise;
		promise = UsuarioService.save(vm.cadastro);
		promise.then(function(){
			console.log('Cadastro salvo com sucesso');
		});
		$uibModalInstance.close();
	}
	
	function cancelar(){
		$uibModalInstance.dismiss('cancel');
	}
}
})();