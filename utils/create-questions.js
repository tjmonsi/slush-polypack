const defaults = require('./defaults')
const uppercamelcase = require('uppercamelcase')
const appName = uppercamelcase(defaults.appName).replace(/([A-Z])/g, ' $1').trim()
const appShortName = appName.substring(0, 12)

module.exports = {
  start: [
    {
      name: 'appName',
      message: 'What is the name of your project?',
      default: appName
    },
    {
      name: 'appShortName',
      message: 'What would be the app\'s short name (for the Manifest file - maximum 12 characters)?',
      default: appShortName,
      validate: (input) => {
        if (input.length <= 12) return true
        return 'Should be maximum 12 characters'
      }
    },
    {
      name: 'appDescription',
      message: 'Describe your project',
      default: 'An awesome web app project created from Polymer, bundled in Webpack, built from Gulp, and hosted in Firebase'
    },
    {
      name: 'appTwitterHandle',
      message: 'What is the twitter handle you want to use for this app?'
    },
    {
      name: 'appImage',
      message: 'What would be the main image your want to show when your app is being shared in social media sites'
    },
    {
      name: 'appVersion',
      message: 'What is the version of your project?',
      default: '0.0.1'
    },
    {
      name: 'appBaseHref',
      message: 'What is the base href of your project?',
      default: '/'
    },
    {
      name: 'appFirebaseVersion',
      message: 'What would be the default Firebase JS SDK Version of your project?',
      default: '4.2.0'
    },
    {
      name: 'firebaseHostId',
      message: 'What is the Firebase Project ID where you will host this project?',
      default: 'input-firebase-host-id-here'
    },
    {
      name: 'appGoogleAnalytics',
      message: 'What is the Google Analytics ID of your project?'
    },
    {
      name: 'appSentryUrl',
      message: 'What is the Sentry JS URL (for capturing error messages) of your project?'
    },
    {
      name: 'appRepo',
      message: 'What is the repository of this project? (Please type it in this format: [repoOwnerOrOrg]/[repoName])',
      default: `${defaults.userName}/my-awesome-webapp`,
      validate: (input) => {
        var array = input.split('/')
        if (array.length === 2) return true
        return 'It should be a valid repository'
      }
    },
    {
      name: 'appRepoType',
      message: 'Where did you host your repository?',
      default: 0,
      type: 'list',
      choices: [
        'Github.com',
        'Gitlab.com',
        'Bitbucket.com',
        'None',
        'Others'
      ]
    },
    {
      name: 'authorName',
      message: 'What is the author\'s name?',
      default: defaults.authorName
    },
    {
      name: 'authorEmail',
      message: 'What is the author\'s email?',
      default: defaults.authorEmail
    },
    {
      name: 'userName',
      message: 'What is the author\'s username?',
      default: defaults.userName
    },
    {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }
  ]
}
