var gulp = require('gulp');
var imageOptim = require('gulp-imageoptim');

gulp.task('images', function() {
  return gulp.src('_site/images/**/*.{jpg,jpeg,png}')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest('_site/images/'));
});