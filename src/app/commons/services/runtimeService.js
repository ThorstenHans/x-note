(function(jQuery, $){
    'use strict';

    function RuntimeService(){
        this.isNwJsApp = function(){
            return typeof(process) !== "undefined" && angular.isDefined(process.versions) && process.versions.hasOwnProperty('node-webkit');
        };

        this.isOsx = function(){
            return typeof(process) !== "undefined" && angular.isDefined(process.platform) && process.platform.match(/(arwin)/g);
        };
    }
    
    angular.module('xnote').service('runtimeService', RuntimeService);
})();