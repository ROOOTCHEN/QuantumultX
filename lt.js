/*
[rewrite_local]

^https:\/\/m.client.10010.com\/servicebusiness\/newOrdered\/queryOrderRelationship url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/lt.js

[mitm]
hostname = m.client.10010.com
**************************/

(() => {
	
  var body = {
  "code": "0000",
  "data": {
    "mainProductInfo": [
      {
        "orderTime": "",
        "productId": "90063345",
        "endDate": "",
        "orderStatus": "0",
        "detailFlag": "0",
        "productFee": "",
        "productName": "联通造梦卡",
        "startDate": "2024-09-07"
      }
    ],
    "otherProductInfo": [
      {
        "orderTime": "",
        "productId": "91233837",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "全国流量任性用",
        "startDate": "2024-09-07 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233838",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "短信网龄升级包",
        "startDate": "2024-09-07 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233839",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "活动赠送国内语音",
        "startDate": "2024-09-07 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233840",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "0元5G极速服务包",
        "startDate": "2024-09-07 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233842",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "联通PLUS黄金会员月卡0元/月（次月生效）",
        "startDate": "2024-09-07 00:00:00"
      }
    ],
    "failureSheetInfo": [],
    "contractInfo": [],
    "netType": "11",
    "NewOrderedTip": "1、0元产品或非自动续订类产品，到期自动失效，无需退订；</br>2、部分合约产品，因涉及违约金的计算和收取，系统功能正逐步完善中，现阶段您可以到归属地线下营业厅进行办理，给您带来的不便，敬请谅解；</br>3、主套餐及套餐内包含的产品不可退订；</br>4、套餐详情可以前往[我的套餐]进行查看；</br>5、个别无法退订的产品，可能由于归属省分业务限制，具体详询10010。</br>6、功能产品列均为免费服务，部分收费产品需基于该列服务能力使用。",
    "commdityName": "联通造梦卡",
    "productStartDate": "2024-09-07",
    "liuLiangProductInfo": [
      {
        "ziClose": "0",
        "zifeiflag": "0",
        "showZf": "1",
        "productId": "90063345",
        "endDate": "2029-12-31 23:59:59",
        "iscanCel": "",
        "discntInfo": [
          {
            "ziClose": "0",
            "discntCode": "5990170",
            "discntForce": "0",
            "endDate": "2029-12-31 23:59:59",
            "discntName": "来电显示服务100%优惠",
            "maindiScnt": "0",
            "startDate": "2024-09-07 18:46:25"
          }
        ],
        "productMode": "00",
        "packageId": "59999768",
        "cancelFlag": "0",
        "productName": "联通造梦卡",
        "isPackageUnsubscribe": "3",
        "packageForce": "0",
        "packageName": "来电显示包（赠送）",
        "startDate": "2024-09-07 18:46:25"
      },
      {
        "zifeiflag": "0",
        "showZf": "1",
        "productId": "90063345",
        "endDate": "2029-12-31 23:59:59",
        "iscanCel": "",
        "discntInfo": [
          {
            "ziClose": "1",
            "discntCode": "5994760",
            "discntForce": "1",
            "endDate": "2029-12-31 23:59:59",
            "discntName": "500MB国内流量包",
            "maindiScnt": "0",
            "startDate": "2023-12-03 10:27:51"
          }
        ],
        "productMode": "00",
        "packageId": "51605442",
        "cancelFlag": "0",
        "productName": "联通造梦卡",
        "isPackageUnsubscribe": "3",
        "packageForce": "0",
        "packageName": "岁末年初500M流量包活动（全国）",
        "startDate": "2023-12-03 10:27:51"
      }
    ],
    "tipFlag": "0",
    "csEntranceUrl": "https://cc.10010.com/cs/ccc/online/redirect/welcome.html?encryptdata=2uzglzqmE%2BE3MTFCD0yTuao0VYUQjqTTjM5hUEeEeMNYhgH%2FuTS59Fc4FPUNrbQ%2FlQSQ2a9vz0xV%0ArliMtvYdjH7qx4xrvc8lRQGxvDUtPuItT%2FJ2LUyu8mdWxN%2BfERvL4fa9YiXBbgyDxR%2FoMpJuElFA%0AgRWC0HZtweBmnGSDXb7vs3Ot3EJZCFEuw2%2FZE999518450wdS98e0GCQX7VhDcBS8Yx8MhPvMk%2Fb%0AkICrp129qv%2BB3WyuWqtMnoBWL3XudrezSBustQK279EQvCuD%2FjnEyiITc7ipOa52X%2BVcjrUUBxyq%0Ac%2Bm64g%3D%3D",
    "usernumber": "166****8888",
    "valueAdded": [],
    "queryTime": "2024/08/29 15:41:40",
    "serviceinfo": [
      {
        "productmode": "01",
        "completedate": "20240612194355",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "91337673",
        "discntvalue": "",
        "packageid": "53066731",
        "packagename": "5G优享服务包（湖北）",
        "productname": "5G优享服务包（湖北）",
        "servicename": "5G上网服务(下行峰值2Gbps)",
        "serviceid": "53546",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "",
        "completedate": "20231101000000",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90767277",
        "discntvalue": "",
        "packageid": "52463303",
        "packagename": "5G网络服务质量VIP叠加包",
        "productname": "",
        "servicename": "5G网络服务质量VVIP",
        "serviceid": "50867",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20210924224755",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "5G服务（SA）",
        "serviceid": "50334",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20201010033402",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "流量封顶取消",
        "serviceid": "50303",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20191211175343",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "VoLTE",
        "serviceid": "50106",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "5G/4G/3G流量提醒",
        "serviceid": "50300",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "4G+产品服务",
        "serviceid": "50107",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "手机上网服务",
        "serviceid": "50100",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "不可及前转",
        "serviceid": "50022",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20240816093344",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "呼叫保持",
        "serviceid": "50007",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20240816093344",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "呼叫等待",
        "serviceid": "50006",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "无应答前转",
        "serviceid": "50021",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "遇忙前转",
        "serviceid": "50020",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "国内漫游",
        "serviceid": "50014",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "国内长途",
        "serviceid": "50010",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999768",
        "packagename": "来电显示包（赠送）",
        "productname": "联通造梦卡",
        "servicename": "来电显示",
        "serviceid": "50004",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "短信收发",
        "serviceid": "50003",
        "completedateFmt": "2024-09-07 00:00:00"
      },
      {
        "productmode": "00",
        "completedate": "20180426184625",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "90063345",
        "discntvalue": "",
        "packageid": "59999793",
        "packagename": "基本业务功能包",
        "productname": "联通造梦卡",
        "servicename": "语音主服务",
        "serviceid": "50000",
        "completedateFmt": "2024-09-07 00:00:00"
      }
    ],
    "csImg": "https://m1.img.10010.com/resources/7188192A31B5AE06E41B64DA6D65A9B0/20200422/png/20200422151005.png",
    "numType": "0",
    "username": "路**"
  },
  "desc": "SUCCESS"
}

  $done({body: JSON.stringify(body)});
})();
