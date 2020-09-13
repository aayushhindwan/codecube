const express=require('express')
const router=express.Router();
router.get('/',function(req,res){
x={
QuestionTitle:req.body.QuestionTitle,
QuestionBody:req.body.QuestionTitle,
Tags:req.body.Tags,
Editorial:req.body.Editorial

}


})