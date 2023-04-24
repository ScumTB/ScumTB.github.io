---
title: docker运行v2raya
date: 2023-02-15 12:40:47
tags:
---

# Docker-v2raya

## 1.获取镜像

```
docker pull mzz2017/v2raya
```

## 2.运行

```
docker run -d \
  --restart=always \
  --privileged \
  --network=host \
  --name v2raya \
  -e V2RAYA_LOG_FILE=/tmp/v2raya.log \
  -v /lib/modules:/lib/modules:ro \
  -v /etc/resolv.conf:/etc/resolv.conf \
  -v /etc/v2raya:/etc/v2raya \
  mzz2017/v2raya
```

## 3.简单配置

![](https://cdn.staticaly.com/gh/ScumTB/blogpictures@master/test/2023-02-15_12-44.png)

## 

> * 全局代理：IP Forward 改为Do not Split Traffic
> * 浏览器界面端口：2017
