const gulp = require('gulp')
const install = require('gulp-install')

/**
 * # Slush Task Install Bower
 *
 * Install bower files
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:install-bower
 * ```
 *
 * ## File:
 * [/tasks/installers/install-bower.js](../../../tasks/installers/install-bower.js)
 *
 */
gulp.task('install-bower', (done) => {
  const installers = ['./bower.json']

  return gulp.src(installers)
  .pipe(install())
})
