const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

/**
 * # Slush Task Create Readme
 *
 * Creates the `README.md` file using the `_README.md` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-readme
 * ```
 *
 * ## File:
 * [/tasks/creators/create-readme.js](../../../tasks/creators/create-readme.js)
 *
 */

gulp.task('create-readme', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/_README.md'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a README.md without running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
