/*
[rewrite_local]

^https:\/\/api-user.soulapp.cn/v2/user/follow/getList\?bi=.+\VmREelppYWtmdWVodUl5MEpNOUVkQT09 url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/soulapp.js

[mitm]
hostname = api-user.soulapp.cn
**************************/

(() => {
  var body = {
    "code": 10001,
    "message": "success",
    "data": {
      "pageCursor": "241237458",
      "userList": [
        {
          "userIdEcpt": "dTFVam5hcDJsRExWVlgvZUh1NEExdz09",
          "avatarName": "avatar-1635465892802-01204",
          "avatarColor": "HeaderColor_Default",
          "signature": "Xinser",
          "gender": 1,
          "registerTime": 1691905550000,
          "todayBirth": false,
          "onlineState": 0,
          "soulmateState": 0,
          "superStarVip": false,
          "interactiveContent": "348天，5条瞬间",
          "followState": 2,
          "inGroupChat": false,
          "ssr": false,
          "hasDust": false,
          "dustCount": 0,
          "currentDayIsDusting": false,
          "showSuperVIP": false,
          "state": 0,
          "teenager": false
        }
      ]
    },
    "success": true
  };

  $done({body: JSON.stringify(body)});
})();
