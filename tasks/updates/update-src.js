const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './src'

/**
 * # Slush Task Update Source Files
 *
 * Updates src files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-src
 * ```
 *
 * ## File:
 * [/tasks/creators/update-src.js](../../../tasks/creators/update-src.js)
 *
 */

gulp.task('update-src', (done) => {
  copy(gulp.src(__dirname + '/../../templates/src/**/*.*'), dest, done)
})
