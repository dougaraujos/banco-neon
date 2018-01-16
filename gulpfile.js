
/**
 * Dependencies injection
 */

const gulp = require('gulp');
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

gulp.task('css', () => {
	const sassSrc =  `${PATH.source}/sass/**/*.scss`;
	const cssDist =  `${PATH.public}/assets/css`;

	gulp.src(sassSrc)
		.pipe(sass({
			outputStyle: 'compressed',
			sourcemap: true,
			includePaths: ['./node_modules/foundation-sites/scss']
		}).on('error', sass.logError))
		.pipe(gulp.dest(cssDist));
});
