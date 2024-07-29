import express from 'express'
import Movie from '../models/Movie.js'

const app = express()

app.use(express.static('public'))
app.set('views', 'views') 
app.set ('view engine', 'ejs')
// TODO: add your endpoints here
app.get('/', async (req,res) =>{
const movies = await Movie.findAll()
res.render('index', {movies})
})

app.get('/movie/:movieId', async (req, res) => {
    const movieId = req.params.movieId
  
    const movie = await Movie.findById(movieId)
    const reviews = await Movie.findReviews(movieId)
  
    res.render('movie', { movie, reviews })
  })

export default app
