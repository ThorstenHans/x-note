(function(jQuery, $){
    'use strict';

    function EditNoteDirectiveController(){
        var viewModel = this;
    }

    function EditNoteDirective(){
        return {
            restrict: 'E',
            bindToController: {
                'item' : '=',
                'finish' : '&onFinished',
            },
            scope: {},
            templateUrl : 'commons/directives/editnote.html',
            controller: EditNoteDirectiveController,
            controllerAs: 'editor'
        };
    }
    angular.module('xnote').directive('editNote', EditNoteDirective);
})();