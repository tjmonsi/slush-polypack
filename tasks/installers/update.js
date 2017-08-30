const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * # Slush Task Update
 *
 * Update Core and Source files. Copies the core files to `core/` and source files (developer project sample files) to `src/`.
 * It also copies files for gulp and webpack to run to `gulp/` folder
 * Runs the following tasks:
 * - [update-core](../updates/update-core.md)
 * - [update-src](../updates/update-src.md)
 * - [update-gulp](../updates/update-gulp.md)
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:update
 * ```
 *
 * ## File:
 * [/tasks/installers/update.js](../../../tasks/installers/update.js)
 *
 */
gulp.task('update', (done) => {
  return runSequence(
    'update-core',
    'update-src',
    'update-gulp',
    'update-images',
    'update-functions',
    done
  )
})
