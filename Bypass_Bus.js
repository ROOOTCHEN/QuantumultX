/*

脚本功能：武汉市实名制登记乘车 微信小程序
脚本作者：RootChen
更新时间：2022-07-27
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/auth-wuhan\.i-xiaoma\.com\.cn\:1443\/auth-center\/h5\/api\/hscx url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/Bypass_Bus.js

[mitm]
hostname = auth-wuhan.i-xiaoma.com.cn

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
	seconds+'.0'
]
var arr = arr.join('')
console.log(arr);



var body = $response.body;
var obj = JSON.parse(body);

obj.data.jzsjr = arr;

body = JSON.stringify(obj);
$done({
	body
});
