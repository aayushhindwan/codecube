const express=require('express')
const router=express.Router();
const userInfoModel=require('../models/userInfoModel');
const { response } = require('express');
const session = require('express-session');
flag=0;
router.post('/', async function(req,res){
    console.log("aaya"+session.email);
    var e=req.body.email;
    var p=req.body.password;
    console.log(e);
    var x;
    
 x=  await userInfoModel.findOne({Email:e},function(err,obj){
     if(err)
     {
      console.log(err);
     }
     else{
    console.log(obj);
    console.log("hii:");
     }
});

if(x)
{  //console.log(x);
    req.session.email=e;
    
    res.status(200).send("login de diya");}
    else
    res.status(400).send("email nhi milrix");

});
router.get('/aaytu',function(req,res){
    console.log("came");
    res.send("HELLo"+req.session.email);
    });
 router.get('/', function(req,res){
     console.log("hii"+req.session.email);
    //res.send("hii");
    res.sendfile('./testlogin.html');
});
module.exports=router;