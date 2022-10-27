const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            //나중에 바뀐 주소 기입
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    );
};



// //ㅁ server/router/test.ts
// const express = require("express");
// const router = express.Router();

// router.get("/", (req: any, res: any) => {
//     res.send({ test : "hi"});
// })

// module.exports = router;



// //ㅁ client/src/App.tsx
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const callApi = async () => {
//     axios.get("/api").then((res) => console.log(res.data.test));
//   }

//   useEffect(() => {
//     callApi();
//   }, []);

//   return <div>테스트</div>
// }

// export default App;