const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Компиляция SCSS в CSS
function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Отслеживание изменений в SCSS, JS и HTML
function watch() {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
}

// Запуск сервера BrowserSync
function serve() {
  browserSync.init({
    server: './',
  });
}

// Задача по умолчанию, объединяющая 'styles', 'serve' и 'watch'
gulp.task('default', gulp.series(styles, gulp.parallel(serve, watch)));