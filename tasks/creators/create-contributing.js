const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

/**
 * # Slush Task Create Contributing
 *
 * Creates the `CONTRIBUTING.md` file using the `_CONTRIBUTING.md` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-contributing
 * ```
 *
 * ## File:
 * [/tasks/creators/create-contributing.js](../../../tasks/creators/create-contributing.js)
 *
 */

gulp.task('create-contributing', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/_CONTRIBUTING.md'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a CONTRIBUTING.md without running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
