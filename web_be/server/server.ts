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
const test = require("./router/test");
const path = require('path')


app.listen(3000, () => console.log('Example app listening on port 3000!'))

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