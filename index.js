const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const downlader = require('image-downloader');
const port = 3000

// Handle the datas of series Collection 
const List = require( __dirname + '/data/series');

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  next();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


// Home page
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/index.html`);
});



// static files 
app.use(express.static(__dirname + '/public'));

// rendering view with series Collection 
app.get('/liste', (req, res) => {
    res.send(List);
});

// Listener for slug (findOndBy)
app.get('/pages/serie/:id', (req, res) => {
  let id = req.params.id.slice(0,1);
  res.sendFile(`${__dirname}/public/pages/serie.html`, {id: id});
});

// post request
app.post('/liste', (req, res) => { 
  // Nombre de datas déjà existante dans la collection + 1 
  req.body.collection.id = List.length + 1;
  req.body.collection.image_url = req.body.collection.image_url.replace("C:\\fakepath\\", ""); // render filename.jpeg
  // Add datas to collection
  List.push(req.body.collection);
  res.send(List); 
});

app.get('/delete', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/delete.html`);
})