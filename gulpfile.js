/*
 * immutato
 * https://github.com/parroit/immutato
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

//TODO remove all unused gulp task
//TODO correct task to build browser version for website


var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var $ = loadPlugins({
    lazy: true
});
var through2 = require('through2');
var tests = 'test/*.js';
var sources = 'lib/*.js';

function guard(op) {
    op.on('error', console.log.bind(console));
    return op;
}

var doGC = through2.obj(function doGC(file, enc, next) {
    //jshint validthis:true
    var self = this;
    setTimeout(function(){

        self.push(file);
        next();    
    },1000);
    


});

gulp.task('bench', function() {

    //return gulp.src('./benchmark/current_vs_prev_vs_pojo-creation_bench.js', {read: false})
    //return gulp.src('./benchmark/current_vs_prev_vs_pojo-change_bench.js', {read: false})

    //return gulp.src('./benchmark/current_vs_prev_vs_pojo-multiple_changes_bench.js', {read: false})
    return gulp.src('./lib/*_bench.js', {read: false})
        .pipe(doGC)
        .pipe($.bench());
});



gulp.task('dist', function() {

    return gulp.src('./lib/all-benchmarks.js')
        .pipe(guard($.pureCjs({
            external: {
                'immutato-types': {
                    global: 'immutato_prev'
                },
                'immutato': {
                    global: 'immutato'
                }
            },
            output: 'immutato-benchmarks.js',
            exports: 'all-benchmarks',
        })))

        .pipe(gulp.dest('../website/assets/js'));
});




