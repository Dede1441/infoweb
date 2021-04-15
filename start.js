const express = require('express')
const templateEngine = require('nunjucks')

// Configuration d'Express
const app = module.exports = express()

const N_PORT = 3001
const N_LISTEN = 'localhost'

app.set('view cache', false)

// Configuration du lien entre Express & Nunjucks
templateEngine.configure('views', {
  autoescape: true,
  express: app
})

const news = require('./controllers/news/rendernews')
const destination = require('./controllers/news/renderdestination')
app.get('/', news.render)
// Routes statiques
app.use('/css/bootstrap.min.css', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'))
app.use('/css/bootstrap.min.css.map', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css.map'))
app.use('/css/bootstrap-themes/', express.static('node_modules/bootstrap-themes/dist/'))
app.use('/css/common.css', express.static('views/css/common.css'))
app.use('/js/bootstrap.min.js', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js'))
app.use('/js/bootstrap.min.js.map', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js.map'))
app.use('/js/jquery.slim.js', express.static('node_modules/jquery/dist/jquery.slim.js'))
app.use('/js/popper.min.js', express.static('node_modules/popper.js/dist/popper.min.js'))

// Démarrage du serveur
app.listen(N_PORT)
console.log('Application Started on http://' + N_LISTEN + ':' + N_PORT)
