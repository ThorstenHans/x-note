var gulp = require('gulp'),
    concat = require('gulp-concat');


gulp.task('default', function(){
  return gulp.src('src/styles/**/*.css')
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist/styles'));
});
