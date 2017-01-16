/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection(
        {
        host    : 'localhost',
        port    : '3306',
        user    : 'root',
        password: 'root',
        database: 'mydb'
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
*/

/* Prawidłowe zapytania do bazy danych
 * 
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

/*
 * 
    var sqlInsert = 'INSERT INTO mydb.chest(chestGold) VALUES (20) ';
    connection.query(sqlInsert, function(err, results) {
        if(err){
          console.error('error'+err.stack);
          return;
        }
    });

*/

connection.end();