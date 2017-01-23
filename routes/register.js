var express          = require('express');

var bodyParser       = require('body-parser');
var mysql            = require('mysql');
var bcrypt           = require('bcrypt-nodejs');
var util             = require('util');
var utilities        = require('./utilities');
var mysqlConnector   = require('./mysql-connector');
var auth    = require('./auth');

var router          = express.Router();
//var _app            = require('../app');





/* GET home page. */
router.get('/', function(req, res, next) {
  if(auth.check(req)){
    res.render('register_1');
  }else{ 
    res.render('register');
  }
});




router.post('/', function (req, res) { 
    

    /*
    var query_insert = 'INSERT INTO mydb.chest(chestGold) VALUES (20) ';
    app.queryInsert(query_insert);
    */
   
   
    var password    = req.body.password;
    var passConf    = req.body.passwordConfirm;
    var email       = req.body.email;
    var nameUser    = req.body.username;
    
    req.checkBody('username','error').notEmpty().isAlpha();
    req.checkBody('password','error').notEmpty().isAlpha();
    req.checkBody('passwordConfirm','error').notEmpty().isAlpha();
    
    if(password !== passConf){
        console.log('Zle haslo');
        res.redirect('/rejestracja');
    }
    
    req.checkBody('email','error').notEmpty().isEmail();
    
    
    
    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
          res.render('register');
          return;
        }
        
        var hash = utilities.hashPassword(password);
        var values = [[nameUser,hash,email]];
        mysqlConnector.connection.query('insert into mydb.user(`userName`,`userPassword`,`email`) values ?', [values],
        function(err,results){
            if(err){
                console.error('error'+err.stack);
                return;
            }
            console.log(results);
        });
        res.redirect('/logowanie');
    });
});


module.exports = router;
