var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.render('posts', { pageTitle: 'HalfMind - Dev Blog' });
});

module.exports = router;
