const getStatementContent = (statement) => {
  return [
    rpaLogo,
    statement.businessName,
    ...getAddress(statement.address),
    getTitle(statement.scheme),
    subHeading,
    getBusinessName(statement.businessName),
    getSBI(statement.sbi),
    ...summaryText
  ]
}

const rpaLogo = {
  image: 'app/images/rpa-logo.png',
  width: 150
}

const getAddress = (address) => {
  return [
    address.line1,
    address.line2,
    address.line3,
    address.line4,
    address.line5,
    address.postcode
  ]
}

const getTitle = (scheme) => {
  return {
    text: `${scheme.name} ${scheme.year}`,
    style: 'header1'
  }
}

const subHeading = {
  text: 'Payment statement',
  style: 'header2'
}

const getBusinessName = (businessName) => {
  return {
    text: `Business name: ${businessName}`
  }
}

const getSBI = (sbi) => {
  return {
    text: `Single Business Identifier (SBI): ${sbi}`
  }
}

const summaryText = [
  'This statement explains your payment for the Sustainable Farming Incentive (SFI). It is made up of 3 parts.',
  'Part 1 provides a summary of the most recent payment.',
  'Part 2 explains how we calculated the payment.',
  'Part 3 highlights were to go for more information.'
]

module.exports = getStatementContent
