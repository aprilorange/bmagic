var gulp = require('gulp'),
  babel = require('gulp-babel'),
  nodemon = require('gulp-nodemon'),
  webpack = require('gulp-webpack'),
  stylus = require('gulp-stylus'),
  nib = require('nib')

var paths = {
  system: './src/system/*.js',
  js: './assets/js',
  stylus: './src/assets/styl/*.styl'
}

var webpackConfig = require('./webpack.config')

gulp.task('webpack-dev', function() {
  var webpackDevConfig = Object.create(webpackConfig)
  webpackDevConfig.watch = true
  gulp.src('./src/assets/js/app.js')
    .pipe(webpack(webpackDevConfig))
    .pipe(gulp.dest(paths.js))
})

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: ['./src/assets/js/*.js']
  })
})

gulp.task('babel', function() {
  return gulp.src(paths.system)
    .pipe(babel())
    .pipe(gulp.dest('./core'))
})

gulp.task('stylus', function() {
  return gulp.src('./src/assets/styl/main.styl')
    .pipe(stylus({
      use: [nib()],
      import: ['nib']
    }))
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('watch', function() {
  gulp.watch(paths.system, ['babel'])
  gulp.watch(paths.stylus, ['stylus'])
})

gulp.task('build', ['babel', 'stylus'])

gulp.task('build-dev', ['webpack-dev', 'babel', 'stylus'])

gulp.task('default', ['build-dev', 'nodemon', 'watch'])