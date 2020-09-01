const express=require('express')
const router=express.Router();
const user=require('../models/userInfoModel');
router.get('/user/:email',async function(req,res)
{

x= await user.findOne(email,function(err,data){
    if(err)
    res.send({});
    if(!err)
    res.send(data);
});
});