var mysql = require('mysql');

var db = mysql.createConnection({
  host     : '211.42.154.87',
  user     : 'root',
  password : '12345',
  database : 'user_db',
  port     : '3306'  
});
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });



db.connect();


db.query('SELECT * from USERS', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});



// db.end();


// const mysql = require('mysql');

// const db = mysql.createPool({
//     host : 'localhost',
//     user : 'react_test',
//     password : '1111',
//     database : 'react_test'
// });


// db.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + db.threadId);
//   });
// // app.get('/api/products', (req, res) => {
//     // db.query("SELECT 1", (err, data) => {
//     //     if(!err) res.send({ products : data });
//     //     else res.send(err);
//     // })
// // })

module.exports = db;