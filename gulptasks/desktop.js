(function(module){
    'use strict';

    function RegisterTasks(gulp, tasks){
        gulp.task('private:app:package', function(){
            return gulp.src('src/app.package.json')
                .pipe(tasks.rename('package.json'))
                .pipe(gulp.dest('dist'));
        });
    }

    module.exports = {
        init: RegisterTasks,
        doc: function(){

        }
    };

})(module);