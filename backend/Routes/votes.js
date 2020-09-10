const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const likeModel=require('../models/UpDown.js');
const questionModel= require('../models/questionModel');
router.get('/',async function(req,res){
res.send("like route get request came");
});
router.post('/',async function(req,res){
//user=req.session.email;
user="aayush";
id=req.body.id;
val=req.body.inc;
var x=await likeModel.findOne({
    "QuestionId":id,
    "Users.email": user,
    "Users.Val":1
});
var y=await likeModel.findOne({
    "QuestionId":id,
    "Users.email": user,
    "Users.Val":-1
});
if(val!=-1&&val!=1&&val!=0)
res.status(400).send("Error");
else if(val!=0) {


var p;
console.log(id);
temp=await likeModel.findOne({QuestionId:id,"Users.email":user,"Users.Val":"-1"});
//console.log(temp);
//console.log(x,y);
if(!x&&!y)
{
   xx= await   likeModel.updateOne(
        {QuestionId  : id }, 
        { $push: { Users: {"email":user,Val:val} } }
    );  
    console.log("newdata");
    await questionModel.findById(id, function (err, doc) {
        if(val==1)
        doc.UpVote =doc.UpVote+1;
        if(val==-1)
        doc.DownVote =doc.DownVote+1;
        doc.save();
      });    
}
else if(x&&val==-1)
{
    xx= await   likeModel.updateOne(
        {QuestionId  : id ,"Users.email": user}, 
        {'$set': {
            'Users.$.Val': -1,
          
        }}
    ); 
    await questionModel.findById(id, function (err, doc) {
 
        doc.UpVote =doc.UpVote-1;
        doc.DownVote =doc.DownVote+1;
        doc.save();
      });    
    console.log("disliked");
}
else if(y&&val==1)
{
    xx= await   likeModel.updateOne(
        {QuestionId  : id ,"Users.email": user}, 
        {'$set': {
            'Users.$.Val': 1,
          
        }}
    ); 
    await questionModel.findById(id, function (err, doc) {
 
        doc.UpVote =doc.UpVote+1;
        doc.DownVote =doc.DownVote-1;
        doc.save();
      }); 
    console.log("liked");
}
res.send("hii");
}
else
{
    console.log("undo request came");
    xx= await   likeModel.updateOne(
        {QuestionId  : id }, 
        {'$pull': {"Users": {"email":user}}}
    ); 
    await questionModel.findById(id, function (err, doc) {
         if(x)
         {
        doc.UpVote =doc.UpVote-1;
         }
         if(y)
         {
            doc.DownVote=doc.DownVote-1;  
         }
        doc.save();
      }); 
      res.send("request  fulfilled");
}
});


module.exports=router;
