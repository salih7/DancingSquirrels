const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = Promise.promisifyAll(require('request'));



const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.get('/search', (req, res) => {
  console.log(req)
  let url = 'https://itunes.apple.com/search?term=apple&country=US&entity=podcast'
  request(url, (err, response, body) => {
    console.log(typeof body);
    res.status(200).send(body);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})