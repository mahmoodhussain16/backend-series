require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Mahmood hussain')
})
app.get('/twitter', (req, res) => {
    res.send('www.twitter.com')
  })

 app.get('/services', (req, res) => {
    res.send('<h1>please login at Mahmood Academy</h1>')
  })
app.get('/youtube', (req, res) => {
    res.send('<h2>Mahmood hussain official</h2>')
  })

app.listen(process.env.PORT,() => {
  console.log(`Example app listening on port ${port}`)
})