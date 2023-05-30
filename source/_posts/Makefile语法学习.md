---
title: Makefile语法学习
date: 2023-05-30 12:14:47
tags:
---
### 从一个Makefile学习
仓库地址：https://github.com/ScumTB/reservation-system/
```
CC=g++
CFLAGS=-Wall
all: main
main: main.o manager.o orderFile.o student.o teacher.o
	$(CC) $(CFLAGS) main.o manager.o orderFile.o student.o teacher.o -o main
main.o: main.cpp manager.h orderFile.h student.h teacher.h
	$(CC) $(CFLAGS) -c main.cpp
manager.o: manager.cpp manager.h orderFile.h student.h teacher.h computerRoom.h globalFile.h Identity.h
	$(CC) $(CFLAGS) -c manager.cpp
orderFile.o: orderFile.cpp orderFile.h
	$(CC) $(CFLAGS) -c orderFile.cpp
student.o: student.cpp student.h Identity.h
	$(CC) $(CFLAGS) -c student.cpp
teacher.o: teacher.cpp teacher.h Identity.h
	$(CC) $(CFLAGS) -c teacher.cpp
clean:
	rm -f main *.o
```
### 简单解释
* CC=g++:使用g++编译器
* CFLAGS=-Wall：编译器的选项参数
* main是输出结果，依赖于各种.o文件
* 各种.o文件例如main.o它依赖于 main.cpp,manager.h,orderFile.h,student.h,teacher.h头文件
* $(CC)变量和 $(CFLAGS) 变量定义的编译器和选项参数将 main.cpp 文件编译成 main.o 目标文件。
### 编译命令
* make
* make clean
### 学习文档
* https://www.ruanyifeng.com/blog/2015/02/make.html
* https://seisman.github.io/how-to-write-makefile/
