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
			templateUrl: 'app/torneio/torneio-cad.html',
			controller: 'TorneioCadController',
			controllerAs: 'vm'
		});
	}
}
})();