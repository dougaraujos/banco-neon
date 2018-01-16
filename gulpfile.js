
/**
 * Dependencies injection
 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


/**
 * Paths
 */

const PATH = {
	source: 'src',
	public: 'dist'
};


/**
 * CSS
 */

const CSS = {
	source: `${PATH.source}/sass/**/*.scss`,
	public:  `${PATH.public}/assets/css`
};

gulp.task('css', () => {
	gulp.src(CSS.source)
		.pipe(sass({
			outputStyle: 'compressed',
			sourcemap: true,
			includePaths: ['./node_modules/foundation-sites/scss']
		}).on('error', sass.logError))
		.pipe(gulp.dest(CSS.public))
		.pipe(browserSync.stream());
});


/**
 * HTML
 */

const HTML = {
	source: `${PATH.source}/**/*.html`,
	public: `${PATH.public}`
}

gulp.task('html', () => {
	gulp.src(HTML.source)
		.pipe(gulp.dest(HTML.public))
		.pipe(browserSync.stream());
});


/**
 * Images
 */

const IMAGES = {
	source: `${PATH.source}/images/**/*.*`,
	public: `${PATH.public}/assets/images`
}

gulp.task('images', () => {
	gulp.src(IMAGES.source)
		.pipe(gulp.dest(IMAGES.public));
});


/**
 * Fonts
 */

const FONTS = {
	source: `${PATH.source}/fonts/**/*.*`,
	public: `${PATH.public}/assets/fonts`
}

gulp.task('fonts', () => {
	gulp.src(FONTS.source)
		.pipe(gulp.dest(FONTS.public));
});


/**
 * Serve
 */

gulp.task('serve', () => {
	browserSync.init({
		server: {
			baseDir: `${PATH.public}`
		}
	});

	gulp.watch(CSS.source, ['css']);
	gulp.watch(HTML.source, ['html']);
});
