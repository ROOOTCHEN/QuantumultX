[rewrite_local]
^https:?\/\/ebanking2\.ccb\.com\.cn\/CCBIS\/B2CMainPlat_10_MB url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/ccb.js

[mitm] 
hostname = ebanking2.ccb.com.cn
// 已经解析好的 JSON 数据对象
var obj = JSON.parse($response.body);

// 修改字段值为 9999.99
obj.AcBa = "9999.99";
obj.Avl_Bal = "9999.99";
obj.Avl_Tot_Bal = "9999.99";
obj.Tot_AcBa = "9999.99";

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
});
