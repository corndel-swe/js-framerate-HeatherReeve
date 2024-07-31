import express from 'express'
import Movie from '../models/Movie.js'

const app = express()

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

// TODO: add your endpoints here
app.get('/', async (req, res) => {
  const movies = await Movie.findAll(req.query.genre)
  res.render('index', { movies })
})

app.get('/movie/:movieId', async (req, res) => {
  const movieId = req.params.movieId

  const movie = await Movie.findById(movieId)
  const reviews = await Movie.findReviews(movieId)



  res.render('movie', { movie, reviews })
})




app.get('movies', (req, res) => {
  const genre = Movie.allowedGenres();
  res.render('index', { Movie, genre })
});

app.post('/movie/:movieId/reviews', async (req, res) => {

  const movieId = req.params.movieId
  const review = req.body
  await Movie.addReview(movieId, review)  
  res.redirect(`/movie/${movieId}`)
})


export default app