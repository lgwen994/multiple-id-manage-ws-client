// const devServer = {
//     open: process.platform === 'vue',
//     host: '127.0.0.1',
//     port: 8082,
//     https: false,
//     hotOnly: false,
//     // proxy: {
//     //     '/api': {
//     //         target: 'http://www.xxxxx.com/',
//     //         changeOrigin: true,
//     //         pathRewrite: {
//     //             '^/api': '/api'
//     //         }
//     //     }
//     // },
//     disableHostCheck: true
// };

// vue.config.js
module.exports = {
    // ...
    devServer: {
      open: process.platform === 'vue',
      host: '127.0.0.1',
      port: 8082, // CHANGE YOUR PORT HERE!
      https: false,
      hotOnly: false,
    },
    // ...
  }