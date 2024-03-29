// utils/db.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

module.exports = {
   getConnection(){
       return new Promise(function(result, reject){
           pool.getConnection().
           then(function(conn){
              result(conn);
           }).
           catch(function(error){
               reject(error);
           });
       });
       // return pool.GetConnection();
   }
};
