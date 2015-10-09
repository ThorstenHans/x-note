(function(jQuery, $){
    'use strict';

        function FileSystemService($q){
            var fs = require('fs'),
                gui = require('nw.gui'),
                path = require('path');

            this.save = function(notes){
                var fileDescriptor = fs.openSync(path.join(gui.App.dataPath, "data.json"), "w+");
                fs.writeSync(fileDescriptor, JSON.stringify(notes));
            };

            this.load = function(){
                return JSON.parse(fs.readFileSync(path.join(gui.App.dataPath, "data.json")));
            };

        }

        angular.module('xnote').service('fileSystemService', FileSystemService);
    
})();