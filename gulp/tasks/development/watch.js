var gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch('_assets/postcss/*.css', ['styles']);
});