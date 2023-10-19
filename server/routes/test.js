import express from 'express'
import fsPromises from 'node:fs/promises'

const testPage = express.Router()

testPage.get('/test', (req, res) => {
  res.send('yay')
})

export default testPage
