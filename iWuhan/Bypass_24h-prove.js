/*
脚本功能：i武汉_解锁24h核酸证明
脚本作者：RootChen
更新时间：2022-06-04
更新时间：2022-07-27

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/nucleic\/infoV(2|3)\?qrcCode\=.+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/iWuhan/Bypass_24h-prove.js

[mitm] 
hostname = whhb.tgovcloud.com

**************************/


var currentDate = new Date();
var month = currentDate.getMonth() + 1;
var date = currentDate.getDate() - 1;
var hours = currentDate.getHours() + 2;
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

month = month < 10 ? "0" + month : month;
date = date < 10 ? "0" + date : date;
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

var formattedDate = currentDate.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
console.log(formattedDate);

if ($response.body) {
	$done({
		body: JSON.stringify({
			"msg": "执行成功",
			"code": 0,
			"data": [{
				"detectOrg": "武汉希望组医学检验实验室",
				"detectResult": "阴性",
				"detectTime": formattedDate,
				"source": "2"
			}]
		})
	});
} else {
	$done({});
}
