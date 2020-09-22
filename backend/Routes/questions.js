const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const questionModel= require('../models/questionModel');
const answerModel= require('../models/doubtAnswerModel');
const likeModel=require('../models/UpDown.js');
const auth=require('../utilities/auth.js');
const domain=require('../domain.js')
const { query } = require('express');
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
    console.log("request came with tags=",req.query.tag);
var qq={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};

no=parseInt(req.params.v);
console.log(no);
/*var q=await questionModel.find().sort().limit(no);*/
//console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
var xx=parseInt(8);
router.get('/aaytu',async function(req,res){
    var q
   /* q=await questionModel.find({}).then(
        console.log("ffff",domain));*/
    console.log("hey");
    xx++;
    res.send("dffg"+xx);
    });
  

   
router.post('/postQuestion',async function(req,res){
    console.log(req.body);
    console.log("post request came");
   var q=new questionModel({
    QuestionBody:req.body.QuestionBody,
    QuestionTitle:req.body.QuestionTitle,
    QuestionUser:req.body.QuestionBody,
    UpVote:10,
    DownVote:0,
    Tags:[],});
  
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
console.log("hiiiii");
module.exports=router;