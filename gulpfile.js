(function () {

    'use strict';

    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'del']
    });

    //clean
    gulp.task('clean', function () {
        return $.del('dist');
    });

    gulp.task('styles', function () {
        return gulp
            .src(['src/**/*.scss'])
            .pipe($.sassImportJson({isScss: true}))
            .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
            .pipe($.autoprefixer())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('default', ['clean'], function () {
        gulp.start(['styles'])
    });

}());