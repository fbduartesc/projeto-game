(function() {
  'use strict';

angular.module('Jogador')
       .controller('JogadorCadController', JogadorCadController);

JogadorCadController.$injector = ['$scope', '$rootScope', 'JogadorService', '$uibModalInstance', 'item', 'Notification'];


function JogadorCadController($scope, $rootScope, JogadorService, $uibModalInstance, item, Notification) {
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
			$rootScope.$broadcast('jogadores:refresh');
			Notification.success('Jogador salvo com sucesso');
		}, function error(){
			Notification.success('Ocorreu um erro na gravação');
		});
		$uibModalInstance.close();
	}
	
	function cancelar(){
		$uibModalInstance.dismiss('cancel');
	}
}
})();