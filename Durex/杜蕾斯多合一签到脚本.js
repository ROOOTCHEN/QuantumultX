#!name = 杜蕾斯签到合集
#!desc = 知名国际运动品牌签到-定时任务
#!data = 2024-10-13
#!tag = 签到
#!icon = https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex-Logo.png
#!author = RootChen[https://t.me/RoootChen],Levi[https://levifree.tech/]
#!homepage =  https://github.com/ROOOTCHEN/QuantumultX
#!loon_version = 3.2.3(762)

[Argument]
cookie = switch,true,tag=杜蕾斯获取Token

cron1 = input,"0 0 1-3 * *",tag=会员宠粉遇好礼 定时任务,desc=请输入定时任务的cron表达式
durex1= switch,true,tag=会员宠粉遇好礼 任务开关


cron2 = input,"0 0 * * *",tag=幸运转转转10月送好礼 定时任务,desc=请输入定时任务的cron表达式
durex2 = switch,true,tag=幸运转转转10月送好礼 任务开关


cron3 = input,"0 0 * * *",tag=杜蕾斯每日签到 定时任务,desc=请输入定时任务的cron表达式
durex3 = switch,true,tag=杜蕾斯每日签到 任务开关

cron4 = input,"0 0 * * *",tag=会员宠粉抽奖赢好礼 定时任务,desc=请输入定时任务的cron表达式
durex4 = switch,true,tag=会员宠粉抽奖赢好礼 任务开关

[Script]

#杜蕾斯每日签到
cron {cron3} script-path=https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/dls.js, enable= {durex3}, tag=杜蕾斯每日签到

#会员宠粉遇好礼
cron {cron1} script-path=https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex_Task01.js, enable= {durex1}, tag=会员宠粉遇好礼

#幸运转转转10月送好礼
cron {cron2} script-path=https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex_Task02.js, enable= {durex2}, tag=幸运转转转10月送好礼

#会员宠粉抽奖赢好礼
cron {cron4} script-path=https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex_Task03.js, enable= {durex4}, tag=会员宠粉抽奖赢好礼

#获取Cookie
http-request ^https:\/\/vip\.ixiliu\.cn\/mp\/user\/info$ script-path=https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/dls.js,enable= {cookie}, timeout=60, tag=杜蕾斯Cookie

[MITM]
hostname = vip.ixiliu.cn
