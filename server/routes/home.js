import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Welcome to Flash Cards</h1> <h2>Solidfy Your Knowledge</h2>')

  // let readFile = await fsPromises.readFile(
  //   Path.resolve('./server/data/data.json')
  // )

  // readFile = JSON.parse(readFile)
  // res.render('home', readFile)
})

export default router
