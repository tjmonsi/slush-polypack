const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './build-utils'

/**
 * # Slush Task Update Build Utils Files
 *
 * Updates build-utils files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-build-utils
 * ```
 *
 * ## File:
 * [/tasks/creators/update-build-utils.js](../../../tasks/creators/update-build-utils.js)
 *
 */

gulp.task('update-src', (done) => {
  copy(gulp.src(__dirname + '/../../templates/build-utils/**/*.*'), dest, done)
})
