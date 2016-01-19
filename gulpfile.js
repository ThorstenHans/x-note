var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del');

gulp.task('clear', function(done){
    del.sync('dist/**/*', {force:true});
    done();
});

gulp.task('default', ['clear'] ,function(){
  return gulp.src('src/styles/**/*.css')
    .pipe(concat('app.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/styles'));
});
