var express = require('express');
var utilites = require('./utilities');
var mysql = require('mysql');
var mysqlConnector   = require('./mysql-connector');
var auth            = require('./auth');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', function(req,res){
    var hash        = utilites.hashPassword(req.body.password);
    var uname       = req.body.username;
    
    mysqlConnector.connection.query('select * from mydb.user where `userName` = ? and `userPassword` = ?', [uname,hash],function(err, results){
        if(err){
            //req.status(500).send(err);
            console.log('500');
            console.log(err);
            res.redirect('/logowanie');
            return;
        }
        if(results.length === 0){
            //req.status(400).send("Złe dane");
            console.log('400');
            console.log(err);
            res.redirect('/logowanie');
            return;
        }
       auth.save(req,res);
       res.redirect('/postac');
    });
    
});
module.exports = router;
