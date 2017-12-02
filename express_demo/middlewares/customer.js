var auth=require('./auth');
const express = require('express')
const router = express.Router();

var login = (res, req, next) => {
    console.log('登录')
    next()
}

var out = (res, req, next) => {
    console.log('退出登录')
    next()
}

var getcustomerById=(req,res,next)=>{
        var cu=[{Id:12,name:'a'},{Id:22,name:'b'},{Id:32,name:'c'},{Id:42,name:'d'}] 
        var c=cu.find((u)=>u.Id===Number(req.params.customerId))
        c.url=req.query.url
        console.log(c)
        next()
      }

router.use('/auth',auth)
      
router.use('/login',login)

router.use('/out',out)

router.post('/findCustomerById/:customerId',getcustomerById)

module.exports = router;


  