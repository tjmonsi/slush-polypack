const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './gulp'

/**
 * # Slush Task Update Build Utils Files
 *
 * Updates gulp files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-gulp
 * ```
 *
 * ## File:
 * [/tasks/creators/update-gulp.js](../../../tasks/creators/update-gulp.js)
 *
 */

gulp.task('update-gulp', (done) => {
  copy(gulp.src(__dirname + '/../../templates/gulp/**/*.*'), dest, done)
})
