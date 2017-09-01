const fs = require('fs')

module.exports = (env, config) => {
  fs.writeFileSync(`./src/config/${env}.json`, JSON.stringify(config, null, 2), 'utf8')
}
