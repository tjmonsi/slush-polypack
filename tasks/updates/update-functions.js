const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './functions'

/**
 * # Slush Task Update Firebase Function Files
 *
 * Updates Firebase Function files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-functions
 * ```
 *
 * ## File:
 * [/tasks/creators/update-functions.js](../../../tasks/creators/update-functions.js)
 *
 */

gulp.task('update-functions', (done) => {
  copy(gulp.src(__dirname + '/../../templates/functions/**/*.*'), dest, done)
})
