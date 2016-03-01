var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var gulpJSPM = require('gulp-jspm');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');
var jspm = require('jspm');
var Q = require('q');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var mySystem = new jspm.Loader();

gulp.task('font-awesome-less', function () {
  var awesomeLessLoc;
  var deferred = Q.defer();

  mySystem.normalize('font-awesome').then(function(normalized) {
    var i = normalized.indexOf('jspm_packages');
    awesomeLessLoc = './' + normalized.slice(i,-3) + '/less/font-awesome.less';

    gulp.src(awesomeLessLoc)
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./css'))
      .on('end', function() {
        deferred.resolve();
      });
  });

  return deferred.promise;
});

gulp.task('bootstrap-less', function () {
  var bootstrapLessLoc;
  var deferred = Q.defer();

  mySystem.normalize('bootstrap-less').then(function(normalized) {


    var i = normalized.indexOf('jspm_packages');
    bootstrapLessLoc = './' + normalized.slice(i,-3) + '/bootstrap/bootstrap.less';
    //console.log(bootstrapLessLoc);
    gulp.src(bootstrapLessLoc)
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./css'))
      .on('end', function() {
        deferred.resolve();
      });
  });

  return deferred.promise;
});

gulp.task('ng2-freelancer-less', function () {
  return gulp.src('less/ng2-freelancer.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('bootstrap-min', function () {
  return gulp.src('css/bootstrap.css')
    //.pipe(vinylPaths(del))
    .pipe(cleanCSS())
    .pipe(rename('bootstrap.min.css'))
    .pipe(gulp.dest('public/css/'));
});


gulp.task('css-bundle', function () {
  return gulp.src(['css/ng2-freelancer.css','css/font-awesome.css'])
    .pipe(concatCSS('ng2-freelancer.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('typescript', function () {
  return gulp.src('app/**/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('./app'));
});

gulp.task('jspm-bundle-sfx', function () {
  gulp.src('app/bootstrap.ts')
    .pipe(gulpJSPM({selfExecutingBundle: true})) // `jspm bundle-sfx main`
    .pipe(rename('ng2-freelancer.min.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('css', function(callback) {
  runSequence(['font-awesome-less','ng2-freelancer-less','bootstrap-less'], ['bootstrap-min', 'css-bundle'], callback);
});

gulp.task('js', function(callback){
  runSequence('jspm-bundle-sfx');
});

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('public/'));
})

gulp.task('bootstrap', function(callback) {
  runSequence('bootstrap-less', 'bootstrap-min', callback);
});

gulp.task('img', function() {
  return gulp.src(['img/**/*'])
  .pipe(gulp.dest('public/img'));
});

gulp.task('fonts', function() {
  return gulp.src(['fonts/**/*'])
  .pipe(gulp.dest('public/fonts'));
});

gulp.task('lib', function() {
  return gulp.src(['lib/**/*'])
  .pipe(gulp.dest('public/lib'));
});

gulp.task('assets', ['img', 'fonts', 'lib']);

gulp.task('build', ['assets', 'css', 'js', 'html']);

gulp.task('default', ['watch', 'scripts', 'images']);
