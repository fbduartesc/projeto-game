(function() {
  'use strict';

angular.module('Torneio')
       .controller('TorneioCadController', TorneioCadController);

	   TorneioCadController.$injector = ['$scope', '$rootScope', 'TorneioService', '$uibModalInstance', 'item'];


function TorneioCadController($scope, $rootScope, TorneioService, $uibModalInstance, item) {
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
		vm.salvar = salvar;
		vm.cancelar = cancelar;
	}
	
	function inicializaPropriedades(){
		vm.cadastro = {};
	}

	function salvar(){
		var promise;
		promise = TorneioService.save(vm.cadastro);
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