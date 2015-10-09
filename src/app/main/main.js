(function(jQuery, $){
    'use strict';

    function MainController(fileSystemService){
        var getEmpty = function(){ return { isNew: true, title:'', category:'', content:''};};
        var viewModel = this;
        viewModel.currentNote = getEmpty();
        viewModel.notes = [];
        viewModel.filterTerm = '';

        viewModel.import = function(){
            viewModel.notes = fileSystemService.load();
        };

        viewModel.export = function(){
            fileSystemService.save(viewModel.notes);
        };

        viewModel.save = function(){
            if(viewModel.currentNote.hasOwnProperty('isNew')){
                delete viewModel.currentNote.isNew;
                viewModel.notes.push(viewModel.currentNote);
            }
            viewModel.currentNote = getEmpty();
        };

        viewModel.deleteNote = function(note){
            var idx = viewModel.notes.indexOf(note);
            if(idx > -1){
                viewModel.notes.splice(idx,1);
            }
        };

        viewModel.editNote = function(note){
            viewModel.currentNote = note;
        };
        viewModel.cancel = function(){
            viewModel.currentNote = getEmpty();
        }
        viewModel.addNote = function(){
            var note = getEmpty();
            
            viewModel.currentNote = note;

        };
    }

    angular.module('xnote').controller('mainController', MainController);
})();