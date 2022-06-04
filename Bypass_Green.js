/*

脚本功能：i武汉 武汉战疫 微信小程序 灰码&红码转绿码
脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/rylxdmInfo\/v2\/get\?codeId=.+\&threeCodeOpen\=1 url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/Bypass_Green.js

[mitm]
hostname = whhw.tgovcloud.com
**************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.color = "green";
body = JSON.stringify(obj);
$done({body});
