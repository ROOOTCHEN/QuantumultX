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


var currentDate = new Date();
var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var date = currentDate.getDate().toString().padStart(2, '0');
var hours = currentDate.getHours().toString().padStart(2, '0');
var minutes = currentDate.getMinutes().toString().padStart(2, '0');
var seconds = currentDate.getSeconds().toString().padStart(2, '0');

var formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
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
