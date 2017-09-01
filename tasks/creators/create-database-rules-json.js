const gulp = require('gulp')
const copy = require('../../utils/copy')
const dest = './'

/**
 * # Slush Task Create Firebase Database Rules Configuration
 *
 * Creates/Overwrites the `database.rules.json` file.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-database-rules-json
 * ```
 *
 * ## File:
 * [/tasks/creators/create-database-rules-json.js](../../../tasks/creators/create-database-rules-json.js)
 *
 */

gulp.task('create-database-rules-json', (done) => {
  copy(gulp.src(__dirname + '/../../templates/database.rules.json'), dest, done)
})
