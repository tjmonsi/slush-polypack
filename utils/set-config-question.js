module.exports = (options, name, message, questions, answers) => {
  if (options.has(name) && options.get(name)) {
    answers[name] = options.get(name)
  } else {
    questions.push({
      name: name,
      message: message
    })
  }
}
