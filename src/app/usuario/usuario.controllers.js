(function() {
    'use strict';

    angular.module('Usuario')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$injector = ['$scope', '$rootScope', 'UsuarioService', '$uibModal'];


    function UsuarioController($scope, $rootScope, UsuarioService, $uibModal) {
        var vm = this;

        inicializa();

        function inicializa() {
            inicializaMetodos();
            inicializaPropriedades();
            inicializaCadastro();
			inicializaEventos();
        }

        function inicializaEventos(){
            $scope.$on('usuario:refresh', inicializaCadastro);
        }

        function inicializaCadastro() {
            var promise;
            promise = UsuarioService.getList();
            promise.then(function(data) {
                vm.lista = data.plain();
            });
        }

        function inicializaMetodos() {
            vm.cadastrar = cadastrar;
            vm.editar = editar;
            vm.excluir = excluir;
        }

        function inicializaPropriedades() {
            vm.cadastro = {};
        }

        function cadastrar() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/usuario/usuario-cad.html',
                controller: 'UsuarioCadController',
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
                templateUrl: 'app/usuario/usuario-cad.html',
                controller: 'UsuarioCadController',
                controllerAs: 'vm',
                resolve:{
                    item: angular.copy(item)
                }
            });
        }

        function excluir(item){
            var promise;
            promise = UsuarioService.remove(item);
            promise.then(function(data){
                console.log('registro excluido com sucesso');
				inicializaCadastro();
            });
        }
    }
})();