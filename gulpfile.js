var gulp = require('gulp')
var webpack = require('webpack-stream')
var less = require('gulp-less');
var CleanCss = require('less-plugin-clean-css')
var AutoPrefix = require('less-plugin-autoprefix')
//
var cleancss = new CleanCss({ advanced: true })
var autoprefix = new AutoPrefix()

gulp.task('less', function () {
  return gulp.src('src/**/*.less')
  .pipe(less({
    paths:['node_modules'],
    plugins: [autoprefix, cleancss]
  }))
  .pipe(gulp.dest('src/'));
});
gulp.task('build', ['less'],function() {
  return gulp.src('src/kudos.js')
  .pipe(webpack(require('./src/webpack.config.js')))
  .pipe(gulp.dest('lib/'))
})

// test
gulp.task('test',['build'],function() {
  return gulp.src('test/app.js')
  .pipe(webpack(require('./test/webpack.config.js')))
  .pipe(gulp.dest('test/'))
})

gulp.task('watch',function() {
  //gulp.watch(['src/**/*'],['webpack'])
  gulp.watch(['src/**/*.less','src/**/*.jade','src/**/*.js','test/**/*.js'],['test'])
})

gulp.task('default', ['build','watch'])

