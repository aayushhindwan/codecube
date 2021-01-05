const mongoose=require('mongoose');
const updownSchema= new mongoose.Schema(
{
QuestionId:
{
    required:true,
    type:String,   
},
Users:
{
    required:false,
    type:[{email:String,Val:Number}],
},

});
module.exports =mongoose.model('UP_DOWN_Vote',updownSchema);