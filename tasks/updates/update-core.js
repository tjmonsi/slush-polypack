const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './core'

/**
 * # Slush Task Update Core Files
 *
 * Updates core files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-core
 * ```
 *
 * ## File:
 * [/tasks/creators/update-core.js](../../../tasks/creators/update-core.js)
 *
 */

gulp.task('update-core', (done) => {
  copy(gulp.src(__dirname + '/../../templates/core/**/*.*'), dest, done)
})
