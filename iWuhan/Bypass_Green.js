/*
脚本功能：i武汉_解锁灰码专转绿码
脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/rylxdmInfo\/v2\/get\?codeId=.+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/iWuhan/Bypass_Green.js

[mitm] 
hostname = whhb.tgovcloud.com

**************************/

var body = $response.body; //将java对象转为json格式的数据
var obj = JSON.parse(body); //将JSON格式字符串转换为JavaScript对象

obj.data.color = 'green';

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
	body
});
