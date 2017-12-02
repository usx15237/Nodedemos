//鉴权系统
module.exports= function auth(req,res,next){
    if(req.query.username==='zhq'){
        console.log('yes')
        next()
    }
    else{
        next('wrong name')
    }
}
