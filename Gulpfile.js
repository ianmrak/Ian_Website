const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src('./public/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./public/css/'))
});

gulp.task('watch', function() {
  gulp.watch('public/**/*.scss', ['styles']);
});
