---
title: git基本使用
date: 2023-03-05 16:54:30
tags:
---

> git add

* git add .之后会在/.git/objicts/目录生产一个哈希值,存储了类型，文件内容，文件名信息不在里面
* git cat-file -t 哈希值 
* git cat-file -p 哈希值
* git ls-files -s 查看文件的索引，修改文件内容哈希值会改变,并不会覆盖之前的哈希值，会重新生成

> git commit

* commit对象：指向哪一个tree以及作者的信息--------tree对象：包含了哪些文件
* git commit也会在./git/object目录下生成哈希值
* commit会在./git/object生成两个对象，一个是tree 一个是commit
* git log可以查看commit历史

> git branch

* 查看分支git branch
* 新建分支git branch name
* 切换分支git checkout name
* 删除分支git branch -d name 
* 查看远程仓库分支git branch -a

> git reset

* git reset HEAD~1:是撤回刚刚commit
* git reset --hard HEAD~1:工作目录修改全部退回

> git推送已经存在的项目

* git remote add origin git@github.com:name/name.git
* git branch -M main(master变为main好像有说法)
* git push -u origin main

> git push

* git push -u origin branchname
* git push origin branchname

> git fetch

* git fetch origin
* git merge origin/main

> git pull 

* git pull = git fetch && git merge


> git pull request

* fork到自己仓库
* git clone
* git branch new
* git add git commit git push
* compare&pull request 



