var express = require('express');
var router = express.Router();
const User=require('../model/in_memo/user');
const UserService=require('../services/userService');

//相当于Action
router.get('/addOne',(req,res)=>{
  const u=new User(req.query.firstname,req.query.lastname,req.query.age) 
  res.locals.newuser=u;//创建模型对象
  res.render('user')
})

module.exports = router;
