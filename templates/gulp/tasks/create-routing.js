const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const options = require('gulp-options')
const createRouting = require('../utils/create-routing')

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
  var env = 'dev'
  if (options.has('env')) {
    env = options.get('env')
  }

  if (options.has('prod')) {
    env = 'prod'
  }
  fs.writeFileSync(path.resolve(__dirname, '../../src/routing.js'), createRouting(env), 'utf8')
  done()
})
