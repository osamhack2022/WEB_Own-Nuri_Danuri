// const express = require('express')
// const app = express()
// const path = require('path')

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

// //###### 1
// //app.use(express.static(path.join(__dirname, '../web_fe/build')));
// //react 빌드되면.

// app.get('/', function(request, response){
//     //response.sendFile(path.join(__dirname, '../web_fe/build/이름.html'));
// })


// //###### 2
// // app.get('*', function(request, response){
// //     //response.sendFile(path.join(__dirname, '../web_fe/build/이름.html'));
// // })
// //react 에서 페이지 연결 다 됐으면 리액트에서 routing 하는법.
//js


import express from 'express';

const app = express();
//const test = require("./router/test");
const path = require('path')
const db = require('./config/db');

app.listen('192.168.1.26:80', () => console.log('Example app listening on port 3000!'))


// db.query('SELECT 1', function (error, results, fields) {
//     if (error) throw error;
//     // connected!
//   });

// app.get('/api/products', (req, res) => {
//     db.query("SELECT 1", (err, data) => {
//         if(!err) res.send({ products : data });
//         else res.send(err);
//     })
// })

// app.listen(3000, () => {
//     console.log(`Server On : http://localhost:${PORT}/`);
// })







//////////////

//react 파트 . 
//app.ts
// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hello : [],
//     }
//   }

//   componentDidMount() {
//     this._getHello();
//   }

//   _getHello = async() => {
//     const res = await axios.get('/hello');
//     this.setState({ hello : res.data.hello })
//     console.log(this.state.hello);
//   }

//   render() {
//     return(
//       <>
//         <h3>get DB data(브라우저 개발모드 콘솔확인)</h3>
//       </>
//     )
//   }
// }
// export default App;

//////////////




/////////
// app.use("/api", test);

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../../web_fe/build')));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../../web_fe/build/index.html'));
})


// app.get('/aa', function(request, response){
//     // response.json({});
// })
// 주소는 https://osamhack2022-v2-web-own-nuri-danuri-jqx4j4wp7wr3j75j-3000.githubpreview.dev/


app.get('*', function(request, response){
    response.sendFile(path.join(__dirname, '../../web_fe/build/index.html'));
})

// const port: number = 5000;
// app.listen(port, () => console.log(`${port}`)); //`${port}`

