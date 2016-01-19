var gulp = require('gulp'),
    config = require('./gulp.config');

var tasks = {
    concat: require('gulp-concat'),
    cssmin: require('gulp-cssmin'),
    del: require('del'),
    runSequence: require('run-sequence')
};


var customGulpTasks = require('require-dir')(config.folders.gulptasks);

for (var gulpTask in customGulpTasks) {
    customGulpTasks[gulpTask].init(gulp, config, tasks);
}

gulp.task('clear', function(done) {
    del.sync(config.files.allDistFiles, {
        force: true
    });
    done();
});

gulp.task('default', function(done) {
    console.log('');
    console.log('Please execute one of the following public tasks');
    console.log(' - clear: cleans up the dist folder');

    for (var gulpTask in customGulpTasks) {
        if (!customGulpTasks[gulpTask].hasOwnProperty('docs')) {
            continue;
        }
        customGulpTasks[gulpTask].docs.map(function(doc) {
            console.log(doc.task + ": " + doc.description);
        });
    }

    console.log('');
    console.log('Start build using ./node_modules/.bin/gulp build');
    console.log('');
    done();
});
