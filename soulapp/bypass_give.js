/*  
解锁无需送理物直接开聊
*/

[rewrite_local]
^https:?\/\/api-chat\.soulapp\.cn\/chat\/limitInfo\?bi\=.+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/soulapp/bypass_give.js

[mitm] 
hostname = *.soulapp.cn


var body = $response.body; //将java对象转为json格式的数据
var obj = JSON.parse(body); //将JSON格式字符串转换为JavaScript对象
obj.data.limit = 'false';	//强制

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
	解锁无需送理物直接开聊
});
