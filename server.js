/**
 * @file: 开发环境的server
 * 主要功能：
 * 1. 同步接口和异步接口的mock
 */
var http = require('http')
var path = require('path')
var express = require('express')
var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')
var api = require('./middleware/mock')


  var webApp = new WebpackDevServer(Webpack(config))
  var app = webApp.app
  // var app = express()
  app.use(api)

  //Express框架的路由访问控制文件server.js，增加路由配置。
  // app.use(function (req, res) {
  //   res.sendfile('./template/index.html')
  // })

  app.listen(8080,
    function(err, result) {
      if (err) {
        console.log(err)
      }
      console.log('在8080端口启动')
    }
  )
