(function() {
  'use strict';

angular.module('Authentication')
       .controller('LoginController', LoginController);

LoginController.$injector = ['$scope', '$rootScope', '$location', 'AuthenticationService'];


function LoginController($scope, $rootScope, $location, AuthenticationService) {    
    AuthenticationService.ClearCredentials();

    var vm = this;
	
	inicializa();

	function inicializa(){
		inicializaMetodos();
		inicializaPropriedades();
	}
	
	function inicializaMetodos(){
		vm.login = login;
	}
	
	function inicializaPropriedades(){
		vm.cadastro = {};
	}

    function login() {
        vm.dataLoading = true;
        AuthenticationService.Login(vm.cadastro.username, vm.cadastro.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials(vm.cadastro.username, vm.cadastro.password);
                $location.path('/main');
            } else {
                vm.error = response.message;
                vm.dataLoading = false;
            }
        });
    }
}
})();