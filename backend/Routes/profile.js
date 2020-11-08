const { json } = require('body-parser');
const express=require('express')
const router=express.Router();
const user=require('../models/userInfoModel');
router.get('/',async function(req,res)
{
console.log("hyyyyy");
res.send("hey");
});
router.get('/user',async function(req,res)
{
console.log("heyyyyyy");
x= await user.findById(req.userId,async function(err,data){
    if(err)
    res.status(400).send("Not Found");
    if(!err)
    { d=JSON.stringify(data);
        d=JSON.parse(d);
        delete d['Password'];
    console.log(d);
        res.status(200).send(d);}
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