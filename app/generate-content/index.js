const summary = require('./summary')
const part1 = require('./part1')

const generateContent = (statement) => {
  return [
    ...summary(statement),
    ...part1(statement)
  ]
}

module.exports = generateContent
