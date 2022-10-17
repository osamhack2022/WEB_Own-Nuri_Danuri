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