const part1 = (statement) => {
  return [
    part1Title,
    getSchedule(statement),
    getPaymentDate(statement.payments),
    getCalculationDate(statement.payments),
    getPaymentReference(statement.payments)
  ]
}

const part1Title = {
  text: 'Part 1: Payment summary',
  style: 'header2'
}

const getSchedule = (statement) => {
  return {
    text: `Your ${statement.scheme.frequency.toLowerCase()} ${statement.scheme.shortName} payment for April to June ${statement.scheme.year} is £${statement.payments[0].value}`,
    style: 'subTitle'
  }
}

const getPaymentDate = (payments) => {
  return {
    text: `We will pay this into your account on ${payments[0].dueDate}`
  }
}

const getCalculationDate = (payments) => {
  return {
    text: `Calculation date: ${payments[0].calculated}`
  }
}

const getPaymentReference = (payments) => {
  return {
    text: `Payment reference number: ${payments[0].invoiceNumber}`
  }
}

module.exports = part1
