! function(module) {
    'use strict';

    function RegisterTasks(gulp, config, tasks) {

        gulp.task('private:build-app-css', function() {
            return gulp.src(config.files.allStyles)
                .pipe(tasks.concat(config.files.appMinCss))
                .pipe(tasks.cssmin())
                .pipe(gulp.dest(config.folders.dist.styles));
        });

        gulp.task('private:build-vendor-css', function() {
            return gulp.src(config.files.allVendorStyles)
                .pipe(tasks.concat(config.files.vendorMinCss))
                .pipe(tasks.cssmin())
                .pipe(gulp.dest(config.folders.dist.styles));
        });

        gulp.task('build', function(done) {
            return tasks.runSequence('clear', ['private:build-app-css', 'private:build-vendor-css'], done);
        });
    }

    module.exports = {
        init: RegisterTasks,
        docs: [{
          task: 'build',
          description: 'builds the app'
        }]
    };

}(module);
