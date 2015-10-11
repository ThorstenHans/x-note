(function(jQuery, $){
    'use strict';

    function ConfigureMenus(runtimeService){
        if(runtimeService.isNwJsApp() && runtimeService.isOsx()){
            var gui = require('nw.gui');
            var mb = new gui.Menu({type:"menubar"});
            mb.createMacBuiltin("x-Note");
            gui.Window.get().menu = mb;
        }
    }

    angular.module('xnote')
        .run(ConfigureMenus);
})();