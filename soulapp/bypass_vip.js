/* 
解锁本地会员
 */

[rewrite_local]
^https:?\/\/api-pay\.soulapp\.cn\/(show|privilege)\/(superVIP|supervip)\/(detail|status).+ url script-response-body https://github.com/ROOOTCHEN/soulapp/main/bypass_vip.js
[mitm] 
hostname = *.soulapp.cn

var obj = JSON.parse($response.body);

obj.data = {
	"superVIP": true,
	"hasFlyPackage": false,
	"hasCanceLVIPSubOfIAP": true,
	"superUser":true,
	"validTime":4102329600,
};

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
});
