import express from 'express'
import { getParties } from './lib/scraper'

const app = express()

app.get('/scrape', async (req, res, next) => {
  console.log('scraping!')
  const parties = await getParties()
  res.json(parties)
})

app.listen()
