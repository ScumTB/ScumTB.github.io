---
title: linux下包管理器
date: 2023-04-01 10:00:08
tags:
---
> 下列出现的pg为所需要安装的包名
*** 
> pacman

* `sudo pacman -Syu`每天更新
* `sudo pacman -Syyu`强制刷新并更新
* `sudo pacman -Ss`仓库中搜索需要的包名
* `sudo pacman -S`安装一个包
* `sudo pacman -Rns`移除一个包，并删除不被别的包依赖的依赖
* `sudo pacman -Sc`移除当前未安装的所有缓存包
* `sudo pacman -Scc`aggressive approach and will leave nothing in the cache directory
* `sudo pacman -Qdt`列出不再被依赖的包

> apt

* `sudo apt update & sudo apt upgrade`
* `sudo apt install `
* `sudo apt remove`
* `sudo apt search`
* `sudo apt list --installed`列出已安装的包

> yum

* `yum -y install pn`
* `yum remove -y pn `
* `yum update -y pn`
* `yum search pn`
* `yum clean packages`清楚缓存目录下的文件包

> homebrew

* `brew search pn`
* `brew install pn`
* `brew uninstall pn`
* `brew install --cask pn`带有gui的软件名

> dpkg

* `dpkg --help`
* `dpkg --info foo_VVV-RRR.deb`打印出指定.deb的信息
* `dpkg --install foo_VVV-RRR.deb`
* `dpkg --remove foo`移除一个包
* `dpkg --purge foo`移除一个包（包含它的配置文件）


***

 * https://wiki.archlinux.org/title/Pacman
 * https://www.tecmint.com/linux-package-managers/
 * https://linux.fandom.com/wiki/YUM
 * https://www.debian.org/doc/manuals/debian-faq/pkgtools.en.html#dpkg
***
