const mongoose=require('mongoose');
var userInfoSchema=new mongoose.Schema({
FullName:{
    type:String
},
Email:
{
    type:Email
},
Branch:
{
    type:String
},
GraduationYear:
{
    type:String
},
CodeChefProfile:
{
    type:String,
    required:False
},
CodeForceProfile:
{
    type:String,
    required:False
}

});
export default mongoose.model("userinfo",userInfoSchema);