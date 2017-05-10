var expect = require('chai').expect;
var request = require('request');
var server = require('../server/index.js');
var supertest = require('supertest');

var request = supertest.agent(server);

describe('Basic server - Index Page', function(){
  describe('GET/', function(){
    it('should return the content of index.html, and should contain app name in title tag', function(done){
      request
      .get('/')
      .expect(200, /<title>Podiocast/, done);
    });
  });

  describe('GET/', function(){
    it('should return 404 when an invalid endpoint is requested', function(done){
      request
      .get('/posiocast')
      .end(function(error, response, body){
        expect(response.status).to.be.equal(404);
        done();
      });
    });
  });
});


describe('server - search functionality', function(){
  describe('POST/', function(){
    it('should return api results for a valid query ', function(done){

      request
      .post('/search')
      .send({search: 'orange'})
      .end(function(error, response, body){
        expect(response.body.length).to.be.above(0);
        expect(response.status).to.equal(200);
        expect(response.body[0].collectionId).to.exist;
        expect(response.body[0].collectionName).to.exist;
        expect(response.body[0].artistName).to.exist;
        expect(response.body[0].feedUrl).to.exist;
        expect(response.body[0].artworkUrl100).to.exist;
        done();
      });
    });
  });
})
