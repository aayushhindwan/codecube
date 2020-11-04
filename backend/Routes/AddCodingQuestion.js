const express=require('express')
const router=express.Router();
var CodingQModel=require('../models/codingQuestionModel');
router.get('/',function(req,res){
x=new CodingQModel({
QuestionTitle:req.body.QuestionTitle,
QuestionBody:req.body.QuestionBody,
Tags:req.body.Tags,
Editorial:req.body.Editorial,
UpVote:0,
DownVote:0,
Author:req.body.email,
Flag:"not_veified",
Comments:[],
});
x.save();

})