const express=require('express')
const router=express.Router();
const user=require('../models/userInfoModel');
router.get('/user/:e',async function(req,res)
{

x= await user.findOne({email:e},function(err,data){
    if(err)
    res.send("Not Found");
    if(!err)
    res.send(data);
});
});
router.post('/user/:e',async function(req,res)
{

});
