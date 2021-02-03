# 第十二章 服务器端的JavaScript

## 概念：

* JavaScript潜入web的原理，涵盖庞杂的客户端JavaScript API
* Node和Rhino经常用于创建脚本服务器，Rhino可以用Java的Swing框架创建图形UI，而Node上运行的JavaScript程序可以像shell脚本那样去操作文件

## 1、用Rhino脚本化Java

* 是一种JavaScript解释器
* 自动转换JavaScript和Java之间的原生类型
* 定义了少量全局函数，但不是JavaScript的核心组成部分
* print（）取代console.log（）
* Java也可以用new创建新实例
* instanceof可以作用于Java对象
* 允许Java重载方法
* for/in可以循环遍历Java的对象
* 允许JavaScript程序获取设置Java数组的元素
* Rhino的类型转换，会按需要自动转换原始数字、布尔值和null，Java的char类型会被当做JavaScript的数字看待，字符串由JavaScript转向java不会有问题，但无法回头，但其实可以通过toString方法解决

## 2、用Node实现异步I/O

* 概念：
  * 基于C++的高速JavaScript解释器，绑定了用于进程、文件和网络套接字等底层Unix API，还绑定了HTTP客户端和服务器API
  * Node和Rhino一样也有自己一套输入（require）输出(console.log)，构造函数、属性和函数
  * 支持setTimeout（）、setInterval（）、clearTimeout（）和clearInterval（）
  * 函数和方法都是异步的，所以运算完成时不会造成阻塞
  * 目标是高性能的I/O，API经常会使用到
  * 能处理二进制数据和文本数据