var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin');


gulp.task('default', function(){
  return gulp.src('src/styles/**/*.css')
    .pipe(concat('app.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/styles'));
});
