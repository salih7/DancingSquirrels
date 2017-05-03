const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = Promise.promisifyAll(require('request'));



const app = express()
app.port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname + '/../client')));

app.get('/', function (req, res) {
  res.status(200).sendFile('/index.html');
})



app.get('/search', (req, res) => {
  let url = 'https://itunes.apple.com/search?term=apple&country=US&entity=podcast&media=podcast$limit=5'
  request(url, (err, response, body) => {
    var data = JSON.parse(body).results
    console.log(data);
    res.status(200).send(data);
  })
})

app.listen(app.port, function () {
  console.log('Example app listening on port ' + app.port)
})

module.exports = app;