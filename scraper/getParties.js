const axios = require('axios')
const cheerio = require('cheerio')

async function getParties() {
  // get html from page
  const { data: html } = await axios.get(
    `http://www.tribunalconstitucional.pt/tc/partidos.html`
  )

  // use cheerio to parse the data we want
  const $ = cheerio.load(html)
  const tableRows = $(`#partidos`).find(`tr`)
  const partiesRows = tableRows.slice(2, tableRows.length)
  const partiesData = partiesRows.map((i, elem) => {
    const partyTableData = $(elem).find('td')
    const title = partyTableData.eq(0).text()
    const websiteHref = partyTableData
      .eq(1)
      .find('a')
      .prop('href')
    const website = websiteHref === '#' ? null : websiteHref
    const acronym = partyTableData.eq(2).text()
    const registration = partyTableData.eq(3).text()

    // done!
    return { title, website, registration, acronym }
  })
  return partiesData.get()
}

module.exports = {
  getParties
}
