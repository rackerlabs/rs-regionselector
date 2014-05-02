var gulp = require('gulp');
var connect = require('gulp-connect');
var html2js = require('gulp-ng-html2js');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var ngmin = require('gulp-ngmin');
var stylish = require('jshint-stylish');

var docs = 'docs/**/*';
var src = 'src/javascripts/**/*.js';
var templates = 'src/templates/**/*.html';
var test = 'test/**/*.js';
var dependencies = ['bower_components/angular/angular.js', 'bower_components/angular-mocks/angular-mocks.js'];

gulp.task('connect', function () {
  return connect.server({
    root: ['bower_components/angular', 'dist', 'docs'],
    port: 8000,
    livereload: true
  });
});

gulp.task('docs', function () {
  return gulp.src(docs)
    .pipe(connect.reload());
});

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
  return gulp.src(dependencies.concat([src, test]))
    .pipe(karma({ configFile: 'karma.conf.js', action: 'run' }));
});

gulp.task('test:watch', function () {
  return gulp.src(dependencies.concat([src, test]))
    .pipe(karma({ configFile: 'karma.conf.js', action: 'watch' }));
});

gulp.task('watch', function () {
  gulp.watch(docs, ['docs']);
  gulp.watch(src, ['javascript']);
  gulp.watch(templates, ['templates']);
});

gulp.task('default', ['lint', 'test:run', 'dist']);
gulp.task('dist', ['templates', 'javascript', 'docs']);
gulp.task('server', ['dist', 'connect', 'watch']);
