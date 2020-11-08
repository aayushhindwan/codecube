const mongoose=require("mongoose");
const user_schema=new mongoose.Schema(
{
      email:String,
      password:String
});
module.exports=mongoose.model("signup",user_schema);