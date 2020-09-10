
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const questionModel= require('../models/questionModel');
const answerModel= require('../models/doubtAnswerModel');
const likeModel=require('../models/UpDown.js');
const auth=require('../utilities/auth.js')
function top(q,x)
{
q.sort(function(a,b){
if(a["Upvote"]-a["DownVote"]>b["Upvote"]-b["DownVote"])
 return -1;
 else if((a["Upvote"]-a["DownVote"]<b["Upvote"]-b["DownVote"]))
 return 1;
 else 
 return -1;
});
top10=[];
for(i=0;i<x;i++)
{
    if(q[i]!=null)
 top10.push(q[i]);
}
return top10;

}
//router.use(auth);
router.get('/top:v',async function(req,res){
    console.log("request came");
var q=await questionModel.find();
tp10=top(q,req.params.v);
res.send(tp10);
    
});




router.get('/aaytu',function(req,res){
    res.send("HELLo"+x);
    });
  
var x=9;
   
router.post('/postQuestion',async function(req,res){
    console.log(req.body);
    console.log("post request came");
    x=78;
   var q=new questionModel({
    QuestionBody:req.body.QuestionBody,
    QuestionTitle:req.body.QuestionTitle,
    QuestionUser:req.body.QuestionBody,
    UpVote:10,
    DownVote:0,
    QuestionTags:req.body.QuestionTags,});
  
   //console.log(q);

const atlasres= await q.save();
console.log("question model posted");
var ans= new answerModel({
    QuestionId:atlasres._id,
    QuestionTitle:req.body.QuestionTitle,
    QuestionBody:req.body.QuestionBody,
    Answers:[],
});
var likes=new likeModel({
    QuestionId:atlasres._id,
    Users:[],
});
var ress=await likes.save();
//console.log(ress);
console.log("Likes model posted");
const atlasres_ans= await ans.save();
console.log("Answer model posted");
console.log(atlasres._id);
res.status(200).json(atlasres._id);
});


console.log("hiiiii"+x);
module.exports=router;