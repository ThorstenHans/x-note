(function(require){
    'use strict';
    var userConfig = {
        addOns: {
            "gulp-less" : {}
        },
        sources: {
            appStyles : ['src/styles/**.less']
        }
    };
    
    require('xplatform-build')(userConfig);

})(require);