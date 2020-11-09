const mongoose=require('mongoose');
var userInfoSchema=new mongoose.Schema({
FullName:{
    type:String,
    required:false
},
ImageUrl:
{
    type:String,
    default:"https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
},
Email:
{
    type:String,
    required:true
},
Password:
{
    type:String,
    required:true
},

Branch:
{
    type:String,
    required:false
},
GraduationYear:
{
    type:String,
    required:false
},
CodeChefProfile:
{
    type:String,
    required:false
},
CodeForceProfile:
{
    type:String,
    required:false
},
Interests:
{
    type:[{
        type:String,
        required:false
    }],
    required:false
}

});
module.exports= mongoose.model("userinfo",userInfoSchema);