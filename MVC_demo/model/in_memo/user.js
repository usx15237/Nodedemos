const users=[];//该数组将作为User的users属性的初始值

class User{
    constructor(firstname,lastname,age){
        this.firstname=firstname,
        this.lastname=lastname,
        this.age=age
    }
    //static users=users
    getName()
    {
        return `${this.firstname} ${this.lastname}`
    }
    
    static insert(firstname,lastname,age)
    {
        const u=new User(firstname,lastname,age)
        User.users.push(u)
        return u
    }

    static getOnebyfirstname(firstname)
    {
        return Users.find(u=>u.firstname===firstname)
    }

    //定义静态属性
    static list(query){
        return User.users
    }

    //定义静态属性 等效于 static users=users，只是这种写法js暂不支持
    static get ['users'](){
        return users
    }
}
module.exports = User;
