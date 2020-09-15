const express=require('express')
const router=express.Router();
const ArticleModel=require('../models/article');
router.post('/postArticle',async function(req,res){
    console.log(req.body);
x=new ArticleModel({
Title:req.body.Title,
Body:req.body.Body,
Tags:JSON.Array(req.body.Tags),
Category:req.body.Category,
UpVote:0,
DownVote:0,
Author:req.body.email,
Flag:"not_veified",
Comments:[],
});
console.log(x);
await x.save();
res.send("hello");
})
router.get('/top:v',async function(req,res){
    console.log("request came with tags=",req.query.tag);
var q={$and:[{Tags:{$in:['aa']}},{Tags:{$in:['bb']}}]};

no=parseInt(req.params.v);
console.log(no);
var q=await ArticleModel.find();
console.log(q);
//tp10=top(q,req.params.v);
res.send(q); 
});
module.exports=router;