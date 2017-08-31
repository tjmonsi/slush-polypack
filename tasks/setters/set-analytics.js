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
 * # Slush Task Set Analytics
 *
 * This sets the google analytics id to your config file
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp:set-analytics
 * ```
 *
 * ## File:
 * [/tasks/setters/set-analytics.js](../../../tasks/setters/set-analytics.js)
 *
 */
gulp.task('set-analytics', (done) => {
  const questions = []
  setConfigQuestion(options, 'config', 'What config file do you want to edit?', questions, data.answers)
  setConfigQuestion(options, 'analytics', 'What is the analytics id?', questions, data.answers)

  const setAnswers = (answers) => {
    const c = getConfig(answers.config, done)
    c.build.analytics = answers.analytics
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
