const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('styles', function() {
  return gulp.src('./public/sass/styles.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css/'))
});

gulp.task('compile', function(){
    return gulp.src([
      'public/lib/angular.min.js',
      'public/lib/angular-ui-router.min.js',
      'public/app.js',
      'public/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('public/dist'))
        .pipe(rename('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', function() {
  gulp.watch('public/sass/**/*.scss', ['styles']);
  gulp.watch('public/js/**/*.js', ['compile']);
  gulp.watch('public/app.js', ['compile']);
});

gulp.task('production', ['compile'], function(){});
