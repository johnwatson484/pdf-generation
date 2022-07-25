const part2 = (statement) => {
  return [
    title,
    getSummaryText(statement.scheme)
  ]
}

const title = {
  text: 'Part 2: calculation',
  style: 'header2'
}

const getSummaryText = (scheme) => {
  return {
    text: `We calculated the total ${scheme.shortName} payment amount by adding together payments for all the standards which are part of your agreement, as shown in this table.`
  }
}

module.exports = part2
