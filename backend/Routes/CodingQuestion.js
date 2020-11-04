const express=require('express')
const router=express.Router();
//const fileUpload=require('express-fileupload');
var CodingQModel=require('../models/codingQuestionModel');
//const FormData = require('form-data')
//router.use(fileUpload())
//router.use(FormData());
router.post('/',function(req,res){
    console.log(req.body);
x=new CodingQModel({
QuestionTitle:req.body.QuestionTitle,
QuestionBody:req.body.QuestionBody,
Tags:req.body.Tags,
Editorial:req.body.Editorial,
UpVote:0,
DownVote:0,
Author:"admin",
Flag:0,
Comments:[],
});
x.save();
res.status(200).send("hello");
})
router.get('/top:v',async function(req,res){
    console.log("fkf");
    console.log("request came with tags=",req.query.tag);
var qq={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};
no=parseInt(req.params.v);
console.log(no,"no");
var q=await CodingQModel.find().limit(no);
//console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
router.get('/:id',async function(req,res){
    console.log("fkf");
    console.log("request came with tags=",req.query.tag);
var qq={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};
id=req.params.id;
var q=await CodingQModel.findById(id);
//console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
module.exports=router;