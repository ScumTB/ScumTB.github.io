---
title: mpd作为musicfox播放引擎，解决音频通道占用
date: 2024-02-13 16:36:32
tags:
---
## :(
* musicfox终端播放音乐时网页浏览器视频一直缓冲，应该是音频通道占用 
## 安装
* sudo pacman -S mpd go-musicfox pulseaudio
* mkdir ~/.config/mpd
* cp /usr/share/doc/mpd/mpdconf.example ~/.config/mpd/mpd.conf
* mkdir ~/.config/mpd/playlists
* touch ~/.config/mpd/{database,log,pid,state,sticker.sql}
## musicfox配置文件
```
[player]
# 播放引擎 beep / mpd(需要安装配置mpd) / osx(Mac才可用)
# 不填Mac默认使用osx，其他系统默认使用beep（推荐的配置）
engine=mpd
# beep使用的mp3解码器，可选：go-mp3, minimp3 (minimp3更少的CPU占用，但是稳定性不如go-mp3)
beepMp3Decoder=go-mp3

# mpd配置
mpdBin=/usr/bin/mpd
# !!!注意!!! 一定要在配置文件中设置pid_file，否则在退出时不会kill掉mpd进程
mpdConfigFile=/home/scum/.config/mpd/mpd.conf
# tcp 或 unix
mpdNetwork=tcp
# tcp时填写ip+port(例如:127.0.0.1:1234)，unix时填写socket文件路径
mpdAddr=127.0.0.1:1234

```
## mpd配置文件
```
music_directory	   "~/Music"

db_file            "~/.config/mpd/database"
log_file           "~/.config/mpd/log"

# Optional
music_directory    "~/Music"
playlist_directory "~/.config/mpd/playlists"
pid_file           "~/.config/mpd/pid"
state_file         "~/.config/mpd/state"
sticker_file       "~/.config/mpd/sticker.sql"
bind_to_address    "localhost"
port 	           "1234"
log_level          "default"
restore_paused     "yes"
auto_update        "yes"

auto_update_depth  "4"
audio_output {
     type	"pulse"
     name 	"pulse audio"
}

```
## 参考
* https://github.com/go-musicfox/go-musicfox
* https://wiki.archlinuxcn.org/wiki/Music_Player_Daemon
* https://mpd.readthedocs.io/en/latest/user.html
* pavucontrol可以在dwm中可视化控制mpd音量

