
const express=require('express');
const router=express.Router();

const userInfoModel=require('../models/userInfoModel');
router.post('/',async function(req,res){
var e=req.body.email;
var p=req.body.password;
console.log(e);
x= await userInfoModel.findOne({Email:e},function(obj){
    console.log(obj);
    console.log("hii");
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
    
    res.send("aa gya data"+result);
}
}
else
{
    res.send("pehle se h");
}

});
module.exports=router;