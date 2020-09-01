const mongoose=require('mongoose');
const { Binary } = require('mongodb');
const codingQuestionSchema=new mongoose.Schema(
{
QuestionId:
{
    type:String,
    required:false,
},
QuestionTitle:
{
    type:String,
    required:false,
},
QuestionContent:
{
    type:String,
    required:false,
},
QuestionCode:
{
    language:String,
    content:Binary
}


}


);