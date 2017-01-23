var express = require('express');
var auth    = require('./auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(auth.check(req)){
    res.render('index_1');
  }else{ 
    res.render('index');
  }
  
});

module.exports = router;
