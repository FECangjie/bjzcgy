/**
 * 主页
 */
if(ENV == 'DEV') {
	require('pages/home.html')
}
import 'template/home.html'
import 'src/common/base.css'
import common from 'src/common'
import './style.css'
import * as d3 from 'd3'
console.log(d3)

// var req = require.context("../images", true, /^\.\/.*\.png|jpg|jpeg$/);
//
// $("img").attr("src", (n, url) => { // html 图片地址处理
// 	var temp = url.split('/')
// 	return req('./' + temp[temp.length - 1])
// })
