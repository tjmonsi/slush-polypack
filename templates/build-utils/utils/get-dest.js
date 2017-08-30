module.exports = (env) => {
  var dest = 'dev'
  if (env !== dest) {
    dest = env
  }
  if (env === 'prod') {
    dest = 'build'
  }

  return './dist/' + dest
}
