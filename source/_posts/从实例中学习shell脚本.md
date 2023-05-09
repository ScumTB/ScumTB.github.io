---
title: dwm中启动脚本
date: 2023-05-09 19:26:39
tags:
---
> dwm状态栏音量调节 
```
print_volume() {
	volume="$(amixer get Master | tail -n1 | sed -r 's/.*\[(.*)%\].*/\1/')"
	if test "$volume" -gt 0
	then
		echo -e "\uE05D${volume}"
	else
		echo -e "Mute"
	fi
}
```
* `amixer get Master | tail -n1`获取音量加入管道符获取最后一行
* `tail -n1`显示最后一行
* tail参数-n<行数> 显示文件的尾部 <行数> 内容
* `sed -r "s/.*\[(.*)%\].*/\1/"`-r是正则表达式匹配
* `Mono: Playback 69 [79%] [-13.50dB] [on]`通过sed -r 将所有的文本替换为[]中%前面的数字
* 接下来是shell脚本中if else判断
* `echo -e`处理特殊字符串`echo -n` 不换行输出

> 输出内存

```
print_mem(){
	memfree=$(($(grep -m1 'MemAvailable:' /proc/meminfo | awk '{print $2}') / 1024))
	echo -e "$memfree"
}
```
* `grep -m1`第一个匹配项得出的结果为`MemAvailable:   12216620 kB` [参考链接](https://www.runoob.com/linux/linux-comm-grep.html)
* `awk '{print $2}'`提取第二个字段也就是12216620
* 除以1024换成M单位

> 网速

```
function get_bytes {
	# Find active network interface
	interface=$(ip route get 8.8.8.8 2>/dev/null| awk '{print $5}')
	line=$(grep $interface /proc/net/dev | cut -d ':' -f 2 | awk '{print "received_bytes="$1, "transmitted_bytes="$9}')
	eval $line
	now=$(date +%s%N)
}
```
* `ip route get 8.8.8.8 2>/dev/null`其中2>是将错误文件丢弃到/dev/null[参考链接](https://stackoverflow.com/questions/40714202/what-is-the-meaning-of-2-in-2-dev-null)
* `ip route get 8.8.8.8 2>/dev/null| awk '{print $5}'`查看自己网卡
* `grep $interface /proc/net/dev`在/proc/net/dev中查找匹配自己网卡的项
* `cut -d ':' -f 2 `cut命令提取以冒号分隔的第二个字段,结果如下，去掉括号内容
* (wlp1s0: )1930743341 1626164    0    0    0     0          0         0 155911897  728871    0    0    0     0       0          0
* awk找到接受字节，和传输字节 
* eval命令用于重新运算求出参数的内容

> dwm中触控板

```
#!/bin/bash

# Get id of touchpad and the id of the field corresponding to
# tapping to click
id=`xinput list | grep "Touchpad" | cut -d'=' -f2 | cut -d'[' -f1`
tap_to_click_id=`xinput list-props $id | \
                      grep "Tapping Enabled (" \
                      | cut -d'(' -f2 | cut -d')' -f1`

# Set the property to true
xinput --set-prop $id $tap_to_click_id 1
```

* xinput list-props $id：列出指定设备ID的属性列表。
* grep "Tapping Enabled ("：在属性列表中查找包含"Tapping Enabled ("关键词的行。
* cut -d'(' -f2：使用"("作为分隔符，提取包含属性ID的字段。
* cut -d')' -f1：使用")"作为分隔符，提取属性ID。 

> 查看电量shell脚本

```
dwm_battery () {
    # Change BAT1 to whatever your battery is identified as. Typically BAT0 or BAT1
    CHARGE=$(cat /sys/class/power_supply/BAT1/capacity)
    STATUS=$(cat /sys/class/power_supply/BAT1/status)

    printf "%s" "$SEP1"
    if [ "$IDENTIFIER" = "unicode" ]; then
        if [ "$STATUS" = "Charging" ]; then
            printf "🔌 %s%% %s" "$CHARGE" "$STATUS"
        else
            printf "🔋 %s%% %s" "$CHARGE" "$STATUS"
        fi
    else
        printf "BAT %s%% %s" "$CHARGE" "$STATUS"
    fi
    printf "%s\n" "$SEP2"
}
```
* 主要两个变量CHARGE STATUS



















