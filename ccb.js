[rewrite_local]
^https:?\/\/mobile\.cmbchina\.com\/DAccountView\/AssetAjax\/QueryFundPaasAjax\.aspx url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/ccb.js

[mitm] 
hostname = mobile.cmbchina.com

var obj = JSON.parse($response.body); // 解析 JSON 字符串为 JavaScript 对象

// 使用正则表达式进行模糊匹配并修改值为 999.99
obj["$SysResult$"]["$Content$"] = obj["$SysResult$"]["$Content$"].replace(/\d+\.\d+/g, "820564.99");

console.log(obj);

$done({
  body: JSON.stringify(obj) // 将 JavaScript 对象转换为 JSON 字符串。
});
