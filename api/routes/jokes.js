const { getJokes } = require( "../services/joke.service");

var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const {id, type} = req.query;
  const joke = await getJokes(id, type);
  res.send(joke);
});

module.exports = router;
