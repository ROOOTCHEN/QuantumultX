/*
 [rewrite_local]
 ^https:\/\/chaos\.4009515151\.com\/fd\/api.+ url script-request-header https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/main/open.js
 
 [mitm]
 hostname = chaos.4009515151.com
*/

// 主函数
(async () => {
	// 获取请求头
	const headers = $request.headers;
	// 获取 Authorization 的值
	const authValue = headers["Authorization"] || "未找到 Authorization";

	// 发送 iOS 通知
	$notify("Authorization", "匹配到的请求头", authValue);
	// 完成脚本
	$done({});
})();
