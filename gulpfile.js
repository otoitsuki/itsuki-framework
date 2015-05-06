
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var cssgrace = require('cssgrace');


gulp.task('default', function () {
    var processors = [
        require('cssgrace')
    ];
    gulp.src('./styles/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./styles'))
});