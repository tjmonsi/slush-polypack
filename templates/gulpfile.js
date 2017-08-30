const fs = require('fs')
const files = fs.readdirSync(__dirname + '/build-utils/tasks')

files.forEach((task) => {
  require(`${__dirname}/build-utils/tasks/${task}`)
})
