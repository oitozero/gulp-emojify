'use strict';
var gulp = require('gulp');
var emojify = require('./index');
var through = require('through2');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');

gulp.task('emojify-message', function () {

  gulp.src('index.js', {
    base: './'
  })
  .pipe(emojify('All good. Go drink a :beer:'));
});

gulp.task('emojify-error', function () {

  gulp.src('index.js', {
    base: './'
  })
  .pipe(plumber({
    errorHandler: emojify.onError('Error: Grab some :coffee: and fix it!')
  }))
  .pipe(emojify(null))
  .pipe(emojify('All good. Go drink a cup of :beer:'));
});

gulp.task('default', function(cb) {
  runSequence('emojify-message', 'emojify-error', cb);
});
