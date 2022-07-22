const getStatementContent = (statement) => {
  return [
    rpaLogo,
    statement.businessName,
    ...getStatementAddress(statement.address)
  ]
}

const rpaLogo = {
  image: 'app/images/rpa-logo.png',
  width: 150
}

const getStatementAddress = (address) => {
  return [
    address.line1,
    address.line2,
    address.line3,
    address.line4,
    address.line5,
    address.postcode
  ]
}

module.exports = getStatementContent
