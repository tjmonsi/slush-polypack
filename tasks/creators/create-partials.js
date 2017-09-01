const gulp = require('gulp')
const fs = require('fs')
const createPartials = require('../../templates/gulp/utils/create-partials')

/**
 * # Slush Task Create Partials File
 *
 * Creates/Overwrites the Partials file to be read by the webpack loader.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-partials
 * ```
 *
 * ## File:
 * [/tasks/creators/create-partials.js](../../../tasks/creators/create-partials.js)
 *
 */

gulp.task('create-partials', (done) => {
  fs.writeFileSync('./src/partials.js', createPartials('dev'), 'utf8')
  done()
})
