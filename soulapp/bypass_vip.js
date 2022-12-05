/* 
解锁本地会员
 */

[rewrite_local]
^https:?\/\/api-pay\.soulapp\.cn\/(show|privilege)\/(superVIP|supervip)\/(detail|status).+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/soulapp/bypass_vip.js
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

body = JSON.stringify(obj);
$done({
});
