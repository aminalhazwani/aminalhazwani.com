var gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch('_assets/postcss/style.css', ['styles']);
});