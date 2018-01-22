(function() {
  'use strict';

angular.module('Usuario')
       .controller('UsuarioCadController', UsuarioCadController);

UsuarioCadController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModalInstance', 'item', 'MENSAGEM', 'ui-notification'];


function UsuarioCadController($scope, $rootScope, UsuarioService, $uibModalInstance, item, MENSAGEM, Notification) {
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
		promise = UsuarioService.save(vm.cadastro);
		promise.then(function(){
			$rootScope.$broadcast('usuario:refresh');
			Notification.success('Usuário salvo com sucesso');
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