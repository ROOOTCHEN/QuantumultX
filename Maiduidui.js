
var body = $response.body; //将java对象转为json格式的数据
var obj = JSON.parse(body); //将JSON格式字符串转换为JavaScript对象

obj.data.isPay = '1';
obj.data.isVodVip = '1';
obj.data.vipEffectiveDate = '2099-12-31';
body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
	body
});
