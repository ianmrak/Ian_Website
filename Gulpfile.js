const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('./public/sass/styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css/'))
});

gulp.task('watch', function() {
  gulp.watch('public/sass/**/*.scss', ['styles']);
});
