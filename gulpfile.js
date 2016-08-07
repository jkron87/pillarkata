"use strict";


var gulp = require('gulp');
var karma = require('karma').Server;
var jasmine = require('gulp-jasmine');


gulp.task('test', function(done){
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('spec', function () {
  return gulp.src('spec/**.js')
    .pipe(jasmine());
});
