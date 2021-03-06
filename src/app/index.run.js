(function () {
    'use strict';

    angular
        .module('projeto')
        .run(login)
        .run(state)
        .run(runBlock);

    state.$inject = ['$state', '$rootScope'];
    function state($state, $rootScope) {
        $rootScope.$state = $state;
    }

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

    login.$injector = ['$rootScope', '$location', '$cookies', '$http'];

    function login($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function () {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
        //$scope.$on('$destroy', unregister);
        //$rootScope.$on('$destroy', deregistrationCallback);
    }

})();