var mysqlConn = require('mysql');

var connection = mysqlConn.createConnection(
        {
        host    : 'localhost',
        port    : '3306',
        user    : 'root',
        password: 'root'
        }
    );

connection.connect(function(err)
        {
            if(err){
                console.error('error connecting'+err.stack);
                return;
            }
            console.log('connect as id '+connection.threadId);
        });


/*
var sql_userData = 'INSERT INTO mydb.user(userName,userPassword,email VALUES (' + userName + ',' + userPassword + ',' + userEmail + ')';
console.log(sql_userData);
*/

// console.log(sql_userData);

/*
var userId = 1;
var sql    = 'SELECT * FROM mydb.user WHERE iduser = ' + connection.escape(userId);
connection.query(sql, function(err, results) {
  if(err){
      console.error('error'+err.stack);
      return;
  }
  console.log(results);
});
*/

connection.end();

module.exports = mysqlConn;