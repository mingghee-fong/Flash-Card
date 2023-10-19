import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { hi: 'Hello World! I am index' })
})

export default router