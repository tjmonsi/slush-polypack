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
gulp.task('install', (done) => {
  const installers = ['./bower.json']

  gulp.src(installers)
  .pipe(install())
  .on('end', function () {
    done()
  })
})
