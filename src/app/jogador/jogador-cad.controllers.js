(function() {
  'use strict';

angular.module('Jogador')
       .controller('JogadorCadController', JogadorCadController);

JogadorCadController.$injector = ['$scope', '$rootScope', 'JogadorService', '$uibModalInstance', 'item'];


function JogadorCadController($scope, $rootScope, JogadorService, $uibModalInstance, item) {
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
		promise = JogadorService.save(vm.cadastro);
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