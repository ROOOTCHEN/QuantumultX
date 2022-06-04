/*
脚本功能：解锁 佐糖&佐糖照片修复&傲软抠图 VIP功能

佐糖 1.1.6
下载地址：https://apps.apple.com/cn/app/id1609584814

佐糖照片修复 2.0.5
下载地址：https://apps.apple.com/cn/app/id1590983966

傲软抠图 1.5.9
下载地址：https://apps.apple.com/cn/app/id1490054676

脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
https?:\/\/gw\.aoscdn.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/Zuotang.js

[mitm]
hostname = gw.aoscdn.com
**************************/

if ($response.body) {
	$done({
		body: JSON.stringify({
			"status": 200,
			"message": "success",
			"data": {
				"license_type": "personal",
				"period_type": "daily",
				"is_activated": 1,
				"remain_days": 0,
				"will_expire": 1,
				"allowed_device_count": 1,
				"begin_activated_time": 1654196185,
				"durations": 0,
				"vip_special": 0,
				"has_buy_extend": 0,
				"has_present": 0,
				"product_id": 480,
				"is_lifetime": 0,
				"expired_at": 1685993750,
				"expire_time": "2099-12-31 19:35:50",
				"device_id": 300402468,
				"exist_trial": 1
			}
		})
	});
} else {
	$done({});
}
