(function() {
    'use strict';

    angular.module('Usuario')
        .factory('UsuarioService', UsuarioService);

    UsuarioService.$injector = ['Restangular'];

    function UsuarioService(Restangular) {
        var service = {};

        var uri = ['usuarios'];

        service.get = get;
        service.getList = getList;
        service.remove = remove;
        service.save = save;

        return service;

        function get(id) {
            return Restangular.one(uri[0], id).get();
        }

        function getList(params) {
            params = params || {};
            params.offset = params.offset || 0;
            return Restangular.one(uri[0])
                .get();
        }

        function remove(id) {
            return Restangular.one(uri[0], id)
                .remove();
        }

        function save(data) {
            var rest = Restangular.all(uri[0]);
            return !data.id ?
                rest.post(data) :
                rest.customPUT(data, data.id);
        }
    }

    /* jshint ignore:end */
})();