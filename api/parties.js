const { getParties } = require('../scraper/getParties')

module.exports = async (req, res) => {
  const parties = await getParties()
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(parties))
}
