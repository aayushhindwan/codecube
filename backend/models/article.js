const mongoose=require('mongoose');

var ArticleSchema=new mongoose.Schema({
Title:{
    type:String,
    required:true
},
Body:{
    type:String,
    required:true
},
Category:
{
    type:String,
    required:true   
},
Tags:{
    type:Array,
    required:true
},
Comments:
{
    type:Array,
    required:false 
},
UpVote:{
    type:Number,
    required:true
},
DownVote:{
    type:Number,
    required:true
},
Flag:
{
  type:String,
  required:true  
},
Author:
{
    type:String,
    required:true,
}
});
module.exports= mongoose.model("Article", ArticleSchema);