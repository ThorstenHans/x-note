require('xplatform-build')({
    options: {
        cordova: {
            runCommands: ['cordova run ios', 'cordova run android']
        }
    }
});