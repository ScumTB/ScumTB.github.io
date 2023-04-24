---
title: linux笔记
date: 2023-02-27 19:35:55
tags:
---
# 开始学习linux啦----持续记录
* `netstat -nltp`n:拒绝显示别名 l:显示监听 t:tcp p:显示pid/name 
* vim中数字+1操作的快捷键`ctrl+a`
* save a file in Vim without Root Permission:`w !sudo tee %`
* vim中gf进入光标停留的文件 ctlr+o ctlr+i可以回到原来的文件
* sed '/apple/a\hello world' filename 匹配到apple,并在后面追加hello world,在内存中并不能修改原文件
* 截取man_db.conf第10～20行，并显示行号：cat -n man_db.conf | head -n 20 man_db.conf| tail -n 10 man_db.conf
* 单独分出/home目录好处：重新安装系统不会丧失/home目录下的数据,直接挂载就可以
* cp -a 是将文件连同创建时间都一样
* chgrp chown chmod 
* lost+found：系统发生错误时，将一些遗失的片段放在该目录下面，root可以打开查看
* mtime:文件内容数据变更时间 atime:文件状态rwx等改变 ctime：文件内容被读取的时间
* `find /var -mtime -4 `：找出/var下四天之内被改动的文件
* SUID: a command or script with SUID bit set is run, its effective UID becomes that of the owner of the file, rather than of the user who is running it.
* SGID: when the script or command with SGID on is run, it runs as if it were a member of the same group in which the file is a member.
* Sticky bit:It is useful for shared directories such as /var/tmp and /tmp because users can create files, read and execute files owned by other users, but are not allowed to remove files owned by other users.
* （超级区块）：记录文件系统的整体信息，包括inode与数据区块的总量，使用量，剩余量，文件系统格式  （inode）:记录文件的属性，一个文件占用一个inode,同时记录此文件的数据所在的区块号码    （数据区块）：这里存放文件内容，内容大将被拆分多个区块
* `cut -d: -f1 /etc/passwd`cut切割以：为分隔符，在命令行打出第一列
* `echo $?`查看上一条命令是否执行成功,成功则为0
* `fdisk -l <<EOF.....EOF`输入重定向
* &> file：意思是把标准输出和标准错误输出都重定向到文件file中  /dev/null linux中的黑洞
* echo -n(输出不换行)   -e(将转义输出)----比如echo -e "\n"是换行
* shell数组 
  1. echo $(array[0])访问数组中第一个元素
  2. echo $(array[@])访问数组中所有元素
  3. echo $(#array[@])统计数组元素的个数
  4. echo $(!array[@])获取数组元素的索引
  5. echo $(array[@]:1:2)从数组下标1开始，访问两个元素
* 在bash中，$()与 ``都是用来作命令替换的
* test也是一个命令 test -d /tmp/abc ;echo $? 判断目录是否存在 -e是判断目录或者文件 -f是判断文件是否存在
* 终端输出时间 `date "+%F %H:%M:%S"`
* watch -n 1 -d find .当前目录下文件变化每隔一秒刷新

