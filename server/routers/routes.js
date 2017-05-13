const express = require('express');
const UserModel = require('../../db/models/User.js');
const UserPodcastModel = require('../../db/models/User_Podcast.js');

const utils = require('../utils.js');
const session = require('express-session');
const passport = require('passport');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).sendFile('/index.html');
  })

router.route('/topTen')
  .get((req, res) => {
    utils.fetchTopTen((err, results) => {
      if (results) {
        res.send(results);
      }
    })
  })

router.route('/onFavorite')
  .post((req, res) => {
    // console.log('req', req);
    // console.log('req.session.passport.user', req.session.passport.user);
    console.log('req.body', req.body);
    UserModel.fetch(req.body.username, (result) => {
      let options = {
        user_id: result.id,
        podcast_id: req.body.collectionId,
        favorite: 'true'
      };

      UserPodcastModel.insertOne(options, (data) => {
        console.log('data', data);
      });
    });
  });

router.route('/login/local')
  .get((req, res) => {
    res.redirect('/#/local/login')
  })

router.route('/signup')
  .post((req, res) => {
    UserModel.insertOne(req.body.username, req.body.password, (results)=> {
      if (results.name === 'error') {
        res.send('error');
      } else {
        res.send('success');
      }
    })
  })

router.route('/search')
  .post((req, res) => {
    let url = `https://itunes.apple.com/search?term=${req.body.search}&country=US&entity=podcast&media=podcast&limit=10`;
    utils.fetchCollections(url, (err, results) => {
      if (results) {
        res.status(200).send(results);
      } else {
        res.status(404).send('We are experiencing some technical difficulties...');
      }
    })
  });

router.route('/podcast')
  .post((req, res) => {
    let url = req.body.feedUrl;
    let collectionId = req.body.collectionId;
    utils.fetchEpisodes(url, collectionId, (err, results) => {
      if (results) {
        res.status(200).send(results);
      } else {
        res.status(404).send('Oopsies...seems we are down!');
      }
    });
  });


module.exports = router;
