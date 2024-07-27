/*
[rewrite_local]

^https:\/\/gateway-mobile-gray.soulapp.cn\/sculptor/queryLatestSculptor\?bi\=.+\Chat_FavoriteSetup url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/follow.js

[mitm]
hostname = gateway-mobile-gray.soulapp.cn
**************************/

(() => {
  var body = $response.body; // 获取HTTP响应的body
  var obj = JSON.parse(body); // 将JSON格式字符串转换为JavaScript对象

  // 提取concernedUserIdEcpt的值
  var concernedUserIdEcpt = obj.concernedUserIdEcpt;

  // 发送iOS通知
  $notify("User ID", "concernedUserIdEcpt", concernedUserIdEcpt);

  $done({body}); // 返回未修改的body
})();
