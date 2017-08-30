const gulp = require('gulp')
const gutil = require('gulp-util')
const data = require('../../utils/data')
const writer = require('../../utils/writer')
const dest = './'

/**
 * # Slush Task Create Bower Configuration
 *
 * Creates the `bower.json` file using the `_bower.json` template. Will not write without running the [create-app](./create-app.md) task.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-contributing
 * ```
 *
 * ## File:
 * [/tasks/creators/create-contributing.js](../../../tasks/creators/create-bower.js)
 *
 */

gulp.task('create-bower', (done) => {
  if (data.answers) {
    writer(gulp.src(__dirname + '/../../templates/dynamic-templates/_bower.json'), data.answers, dest, done)
  } else {
    gutil.log(gutil.colors.red('Error: Cannot write a bower.jsonwithout running the create-app task. Please run: slush polypack:create-app'))
    done()
  }
})
