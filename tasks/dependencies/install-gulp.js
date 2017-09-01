const gulp = require('gulp')
const install = require('gulp-yarn')

/**
 * # Slush Task Install gulp
 *
 * Install gulp dependencies using yarn
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:install-gulp
 * ```
 *
 * ## File:
 * [/tasks/installers/install-gulp.js](../../../tasks/installers/install-gulp.js)
 *
 */
gulp.task('install-gulp', (done) => {
  const installers = ['./gulp/package.json', './gulp/yarn.lock']

  return gulp.src(installers)
  .pipe(install())
})
