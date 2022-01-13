var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Main Page' });
});

router.get('/express', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

module.exports = router;
