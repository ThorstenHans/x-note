(function(module) {
    'use strict';

    function RegisterTasks(gulp, tasks) {

        gulp.task('private:build', function() {
            tasks.inSequence(
                'private:clean',
                'private:app:templates', [
                    'private:vendor:css',
                    'private:vendor:js',
                    'private:app:css',
                    'private:app:js',
                    'private:app:package'
                ],
                'private:app:html'
            );
        });

        gulp.task('private:clean', function(done) {
            tasks.del.sync(['dist/**/*', '.temp/**/*'], {
                force: true
            });
            done();
        });
    }

    module.exports = {
        init: RegisterTasks,
        doc: function() {

        }
    };

})(module);