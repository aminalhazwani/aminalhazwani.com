var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext');

gulp.task('styles', function() {
  var processors = [
    cssnext()
  ];
  return gulp.src('_assets/postcss/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('_assets/css'));
});