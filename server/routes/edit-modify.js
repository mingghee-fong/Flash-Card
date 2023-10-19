import express from 'express'
const editPage = express.Router()

editPage.get('/edit', (req, res) => {
  res.render('edit', { hi: 'Hello World! i am edit' })
})

export default editPage
