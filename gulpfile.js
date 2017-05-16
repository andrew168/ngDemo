'use strict';
var gulp = require('gulp'),
    runSequence = require('run-sequence');

JSON.minify = JSON.minify || require("node-json-minify");

gulp.task('clean', function () {
    console.log("start to clean");
});

gulp.task('concat-files', function () {
    console.log("start to concat");
});

gulp.task('minify', function () {
    console.log("start to minify");
});

gulp.task('update-index', function () {
    console.log("start to update index.html");
});

gulp.task('deploy', function () {
    console.log("start to deploy");
});

gulp.task('default', function(callback) {
    runSequence('clean', 'concat-files', 'minify', 'update-index', "deploy", callback);
});
