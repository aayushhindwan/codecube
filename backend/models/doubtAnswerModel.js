mongoose=require('mongoose')

const doubtanswerSchema=mongoose.Schema({
QuestionId:
{
    required:true,
    type:String
},
QuestionTitle:
{
    required:true,
    type:String
},
QuestionBody:
{
    required:true,
    type:String
},
Answers:
{
    required:false,
    type:[]
}
});
module.exports =mongoose.model("answer",doubtanswerSchema);