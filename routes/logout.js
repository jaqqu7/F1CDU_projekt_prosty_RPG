var express     = require('express');
var auth        = require('./auth');
var utilities   = require('./utilities');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(auth.check(req)){
    res.cookie('session','',{expires: new Date(Date.now())});
    res.render('logout');
  }else{
    res.redirect('/');
  }
});

module.exports = router;
