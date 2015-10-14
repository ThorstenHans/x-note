(function(module) {
    'use strict';

    function RegisterTasks(gulp, tasks) {

        gulp.task('build:desktop', function(done) {
            tasks.inSequence('private:build', 'private:app:package', 'private:build:nw', done);
        })
        gulp.task('private:build:nw', function(done) {
            var nw = new tasks.NwBuilder({
                files: 'dist/**/*',
                version: '0.12.3',
                platforms: ['osx64']
            });

            nw.build();
            done();
        });

        gulp.task('private:app:package', function() {
            return gulp.src('src/app.package.json')
                .pipe(tasks.rename('package.json'))
                .pipe(gulp.dest('dist'));
        });
    }

    module.exports = {
        init: RegisterTasks,
        docs: [{
            task: 'build:desktop',
            description: 'builds the desktop app'
        }]
    };

})(module);