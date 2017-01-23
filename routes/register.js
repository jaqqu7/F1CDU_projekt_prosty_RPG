var express     = require('express');
var router      = express.Router();
var app         = require('../app');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function (req, res) { 
    /*
    var sql_query = 'SELECT * FROM mydb.user WHERE iduser = 1';
    app.querySelect(sql_query);
    
    var query_insert = 'INSERT INTO mydb.chest(chestGold) VALUES (20) ';
    app.queryInsert(query_insert);
    */
   
   var sql_query = 'INSERT INTO mydb.user(userName,userPassword,email) VALUES (' +req.body.userName+ ',' +req.body.userPassword+ ',' +req.body.userEmail+')'; 
   app.queryInsert(sql_query);
   
    
    res.redirect('/logowanie');
});


module.exports = router;
