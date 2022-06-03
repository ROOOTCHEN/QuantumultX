/*

脚本功能：i武汉 武汉战疫 微信小程序 灰码&红码转绿码
脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/nucleic\/infoV3\?qrcCode\=.+  url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/Bypass_24h-prove.js

[mitm]
hostname = whhw.tgovcloud.com
**************************/

var dates = new Date();
// 月
var month = dates.getMonth() + 1
month = month < 10 ? "0" + month : month
// 日
var date = dates.getDate() - 1
date = date < 10 ? "0" + date : date
// 时
var hours = dates.getHours()
hours = hours < 10 ? "0" + hours : hours
// 分
var minutes = dates.getMinutes()
minutes = minutes < 10 ? "0" + minutes : minutes
// 秒
var seconds = dates.getSeconds()
seconds = seconds < 10 ? "0" + seconds : seconds
var arr = [
	//年
	dates.getFullYear() + '-',
	month + '-',
	date + ' ',
	hours + ':',
	minutes + ':',
	seconds
]
var arr = arr.join('')
//console.log(arr);

if ($response.body) {
	$done({
		body: JSON.stringify({
			"msg": "执行成功",
			"code": 0,
			"data": [{
				"detectResult": "阴性",
				"detectTime": arr,
				"source": "2"
			}]
		})
	});
} else {
	$done({});
}
