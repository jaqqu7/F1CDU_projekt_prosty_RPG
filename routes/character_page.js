var express = require('express');
var mysql   = require('mysql');
var auth    = require('./auth');
var utilities        = require('./utilities');
var mysqlConnector   = require('./mysql-connector');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  if(auth.check(req)){
    res.render('character_page');
  }else{ 
    res.redirect('/logowanie');
  }
  
});

router.get('/data',function(req,res,next){
    res.send(req.cookies.user);
});

router.post('/', function(req,res){
    
});

module.exports = router;
