#!name = SODA相机
#!desc = 解锁SODA相机会员
#!data = 2024-10-23
#!tag = 会员
#!icon = https://raw.githubusercontent.com/ROOOTCHEN/QuantumultX/refs/heads/main/SODA/SODA-Logo.png
#!loon_version = 3.2.3(762)



[Script]
http-response ^https?:\/\/purchase-soda-api\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/soda.js, requires-body=true, timeout=10, tag=SODA相机

[MITM]
hostname = purchase-soda-api.snow.me
