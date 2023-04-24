---
title: WIKI
date: 2022-11-30 17:58:47
---
# ScumWiki----我的百科全书
* Qv2ray设置全局代理：Preferences->ConnectionSetting ->BypassCNMainland
* vim编辑html实时显示插件 Bracey.vim 牛
* linux鼠标灵敏度：`xinput list` `xinput list-props "Logitech G502 HERO Gaming Mouse"` `xinput set-prop "Logitech G502 HERO Gaming Mouse" "libinput Accel Speed" 0`
* ios传文件到电脑上snapdrop.net(跨设备好像不行了)---pairdrop.net
* 云服务器centos8LNMP搭建:https://cloud.tencent.com/document/product/213/49304
* wo这里电费是5毛一度，水好像3元一吨
* 洗衣机洗衣服，放甩桶甩干泡沫，然后过水再甩
* https://xn--4gq62f52gdss.com/#/login
* 备用节点：'https://qingyun.io/#/dashboard''https://www.cfmem.com/'
* 推荐archlinuxcn源：Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
* yay路径/home/scum/.cache/yay
* pacman下载的软件包/var/cache/pacman/pkg/ 
* 2023年煎饼加个火腿片，辣条要7元le
* 2023查询我这里房价最高7000每平方米
* 一键部署机场：apt-get update -y && apt-get install curl -y 
bash <(curl -s -L https://git.io/v2ray.sh)
* 24小时Bzhan直播教程：'https://docs.kplayer.net/v0.5.7/plugin/show-subtitles.html'<国外服务器不能在B站直播>
或者：https://www.ffmpeg.org/
* steam下载路径：/home/scum/.local/share/Steam/steamapps/common
* ffmpeg简单裁剪视频：ffmpeg -ss 00:00:00 -t 00:00:30 -i keyoutput.mp4 -vcodec copy -acodec copy split.mp4
* 128.1.44.125
* 国外的服务器1G带宽运行wordpress很卡
* Spawn failed问题大多是因为git进行push或者hexo d的时候改变了一些.deploy_git文件下的内容。
* v2raya开启全局模式，IP Forward:Do not Split Traffic
* archlinux安装vmware需要的依赖`sudo pacman -S fuse2 gtkmm linux-headers pcsclite libcanberra`    ` yay -S ncurses5-compat-libs`
* archlinux vmware could not connect ethernet0 问题:` sudo modprobe vmnet && sudo vmware-networks --start`     
`sudo systemctl start vmware-networks.service`
* (tmux new -s work)(tmux ls)(tmux attach -t work)(分离session:Ctrl+b d)(新建窗口：Ctrl+b c)(窗口里面分割：Ctrl+b %)(关闭窗格：Ctrl+b x)

