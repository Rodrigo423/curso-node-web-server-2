require('dotenv').config();
const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT;


//registro del template engine Handlebar
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


//middleware
const imprimeRuta = (req, res, next) => {

    console.log(req.originalUrl)
    next()
} 
app.use(imprimeRuta);
//-----------


//servir contenido estatico
app.use( express.static('public', {extensions:['html']}) );
//-----------

//rutas app
app.get('/', function (req, res) {
  res.render('home', {
    nombre : 'Rodrigo Soto',
    titulo : 'Curso de Node'
  });
})

app.get('*', function (req, res) {
    res.send('asd World')
  })

app.listen(port)
//-----------