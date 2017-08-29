const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

/**
 * # Slush Task Create package.json
 *
 * Creates the `package.json` file using the `_package.json` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-package-json
 * ```
 *
 * ## File:
 * [/tasks/creators/create-package-json.js](../../../tasks/creators/create-package-json.js)
 *
 */

gulp.task('create-package-json', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/_package.json'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a package.json without running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
