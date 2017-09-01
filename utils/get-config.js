const fs = require('fs')

module.exports = (env, done) => {
  if (!fs.existsSync(`./src/config/${env}.json`)) {
    return done(new Error('Config file doesn\'t exist. Exiting now...'))
  }

  return JSON.parse(fs.readFileSync(`./src/config/${env}.json`))
}
