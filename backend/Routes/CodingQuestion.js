const express=require('express')
const router=express.Router();
//const fileUpload=require('express-fileupload');
var CodingQModel=require('../models/codingQuestionModel');
//const FormData = require('form-data')
//router.use(fileUpload())
//router.use(FormData());
router.post('/',function(req,res){
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
res.send("hello");
})
router.get('/top:v',async function(req,res){
    console.log("request came with tags=",req.query.tag);
var qq={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};
no=parseInt(req.params.v);
console.log(no);
var q=await ArticleModel.find().limit(no);
console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
module.exports=router;