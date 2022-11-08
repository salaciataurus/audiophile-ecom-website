import express from 'express'
import items from '../static/data.json'

const app = express()

app.get('/all/', (req, res) => {
  res.json(items)
})

app.get('/item/:slug', (req, res) => {
  const bySlug = items.filter((item) => item.slug === req.params.slug)
  res.json(bySlug)
})

export default {
  path: '/api',
  handler: app,
}
