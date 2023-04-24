---
title: centos忘记root密码，进行重置
date: 2023-04-02 22:28:45
tags:
---
#### centos7 第一种修改`rd.break`
1. 在重启过后grub引导界面，按e进入编辑模式
2. 在以linux16开头的命令行最后输入`rd.break` 
3. ctrl +x
4. mount -o remount,rw /sysroot
5. chroot /sysroot
6. (passwd root)输入两次你要修改的root密码
7. touch /.autorelabel
8. exit
9. reboot
#### centos7 第二种修改`init=/sysroot/bin/sh`
1. 在以linux16开头的命令中找到ro 改为rw 并在后添加init=/sysroot/bin/sh 
2. ctrl +x
3. chroot /sysroot
4. passwd root
5. exit 
6. reboot
***
#### wiki
> chroot是将/sysroot暂时作为根目录，这样可以处理相关的密码

> `touch /.autorelabel`将系统重新启动的时候自动使用默认的SELinux类型重新写入SELinux文件中

> `mount -o ro /dev/hda1 /mnt`将 /dev/hda1 用唯读模式挂在 /mnt 之下。
***
#### 参考
* https://unix.stackexchange.com/questions/191618/what-is-the-difference-between-using-init-and-rd-break-for-reseting-the-root
* https://www.clouvider.com/knowledge_base/how-to-reset-root-password-on-centos-linux/
* https://www.runoob.com/linux/linux-comm-mount.html
