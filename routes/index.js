var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Express' });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Express' });
});

module.exports = router;
