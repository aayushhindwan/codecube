
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const questionModel= require('../models/questionModel');


function top(q,x)
{
q.sort(function(a,b){
if(a["Upvote"]-a["DownVote"]>b["Upvote"]-b["DownVote"])
 return 1;
 else if((a["Upvote"]-a["DownVote"]<b["Upvote"]-b["DownVote"]))
 return -1;
 else 
 return 0;
});
top_x=[];
for(i=0;i<x;i++)
{
 top_x.push(q[i]);
}
return top_x;

}
router.get('/top:v',async function(req,res){
    
var q=await questionModel.find();
tp10=top(q,req.params.v);
res.send(tp10);
    
});




router.get('/aaytu',function(req,res){
    res.send("HELLo"+x);
    });
  
var x=9;
    
router.post('/postQuestion',function(req,res){
    console.log(req.body);
    console.log("hiii");
    x=78;
   var q=new questionModel({
    QuestionBody:req.body.QuestionBody,
    QuestionTitle:req.body.QuestionTitle,
    QuestionUser:req.body.QuestionUser,
    UpVote:0,
    DownVote:0,
    QuestionTags:req.body.QuestionTags,});
   console.log(q);

const atlasres= q.save();
res.send("HELLo"+atlasres);
});

console.log("hiiiii"+x);
module.exports=router;
