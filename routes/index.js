const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index.html', { tweets: tweets , showForm: true} );
});

router.get('/users/:name', function(req, res) {
  var username = req.params.name;
  // console.log(username)
  var list = tweetBank.find({name: username})
  console.log(list)
  console.log(list.content);
  res.render('index.html', {tweets: list, showForm: true, username: username });
})

router.post('/tweets', function(req, res) {
  console.log(req.body)
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
})

module.exports = router;
