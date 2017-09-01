const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * # Slush Task Default
 *
 * Default. Creates the primary structure of your project.
 * Use it on an empty directory to start your project.
 * Runs the following tasks:
 * - [create-app](../creators/create-app.md)
 * - [create-babelrc](../creators/create-babelrc.md)
 * - [create-database-rules-json](../creators/create-database-rules-json.md)
 * - [create-gitignore](../creators/create-gitignore.md)
 * - [create-polypackrc](../creators/create-polypackrc.md)
 * - [update](./update.md)
 *
 * Note: Be careful when using it on an existing project.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp
 * ```
 *
 * ## File:
 * [/tasks/installers/default.js](../../../tasks/installers/default.js)
 *
 */
gulp.task('default', (done) => {
  return runSequence(
    'create-app',
    'create-gulpfile',
    'create-babelrc',
    'create-database-rules-json',
    'create-firebase-json',
    'create-firebaserc',
    'create-gitignore',
    'create-polypackrc',
    'create-yarn',
    'create-routing',
    'create-partials',
    'create-http-codes',
    'update',
    'install',
    done
  )
})
