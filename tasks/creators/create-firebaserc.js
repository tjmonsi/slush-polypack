const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

/**
 * # Slush Task Create .firebaserc
 *
 * Creates the `.firebaserc` file using the `_.firebaserc` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-firebaserc
 * ```
 *
 * ## File:
 * [/tasks/creators/create-firebaserc.js](../../../tasks/creators/create-firebaserc.js)
 *
 */

gulp.task('create-firebaserc', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/_.firebaserc'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a .firebaserc without running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
