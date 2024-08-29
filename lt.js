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
        "productName": "腾讯大王卡",
        "startDate": "2018-04-26"
      }
    ],
    "otherProductInfo": [
      {
        "orderTime": "",
        "productId": "91233837",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效1",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233838",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效2",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233839",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效3",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233840",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效4",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233841",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效5",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233842",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效6",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233843",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效7",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233843",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效8",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233843",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "10G0B流量奖励包-次月生效9",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91233843",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100GB流量奖励包-次月生效10",
        "startDate": "2024-08-29 00:00:00"
      },
      {
        "orderTime": "",
        "breakContractRule": "解约条款：用户申请办理提前解约（不含套餐变更），需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：1元。",
        "productId": "91260288",
        "endDate": "2025-02-28 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "100分钟轻合约语音礼包（6个月）",
        "startDate": "2024-09-01 00:00:00"
      },
      {
        "orderTime": "",
        "productId": "91351272",
        "endDate": "2024-08-31 23:59:59",
        "productFee": "",
        "cancelFlag": "0",
        "productName": "55GB省内流量翻倍活动包1个月(立即生效)（湖北）",
        "startDate": "2024-08-23 19:37:20"
      },
      {
        "orderTime": "",
        "productId": "91258445",
        "endDate": "2024-08-31 23:59:59",
        "productFee": "",
        "cancelFlag": "0",
        "productName": "反诈名片基础版0元/月-立即生效",
        "startDate": "2024-08-12 14:02:07"
      },
      {
        "orderTime": "",
        "productId": "90989845",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "畅听王卡0元资费包（立即生效）",
        "startDate": "2024-08-10 19:25:22"
      },
      {
        "orderTime": "",
        "productId": "91309358",
        "endDate": "2024-11-30 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "承诺在网享[5GB省内流量+60分钟全国语音]*6个月（湖北）",
        "startDate": "2024-06-14 22:35:32",
        "breakContractRule": "解约条款：用户申请办理提前解约（不含套餐变更），需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：0元。"
      },
      {
        "orderTime": "",
        "productId": "91337673",
        "endDate": "",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "5G优享服务包（湖北）",
        "startDate": "2024-06-12 19:43:55"
      },
      {
        "orderTime": "",
        "productId": "91033290",
        "endDate": "2025-04-30 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "回馈大礼包",
        "startDate": "2024-05-08 23:08:54",
        "breakContractRule": "解约条款：用户申请办理提前解约（不含套餐变更），需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：9元。"
      },
      {
        "orderTime": "",
        "productId": "91262812",
        "endDate": "2025-03-31 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "星级专享5GB全国流量*12个月（湖北）",
        "startDate": "2024-04-04 08:28:16",
        "breakContractRule": "解约条款：用户申请办理提前解约，需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：10元*客户未履约月份数"
      },
      {
        "orderTime": "",
        "breakContractRule": "解约条款：用户申请办理提前解约（不含套餐变更），需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：1元。",
        "productId": "91259079",
        "endDate": "2025-02-28 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "5GB轻合约流量礼包（12个月）",
        "startDate": "2024-03-01 00:00:00"
      },
      {
        "orderTime": "",
        "breakContractRule": "解约条款：用户申请办理提前解约（不含套餐变更），需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：1元。",
        "productId": "91260288",
        "endDate": "2025-02-28 23:59:59",
        "productFee": "",
        "cancelFlag": "0",
        "productName": "100分钟轻合约语音礼包（6个月）",
        "startDate": "2024-09-01 00:00:00"
      },
      {
        "orderTime": "",
        "breakContractRule": "解约条款：用户申请办理提前解约，需支付解约赔偿金，支付后办理解约",
        "breakContractFine": "违约赔偿金：已到账电子券金额",
        "productId": "90722103",
        "endDate": "2024-11-30 23:59:59",
        "productFee": "",
        "cancelFlag": "4",
        "productName": "福利二选一语音短信产品",
        "startDate": "2023-12-01 00:00:00"
      }
    ],
    "failureSheetInfo": [],
    "contractInfo": [],
    "netType": "11",
    "NewOrderedTip": "1、0元产品或非自动续订类产品，到期自动失效，无需退订；</br>2、部分合约产品，因涉及违约金的计算和收取，系统功能正逐步完善中，现阶段您可以到归属地线下营业厅进行办理，给您带来的不便，敬请谅解；</br>3、主套餐及套餐内包含的产品不可退订；</br>4、套餐详情可以前往[我的套餐]进行查看；</br>5、个别无法退订的产品，可能由于归属省分业务限制，具体详询10010。</br>6、功能产品列均为免费服务，部分收费产品需基于该列服务能力使用。",
    "commdityName": "腾讯大王卡",
    "productStartDate": "2018-04-26",
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
            "startDate": "2018-04-26 18:46:25"
          }
        ],
        "productMode": "00",
        "packageId": "59999768",
        "cancelFlag": "0",
        "productName": "腾讯大王卡",
        "isPackageUnsubscribe": "3",
        "packageForce": "0",
        "packageName": "来电显示包（赠送）",
        "startDate": "2018-04-26 18:46:25"
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
            "discntName": "100GB国内流量包",
            "maindiScnt": "0",
            "startDate": "2023-12-03 10:27:51"
          }
        ],
        "productMode": "00",
        "packageId": "51605442",
        "cancelFlag": "0",
        "productName": "腾讯大王卡",
        "isPackageUnsubscribe": "3",
        "packageForce": "0",
        "packageName": "岁末年初500M流量包活动（全国）",
        "startDate": "2023-12-03 10:27:51"
      }
    ],
    "tipFlag": "0",
    "csEntranceUrl": "https://cc.10010.com/cs/ccc/online/redirect/welcome.html?encryptdata=2uzglzqmE%2BE3MTFCD0yTuao0VYUQjqTTjM5hUEeEeMNYhgH%2FuTS59Fc4FPUNrbQ%2FlQSQ2a9vz0xV%0ArliMtvYdjH7qx4xrvc8lRQGxvDUtPuItT%2FJ2LUyu8mdWxN%2BfERvL4fa9YiXBbgyDxR%2FoMpJuElFA%0AgRWC0HZtweBmnGSDXb7vs3Ot3EJZCFEuw2%2FZE999518450wdS98e0GCQX7VhDcBS8Yx8MhPvMk%2Fb%0AkICrp129qv%2BB3WyuWqtMnoBWL3XudrezSBustQK279EQvCuD%2FjnEyiITc7ipOa52X%2BVcjrUUBxyq%0Ac%2Bm64g%3D%3D",
    "usernumber": "155****8888",
    "valueAdded": [],
    "queryTime": "2024/08/29 15:41:40",
    "serviceinfo": [
      {
        "productmode": "01",
        "completedate": "20240823193720",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "91351272",
        "discntvalue": "",
        "packageid": "53084028",
        "packagename": "55GB省内流量翻倍活动包1个月(立即生效)（湖北）",
        "productname": "55GB省内流量翻倍活动包1个月(立即生效)（湖北）",
        "servicename": "5G上网服务(下行峰值500Mbps)",
        "serviceid": "53546",
        "completedateFmt": "2024-08-23 19:37:20"
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
        "productname": "腾讯大王卡",
        "servicename": "呼叫保持",
        "serviceid": "50007",
        "completedateFmt": "2024-08-16 09:33:44"
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
        "productname": "腾讯大王卡",
        "servicename": "呼叫等待",
        "serviceid": "50006",
        "completedateFmt": "2024-08-16 09:33:44"
      },
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
        "completedateFmt": "2024-06-12 19:43:55"
      },
      {
        "productmode": "01",
        "completedate": "20240301000000",
        "servicestate": "1",
        "ordermethod": "",
        "productid": "91259079",
        "discntvalue": "",
        "packageid": "52971694",
        "packagename": "5GB轻合约流量礼包（12个月）",
        "productname": "5GB轻合约流量礼包（12个月）",
        "servicename": "5G上网服务（下行峰值300Mbps）",
        "serviceid": "53545",
        "completedateFmt": "2024-03-01 00:00:00"
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
        "completedateFmt": "2023-11-01 00:00:00"
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
        "productname": "腾讯大王卡",
        "servicename": "5G服务（SA）",
        "serviceid": "50334",
        "completedateFmt": "2021-09-24 22:47:55"
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
        "productname": "腾讯大王卡",
        "servicename": "流量封顶取消",
        "serviceid": "50303",
        "completedateFmt": "2020-10-10 03:34:02"
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
        "productname": "腾讯大王卡",
        "servicename": "VoLTE",
        "serviceid": "50106",
        "completedateFmt": "2019-12-11 17:53:43"
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
        "productname": "腾讯大王卡",
        "servicename": "5G/4G/3G流量提醒",
        "serviceid": "50300",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "4G+产品服务",
        "serviceid": "50107",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "手机上网服务",
        "serviceid": "50100",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "不可及前转",
        "serviceid": "50022",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "无应答前转",
        "serviceid": "50021",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "遇忙前转",
        "serviceid": "50020",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "国内漫游",
        "serviceid": "50014",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "国内长途",
        "serviceid": "50010",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "来电显示",
        "serviceid": "50004",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "短信收发",
        "serviceid": "50003",
        "completedateFmt": "2018-04-26 18:46:25"
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
        "productname": "腾讯大王卡",
        "servicename": "语音主服务",
        "serviceid": "50000",
        "completedateFmt": "2018-04-26 18:46:25"
      }
    ],
    "csImg": "https://m1.img.10010.com/resources/7188192A31B5AE06E41B64DA6D65A9B0/20200422/png/20200422151005.png",
    "numType": "0",
    "username": "陈**"
  },
  "desc": "SUCCESS"
}

  $done({body: JSON.stringify(body)});
})();
