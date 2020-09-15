const express=require('express')
const router=express.Router();
var CodingQModel=require('../models/codingQuestionModel');
router.post('/',function(req,res){
x=new CodingQModel({
QuestionTitle:req.body.QuestionTitle,
QuestionBody:req.body.QuestionTitle,
Tags:req.body.Tags,
Editorial:req.body.Editorial,
UpVote:0,
DownVote:0,
Author:req.body.email,
Flag:"not_veified",
Comments:[],
});
x.save();
res.send("hello");
})
router.get('/top:v',async function(req,res){
    console.log("request came with tags=",req.query.tag);
var qq={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};

no=parseInt(req.params.v);
console.log(no);
var q=await ArticleModel.find();
console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
module.exports=router;