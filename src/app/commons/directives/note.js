(function(jQuery, $){
    'use strict';

    function NoteDirectiveController(){
        var viewModel = this;
        

    }

    function NoteDirective(){
        return {
            restrict: 'E',
            bindToController: {
                item: '=',
                edit: '&onEdit',
                remove: '&onRemove'
            },
            scope: {},
            templateUrl: 'commons/directives/note.html',
            controller: NoteDirectiveController,
            controllerAs: 'nd'
        };
    }

    angular.module('xnote').directive('note', NoteDirective);
})();