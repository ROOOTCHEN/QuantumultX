var body = $response.body; // 获取原始响应体
var obj = JSON.parse(body); // 将JSON格式字符串转换为JavaScript对象

// 匹配并修改键值
obj.retObj?.isFree = false ?? obj.retObj?.isFree;
obj.retObj?.money = 0.0 ?? obj.retObj?.money;
obj.retObj?.isSvip = 0 ?? obj.retObj?.isSvip;
obj.retObj?.free = false ?? obj.retObj?.free;

body = JSON.stringify(obj); // 将JavaScript对象转换回JSON字符串

$done({ body }); // 返回修改后的响应体
