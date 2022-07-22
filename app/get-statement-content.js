const getStatementContent = (statement) => {
  return [
    rpaLogo,
    statement.businessName,
    ...getAddress(statement.address),
    getTitle(statement.scheme)
  ]
}

const rpaLogo = {
  image: 'app/images/rpa-logo.png',
  width: 150
}

const getTitle = (scheme) => {
  return {
    text: `${scheme.name} ${scheme.year}`,
    style: 'header'
  }
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

module.exports = getStatementContent
