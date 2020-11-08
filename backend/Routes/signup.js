
const express=require('express');
const router=express.Router();

const userInfoModel=require('../models/userInfoModel');
router.post('/',async function(req,res){
    console.log("signup request came");
var e=req.body.email;
var p=req.body.password;
console.log(e);
x= await userInfoModel.findOne({Email:e},function(obj){
 //   console.log(obj);
   // console.log("hii")
});
if(!x)
{
const k=new userInfoModel({
    Email:req.body.email,
    Password:req.body.password
});

result=await k.save();
if(result)
{
   
    res.status(200).send(result._id);
}
else
{
    res.status(400).send("Error by database");
}
}
else
{
    res.status(403).send("Email is already there");
}

});
module.exports=router;