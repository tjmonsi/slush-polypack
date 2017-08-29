const gulp = require('gulp')
const slugify = require('slugify')
const camel = require('camelcase')
const uppercamel = require('uppercamelcase')
const inquirer = require('inquirer')
const data = require('../../utils/data')
const questions = require('../../utils/create-questions')
const runSequence = require('run-sequence')

/**
 * # Slush Task Create App
 *
 * This is the starting point of creating your web app. Used to get data for other tasks...
 * Done alone write/re-write the following files:
 * - package.json
 * - README.md
 * - CONTRIBUTING.md
 * - .firebaserc
 * - src/config/dev.config.js
 *
 * It runs the following tasks:
 * - [create-package-json](../creators/create-package-json.md)
 * - [create-readme](../creators/create-readme.md)
 * - [create-contributing](../creators/create-contributing.md)
 * - [create-firebaserc](../creators/create-firebaserc.md)
 * - [create-dev-config](../creators/create-dev-config.md)
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:create-app
 * ```
 */
gulp.task('create-app', (done) => {
  inquirer.prompt(questions.start, (answers) => {
    if (!answers.moveon) {
      return done(new Error('Closing the builder as of now'))
    }
    answers.appNameSlug = slugify(answers.appName.toLowerCase())
    answers.appShortNameSlug = slugify(answers.appShortName.toLowerCase())
    answers.appNameCamel = camel(answers.appNameSlug)
    answers.appShortNameCamel = camel(answers.appShortNameSlug)
    answers.appNameUpperCamel = uppercamel(answers.appNameSlug)
    answers.appShortNameUpperCamel = uppercamel(answers.appShortNameSlug)
    answers.firebaseHostId = slugify(answers.firebaseHostId.toLowerCase())

    if (answers.appRepoType === 'None') {
      answers.appRepo = null
    } else {
      if (answers.appRepoType === 'Others') {
        answers.appRepoType = 'git-enterprise-repo'
        console.log('Please edit your repository and bugs attribute in the package.json later or issue a suggestion at https://github.com/tjmonsi/slush-polypack/issues')
      }
      var repogit = `git://${answers.appRepoType.toLowerCase()}.com`
      var repourl = `https://${answers.appRepoType.toLowerCase()}.com`

      answers.appRepoFullGit = `${repogit}/${answers.appRepo}.git`
      answers.appRepoFullUrl = `${repourl}/${answers.appRepo}`
    }

    data.answers = answers

    runSequence(
      'create-package-json',
      'create-readme',
      'create-contributing',
      'create-firebaserc',
      'create-dev-config',
      done
    )
  })
})
