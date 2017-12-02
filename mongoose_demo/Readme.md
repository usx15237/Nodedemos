> mongoose是MongoDB的Node.js框架(类似于EF框架)，在处理MongoDB表管理、验证方面有方便之处
#### demo功能
* 连接数据库
* 生成模型类
* CRUD
注意：针对UserModel的操作都是数据持久化操作(直接修改数据库中的数据)。
* create
````
    const u=await UserModel.create({
        name:"laoyang",
        age:20,
    });
    return u;
````
等效于 
```
db.users.inserOne({name:"laoyang",age:20})
```
* update
```
  const u=await UserModel.update(
{name:"laoyang"},
{age:40});
    return u;
```
等效于
```
db.users.update({name:'laoyang'},{$set:{age:40}})
```
注意UserModel.update操作，即使不带$set，[也不会洗掉其他字段](http://www.jianshu.com/p/1ccd9fe4d701)
