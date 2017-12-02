#### 如何搭建一个完整的expressMVC项目
* 安装express-generator
```
npm i -g express-generator
```
* 使用express-generator生成一个express项目
```
express --view=ejs 项目名
cd 项目名
npm i
```
#### 本项目环境搭建
* 安装依赖
```
npm i
```
* 启动项目
```
node bin www
```
#### demo功能
* 添加新用户
```
localhost:3000/user/addOne?firstname=zhq&lastname=cld&age=12 
```
#### demo总结
在Express中，我们可以创建如下结构：
```
routes/
views/
models/
services/
```
其中，由于express的特点，根据设置，views目录下的文件会被模板引擎在调用res.render('view_name')的时候自动渲染
* view层可以理解为模板引擎+views文件夹中的文件
* routes可以理解为controller，负责根据用户的请求，调取相关的service，最终得到model并用于渲染
* models则代表了model和相关逻辑
* services相当于ListViewModel，会对多个基本model的功能进行集合或扩展
