var obj = JSON.parse($response.body);

// 匹配并修改键值
if (obj.retObj && obj.retObj.isFree !== undefined) {
  obj.retObj.isFree = false; // 将 isFree 的值修改为 false
}

if (obj.retObj && obj.retObj.money !== undefined) {
  obj.retObj.money = 0.0; // 将 money 的值修改为 0.0
}

if (obj.retObj && obj.retObj.isSvip !== undefined) {
  obj.retObj.isSvip = 0; // 将 isSvip 的值修改为 1
}

if (obj.retObj && obj.retObj.free !== undefined) {
  obj.retObj.free = false; // 将 free 的值修改为 false
}

var body = JSON.stringify(obj); // 将JavaScript对象转换为JSON字符串

$done({ body }); // 返回修改后的响应体
