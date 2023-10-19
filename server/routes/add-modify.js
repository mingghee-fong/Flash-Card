import express from 'express'
const editPage = express.Router()

editPage.get('/add-modify', (req, res) => {
  res.render('modify')
})

export default editPage
