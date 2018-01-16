
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

const sassSrc =  `${PATH.source}/sass/**/*.scss`;
const cssDist =  `${PATH.public}/assets/css`;

gulp.task('css', () => {

	gulp.src(sassSrc)
		.pipe(sass({
			outputStyle: 'compressed',
			sourcemap: true,
			includePaths: ['./node_modules/foundation-sites/scss']
		}).on('error', sass.logError))
		.pipe(gulp.dest(cssDist));
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

	gulp.watch(sassSrc, ['css']);
	gulp.watch(`${PATH.public}/*.html`).on('change', browserSync.reload);
});
