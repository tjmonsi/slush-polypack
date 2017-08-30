const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Gulpfile
 *
 * Creates/Overwrites the `gulpfile.js` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-gulpfile
 * ```
 *
 * ## File:
 * [/tasks/creators/create-gulpfile.js](../../../tasks/creators/create-gulpfile.js)
 *
 */

gulp.task('create-gulpfile', (done) => {
  copy(gulp.src(__dirname + '/../../templates/gulpfile.js'), dest, done)
})
