/*
脚本功能：i武汉_解锁接种疫苗三针
脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https:?\/\/whhb\.tgovcloud\.com\/epidemicbg\/vaccine\/info\/v2\?qrcCode\=.+ url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/iWuhan/Bypass_Vaccines.js

[mitm] 
hostname = whhb.tgovcloud.com

***************************/

if ($response.body) {
	$done({
		body: JSON.stringify({
			"msg": "执行成功",
			"code": 0,
			"data": [{
				"JZSJ": "2021-12-04",
				"ADDRESS": "关东街第二社区卫生服务中心",
				"MILL": "成都生物",
				"JZJC": "3"
			}, {
				"JZSJ": "2021-05-16",
				"ADDRESS": "关东街第二社区卫生服务中心",
				"MILL": "北京生物",
				"JZJC": "2"
			}, {
				"JZSJ": "2021-03-21",
				"ADDRESS": "关东街第二社区卫生服务中心",
				"MILL": "武汉生物",
				"JZJC": "1"
			}]
		})
	});
} else {
	$done({});
}
