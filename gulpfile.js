var gulp 		= require('gulp'),
    browserSync = require('browser-sync'),
    sass 		= require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
    del         = require('del'),
    autoprefixer= require('gulp-autoprefixer'),
    htmlmin     = require('gulp-htmlmin'),
    ignore      = require('gulp-ignore'),
    imagemin 	= require('gulp-imagemin'),
    jade        = require('gulp-jade');

gulp.task('sass', function(){
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('jadeh', function() {
  gulp.src('./app/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./app'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir : 'app'
		},
		notify: false
	})
});
gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/jade/**/*.jade', ['jadeh']);
	gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.сss', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist'); // Delete folder dist before build
});

gulp.task('build', ["clean", "sass"], function() {

    var buildCss = gulp.src('app/css/**/*') // Dest css in production
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    var buildImage = gulp.src('app/img/**/*') // Dest img in production
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))

    var buildJs = gulp.src('app/js/**/*') // Dest js in production
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Dest HTML in production
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

});