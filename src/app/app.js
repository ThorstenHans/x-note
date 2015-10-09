(function(jQuery, $) {
    'use strict';

    angular.module('xnote', ['ngMaterial', 'ngMdIcons'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('pink')
                .accentPalette('blue')
                .warnPalette('cyan');
        });
})();