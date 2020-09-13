const express=require('express')
const router=express.Router();
const user=require('../models/userInfoModel');
router.get('/',async function(req,res)
{
console.log("hyyyyy");
res.send("hey");
});
router.get('/user/:e',async function(req,res)
{
console.log("heyyyyyy");
x= await user.findOne({Email:req.params.e},function(err,data){
    if(err)
    res.send("Not Found");
    if(!err)
    res.send(data);
});
});
router.post('/user/:e',async function(req,res)
{
    var d=req.body;
    console.log(req.params.e);
   y= await user.updateOne({"Email":req.params.e},d);
   res.send(y);
});

module.exports=router;