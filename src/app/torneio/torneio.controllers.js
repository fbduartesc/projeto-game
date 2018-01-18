(function() {
  'use strict';

angular.module('Torneio')
       .controller('TorneioController', TorneioController);

	   TorneioController.$injector = ['$scope', '$rootScope', 'TorneioService', '$uibModal'];


function TorneioController($scope, $rootScope, TorneioService, $uibModal) {
    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
		inicializaCadastro();
	}

	function inicializaCadastro() {
		var promise;
		promise = TorneioService.getList();
		promise.then(function(data) {
			vm.lista = data.plain();
		});
	}
	
	function inicializaMetodos(){
		vm.cadastrar = cadastrar;
		vm.editar = editar;
		vm.excluir = excluir;
	}
	
	function inicializaPropriedades(){
		vm.cadastro = {};
	}
	
	function cadastrar(){
		var modalInstance = $uibModal.open({			
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'app/torneio/torneio-cad.html',
			controller: 'TorneioCadController',
			controllerAs: 'vm',
			resolve:{
				item: undefined
			}
		});
	}

	function editar(item) {
		var modalInstance = $uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'app/torneio/torneio-cad.html',
			controller: 'TorneioCadController',
			controllerAs: 'vm',
			resolve:{
				item: angular.copy(item)
			}
		});
	}

	function excluir(item){
		var promise;
		promise = TorneioService.remove(item);
		promise.then(function(data){
			console.log('registro excluido com sucesso');
		});
	}
}
})();