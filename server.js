const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// app.get('/about', (req, res) => {
//   res.render('about')
// })

// app.get('/portfolio', (req, res) => {
//   res.render('portfolio')
// })

// app.get('/contact', (req, res) => {
//   res.render('contact')
// })

const movies = [
  {
    title: 'Goodfellas',
    poster: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffanart.tv%2Ffanart%2Fmovies%2F769%2Fmovieposter%2Fgoodfellas-5236f4eb565d5.jpg&f=1&nofb=1',
    plot: `A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money
and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his
climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.`
  },
  {
    title: 'The Room',
    poster: 'https://upload.wikimedia.org/wikipedia/en/e/e1/TheRoomMovie.jpg',
    plot: `Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again.`
  }
]

app.get('/movie', (req, res) => {
  res.render('movie', { movies })
})

app.listen(3000)
