// Gulp
// =======================================================
// Installation:
// $ npm install gulp -g
//
// Gulp Tutorials:
// - http://gulpjs.com
// - https://laracasts.com/lessons/gulp-this
// - http://markgoodyear.com/2014/01/getting-started-with-gulp
// =======================================================

var gulp         = require('gulp'),
		compass      = require('gulp-compass'),
		livereload   = require('gulp-livereload'),
		webserver    = require('gulp-webserver'),
		zip          = require('gulp-zip');


gulp.task('styles', function() {
	return gulp.src('scss/typeplate-sk.scss')
		.pipe(compass({
			config_file: 'config.rb',
			sourcemap: true,
			debug : true,
			css: 'scss',
			sass: 'scss'
		}))
		.pipe(gulp.dest('scss'));
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({
			path: '/',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('zipit', function () {
	return gulp.src('scss/**.scss')
		.pipe(zip('typlate-starter-kit.zip'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('scss/**.scss', ['styles']);
	livereload.listen();
});


gulp.task('default', ['webserver', 'watch']);
gulp.task('zip', ['zipit']);