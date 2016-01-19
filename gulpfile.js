var gulp = require('gulp');


gulp.task('default', function(){
  return gulp.src('src/styles/**/*.css')
    .pipe(gulp.dest('dist/styles'));
});
