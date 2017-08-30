const gulp = require('gulp')
const fs = require('fs')
const createHttpCodes = require('../../templates/build-utils/utils/create-http-codes')

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
  fs.writeFileSync('./src/http-codes.js', createHttpCodes('dev'), 'utf8')
  done()
})
