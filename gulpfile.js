var gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		cssnext = require('cssnext'),
		inlinesource = require('gulp-inline-source'),
		runSequence = require('run-sequence');

gulp.task('styles', function() {
	var processors = [
		cssnext()
  ];
  return gulp.src('./style.css')
  	.pipe(postcss(processors))
  	.pipe(gulp.dest('./css'));
});

gulp.task('inlinesource', function () {
  return gulp.src('./*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(cb){
  runSequence('styles', 'inlinesource', cb);
});