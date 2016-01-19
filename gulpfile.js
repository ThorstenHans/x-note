var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    runSequence = require('run-sequence');
    config = require('./gulp.config');

gulp.task('clear', function(done) {
    del.sync(config.files.allDistFiles, {
        force: true
    });
    done();
});

gulp.task('private:build-app-css', function() {
    return gulp.src(config.files.allStyles)
        .pipe(concat(config.files.appMinCss))
        .pipe(cssmin())
        .pipe(gulp.dest(config.folders.dist.styles));
});

gulp.task('private:build-vendor-css', function(){
    return gulp.src(config.files.allVendorStyles)
    .pipe(concat(config.files.vendorMinCss))
    .pipe(cssmin())
    .pipe(gulp.dest(config.folders.dist.styles));
});

gulp.task('default', function(done) {
    console.log('');
    console.log('Please execute one of the following public tasks');
    console.log(' - clear: cleans up the dist folder');
    console.log(' - build: build the app');
    console.log('');
    console.log('Start build using ./node_modules/.bin/gulp build');
    console.log('');
    done();
});

gulp.task('build', function(done){
  return runSequence('clear', ['private:build-app-css', 'private:build-vendor-css'], done);
});
