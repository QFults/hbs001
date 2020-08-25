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

const movie = {
  title: 'Goodfellas',
  poster: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffanart.tv%2Ffanart%2Fmovies%2F769%2Fmovieposter%2Fgoodfellas-5236f4eb565d5.jpg&f=1&nofb=1',
  plot: `A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money
and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his
climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.`
}

app.get('/movie', (req, res) => {
  res.render('movie', movie)
})

app.listen(3000)
