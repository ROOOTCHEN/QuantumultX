#!name=蜜雪冰城
#!desc=微信小程序
#!icon=https://i1.hdslb.com/bfs/archive/f91185a559be932419f891f13f62f56dd97ea1b5.jpg
#!openUrl = 微信小程序
#!tag = 签到

[Argument]
cookie = switch,true,tag=蜜雪冰城Token 开关
cron = input,"0 0 * * *",tag=蜜雪冰城签到 cron,desc=请输入定时任务的cron表达式

[Script]
# 获取蜜雪冰城需要的各项参数
http-response ^https:\/\/mxsa\.mxbc\.net\/api\/v1\/customer\/info script-path=https://gist.githubusercontent.com/Sliverkiss/865c82e42a5730bb696f6700ebb94cee/raw/mxbc.js, requires-body=true, timeout=60, tag=蜜雪冰城token获取,enable = {cookie}

cron {cron} script-path=https://gist.githubusercontent.com/Sliverkiss/865c82e42a5730bb696f6700ebb94cee/raw/mxbc.js,tag=蜜雪冰城签到

[MITM]
hostname = mxsa.mxbc.net
