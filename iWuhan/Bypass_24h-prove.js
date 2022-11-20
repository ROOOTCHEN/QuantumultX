/*
脚本功能：i武汉_解锁24h核酸证明
脚本作者：RootChen
更新时间：2022-06-04
更新时间：2022-07-27

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/nucleic\/infoV2\?qrcCode\=.+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/iWuhan/Bypass_24h-prove.js

[mitm] 
hostname = whhb.tgovcloud.com

**************************/


var dates = new Date();
var month = dates.getMonth() + 1
month = month < 10 ? "0" + month : month
var date = dates.getDate() - 1
date = date < 10 ? "0" + date : date
var hours = dates.getHours() + 2
hours = hours < 10 ? "0" + hours : hours
var minutes = dates.getMinutes()
minutes = minutes < 10 ? "0" + minutes : minutes
var seconds = dates.getSeconds()
seconds = seconds < 10 ? "0" + seconds : seconds
var arr = [
	dates.getFullYear() + '-',
	month + '-',
	date + ' ',
	hours + ':',
	minutes + ':',
	seconds
]
var arr = arr.join('')
console.log(arr);

if ($response.body) {
	$done({
		body: JSON.stringify({
			"msg": "执行成功",
			"code": 0,
			"data": [{
				"detectOrg": "武汉希望组医学检验实验室",
				"detectResult": "阴性",
				"detectTime": arr,
				"source": "2"
			}]
		})
	});
} else {
	$done({});
}
