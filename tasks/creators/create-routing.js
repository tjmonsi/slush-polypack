const gulp = require('gulp')
const fs = require('fs')
const createRouting = require('../../templates/gulp/utils/create-routing')

/**
 * # Slush Task Create Routing File
 *
 * Creates/Overwrites the Routing file to be read by the webpack loader.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-routing
 * ```
 *
 * ## File:
 * [/tasks/creators/create-routing.js](../../../tasks/creators/create-routing.js)
 *
 */

gulp.task('create-routing', (done) => {
  fs.writeFileSync('./src/routing.js', createRouting('dev'), 'utf8')
  done()
})
