const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Yarn Lock file
 *
 * Creates/Overwrites the `yarn.lock` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-yarn
 * ```
 *
 * ## File:
 * [/tasks/creators/create-yarn.js](../../../tasks/creators/create-yarn.js)
 *
 */

gulp.task('create-yarn', (done) => {
  copy(gulp.src(__dirname + '/../../templates/yarn.lock'), dest, done)
})
