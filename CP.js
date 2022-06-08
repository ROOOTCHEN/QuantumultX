/*
脚本功能：解锁恋爱物语送礼物功能（仅在聊天界面中显示，不会在资料礼物列表中显示）
软件版本：3.0.0
下载地址：https://apps.apple.com/cn/app/picwish/id1609584814
脚本作者：RootChen
更新时间：2022-06-04
使用声明：️此脚本仅供学习与交流

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/203\.107.47\/161\:84\wecoreapi\was url response-body  url script-response-body url

[mitm]
hostname = 203.107.47.161:84
**************************/

const res = $response; //请求
const req = $request.headers; //响应

if (res.uid == '13683707') {
	$done({
		body: JSON.stringify({
			"extra": "YzEwZWZjYTE2NmU0ZGZlMjdkNTc5NjcyN2IwOWQwMjAxMTZhMGY5NWZlNzMzNTM3NjZjOWQ2ZWNhMzI2NTNhY2Y1YmQ4NjA0ZTY4OWZjM2Q2MWM2YmJkZmQyYmFlNDY3ZWIyNzQ4NzJhMjM4NDA0OWVhYjMzMmVkNWQ4Nzk0NmFmYTRmMWJiYjhjM2I4M2M5MWFlMDQxMjM3Zjg0MjI2ZGI2ZmRmZWYyNzhkZjc1Mjk4YjJiMjBkMzdlOTdmMzAwYWIyYTdiODRkYzcxYWU3M2NjMTUwMjAxNzhhYWU0YzQ5Yjg5ZjJiMGJmYjA3MjJm"
		})
	})
} else {
	$done({});
}
