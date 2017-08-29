const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './src/config'

/**
 * # Slush Task Create App Configuration: dev.json
 *
 * Creates the `dev.json` file in the `src/config` folder using the `_dev.json` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-contributing
 * ```
 */

gulp.task('create-firebaserc', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/src/config/_dev.json'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a dev.json without running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
