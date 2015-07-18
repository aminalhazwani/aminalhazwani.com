var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('shell', shell.task([
  's3_website push'
]));