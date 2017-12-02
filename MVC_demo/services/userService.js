const user=require('../model/in_memo/user')

module.exports.getAllusers=function(){
    return user.list()
}
module.exports.addUser=function(firstname,lastname,age){
    return user.insert(firstname,lastname,age)
}


