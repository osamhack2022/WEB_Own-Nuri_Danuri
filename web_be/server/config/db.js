var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.1.26',
  user     : 'root',
  password : '12345',
  database : 'my_db',
  port     : '3306'  
});
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });



connection.connect();


connection.query('SELECT * from USERS', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});



connection.end();


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

// module.exports = db;