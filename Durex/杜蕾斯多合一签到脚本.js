#!name = 杜蕾斯签到合集
#!desc = 知名国际运动品牌签到-定时任务
#!data = 2024-10-13
#!icon=https://raw.githubusercontent.com/czy13724/LeviIcons/main/leviicons/dls.png

[Argument]
arg1 = input,"0 0 1-3 * *",tag=会员宠粉遇好礼-开关
arg2 = switch,true,tag=会员宠粉遇好礼-开关

arg3 = input,"0 0 * * *",tag=幸运转转转10月送好礼
arg4 = switch,true,tag=幸运转转转10月送好礼-开关

arg5 = input,"0 0 * * *",tag=杜蕾斯每日签到
arg6 = switch,true,tag=杜蕾斯每日签到-开关

arg7 = switch,true,tag=杜蕾斯COOKIE-开关

[Script]
cron {arg1} script-path=https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex_Task01.js, enable= {arg2}, tag=会员宠粉遇好礼

cron {arg3} script-path=https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/Durex/Durex_Task02.js, enable= {arg4}, tag=幸运转转转10月送好礼

cron {arg5} script-path=https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/dls.js, enable= {arg6}, tag=杜蕾斯每日签到

http-request ^https:\/\/vip\.ixiliu\.cn\/mp\/sign\/applyV2$,script-path=https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/dls.js, enable= {arg7},requires-body=true, timeout=60, tag=杜蕾斯Cookie

[MITM]
hostname = vip.ixiliu.cn