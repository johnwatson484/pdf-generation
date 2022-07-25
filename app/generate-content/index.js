const summary = require('./summary')
const part1 = require('./part1')
const part2 = require('./part2')

const generateContent = (statement) => {
  return [
    ...summary(statement),
    ...part1(statement),
    ...part2(statement)
  ]
}

module.exports = generateContent
