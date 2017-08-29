const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Polypack Configuration File
 *
 * Creates/Overwrites the `.polypackrc` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-polypackrc
 * ```
 *
 * ## File:
 * [/tasks/creators/create-polypackrc.js](../../../tasks/creators/create-polypackrc.js)
 *
 */

gulp.task('create-polypackrc', (done) => {
  copy(gulp.src(__dirname + '/../../templates/.polypackrc'), dest, done)
})
