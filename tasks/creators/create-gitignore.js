const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Git Ignore file
 *
 * Creates/Overwrites the `.gitignore` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-gitignore
 * ```
 *
 * ## File:
 * [/tasks/creators/create-gitignore.js](../../../tasks/creators/create-gitignore.js)
 *
 */

gulp.task('create-gitignore', (done) => {
  copy(gulp.src(__dirname + '/../../templates/.gitignore'), dest, done)
})
