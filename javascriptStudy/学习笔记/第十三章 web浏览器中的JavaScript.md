# 第十三章 web浏览器中的JavaScript

## 概念

合法的JavaScript代码需要运行的环境，需要一个可供运行的上下文环境

## 1、客户端JavaScript

* window对象是所有客户端JavaScript特性和api的主要接入点
  * location属性指定当前显示在窗口的URL，也可以用来跳转新URL
  * alert弹出对话框来显示信息，但注意，这个行为会暂停全部窗口行动
  * setTimeOut是在给定的一段时间后才触发回调
  * document属性非常重要，引用Document对象，getElementById可以基于元素id属性的值返回单一的文档元素，也就是一对标签内的内容（这个返回的对象属于element对象，还有对应的重要的属性和方法，其中典型的就是style），这个元素可以被赋予给声明变量。需要注意，标签class有些时候必须要设置高宽
* onclick和onload方法都是很重要的处理方法
* web文档的JavaScript，可以用JavaScript通过document和element对象对各类样式或是行动进行操作
* web浏览器设置有很多底层api以实现web应用，JavaScript在web应用中的作用大过web文档，JavaScript增强了web文档，但是设计良好的文档需要在脱离JavaScript后还能正常继续工作

## 2、HTML中嵌入JavaScript

* 4种方法：
  * 放置在<script></script>标签之间
  * 放置在<script>标签src属性指定的外部文件
  * 放置在HTML事件处理程序中，由onclick或onmouseover这样的HTML属性指定
  * 就在一个URL里，这个URL使用特殊的“javascript：”协议
* 1、<script>元素
  * JavaScript的代码以内联的形式出现在HTML的标签<script></script>中，或者通过src导入外部js文件
* 2、外部文件中的脚本

