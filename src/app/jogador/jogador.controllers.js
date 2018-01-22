(function() {
  'use strict';

angular.module('Jogador')
       .controller('JogadorController', JogadorController);

JogadorController.$injector = ['$scope', '$rootScope', 'JogadorService', '$uibModal', 'Notification'];


function JogadorController($scope, $rootScope, JogadorService, $uibModal, Notification) {
    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
		inicializaCadastro();
		inicializaEventos();
	}

	function inicializaEventos(){
		$scope.$on('jogadores:refresh', inicializaCadastro);
	}

	function inicializaCadastro() {
		var promise;
		promise = JogadorService.getList();
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
			templateUrl: 'app/jogador/jogador-cad.html',
			controller: 'JogadorCadController',
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
			templateUrl: 'app/jogador/jogador-cad.html',
			controller: 'JogadorCadController',
			controllerAs: 'vm',
			resolve:{
				item: angular.copy(item)
			}
		});
	}

	function excluir(item){
		var promise;
		promise = JogadorService.remove(item);
		promise.then(function(data){
			inicializaCadastro();
			Notification.success('Jogador excluído com sucesso');
		});
	}
}
})();