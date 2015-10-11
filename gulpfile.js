var gulp = require('gulp');

var tasks = {
    del: require('del'),
    concat: require('gulp-concat'),
    inject: require('gulp-inject'),
    cssmin: require('gulp-cssmin'),
    ngAnnotate: require('gulp-ng-annotate'),
    ngTemplateCache: require('gulp-angular-templatecache'),
    rename: require('gulp-rename'),
    shelljs: require('shelljs'),
    uglify: require('gulp-uglify'),
    inSequence: require('run-sequence')
};

var customGulpTasks = require('require-dir')('./gulptasks');

for (var gulpTask in customGulpTasks) {
    customGulpTasks[gulpTask].init(gulp, tasks);
}


gulp.task('watch', function(){
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('default', function(done){
    tasks.inSequence('private:build', done);
});

