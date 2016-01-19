var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('clear', function(done) {
    del.sync('dist/**/*', {
        force: true
    });
    done();
});

gulp.task('build-app-css', function() {
    return gulp.src('src/styles/**/*.css')
        .pipe(concat('app.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-vendor-css', function(){
    return gulp.src([
      'bower_components/angular-material-icons/angular-material-icons.css',
      'bower_components/angular-material/angular-material.css'
    ])
    .pipe(concat('vendor.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', function(done) {
    return runSequence('clear', ['build-app-css', 'build-vendor-css'], done);
});
