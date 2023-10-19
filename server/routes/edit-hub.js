import express from 'express'
const editHub = express.Router()
editHub.get('/edithub', (req, res) => {
  res.render('edithub', { body: 'Hello World! i am edit-hub' })
})

export default editHub
