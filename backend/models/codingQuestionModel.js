const mongoose=require('mongoose');

var CodingQuestionSchema=new mongoose.Schema({
QuestionID:{
        type:String,
        required:false
    },
QuestionTitle:{
    type:String,
    required:true
},
QuestionBody:{
    type:String,
    required:true
},
QuestionTags:{
    type:Array,
    required:true
},
Editorial:
{
    type:String,
    required:true
},
Comments:
{
    type:Array,
    required:true 
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
  type:Number,
  required:true  
}
});
module.exports= mongoose.model("Coding_Questions",CodingQuestionSchema);