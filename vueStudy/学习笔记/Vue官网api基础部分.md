# Vue官网api——基础

## 1、创建vue实例

* 创建Vue（）实例，通常用vm命名，而且结构与对象相似

## 2、数据与方法

* 创建数据变量或是对象，可以将其赋予vm内部变量，注意三种情况
  * vm变动时，其引用来源的原数据也会改变
  * 但如果vm新建一个原先原数据对象不存在的变量，不会影响原数据
  * 将原对象数据通过Object.freeze()可以将其冻结，这样vm的变动无法影响到它

## 3、生命周期钩子

* 用于不同阶段添加代码：
  * created：用在实例创建之后
  * mounted：通过元素id构建vm实例后
  * updated：数据发生变动后
  * destoryed：拆除分析工具，元件或是事件监听器后
  * ![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

## 4、模板语法

* 插值
  * 文本
    * 常见方法是使用mustache语法，大写双括号包含对应属性名
    * 标签上添加v-once指令可以执行一次性插值
  * 原始HTML
    * 使用v-html指令，对应的内容会被直接当成HTML执行
    * 注意不要用来做复合模块
    * 非常容易被XSS攻击，只可以对可信内容使用，面向用户绝对不能使用HTML插值
  * Attribute
    * mustache不能作用于HTML attribute上，需要使用v-bind指令
  * JavaScript表达式
    * 可以直接对property绑定
    * 但mustache也是提供了JavaScript的环境的，可以直接编写，每一行用大写双括号包含，但要注意，只能执行表达式，语句无法实现，流控制（if语句）也无法实现
* 指令
  * 指代带有v-前缀的特殊attribute，注意：v-for是特殊情况
  * v-if根据seen的真假来判断
  * 参数：v-bind来响应式更新HTML的attribute
  * 动态参数：2.6版本开始，可以动态更新参数，通过v-bind:[]
  * 修饰符：.prevent修饰符调用会返回数据给指令v-on，v-on和v-for多有这方面的技巧

* 缩写

  * 在构建由 Vue 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。为v-bind和v-on有两个常见的指令提供了缩写

  * v-bind的缩写：

    ``` htm
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>
    
    <!-- 缩写 -->
    <a :href="url">...</a>
    
    <!-- 动态参数的缩写 (2.6.0+) -->
    <a :[key]="url"> ... </a>
    ```

    

  * v-on的缩写：

    ``` html
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>
    
    <!-- 缩写 -->
    <a @click="doSomething">...</a>
    
    <!-- 动态参数的缩写 (2.6.0+) -->
    <a @[event]="doSomething"> ... </a>
    ```

    

## 5、计算属性和侦听器

* 

