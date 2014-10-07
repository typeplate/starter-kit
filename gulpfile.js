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

var gulp       = require('gulp'),
		compass    = require('gulp-compass'),
		livereload = require('gulp-livereload'),
		webserver  = require('gulp-webserver'),
		zip        = require('gulp-zip'),
		del        = require('del');


gulp.task('styles', function() {
	return gulp.src('dev/scss/**.scss')
		.pipe(compass({
			config_file: 'config.rb',
			sourcemap: true,
			debug : true,
			css: 'dev/scss',
			sass: 'dev/scss'
		}))
		.pipe(gulp.dest('dev/scss'));
});

gulp.task('webserver', function() {
	gulp.src('dev')
		.pipe(webserver({
			port: 9000,
			path: 'dev/',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('watch', function() {
	gulp.watch('dev/scss/**.scss', ['styles']);
	livereload.listen();
});

gulp.task('cleandev', function(cb) {
	del([
		'dev/scss/*.css',
		'dev/scss/*.css.map'
	], cb);
});

gulp.task('cleandist', function(cb) {
	del([
		'dist/scss/styles.scss'
	], cb);
});

gulp.task('copy', function() {
	gulp.src('dev/css/**')
		.pipe(gulp.dest('dist/css'));

	gulp.src('dev/scss/**')
		.pipe(gulp.dest('dist/scss'));
});

gulp.task('zipit', function() {
	return gulp.src('dev/scss/**.scss')
		.pipe(zip('typeplate-sk.zip'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['webserver', 'watch']);
gulp.task('prep', ['cleandev']);
gulp.task('build', ['zipit', 'copy']);
gulp.task('ship', ['cleandist']);
