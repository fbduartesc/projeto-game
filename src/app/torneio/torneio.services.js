(function() {
  'use strict';

angular.module('Torneio')
        .factory('TorneioService', TorneioService);

        TorneioService.$injector = ['Restangular'];
    
        function TorneioService(Restangular) {
            var service = {};
            
                    var uri = ['torneios'];
            
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
                        return Restangular.all(uri[0])
                            .getList();
                    }
            
                    function remove(item) {
                        return Restangular.one(uri[0], item.id)
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