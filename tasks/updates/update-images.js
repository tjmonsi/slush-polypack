const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './images'

/**
 * # Slush Task Update Images
 *
 * Updates Images
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update-images
 * ```
 *
 * ## File:
 * [/tasks/creators/update-images.js](../../../tasks/creators/update-images.js)
 *
 */

gulp.task('update-images', (done) => {
  copy(gulp.src(__dirname + '/../../templates/images/**/*.*'), dest, done)
})
