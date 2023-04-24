---
title: Hexo多台电脑同步
date: 2023-04-24 22:59:17
tags:
---
### a大致思路
1. github新建一个分支存放Hexo源文件
2. 本地生成静态界面，并修改后的Hexo源文件提交到远程仓库
3. 不同电脑使用先同步hexo源文件,在进行：
### b初步准备
* 在name.github.io新建一个分支例如`backup`
* 将该分支设为默认
### c旧电脑操作
1. git clone git@github~name.github.io
2. 将本地的hexo源文件复制到clone下的name.github.io目录
3. .deploy_git不用复制，编辑.gitignore,一般保持不变
4. git push到远程仓库`backup`分支上
### d新电脑操作
1. 基本git免密配置`ssh-keygen -t rsa -C "example@xx.xx"`安装nodejs
2. git clone 
3. cd 到克隆的仓库
4. `npm install hexo` `npm install ` `npm install hexo-deployer-git` 
### e使用流程
* `hexo new post "title"`新建博客编辑
* `hexo g`生成静态页面
* `hexo d`同步到远程静态页面分支
* `git add .` `git commit -m "c"` `git push `同步hexo源文件
* 当前修改之后，使用另一台电脑需要`git pull`同步远程仓库到本地

> 有的时候`hexo d`不成功，关闭代理



