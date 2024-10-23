#!name = 杰士邦签到
#!desc = 国产男子汉签到
#!data = 2024-10-23
#!tag = 签到
#!icon = https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/JISSBON/JISSBON-Logo.png
#!loon_version = 3.2.3(762)

[Argument]
cookie = switch,true,tag=杰士邦Token

cron1 = input,"0 0 * * *",tag=每日签到 定时任务
JISSBON = switch,true,tag=每日签到 任务开关


[Script]

#获取Cookie
http-request ^https:\/\/xh-vip-api\.a-touchin\.com\/mp\/user\/info script-path=https://gist.githubusercontent.com/Sliverkiss/6d15658e313eee254a55d2b97933587c/raw/jsb.js,enable= {cookie}, timeout=60, tag=杰士邦TOKNE
#签到
cron {cron1} script-path=https://gist.githubusercontent.com/Sliverkiss/6d15658e313eee254a55d2b97933587c/raw/jsb.js, enable= {JISSBON}, tag=杰士邦签到

[MITM]
hostname = xh-vip-api.a-touchin.com
