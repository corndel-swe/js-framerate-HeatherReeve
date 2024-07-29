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

app.get('/movie/:movieID', async (req, res) =>{
    const movieID = req.params.movieID
    
})

export default app
