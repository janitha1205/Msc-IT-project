const {createProxyMiddleware} =require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
      '/api1',
      createProxyMiddleware({
        target: 'http://localhost:2000',
        changeOrigin: true,
      })
    );
    app.use(
      '/api2',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    app.use(
        '/api3',
        createProxyMiddleware({
          target: 'http://localhost:6000',
          changeOrigin: true,
        })
      );
      app.use(
        '/api4',
        createProxyMiddleware({
          target: 'http://localhost:8081',
          changeOrigin: true,
        })
      );
      app.use(
        '/api5',
        createProxyMiddleware({
          target: 'http://localhost:4000',
          changeOrigin: true,
        })
      );
      app.use(
        '/api6',
        createProxyMiddleware({
          target: 'http://localhost:7000',
          changeOrigin: true,
        })
      );
  };