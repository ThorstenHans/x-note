(function(jQuery, $){
    'use strict';

        function DesktopFileSystemService(){
            var fs = require('fs'),
                gui = require('nw.gui'),
                path = require('path');

            this.save = function(notes){
                var fileDescriptor = fs.openSync(path.join(gui.App.dataPath, "data.json"), "w+");
                fs.writeSync(fileDescriptor, JSON.stringify(notes));
            };

            this.load = function(){
                var fullPath = path.join(gui.App.dataPath, "data.json");
                var data = [];
                try{
                    data = JSON.parse(fs.readFileSync(fullPath));
                }catch (error){
                    // data file not present
                }
                return data;
            };
        }

        

        function WebFileSystemService($window){

            this.save = function(notes){
                $window.localStorage.setItem('xnotes::allNotes', JSON.stringify(notes));
            };

            this.load = function(){
                var storageValue = $window.localStorage.getItem('xnotes::allNotes');
                if(!storageValue) { 
                    return [];
                }
                return JSON.parse(storageValue);
            };

        }

        function FileSystemServiceFactory($injector, runtimeService){
            if(runtimeService.isNwJsApp()){
                return $injector.instantiate(DesktopFileSystemService);
            }else{
                return $injector.instantiate(WebFileSystemService);
            }
        }
        angular.module('xnote').factory('fileSystemService', FileSystemServiceFactory);
    
})();