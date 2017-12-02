const mongoose=require('mongoose')

mongoose.Promise=Promise

const Schema=mongoose.Schema

//const ObjectId=Schema.Types.ObjectId

//连接mongodb数据库what_i_love
const url='mongodb://localhost/what_i_love'
const connection=mongoose.connect(url,{useMongoClient:true});//生成连接串
const db=mongoose.connection

const UserSchema=new Schema({
    name:{type:String,required:true,unique:true,index:1},
    age:{type:Number,max:188,min:0},
});

const UserModel=mongoose.model('user',UserSchema);

(async (params)=>{

    const filter={}

    if(params.name)
    {
    filter.name=params.name
    }

    if(params.projection)
    {
        projection=params.projection
    }

    const u=await UserModel.update(filter,params.projection);
    return u;
})({
    name:"laoyang",
    projection:{
        age:19
    }
})
  .then(r=>{
      console.log(r)
  })
  .catch(e=>{     
      console.log(e) 
  })

db.on('open',()=>{
    console.log('db connected')
})

db.on('error',()=>{
    console.log('db error')
})