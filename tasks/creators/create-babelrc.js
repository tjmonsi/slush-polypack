const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Babel Configuration
 *
 * Creates/Overwrites the `.babelrc` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-contributing
 * ```
 */

gulp.task('create-babelrc', (done) => {
  copy(gulp.src(__dirname + '/../../templates/.babelrc'), dest, done)
})
