const mongoose=require('mongoose');
const updownSchema= new mongoose.Schema(
{
QuestionID:
{
    required:true,
    type:String,   
},
User:
{
    required:false,
    type:Array,
},

});