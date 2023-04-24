---
title: Telegram Rss_Bot
date: 2023-01-13 12:36:02
tags:
---

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=25704085&auto=1&height=66"></iframe>

# Telegram Bot----Rss
> 有的时候失效，重启容器--docker restart containerID

## 1.创建机器人



1.@BotFather

2./start

3./newbot

4.two name 

> Alright, a new bot. How are we going to call it? Please choose a name for your bot.

> Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.

​        可以看到token

![](https://cdn.staticaly.com/gh/ScumTB/blogpictures@master/test/token.png)

5.@getchatid

![](https://cdn.staticaly.com/gh/ScumTB/blogpictures@master/test/getid.png)

6.将创建好的机器人拉入创建的一个频道

## 2.docker运行或者别的:)

1. docker pull fengkx/node_rssbot

2. docker-compose up(docekr-compose.yml)

   ![](https://cdn.staticaly.com/gh/ScumTB/blogpictures@master/test/docker-compose.png)

   



## 3.常用命令

```
/rss       - 显示订阅列表，加 `raw`显示链接
/sub       - 订阅 RSS: /sub http://example.com/feed.xml 支持自动检测 RSS feed
/unsub     - 退订 RSS: /unsub http://example.com/feed.xml 或者通过键盘
/unsubthis - 回复一个 RSS 发来的消息退订该 RSS
/allunsub  - 退订所有源
/export    - 导出订阅到opml文件
/viewall   - 查看所有订阅和订阅人数 需要在设置中打开
/import    - 回复此消息 opml 文件导入订阅(群组)
/lang      - 更改语言
/heath      - 展示活跃订阅源的健康程度
```

## 4.测试

完了，失败了，我去改改   2023-1-13

好了解决了

![](https://cdn.staticaly.com/gh/ScumTB/blogpictures@master/test/2023-01-13_14-34.png)
