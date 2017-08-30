const gulp = require('gulp')
const fs = require('fs')
const options = require('gulp-options')
const createPartials = require('../utils/create-partials')

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
  var env = 'dev'
  if (options.has('env')) {
    env = options.get('env')
  }

  if (options.has('prod')) {
    env = 'prod'
  }
  fs.writeFileSync('../../src/partials.js', createPartials(env), 'utf8')
  done()
})
