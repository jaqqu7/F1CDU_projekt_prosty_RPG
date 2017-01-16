var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//for all users 
var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var news = require('./routes/news');
//for logged users
//var logged_index = require('');
var character_page = require('./routes/character_page');
var dungeon_page = require('./routes/dungeon_page');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//html
//app.set('public', path.join(__dirname,'public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/logowanie', login);
app.use('/rejestracja', register);
app.use('/aktualnosci', news);
app.use('/loch', dungeon_page);
app.use('/postac', character_page);


//mysql test

var connection = mysql.createConnection(
        {
        host    : 'localhost',
        port    : '3306',
        user    : 'root',
        password: 'root'
        }
    );


connection.connect(
    function(err)
    {
            if(err){
                console.error('error connecting'+err.stack);
                return;
            }
            console.log('connect as id '+connection.threadId);
    }
        
    );

exports.querySelect = function(sql_query){
    connection.query(sql_query, function(err,results){
        if(err){
            console.error('error'+err.stack);
            return;
        }
        console.log(results);
    });
};

exports.queryInsert = function(sql_query){
    connection.query(sql_query, function(err, results) {
        if(err){
          console.error('error'+err.stack);
          return;
        }
    });
};

/*
var sqlInsert = 'INSERT INTO mydb.chest(chestGold) VALUES (20) ';
connection.query(sqlInsert, function(err, results) {
    if(err){
      console.error('error'+err.stack);
      return;
    }
});
*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//connection.end();