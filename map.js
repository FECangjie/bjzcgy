/**
 *  页面对应资源模块映射 重要
 */

var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
	'home/main': { // 主页
		"src": ROOT + "/src/home/main",
		"tpl": "home.html"
	},

	'page2/main': {
		"src": ROOT + '/src/page2/main',
		"tpl": "page2.html"
	}

}
