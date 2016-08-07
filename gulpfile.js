"use strict";

var gulp = require('gulp');
var karma = require('karma').Server;
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');


gulp.task('test', function (done) {
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('spec', function () {
  return gulp.src('src/**.js')
    .pipe(jasmine());
});

gulp.task('jshint', function () {
  return gulp.src('src/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
