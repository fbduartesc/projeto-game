/* global malarkey:false, moment:false */
(function() {
    'use strict';

    angular
        .module('projeto')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .constant('ENVIROMMENTS', {
            'URL_API': 'http://localhost:8080/torneiopoker-web/torneiopoker/api/'
        })
		.constant('MENSAGEM', {
            'EXCLUSAO': 'Registro excluído com sucesso',
			'CADASTRO': 'Registro cadastrado com sucesso',
			'EDITADO': 'Registro alterado com sucesso'
        });

})();