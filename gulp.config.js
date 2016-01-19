var path = require('path');

module.exports = {
    folders: {
        gulptasks: path.join('.','gulptasks'),
        dist: {
            root: path.join('.', 'dist'),
            styles: path.join('.', 'dist', 'styles')
        }
    },
    files: {
        allStyles: path.join('.', 'src', '**', '*.css'),
        allVendorStyles: [
            path.join('bower_components', 'angular-material-icons', 'angular-material-icons.css'),
            path.join('bower_components', 'angular-material', 'angular-material.css'),
        ],
        allDistFiles: path.join('.', 'dist', '**', '*'),
        appMinCss: 'app.min.css',
        vendorMinCss: 'vendor.min.css'
    }
};
