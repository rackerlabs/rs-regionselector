var gulp, html2js, jshint, karma, ngmin, stylish, src, templates, test, dependencies;

gulp = require('gulp');
html2js = require('gulp-ng-html2js');
jshint = require('gulp-jshint');
karma = require('gulp-karma');
ngmin = require('gulp-ngmin');
stylish = require('jshint-stylish');

src = 'src/javascripts/**/*.js';
templates = 'src/templates/**/*.html';
test = 'test/**/*.js';
dependencies = 'bower_components/angular/angular.js';

gulp.task('javascript', function () {
  return gulp.src(src)
    .pipe(ngmin())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('lint', function () {
  return gulp.src([src, test])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('templates', function () {
  return gulp.src(templates)
    .pipe(html2js({ moduleName: 'rsPopoverTemplates' }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('test:run', function () {
  return gulp.src([dependencies, src, test])
    .pipe(karma({ configFile: 'karma.conf.js', action: 'run' }));
});

gulp.task('test:watch', function () {
  return gulp.src([dependencies, src, test])
    .pipe(karma({ configFile: 'karma.conf.js', action: 'watch' }));
});

gulp.task('default', ['lint', 'test:run', 'dist']);
gulp.task('dist', ['templates', 'javascript']);
