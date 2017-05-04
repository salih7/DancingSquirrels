const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = Promise.promisify(require('request'));
const parseString = require('xml2js-parser').parseString;


const app = express();
app.port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname + '/../client')));

app.get('/', function (req, res) {
  res.status(200).sendFile('/index.html');
});

app.post('/search', (req, res) => {
  let url = `https://itunes.apple.com/search?term=${req.body.search}&country=US&entity=podcast&media=podcast&limit=10`;
  request(url)
  .then(function(results) {
    let data = JSON.parse(results.body).results;

    let tracks = data.map((item) => {
      var track = {
        collectionId: item.collectionId,
        trackId: item.trackId,
        artistName: item.artistName,
        collectionName: item.collectionName,
        releaseDate: item.releaseDate,
        trackName: item.trackName,
        collectionViewUrl: item.collectionViewUrl,
        feedUrl: item.feedUrl,
        artworkUrl30: item.artworkUrl30,
        artworkUrl60: item.artworkUrl60,
        artworkUrl100: item.artworkUrl100,
        artworkUrl600: item.artworkUrl600,
        contentAdvisoryRating: item.contentAdvisoryRating,
        trackCount: item.trackCount,
        primaryGenreName: item.primaryGenreName,
        genres: item.genres
      };
      return track;
    });
    res.status(200).send(tracks);
  })
  .catch((err) => {
    res.status(404).send('We are experiencing some technical difficulties...');
  });
});

app.get('/podcast', (req, res) => {
  // let url = "http://www.softwaredefinedtalk.com/rss";
  let url = req.body.feedUrl;
  request(url)
  .then(function(results) {
    let xml = results.body;
    parseString(xml, function(err, result) {
      let podcasts = result.rss.channel.map((ch) => {
        let podcast = {
          title: ch.title,
          pubDate: ch.pubDate,
          summary: ch['itunes:summary'],
          author: ch['itunes:author'],
          description: ch.description,
          image: ch['itunes:image'][0].$.href
        }
        podcast.episodes = ch.item.map((obj) => {
          let track = {
          title: obj.title,
          url: obj.enclosure[0].$.url,
          };
          return track;
        })
        return podcast;
      })
      res.status(200).send(podcasts);
    });
  })
  .catch(function(err) {
    res.status(404).send('Oopsies...seems we are down!');
  });
});


app.listen(app.port, function () {
  console.log('Example app listening on port ' + app.port);
});

module.exports = app;