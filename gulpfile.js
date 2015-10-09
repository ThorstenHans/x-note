var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    cssmin = require('gulp-cssmin'),
    ngAnnotate = require('gulp-ng-annotate'),
    NwBuilder = require('nw-builder'),
    rename = require('gulp-rename'),
    shelljs = require('shelljs'),
    inSequence = require('run-sequence');

gulp.task('watch', function(){
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('build:nw', function(){
    var nw = new NwBuilder({
        files: 'dist/**/*',
        version: '0.12.3',
        platforms: ['osx64', 'win64']
    });

    nw.build();
});
gulp.task('build', function(){
    inSequence(
        'private:clean',
        [
            'private:vendor:css',
            'private:vendor:js',
            'private:app:css',
            'private:app:js',
            'private:app:package'
        ],
        'private:app:html'
    );
});

gulp.task('private:app:package', function(){
    return gulp.src('src/app.package.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest('dist'));
});

gulp.task('private:app:js', function(){
    return gulp.src([
        'src/app/app.js',
        'src/app/**/*.js'
    ])
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/scripts'))
});

gulp.task('private:app:css', function(){
    return gulp.src('src/styles/**.css')
        .pipe(concat('app.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
});
gulp.task('private:app:html', function(){
    var sources = gulp.src([
        'dist/styles/vendor.min.css', 
        'dist/styles/app.min.css',
        'dist/scripts/vendor.min.js',
        'dist/scripts/app.js'
        ]);
    return gulp.src('src/index.html')
        .pipe(inject(sources, {
            addRootSlash: false,
            addPrefix: '.',
            ignorePath: 'dist'
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('private:clean', function(done){
    del.sync('dist/**/*', {force:true});
    done();
});

gulp.task('private:vendor:css', function(){
    return gulp.src([
        'bower_components/angular-material-icons/angular-material-icons.css',
        'bower_components/angular-material/angular-material.min.css'
        
        ])
        .pipe(rename('vendor.min.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('private:vendor:js', function(){
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/angular-material-icons/angular-material-icons.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('dist/scripts'));
});

