(function(jQuery, $){
    'use strict';

    function MainController($scope, fileSystemService){
        var getEmpty = function(){ return { isNew: true, title:'', category:'', content:''};};
        var viewModel = this;
        viewModel.currentNote = getEmpty();
        viewModel.notes = [];
        viewModel.filterTerm = '';
        


        viewModel.update = function(){
            if(viewModel.currentNote.hasOwnProperty('isNew')){
                delete viewModel.currentNote.isNew;
                viewModel.notes.push(viewModel.currentNote);
            }
            viewModel.currentNote = getEmpty();
        };

        viewModel.deleteNote = function(item){
            var idx = viewModel.notes.indexOf(item);
            if(idx > -1){
                viewModel.notes.splice(idx,1);
            }
            if(viewModel.currentNote === item){
                viewModel.currentNote = null;
            }
        };

        viewModel.editNote = function(item){
            viewModel.currentNote = item;
        };
        
        viewModel.cancelEdit = function(){
            viewModel.currentNote = getEmpty();
        };

        viewModel.addNote = function(){
            var note = getEmpty();
            
            viewModel.currentNote = note;

        };

        var init = function(){
            $scope.$watchCollection(function() {
                return viewModel.notes;
            }, function(newValue, oldValue){
                fileSystemService.save(newValue);
            });
            viewModel.notes = fileSystemService.load();

        };
        init();
    }

    angular.module('xnote').controller('mainController', MainController);
})();