/*  
解锁无需送理物直接开聊
*/

[rewrite_local]
^https:?\/\/api-chat\.soulapp\.cn\/chat\/limitInfo\?bi\=.+ url script-response-body https://github.com/ROOOTCHEN/soulapp/blob/main/bypass_give.js

[mitm]
hostname = * .soulapp.cn

var obj = JSON.parse($response.body);

obj.data = {
	"limit": false,
};

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({});
