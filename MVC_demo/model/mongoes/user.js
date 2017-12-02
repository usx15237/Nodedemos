const mongoose=require('mongoose')

mongoose.Promise=Promise

const Schema=mongoose.Schema

const ObjectId=Schema.Types.ObjectId

const UserSchema=new Schema({
    name:{type:String,required:true,unique:true,index:1},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
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

