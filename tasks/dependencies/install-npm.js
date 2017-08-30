const gulp = require('gulp')
const install = require('gulp-yarn')

/**
 * # Slush Task Install NPM
 *
 * Install npm dependencies using yarn
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:install-npm
 * ```
 *
 * ## File:
 * [/tasks/installers/install-npm.js](../../../tasks/installers/install-npm.js)
 *
 */
gulp.task('install-npm', (done) => {
  console.log('install npm')
  const installers = ['./package.json', './yarn.lock']

  return gulp.src(installers)
  .pipe(install({
    flat: true
  }))
})
