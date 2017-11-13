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
        }

        function inicializaCadastro() {
            var promise;
            promise = UsuarioService.getList();
            promise.then(function(data) {
                vm.lista = data;
            });
        }

        function inicializaMetodos() {
            vm.cadastrar = cadastrar;
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
                controllerAs: 'vm'
            });
        }
    }
})();