const express = require('express')
const app = express()
const path = require('path')

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//###### 1
//app.use(express.static(path.join(__dirname, '../web_fe/build')));
//react 빌드되면.

app.get('/', function(request, response){
    //response.sendFile(path.join(__dirname, '../web_fe/build/이름.html'));
})


//###### 2
// app.get('*', function(request, response){
//     //response.sendFile(path.join(__dirname, '../web_fe/build/이름.html'));
// })
//react 에서 페이지 연결 다 됐으면 리액트에서 routing 하는법.