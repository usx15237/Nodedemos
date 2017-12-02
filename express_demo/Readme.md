#### 简单express环境搭建
* 安装express-generator
```
npm i -g express-generator
```
* 生成一个简单项目
```
npm i
```
* 启动
```
node app.js
```
#### demo功能
```

   localhost:8888/index/                                           网站首页
   localhost:8888/customer/auth?username=zhq                       用户鉴权
   localhost:8888/customer/auth?username='qita'                    error处理
   localhost:8888/customer/login                                   实现用户登录
   localhost:8888/customer/out                                     实现用户退出登录
   localhost:8888/customer/findCustomerById/12?url=www.baidu.com   查找Id为12的用户，并传递一个url字段
```
#### demo总结
* 中间件的作用是实现路径与函数的映射
* 中间件依据next实现跳转
* 当next()有参数时
如果当前中间件类型为express.Router();，则[路由中断](http://www.jianshu.com/p/f32ae7aab5e2)
如果当前中间件为express(),则转到负责错误处理的中间件
* 当next()无参数时，默认转到按照文档顺序的下一中间件
* 最后一个中间件必须含res.end()

#### 中间件种类
* 普通中间件
函数参数在路由符合当前url时被调用
```
app.use(‘/xxx’，(res,req,next)=>{
next()
})
```
* 错误处理中间件
当某个含next(error)中间件执行后，错误处理中间件被触发
```
app.use(‘/xxx’，(err,res,req,next)=>{
res.end(err)
})
```
* 路由中间件
路由中间件的目的是为了实现：不同路由下能调用不同的函数
