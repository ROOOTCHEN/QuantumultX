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
dates.setHours(dates.getHours() - 2);

var month = String(dates.getMonth() + 1).padStart(2, '0');
var date = String(dates.getDate()).padStart(2, '0');
var hours = String(dates.getHours()).padStart(2, '0');
var minutes = String(dates.getMinutes()).padStart(2, '0');
var seconds = String(dates.getSeconds()).padStart(2, '0');

var arr = `${dates.getFullYear()}-${month}-${date} ${hours}:${minutes}:${seconds}`;
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
