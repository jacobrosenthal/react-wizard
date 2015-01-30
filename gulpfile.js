var gulp = require('gulp');
var react = require('gulp-react');
var webpack = require('webpack');

gulp.task('release', function() {
    return gulp.src('src/Wizard.jsx')
        .pipe(react({
            harmony: true
        }))
        .pipe(gulp.dest('lib'));
});


gulp.task('bundleSimple', function(cb) {
  webpack({
    target: 'web',
    debug: true,
    bail: true,
    entry: {
      index: './examples/simple/index.js',
    },
    output: {
      path: './examples/simple/',
      filename: '[name].bundle.js'
    }
  }, cb);
});

gulp.task('bundleData', function(cb) {
  webpack({
    target: 'web',
    debug: true,
    bail: true,
    entry: {
      index: './examples/data/index.js',
    },
    output: {
      path: './examples/data/',
      filename: '[name].bundle.js'
    }
  }, cb);
});


gulp.task('bundleSkip', function(cb) {
  webpack({
    target: 'web',
    debug: true,
    bail: true,
    entry: {
      index: './examples/skip/index.js',
    },
    output: {
      path: './examples/skip/',
      filename: '[name].bundle.js'
    }
  }, cb);
});

gulp.task('examples', ['release', 'bundleData', 'bundleSkip', 'bundleSimple']);

gulp.task('default', ['release']);