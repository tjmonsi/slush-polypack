const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const options = require('gulp-options')
const createHttpCodes = require('../utils/create-http-codes')

/**
 * # Slush Task Create HTTP Codes File
 *
 * Creates/Overwrites the HTTP Codes file to be read by the webpack loader.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-http-codes
 * ```
 *
 * ## File:
 * [/tasks/creators/create-http-codes.js](../../../tasks/creators/create-http-codes.js)
 *
 */

gulp.task('create-http-codes', (done) => {
  var env = 'dev'
  if (options.has('env')) {
    env = options.get('env')
  }

  if (options.has('prod')) {
    env = 'prod'
  }
  fs.writeFileSync(path.resolve(__dirname, '../../src/http-codes.js'), createHttpCodes(env), 'utf8')
  done()
})
