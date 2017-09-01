const gulp = require('gulp')
const options = require('gulp-options')
const inquirer = require('inquirer')
const getConfig = require('../../utils/get-config')
const setConfig = require('../../utils/set-config')
const setConfigQuestion = require('../../utils/set-config-question')
const data = {
  answers: {}
}

/**
 * # Slush Task Set Description
 *
 * This sets the App Description in your config file
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:set-app-description
 * ```
 *
 * ## File:
 * [/tasks/setters/set-app-description.js](../../../tasks/setters/set-app-description.js)
 *
 */
gulp.task('set-app-description', (done) => {
  const questions = []
  setConfigQuestion(options, 'config', 'What config file do you want to edit?', questions, data.answers)
  setConfigQuestion(options, 'description', 'Describe your Web App', questions, data.answers)

  const setAnswers = (answers) => {
    const c = getConfig(answers.config, done)
    c.app.description = answers.description
    setConfig(answers.config, c)
    done()
  }

  if (questions.length) {
    inquirer.prompt(questions, (answers) => {
      setAnswers(Object.assign({}, data.answers, answers))
    })
  } else {
    setAnswers(data.answers)
  }
})
