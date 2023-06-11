---
title: Hello,ArchLinux!
date: 2023-01-03 11:45:14
tags:
---
## 环境：

联想小新15 显卡是AMD

## 准备阶段：

USB启动盘，开机按F2将U盘优先级调到最高,启动进入界面

## 联网：

`iwctl`

`device list`

`station wlan0 scan `

`station wlan0 get-networks`

`station wlan0 connect name`

> 输入密码，quit就可以联网了
>
> ping baidu.com测试，如果不可以，试一下dhcpcd

## 同步时间：

`timedatectl set-ntp true`

## 分区硬盘：

`fdisk -l`看一下磁盘结构

`fdisk /dev/nvme0n1`进入磁盘来分配windows压缩好的磁盘空间

通过n新建然后通过w保存

继续`fdisk -l`继续看看刚刚通过n新建的磁盘

## 格式化磁盘：

`mkfs.ext4 [分区路径]`示例：mkfs.ext4 /dev/nvme0n1p8

## 挂载：

`mount [分区路径] /mnt`

`mkdir /mnt/boot`

`mount [EFI路径] /mnt/boot`

swap空间后面通过文件来分配（16G内存分配16G足够）

## 镜像源选择：

`vim /etc/pacman.d/mirrorlist 

将镜像源添加在第一行（中科大不错）

`Server = https://mirrors.bfsu.edu.cn/archlinux/$repo/os/$arch`

`Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch`

## 安装基本包：
```
pacstrap /mnt base base-devel linux linux-firmware dhcpcd
```
## genfstab
* `genfstab -L /mnt >> /mnt/etc/fstab`
* `cat /mnt/etc/fstab`查看一下
> https://man.archlinux.org/man/genfstab.8
## arch-chroot
* `arch-chroot /mnt`
* `ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`:设置时区
* `hwclock --systohc`
* `pacman -S vim netctl net-tools wpa_supplicant dialog ntfs-3g` 
* `vim /etc/locale.gen`:激活中文英文UTF-8 en_US.UTF-8
* `locale-gen`
* `vim /etc/locale.conf`输入LANG=en_US.UTF-8
* `vim /etc/hostname`:设置主机名字eg:arch
* `vim /etc/hosts`
> 127.0.0.1 localhost
> ::1 localhost
> 127.0.1.1 arch.localdomain arch 
* `passwd`:设置root密码
* 英特尔CPU要安装intel-ucode
## grub配置<重要>
* 接着上面步骤`pacman -S grub dhcpcd os-prober efibootmgr sudo`
* `grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub`
* `grub-mkconfig -o /boot/grub/grub.cfg`
> https://wiki.archlinuxcn.org/wiki/GRUB  
* exit
* reboot
## 基本配置
* 进入会有引导界面，选择archlinux
* `systemctl enable NetworkManager`
* 通过nmcli联网`nmcli dev wifi`
* `dd if=/dev/zero of=/swapfile bs=1M count=512`
* `chmod 600 /swapfile`
* `mkswap /swapfile`
* `swapon /swapfile`
* `vim /etc/fstab`添加`/swapfile       none    swap    defaults        0       0`
* 创建用户`useradd -m -G wheel <username>` `passwd <username>` `EDITOR=vim visudo`
* `visudo`:找到%wheel ALL=(ALL) ALL，删除前面的#取消注释 
* `su <username>``sudo vim /etc/pacman.conf`添加额外的软件源`multilib`
* `sudo vim /etc/pacman.conf`添加[archlinuxcn]源 `sudo pacman -Sy archlinuxcn-keyring`
> https://wiki.archlinux.org/title/Unofficial_user_repositories
## 后续配置
* 字体图像界面到时候查资料dwm kde gnome 


