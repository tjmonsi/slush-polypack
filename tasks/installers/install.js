const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * # Slush Task Install
 *
 * Install dependencies.
 * Runs the following tasks:
 * - [install-bower](../dependencies/install-bower.md)
 * - [install-npm](../dependencies/install-npm.md)
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:install
 * ```
 *
 * ## File:
 * [/tasks/installers/install.js](../../../tasks/installers/install.js)
 *
 */
gulp.task('install', (done) => {
  return runSequence(
    'install-bower',
    'install-npm',
    'install-gulp',
    'install-functions',
    done
  )
})
