//error处理
module.exports= function auth(err,req,res,next){
 res.end(err)
}
