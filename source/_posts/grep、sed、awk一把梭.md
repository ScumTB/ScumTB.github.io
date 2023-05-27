---
title: grep、sed、awk一把梭
date: 2022-05-28 00:26:07
tags:
---
### 简单处理文本，后续再补充
### grep
* 在文件中查找包含关键字“example”的行(显示在终端)：grep “example” file.txt
* 在多个文件中查找包含关键字“example”的行：grep “example” file1.txt file2.txt
* 打印匹配行以及行号：grep -n “example” file.txt
* 忽略大小写的匹配：grep -i “example” file.txt
* 显示为匹配的行（打印在终端）：加入-v 参数
### sed

> `sed`是一款常用的文本编辑器，其名称为“stream editor”，即流编辑器。

1. 替换命令：`s`

```
sed 's/old_string/new_string/g' filename
```
其中，`old_string`为要替换的字符串，`new_string`为新的字符串，`g`表示全局替换。

2. `a`命令
```
sed -e 4a\newLine tmp.file
```
在第四行后加入一行内容为newLine并且输出到终端

3. 删除命令：`d`

```
sed '1,3d' tmp.file
```
其中，`1`为开始行号，`2`为结束行号，`d`表示删除。

4. `p`命令

```
sed -n '/goat/p' tmp.file
```

这条命令是在`tmp.file`文件中查找包含字符串`goat`的行，并输出该行的内容。`-n`选项表示不显示文件中所有的行，只显示经过处理的那些行。`p`是打印

### awk

> 举个例子

1. 一个例子：<a alt="21 血的褒奖" href="http://www.qinxiaoshuo.com/read/0/1716/5d77d35456fec85e5b10145e.html">21 血的褒奖</a>
2. 如何处理这个数据得到http://www.qinxiaoshuo.com/read/0/1716/5d77d35456fec85e5b10145e.html
3. 假设上面的内容在pass.html文件里
3. `grep alt pass.html | awk -F "href=\"" '{print $2}'| awk -F "\"" '{print $1}'`
4. 第一个awk命令使用字符串"href=""作为分隔符，输出第二个字段
5. 接着通过管道符号，将"作为分隔符，输出第一个字段
6. awk -F：指定分隔符字符串























### 参考链接


* 菜鸟教程：https://www.runoob.com/linux/linux-comm-awk.html
* 陈皓：https://coolshell.cn/articles/9104.html
* 木子：https://blog.k8s.li/make-e-book-from-html.html
