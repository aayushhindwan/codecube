
const express=require('express');
const router=express.Router();
router.get('/aayu',function(req,res){
res.send("HEo"+req.session.email);
});



const mongoose=require('mongoose');
const questionModel= require('../models/questionModel');
router.get('/aaytu',function(req,res){
    res.send("HELLo");
    });
  

    
router.post('/postQuestion',function(req,res){
    console.log(req.body);
    console.log("hiii");
   var q=new questionModel({
    QuestionBody:req.body.QuestionBody,
    QuestionTitle:req.body.QuestionTitle,
    QuestionUser:req.body.QuestionUser,
    UpVote:0,
    DownVote:0,
    QuestionTags:req.body.QuestionTags,});
   console.log(q);

questionModel.insertMany([q],function(err){
if(err)
{
    console.log("errorsending");
    res.json({
        "msg":"There is error"+err,
        "res":0,
    });
}
else{
    console.log("sending");
    res.json({
        "msg":"Question added Succesfully",
        "res":0,
    });
    console.log("sent");
}

});

res.send("hello ji");
});
module.exports=router;