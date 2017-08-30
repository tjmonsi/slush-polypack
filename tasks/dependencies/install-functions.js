const gulp = require('gulp')
const install = require('gulp-yarn')

/**
 * # Slush Task Install functions
 *
 * Install functions dependencies using yarn
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:install-functions
 * ```
 *
 * ## File:
 * [/tasks/installers/install-functions.js](../../../tasks/installers/install-functions.js)
 *
 */
gulp.task('install-functions', (done) => {
  const installers = ['./functions/package.json', './functions/yarn.lock']

  return gulp.src(installers)
  .pipe(install())
})
