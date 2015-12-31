var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var handleError = function(err) {
  console.log(err.message);
  this.emit('end');
}

gulp.task('process:sass', function() {
  return gulp.src('./css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .on('error', handleError)
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function(){
  gulp.watch('./css/main.scss', ['process:sass']);
});

gulp.task('default', ['process:sass', 'watch']);
