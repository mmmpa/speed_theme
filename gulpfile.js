var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var plumber = require("gulp-plumber");


gulp.task('default', function () {
    var css_dest = 'css';
    var sass_watch = 'sass/*.sass';

    gulp.watch(sass_watch).on('change', function (e) {
        gulp.src(sass_watch)
            .pipe(plumber())
            .pipe(sass({
                compass: true
            }))
            .pipe(minify({keepBreaks: false}))
            .pipe(gulp.dest(css_dest));
    });
});
